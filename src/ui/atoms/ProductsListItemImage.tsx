import Image from "next/image";
import { type BackendProduct } from "@/types";

export const ProductsListItemImage = ({
	src,
	alt,
}: {
	src: BackendProduct["image"];
	alt: BackendProduct["description"];
}) => {
	return (
		<div className="aspect-square overflow-hidden rounded-md border-2 border-gray-200">
			<Image
				className="aspect-square h-full w-full object-cover object-center p-4  transition duration-150 hover:scale-105 hover:cursor-pointer"
				width={"280"}
				height={"280"}
				src={src}
				alt={alt}
			/>
		</div>
	);
};
