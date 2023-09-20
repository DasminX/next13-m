import { Suspense } from "react";
import { type Metadata } from "next";
import { type IProduct, type BackendProduct } from "@/types";
import { ProductHeader } from "@/ui/organisms/ProductHeader";
import { RecommendedProducts } from "@/ui/organisms/RecommendedProducts";
import { LoadingSpinner } from "@/ui/atoms/LoadingSpinner";

export async function generateMetadata({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${params.productId}`);
	const product = (await res.json()) as { name: string; description: string };

	return {
		title: product.name,
		description: product.description,
	};
}

export default async function ProductPage({ params }: { params: { productId: string } }) {
	// moze isc do header
	const response: Response = await fetch(
		`https://naszsklep-api.vercel.app/api/products/${params.productId}`,
	);
	const product = (await response.json()) as BackendProduct;
	const IProductprod: IProduct = {
		id: product.id,
		name: product.title,
		category: product.category,
		price: product.price,
		src: product.image,
		alt: product.description,
	};

	return (
		<section className="min-h-screen w-full">
			<ProductHeader
				imageSrc={IProductprod.src}
				imageAlt={IProductprod.alt}
				name={IProductprod.name}
				description={IProductprod.alt}
				price={IProductprod.price}
			/>
			<Suspense fallback={<LoadingSpinner />}>
				<RecommendedProducts />
			</Suspense>
		</section>
	);
}
