import { type ReactNode } from "react";

export const ErrorParagraph = ({ children }: { children: ReactNode }) => {
	return (
		<p className="mx-auto text-center text-2xl font-semibold uppercase leading-10 text-red-500">
			{children}
		</p>
	);
};
