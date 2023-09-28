import type { QueryResolvers } from './../../../types.generated';
export const categoriesConnection: NonNullable<
	QueryResolvers['categoriesConnection']
> = async (_parent, arg, ctx) => {
	const count = await ctx.prisma.product.count({});

	return {
		aggregate: {
			count
		}
	};
};
