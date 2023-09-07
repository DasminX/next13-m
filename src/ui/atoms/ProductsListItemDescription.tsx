type ProductDescriptionType = {
	name: string;
	category: string;
	price: number;
};

export const ProductsListItemDescription = ({ name, category, price }: ProductDescriptionType) => {
	return (
		<div className="mt-3 flex w-4/5 justify-between sm:w-11/12">
			<div className="flex flex-col items-start">
				<p>{name}</p>
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
