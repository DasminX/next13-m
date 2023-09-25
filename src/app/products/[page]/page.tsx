import { ProductsGetListDocument } from "@/gql/graphql";
import { ErrorParagraph } from "@/ui/atoms/ErrorParagraph";
import { Pagination } from "@/ui/molecules/Pagination";
import { ProductsList } from "@/ui/organisms/ProductsList";
import { executeGraphql } from "@/utils/graphqlFetcher";

// zmiana na length, search params take, sortowanie itp
export async function generateStaticParams() {
	return [1, 2, 3, 4, 5, 6, 7, 8, 9].map((el: number) => {
		return {
			page: el.toString(),
		};
	});
}

export default async function Products({ params }: { params: { page: string } }) {
	const { products } = await executeGraphql(ProductsGetListDocument);

	if (products == null || products?.length === 0) {
		return <ErrorParagraph>No products found!</ErrorParagraph>;
	}

	return (
		<section>
			<ProductsList products={products} />
			<Pagination page={+params.page} />
		</section>
	);
}
