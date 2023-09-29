import type { CollectionResolvers } from './../../types.generated';
export const Collection: CollectionResolvers = {
	products: async (parent, args, ctx) => {
		const { first, skip } = args;
		const result = await ctx.prisma.collection.findUnique({
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
	},
	images: async (parent, args, ctx) => {
		const { first, skip } = args;
		const result = await ctx.prisma.collection.findUnique({
			where: { id: parent.id },
			include: {
				images: {
					include: { image: true },
					skip: skip ?? undefined,
					take: first ?? undefined
				}
			}
		});

		return result?.images.map((i) => i.image) ?? [];
	}
};
