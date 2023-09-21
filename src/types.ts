export type BackendProduct = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: { rate: number; count: number };
	image: string;
	longDescription: string;
};

export type NavElementType = {
	text: string;
	path: string;
};

export type FancyHeaderType = {
	text: string;
};
