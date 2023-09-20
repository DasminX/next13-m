"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { type NavElementType } from "@/types";

export const NavListElement = ({
	navItem,
	color,
}: {
	navItem: NavElementType;
	color: "dark" | "light";
}) => {
	const pathname = usePathname();

	return (
		<li>
			<Link
				href={navItem.path}
				className={`transition duration-100 hover:scale-105 hover:underline ${
					color === "light" && "text-white"
				} ${pathname === navItem.path && "text-green-600"}`}
			>
				{navItem.text}
			</Link>
		</li>
	);
};
