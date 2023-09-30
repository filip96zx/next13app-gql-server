import type { QueryResolvers } from 'graphql/types.generated';
export const categories: NonNullable<
	QueryResolvers['categories']
> = async (_parent, arg, ctx) => {
	const { skip, first } = arg || {};
	const categories = await ctx.prisma.category.findMany({
		skip: skip ?? undefined,
		take: first ?? undefined
	});

	return categories.map((c) => ({
		...c,
		products: []
	}));
};
