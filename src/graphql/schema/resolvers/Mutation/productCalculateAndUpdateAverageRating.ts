import {
	parseProductToProductWithNotNullableLists,
	updateProductAverageRating
} from 'graphql/schema/resolvers/shared/product.utils';
import type { MutationResolvers } from './../../../types.generated';

export const productCalculateAndUpdateAverageRating: NonNullable<
	MutationResolvers['productCalculateAndUpdateAverageRating']
> = async (_parent, arg, _ctx) => {
	const product = await updateProductAverageRating(arg.id);
	return parseProductToProductWithNotNullableLists(product);
};
