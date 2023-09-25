import { type Route } from "next";
import { ActiveLink } from "../atoms/ActiveLink";

export const Pagination = ({ page }: { page: number }) => {
	const pages = [page, page + 1];
	if (page > 1) {
		pages.unshift(page - 1);
	}

	return (
		<div aria-label={"pagination"} className="mx-auto flex w-fit items-center justify-evenly p-4">
			{pages.map((pageNumber) => {
				return (
					<ActiveLink
						key={pageNumber}
						className="mx-2 rounded-md border-2 border-green-500 px-2 py-1"
						activeClassName={1 * page === pageNumber ? "bg-green-500 text-white" : ""}
						href={`/products/${pageNumber}` as Route}
					>
						{pageNumber}
					</ActiveLink>
				);
			})}
		</div>
	);
};
