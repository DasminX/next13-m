import { type Route } from "next";
import { ActiveLink } from "../atoms/ActiveLink";
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
				return (
					<li key={idx}>
						<ActiveLink href={navItem.path as Route} color={color ?? "dark"}>
							{navItem.text}
						</ActiveLink>
					</li>
				);
			})}
		</ul>
	);
};
