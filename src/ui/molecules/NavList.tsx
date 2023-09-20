import { NavListElement } from "../atoms/NavListElement";
import { type NavElementType } from "@/types";

export const NavList = ({
	navItems,
	color = "dark",
	direction = "row",
}: {
	navItems: NavElementType[];
	color?: "dark" | "light";
	direction?: "row" | "col";
}) => {
	return (
		<ul className={`flex items-center justify-evenly flex-${direction ?? "row"}`}>
			{navItems.map((navItem: NavElementType, idx: number) => {
				return <NavListElement key={idx} navItem={navItem} color={color} />;
			})}
		</ul>
	);
};
