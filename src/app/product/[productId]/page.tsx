import { Suspense } from "react";
import { type Metadata } from "next";
import { type BackendProduct } from "@/types";
import { ProductHeader } from "@/ui/organisms/ProductHeader";
import { RecommendedProducts } from "@/ui/organisms/RecommendedProducts";
import { LoadingSpinner } from "@/ui/atoms/LoadingSpinner";
import { FancyHeader } from "@/ui/atoms/FancyHeader";

export async function generateMetadata({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${params.productId}`);
	const product = (await res.json()) as { title: string; description: string };

	return {
		title: product.title,
		description: product.description,
	};
}

export default async function ProductPage({ params }: { params: { productId: string } }) {
	// moze isc do header
	const response: Response = await fetch(
		`https://naszsklep-api.vercel.app/api/products/${params.productId}`,
	);
	const product = (await response.json()) as BackendProduct;
	if (!product) {
		return <FancyHeader>Problem</FancyHeader>;
	}

	return (
		<section className="min-h-screen w-full">
			<ProductHeader
				imageSrc={product.image}
				imageAlt={product.description}
				name={product.title}
				description={product.description}
				price={product.price}
			/>
			<Suspense fallback={<LoadingSpinner />}>
				<RecommendedProducts />
			</Suspense>
		</section>
	);
}
