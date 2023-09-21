import { type BackendProduct } from "@/types";

export const ProductsListItemDescription = ({
	title,
	category,
	price,
}: {
	title: BackendProduct["title"];
	category: BackendProduct["category"];
	price: BackendProduct["price"];
}) => {
	return (
		<div className="mt-3 flex w-4/5 justify-between sm:w-11/12">
			<div className="flex flex-col items-start">
				<p>{title}</p>
				<p className="font-light italic">{category}</p>
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
