import type { QueryResolvers } from 'graphql/types.generated';
export const product: NonNullable<QueryResolvers['product']> = async (
	_parent,
	arg,
	ctx
) => {
	const product = await ctx.prisma.product.findUnique({
		where: {
			id: arg.id
		},
		include: {
			categories: { include: { category: true } },
			collections: { include: { collection: true } }
		}
	});
	if (!product) {
		return null;
	}

	return {
		...product,
		categories: product.categories.map(
			(category) => category.category
		),
		collections: product.collections.map(
			(collection) => collection.collection
		)
	};
};
