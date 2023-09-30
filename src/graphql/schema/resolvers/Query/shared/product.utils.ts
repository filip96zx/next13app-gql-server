import { Product } from 'graphql/types.generated';

type ArrayKeys<T extends object> = {
	[key in keyof T]: T[key] extends Array<any> ? key : never;
}[keyof T];

type NonArrayKeys<T extends object> = {
	[key in keyof T]: T[key] extends Array<any> ? never : key;
}[keyof T];

type ItemWithOptionalLists<T extends object> = {
	[K in ArrayKeys<T>]?: T[K];
} & {
	[K in NonArrayKeys<T>]: T[K];
};

type ItemWithOptionalListsWithoutTypename<T extends object> = Omit<
	ItemWithOptionalLists<T>,
	'__typename'
>;

export const parseProductToProductWithNotNullableLists = (
	product: ItemWithOptionalListsWithoutTypename<Product>
): NonNullable<Product> => {
	return {
		...product,
		categories: [],
		collections: [],
		images: [],
		variants: []
	};
};
