import type { CategoryResolvers } from 'graphql/types.generated';

export const Category: CategoryResolvers = {
	products: async (parent, args, ctx) => {
		const { first, skip } = args;
		const result = await ctx.prisma.category.findUnique({
			where: { id: parent.id },
			include: {
				products: {
					include: {
						product: true
					},
					skip: skip ?? undefined,
					take: first ?? undefined
				}
			}
		});
		return (
			result?.products.map((item) => ({
				...item.product,
				categories: [],
				collections: [],
				images: []
			})) ?? []
		);
	}
};
