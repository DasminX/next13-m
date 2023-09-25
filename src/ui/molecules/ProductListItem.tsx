import Link from "next/link";
import { ProductsListItemDescription } from "../atoms/ProductsListItemDescription";
import { ProductsListItemImage } from "../atoms/ProductsListItemImage";
import { type ProductListItemFragment } from "@/gql/graphql";

export const ProductsListItem = ({ product }: { product: ProductListItemFragment }) => {
	if (!product.images[0] || !product.categories[0]) {
		return <></>;
	}
	return (
		<article>
			<Link href={`/product/${product.id}`}>
				<ProductsListItemImage src={product.images} alt={product.description} />
			</Link>
			<ProductsListItemDescription
				name={product.name}
				category={product.categories}
				price={product.price}
			/>
		</article>
	);
};
