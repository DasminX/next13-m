import { NavList } from "../molecules/NavList";

type NavElementType = {
	text: string;
	path: string;
};

export const navItems: NavElementType[] = [
	{ text: "Home", path: "/" },
	{ text: "Products", path: "/products/1" },
];

export const Footer = () => {
	return (
		<footer className="flex h-auto w-full bg-gray-600 p-8">
			<div className="basis-1/3">
				<NavList direction={"col"} color="light" />
			</div>
		</footer>
	);
};
