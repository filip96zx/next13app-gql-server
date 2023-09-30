import type { MutationResolvers } from 'graphql/types.generated';
export const cartCreate: NonNullable<
	MutationResolvers['cartCreate']
> = async (_parent, arg, ctx) => {
	const { items } = arg;
	const products = await ctx.prisma.product.findMany({
		where: {
			id: {
				in: items.map((item) => item.productId)
			}
		},
		include: {
			variants: { include: { variant: true } }
		}
	});

	const cartItems = items.map((i) => {
		const product = products.find(
			(product) => product.id === i.productId
		);

		if (!product) throw new Error('Product not found');

		const variant = product.variants.find(
			(variant) => variant.id === i.variantId
		);

		if (!variant) throw new Error('Variant not found');

		return {
			quantity: i.quantity,
			productId: product.id,
			price: product.price,
			variantId: variant.id,
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
