import { type BackendProduct } from "@/types";
import { ErrorParagraph } from "@/ui/atoms/ErrorParagraph";
import { Pagination } from "@/ui/molecules/Pagination";
import { ProductsList } from "@/ui/organisms/ProductsList";

export async function generateStaticParams() {
	return [1, 2, 3, 4, 5, 6, 7, 8, 9].map((el: number) => {
		return {
			page: el.toString(),
		};
	});
}

export default async function Products({ params }: { params: { page: string } }) {
	const take = 12;
	const offset = take * (+params.page - 1);
	const response: Response = await fetch(
		`https://naszsklep-api.vercel.app/api/products?take=${take}&offset=${offset}`,
	);

	const products = (await response.json()) as BackendProduct[];

	if (products == null || products?.length === 0) {
		return <ErrorParagraph>No products found!</ErrorParagraph>;
	}

	return (
		<section>
			<ProductsList products={products} />
			<Pagination page={+params.page} />
		</section>
	);
}
