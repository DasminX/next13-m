import { getRandomProducts } from "./lib/randomProducts";
import { type ProductListItemFragment, ProductsGetListDocument } from "@/gql/graphql";
import { ErrorParagraph } from "@/ui/atoms/ErrorParagraph";
import { MainPageHeader } from "@/ui/organisms/MainPageHeader";
import { ProductsList } from "@/ui/organisms/ProductsList";
import { executeGraphql } from "@/utils/graphqlFetcher";

export default async function Home() {
	const { products } = await executeGraphql(ProductsGetListDocument);

	if (products == null || products?.length === 0) {
		return <ErrorParagraph>No products found!</ErrorParagraph>;
	}

	const randomProducts: ProductListItemFragment[] = getRandomProducts(products, 6);

	return (
		<>
			<MainPageHeader />
			<ProductsList products={randomProducts} />
		</>
	);
}
