import {
	updateProductAverageRating,
	parseProductToProductWithNotNullableLists
} from 'graphql/schema/resolvers/shared/product.utils';
import type { MutationResolvers } from './../../../types.generated';
import { Product } from '@prisma/client';
export const productsCalculateAndUpdateAverageRating: NonNullable<
	MutationResolvers['productsCalculateAndUpdateAverageRating']
> = async (_parent, _arg, ctx) => {
	const products = await ctx.prisma.product.findMany();

	const updatedProducts: Array<Product> = [];

	products.forEach(async (product) => {
		updatedProducts.push(
			await updateProductAverageRating(product.id)
		);
	});

	return updatedProducts.map(
		parseProductToProductWithNotNullableLists
	);
};
