import { ProductsListItemDescription } from "../atoms/ProductsListItemDescription";
import { ProductsListItemImage } from "../atoms/ProductsListItemImage";

type ProductsListType = {
	id: number;
	src: string;
	alt: string;
	name: string;
	category: string;
	price: number;
};

export const ProductsList = ({ products }: { products: ProductsListType[] }) => {
	return (
		<ul
			className="my-8 grid w-full grid-cols-1 items-center justify-around gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
			data-testid="products-list"
		>
			{products.map((prod) => {
				return (
					<li className="flex flex-col items-center" key={prod.id}>
						<ProductsListItemImage src={prod.src} alt={prod.alt} />
						<ProductsListItemDescription
							name={prod.name}
							category={prod.category}
							price={prod.price}
						/>
					</li>
				);
			})}
		</ul>
	);
};
