import { prisma } from 'db';
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

export const parseProductToProductWithNotNullableLists = (
	product: ItemWithOptionalLists<Product>
): NonNullable<Product> => {
	return {
		...product,
		categories: [],
		collections: [],
		images: [],
		variants: [],
		ratings: []
	};
};

export async function updateProductAverageRating(productId: string) {
	const product = await prisma.product.findUnique({
		where: { id: productId },
		include: { ratings: true }
	});
	const ratings = product?.ratings ?? [];
	const averageRating =
		ratings.reduce((acc, rating) => acc + rating.rating, 0) /
		ratings.length;
		
	return await prisma.product.update({
		where: { id: productId },
		data: { averageRating }
	});
}
