import { ProductsList } from "@/ui/organisms/ProductsList";

const products = [
	{
		id: 1,
		src: "/black_shoes.webp",
		alt: "Czarne buciska",
		name: "Czarne buciska",
		category: "Buty",
		price: 89.99,
	},
	{
		id: 2,
		src: "/black_tshirt.webp",
		alt: "Czarny tiszert",
		name: "Czarny tiszert",
		category: "Koszulki",
		price: 56.99,
	},
	{
		id: 3,
		src: "/white_shoes.webp",
		alt: "Białe buciska",
		name: "Białe buciska",
		category: "Buty",
		price: 119.99,
	},
	{
		id: 4,
		src: "/lightblue_jeans.webp",
		alt: "Jasnoniebieskie dżiny",
		name: "Jasnoniebieskie dżiny",
		category: "Spodnie",
		price: 79.99,
	},
];

export default function Home() {
	return (
		<main id="mainContainer" className="mx-auto my-4 h-auto min-h-screen max-w-5xl">
			<ProductsList products={products} />
		</main>
	);
}
