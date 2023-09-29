import type { ProductResolvers } from './../../types.generated';
export const Product: ProductResolvers = {
	/* Implement Product resolver logic here */
	categories: async (parent, args, ctx) => {
		const { first, skip } = args;
		const result = await ctx.prisma.product.findUnique({
			where: { id: parent.id },
			include: {
				categories: {
					include: { category: true },
					skip: skip ?? undefined,
					take: first ?? undefined
				}
			}
		});
		return result?.categories.map((item) => item.category) ?? [];
	},
	collections: async (parent, args, ctx) => {
		const { first, skip } = args;
		const result = await ctx.prisma.product.findUnique({
			where: { id: parent.id },
			include: {
				collections: {
					include: { collection: true },
					skip: skip ?? undefined,
					take: first ?? undefined
				}
			}
		});
		return result?.collections.map((item) => item.collection) ?? [];
	}
};
