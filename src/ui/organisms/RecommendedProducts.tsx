import { FancyHeader } from "../atoms/FancyHeader";
import { ProductsList } from "./ProductsList";
import { type BackendProduct, type IProduct } from "@/types";

const sleep = (duration: number) => {
	return new Promise<void>((res) =>
		setTimeout(() => {
			res();
		}, duration),
	);
};

export const RecommendedProducts = async () => {
	const offset = Math.floor(Math.random() * 15);
	const response: Response = await fetch(
		`https://naszsklep-api.vercel.app/api/products?take=4&offset=${offset}`,
	);
	await Promise.all([response, sleep(5000)]);

	const products = (await response.json()) as BackendProduct[];

	const mappedRecommendedProducts: IProduct[] = products.map(
		(product: BackendProduct): IProduct => {
			return {
				id: product.id,
				name: product.title,
				category: product.category,
				price: product.price,
				src: product.image,
				alt: product.description,
			};
		},
	);

	return (
		<>
			<FancyHeader>Recommended products for you and only for you!!!</FancyHeader>
			<ProductsList products={mappedRecommendedProducts}></ProductsList>;
		</>
	);
};
