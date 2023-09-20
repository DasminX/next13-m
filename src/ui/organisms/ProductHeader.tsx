import { FancyHeader } from "../atoms/FancyHeader";
import { ProductsListItemImage } from "../atoms/ProductsListItemImage";

export const ProductHeader = ({
	imageSrc,
	imageAlt,
	name,
	description,
	price,
}: {
	imageSrc: string;
	imageAlt: string;
	name: string;
	description: string;
	price: number;
}) => {
	return (
		<article className="mx-auto flex h-auto w-full flex-wrap p-2 md:flex-nowrap md:p-12">
			<div className="mx-auto flex basis-5/6 flex-col md:basis-3/4">
				<FancyHeader>{name}</FancyHeader>
				<ProductsListItemImage src={imageSrc} alt={imageAlt} />
			</div>
			<div className="mx-auto w-auto max-w-max p-8 text-center leading-8">
				<p>{description}</p>
				<p>
					{" "}
					{Intl.NumberFormat("pl-PL", {
						style: "currency",
						currency: "PLN",
					}).format(price)}
				</p>
			</div>
		</article>
	);
};
