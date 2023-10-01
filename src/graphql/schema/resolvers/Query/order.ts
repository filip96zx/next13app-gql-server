import type { QueryResolvers } from 'graphql/types.generated';
export const order: NonNullable<QueryResolvers['order']> = async (
	_parent,
	arg,
	ctx
) => {
	const { id, where } = arg;
	const cart = await ctx.prisma.order.findUnique({
		where: { id, status: where?.status || undefined }
	});

	if (!cart) {
		throw new Error('Cart not found');
	}

	return { ...cart, items: [] };
};
