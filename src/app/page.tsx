import { products } from "@/data/products";
import { MainPageHeader } from "@/ui/organisms/MainPageHeader";
import { ProductsList } from "@/ui/organisms/ProductsList";

export default function Home() {
	return (
		<>
			<MainPageHeader />
			<ProductsList products={products} />
		</>
	);
}
