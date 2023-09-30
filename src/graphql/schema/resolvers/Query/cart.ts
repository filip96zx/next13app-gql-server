import type { QueryResolvers } from 'graphql/types.generated';
export const cart: NonNullable<QueryResolvers['cart']> = async (
	_parent,
	arg,
	ctx
) => {
	const cart = await ctx.prisma.order.findUnique({
		where: { id: arg.id }
	});

	if (!cart) {
		throw new Error('Cart not found');
	}

	return { ...cart, items: [] };
};
