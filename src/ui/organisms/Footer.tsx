import { NavList } from "../molecules/NavList";
import { navItems } from "@/data/navItems";

export const Footer = () => {
	return (
		<footer className="flex h-auto w-full bg-gray-600 p-8">
			<div className="basis-1/3">
				<NavList navItems={navItems} direction={"col"} color="light" />
			</div>
		</footer>
	);
};
