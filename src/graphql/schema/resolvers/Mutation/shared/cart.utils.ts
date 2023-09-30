import { prisma } from 'db';
import { OrderProductInput } from 'graphql/types.generated';

type UpdateMethod = 'replace' | 'increment';

export const getValidOrderItemsInput = async (
	items: Array<OrderProductInput>
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

	const cartItems = items.map((i) => {
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
			name: product.name
		};
	});

	return cartItems;
};
export const updateCart = async ({
	cartId,
	items,
	updateMethod = 'increment'
}: {
	cartId: string;
	items: Array<OrderProductInput>;
	updateMethod: 'replace' | 'increment';
}) => {
	const isUpdateMethod = (method: UpdateMethod) => updateMethod === method;
	const itemsToUpdate = items.filter((item) => item.quantity > 0);
	const itemsToDelete = isUpdateMethod('replace')
		? items.filter((item) => item.quantity === 0)
		: [];

	const cart = await prisma.order.update({
		where: { id: cartId },
		data: {
			items: {
				upsert: (await getValidOrderItemsInput(itemsToUpdate)).map(
					(item) => ({
						create: item,
						update: {
							...item,
							quantity: isUpdateMethod('increment')
								? { increment: item.quantity }
								: item.quantity
						},
						where: {
							orderId_productId_variantId: {
								orderId: cartId,
								productId: item.productId,
								variantId: item.variantId
							}
						}
					})
				),
				deleteMany: itemsToDelete.map((item) => ({
					orderId: cartId,
					productId: item.productId,
					variantId: item.variantId
				}))
			}
		}
	});

	return { ...cart, items: [] };
};
