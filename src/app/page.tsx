import { type BackendProduct } from "@/types";
import { FancyHeader } from "@/ui/atoms/FancyHeader";
import { MainPageHeader } from "@/ui/organisms/MainPageHeader";
import { ProductsList } from "@/ui/organisms/ProductsList";

export default async function Home() {
	const response: Response = await fetch(
		`https://naszsklep-api.vercel.app/api/products?take=4&offset=5`,
	);
	const products = (await response.json()) as BackendProduct[];
	if (!products) {
		return <FancyHeader>Problem</FancyHeader>;
	}

	return (
		<>
			<MainPageHeader />
			<ProductsList products={products} />
		</>
	);
}
