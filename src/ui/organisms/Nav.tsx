import { NavList } from "../molecules/NavList";
import { navItems } from "@/data/navItems";

export const Nav = () => {
	return (
		<nav className="w-full p-4">
			<NavList navItems={navItems} />
		</nav>
	);
};
