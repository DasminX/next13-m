import { type ProductListItemFragment } from "@/gql/graphql";

export const getRandomProducts = (products: ProductListItemFragment[], quantity: number) => {
	const randomProducts: ProductListItemFragment[] = [];

	for (let i = 0; i < quantity; i++) {
		if (i <= -5 || randomProducts.length >= quantity) break;
		const randomIdx = Math.floor(Math.random() * products.length);
		const randomProduct = products[randomIdx];
		if (!randomProduct || randomProducts.includes(randomProduct)) {
			i--;
			continue;
		}
		randomProducts.push(randomProduct);
	}

	return randomProducts;
};
