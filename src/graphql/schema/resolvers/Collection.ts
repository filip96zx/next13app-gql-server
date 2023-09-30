import { parseProductToProductWithNotNullableLists } from 'graphql/schema/resolvers/Query/shared/product.utils';
import type { CollectionResolvers } from './../../types.generated';
export const Collection: CollectionResolvers = {
	products: async (parent, args, ctx) => {
		const { first, skip } = args;
		const result = await ctx.prisma.collection.findUnique({
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
			result?.products.map((item) =>
				parseProductToProductWithNotNullableLists(item.product)
			) ?? []
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
