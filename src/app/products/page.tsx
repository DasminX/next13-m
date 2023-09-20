import { type BackendProduct, type IProduct } from "@/types";
import { ErrorParagraph } from "@/ui/atoms/ErrorParagraph";
import { ProductsList } from "@/ui/organisms/ProductsList";

export default async function Products() {
	const response: Response = await fetch("https://naszsklep-api.vercel.app/api/products?take=20", {
		method: "GET",
	});

	const products = (await response.json()) as BackendProduct[];

	if (products == null || products?.length === 0) {
		return <ErrorParagraph>No products found!</ErrorParagraph>;
	}

	const mappedProducts: IProduct[] = products.map((product: BackendProduct): IProduct => {
		return {
			id: product.id,
			name: product.title,
			category: product.category,
			price: product.price,
			src: product.image,
			alt: product.description,
		};
	});

	return (
		<section>
			<ProductsList products={mappedProducts} />
		</section>
	);
}
