import Image from "next/image";

export const MainPageHeaderImg = () => {
	return (
		<div className=" flex items-center justify-center">
			<Image
				width={640}
				height={427}
				alt={"Main page header image"}
				src={"/header photo.jpg"}
				className="static bg-cover object-cover"
			/>
		</div>
	);
};
