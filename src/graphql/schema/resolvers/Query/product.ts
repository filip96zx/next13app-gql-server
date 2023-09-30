import type { QueryResolvers } from 'graphql/types.generated';
export const product: NonNullable<QueryResolvers['product']> = async (
	_parent,
	arg,
	ctx
) => {
	const product = await ctx.prisma.product.findUnique({
		where: {
			id: arg.id
		}
	});
	if (!product) {
		return null;
	}

	return {
		...product,
		collections: [],
		categories: [],
		images: []
	};
};
