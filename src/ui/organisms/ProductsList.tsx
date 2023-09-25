import { notFound } from "next/navigation";
import { ProductsListItem } from "../molecules/ProductListItem";
import { type ProductListItemFragment } from "@/gql/graphql";

export const ProductsList = ({ products }: { products: ProductListItemFragment[] }) => {
	if (!products) {
		throw notFound();
	}

	return (
		<ul
			className="my-8 grid w-full grid-cols-1 items-center justify-around gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
			data-testid="products-list"
		>
			{products.map((product: ProductListItemFragment) => {
				return (
					<li className="flex flex-col items-center" key={product.id}>
						<ProductsListItem key={product.id} product={product} />
					</li>
				);
			})}
		</ul>
	);
};
