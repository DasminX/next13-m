import Link from "next/link";
import { ProductsListItemDescription } from "../atoms/ProductsListItemDescription";
import { ProductsListItemImage } from "../atoms/ProductsListItemImage";
import { type BackendProduct } from "@/types";

export const ProductsListItem = ({ product }: { product: BackendProduct }) => {
	return (
		<article>
			<Link href={`/product/${product.id}`}>
				<ProductsListItemImage src={product.image} alt={product.description} />
			</Link>
			<ProductsListItemDescription
				title={product.title}
				category={product.category}
				price={product.price}
			/>
		</article>
	);
};
