import { MainPageHeaderImg } from "../molecules/MainPageHeaderImg";
import { MainPageHeaderDesc } from "../molecules/MainPageHeaderDesc";

export const MainPageHeader = () => {
	return (
		<section className="flex aspect-[5/2] w-full items-stretch justify-between">
			<MainPageHeaderImg />
			<MainPageHeaderDesc />
		</section>
	);
};
