import { type ProductListItemFragment } from "@/gql/graphql";

export const ProductsListItemDescription = ({
	name,
	category,
	price,
}: {
	name: ProductListItemFragment["name"];
	category: ProductListItemFragment["categories"];
	price: ProductListItemFragment["price"];
}) => {
	return (
		<div className="mt-3 flex w-4/5 justify-between sm:w-11/12">
			<div className="flex flex-col items-start">
				<p>{name}</p>
				<p className="font-light italic">{category[0]?.name}</p>
			</div>
			<p className="font-semibold">
				{Intl.NumberFormat("pl-PL", {
					style: "currency",
					currency: "PLN",
				}).format(price)}
			</p>
		</div>
	);
};
