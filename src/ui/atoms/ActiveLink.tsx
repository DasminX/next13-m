"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import { type Route } from "next";

export const ActiveLink = ({
	children,
	href,
	className,
	activeClassName,
	color,
	exact = true,
}: {
	children: ReactNode;
	href: Route;
	className?: string;
	activeClassName?: string;
	color?: string;
	exact?: boolean;
}) => {
	const pathname = usePathname();

	const isActive = exact ? href === pathname : pathname.startsWith(href);
	return (
		<Link
			href={href}
			className={`transition duration-100 hover:scale-105 hover:underline ${className ?? ""} ${
				activeClassName ?? ""
			} ${color === "light" && "text-white"} ${isActive && "text-green-600"}`}
		>
			{children}
		</Link>
	);
};
