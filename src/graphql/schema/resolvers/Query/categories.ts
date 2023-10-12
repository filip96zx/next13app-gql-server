import type { QueryResolvers } from 'graphql/types.generated';
export const categories: NonNullable<
	QueryResolvers['categories']
> = async (_parent, arg, ctx) => {
	const { skip, first, where } = arg || {};
	const categories = await ctx.prisma.category.findMany({
		skip: skip ?? undefined,
		take: first ?? undefined,
		where: {
			slug: where?.slug || undefined
		}
	});

	return categories.map((c) => ({
		...c,
		products: []
	}));
};
