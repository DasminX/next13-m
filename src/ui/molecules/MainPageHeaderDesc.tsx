import { FancyHeader } from "../atoms/FancyHeader";

export const MainPageHeaderDesc = () => {
	return (
		<article className="basis-1/2 p-4">
			<FancyHeader>Witaj w naszym sklepie!</FancyHeader>
			<FancyHeader>Kup coś i nie narzekaj bo taniocha :)</FancyHeader>
			<blockquote className="my-4">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, tenetur quia ducimus velit fuga
				ipsam sunt non natus quae est alias consequatur, explicabo, tempora accusantium odit ab
				adipisci quaerat atque?
			</blockquote>
		</article>
	);
};
