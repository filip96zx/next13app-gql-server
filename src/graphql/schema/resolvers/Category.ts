import type { CategoryResolvers } from 'graphql/types.generated';

export const Category: CategoryResolvers = {
	products: async (parent, args, ctx) => {
		const { first, skip } = args;
		const result = await ctx.prisma.category.findUnique({
			where: { id: parent.id },
			include: {
				products: {
					include: {
						product: {
							include: {
								categories: { include: { category: true } },
								collections: { include: { collection: true } },
								images: { include: { image: true } }
							}
						}
					},
					skip: skip ?? undefined,
					take: first ?? undefined
				}
			}
		});
		return (
			result?.products.map((item) => ({
				...item.product,
				categories: item.product.categories.map(
					(item) => item.category
				),
				collections: item.product.collections.map(
					(item) => item.collection
				),
				images: item.product.images.map((item) => item.image)
			})) ?? []
		);
	}
};
