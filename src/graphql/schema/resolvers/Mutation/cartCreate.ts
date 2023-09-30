import type { MutationResolvers } from './../../../types.generated';
export const cartCreate: NonNullable<
	MutationResolvers['cartCreate']
> = async (_parent, arg, ctx) => {
	const { items } = arg;
	const products = await ctx.prisma.product.findMany({
		where: {
			id: {
				in: items.map((item) => item.productId)
			}
		}
	});

	const cartItems = items.map((i) => {
		const product = products.find(
			(product) => product.id === i.productId
		);
		if (!product) throw new Error('Product not found');
		return {
			quantity: i.quantity,
			productId: product.id,
			price: product.price,
			name: product.name
		};
	});

	const newCart = await ctx.prisma.order.create({
		data: {
			status: 'DRAFT',
			items: {
				create: cartItems
			}
		},
		include: {
			items: true
		}
	});

	return newCart;
};
