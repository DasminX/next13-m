import { type Route } from "next";
import { ActiveLink } from "../atoms/ActiveLink";

type NavElementType = {
	text: string;
	path: string;
};

export const navItems: NavElementType[] = [
	{ text: "Home", path: "/" },
	{ text: "Products", path: "/products/1" },
];

export const NavList = ({
	color = "dark",
	direction = "row",
}: {
	color?: "dark" | "light";
	direction?: "row" | "col";
}) => {
	// FETCH CATEGORIES TO DO

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
