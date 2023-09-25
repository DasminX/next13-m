import { FancyHeader } from "../atoms/FancyHeader";
import { ProductsList } from "./ProductsList";
import { executeGraphql } from "@/utils/graphqlFetcher";
import { type ProductListItemFragment, ProductsGetListDocument } from "@/gql/graphql";
import { getRandomProducts } from "@/app/lib/randomProducts";

const sleep = (duration: number) => {
	return new Promise<void>((res) =>
		setTimeout(() => {
			res();
		}, duration),
	);
};

export const RecommendedProducts = async () => {
	const dur = Math.random() * 5000;
	await sleep(dur);
	const { products } = await executeGraphql(ProductsGetListDocument);

	if (!products) {
		return <></>;
	}

	const randomProducts: ProductListItemFragment[] = getRandomProducts(products, 4);

	return (
		<>
			<FancyHeader>Recommended products for you and only for you!!!</FancyHeader>
			<ProductsList products={randomProducts}></ProductsList>
		</>
	);
};
