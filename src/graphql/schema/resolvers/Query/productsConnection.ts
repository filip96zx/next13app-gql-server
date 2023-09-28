import { getWhereParams } from 'graphql/schema/resolvers/Query/products';
import type { QueryResolvers } from './../../../types.generated';
export const productsConnection: NonNullable<
	QueryResolvers['productsConnection']
> = async (_parent, arg, ctx) => {
	const { where } = arg;
	const count = await ctx.prisma.product.count({
		...(where && { where: getWhereParams(where) })
	});

	return {
		aggregate: {
			count
		}
	};
};
