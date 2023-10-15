import type { QueryResolvers } from 'graphql/types.generated';
export const categoriesConnection: NonNullable<
	QueryResolvers['categoriesConnection']
> = async (_parent, _arg, ctx) => {
	const count = await ctx.prisma.category.count({});

	return {
		aggregate: {
			count
		}
	};
};
