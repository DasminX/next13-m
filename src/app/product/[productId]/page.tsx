import { Suspense } from "react";
import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductHeader } from "@/ui/organisms/ProductHeader";
import { RecommendedProducts } from "@/ui/organisms/RecommendedProducts";
import { LoadingSpinner } from "@/ui/atoms/LoadingSpinner";
import { executeGraphql } from "@/utils/graphqlFetcher";
import { ProductGetByIdDocument } from "@/gql/graphql";

export async function generateMetadata({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> {
	const { product } = await executeGraphql(ProductGetByIdDocument, {
		id: params.productId,
	});

	return {
		title: product?.name ?? "Przedmiot w sklepie",
		description: product?.description ?? "Brak opisu",
	};
}

export default async function ProductPage({ params }: { params: { productId: string } }) {
	const { product } = await executeGraphql(ProductGetByIdDocument, {
		id: params.productId,
	});

	if (!product || !product.images[0]) {
		throw notFound();
	}

	return (
		<section className="min-h-screen w-full">
			<ProductHeader
				imageSrc={product.images}
				imageAlt={product.description}
				name={product.name}
				description={product.description}
				price={product.price}
			/>
			<Suspense fallback={<LoadingSpinner />}>
				<RecommendedProducts />
			</Suspense>
		</section>
	);
}
