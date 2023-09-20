import { type ReactNode } from "react";

export const FancyHeader = ({ children }: { children: ReactNode }) => {
	return (
		<h1 className="text-center text-lg font-medium uppercase italic leading-8 text-gray-500 ">
			{children}
		</h1>
	);
};
