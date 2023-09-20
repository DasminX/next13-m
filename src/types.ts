export interface IProductImage {
	src: string;
	alt: string;
}

export interface IProductDescription {
	name: string;
	category: string;
	price: number;
}

export interface IProduct extends IProductImage, IProductDescription {
	id: string;
}

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
