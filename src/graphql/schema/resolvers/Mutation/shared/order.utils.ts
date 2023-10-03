import { prisma } from 'db';
import { Prisma } from '@prisma/client';
import {
	OrderItemInput,
	OrderItemsUpdateMethod
} from 'graphql/types.generated';

export const getValidOrderItemsInput = async (
	items: Array<OrderItemInput>
) => {
	const products = await prisma.product.findMany({
		where: {
			id: {
				in: items.map((item) => item.productId)
			}
		},
		include: {
			variants: { include: { variant: true } }
		}
	});

	const cartItems: Array<Prisma.OrderItemCreateManyOrderInput> =
		items.map((i) => {
			const product = products.find(
				(product) => product.id === i.productId
			);

			if (!product) throw new Error('Product not found');
			const variant = product.variants.find(
				(variant) => variant.variantId === i.variantId
			);

			if (!variant) throw new Error('Variant not found');

			return {
				quantity: i.quantity,
				productId: product.id,
				price: product.price,
				variantId: variant.variantId,
				name: product.name,
				variantName: variant.variant.name
			};
		});

	return cartItems;
};
