import Link from "next/link";
import { ProductsListItemDescription } from "../atoms/ProductsListItemDescription";
import { ProductsListItemImage } from "../atoms/ProductsListItemImage";
import { type IProduct } from "@/types";

export const ProductsListItem = ({ product }: { product: IProduct }) => {
	return (
		<article>
			<Link href={`/products/${product.id}`}>
				<ProductsListItemImage src={product.src} alt={product.alt} />
			</Link>
			<ProductsListItemDescription
				name={product.name}
				category={product.category}
				price={product.price}
			/>
		</article>
	);
};
