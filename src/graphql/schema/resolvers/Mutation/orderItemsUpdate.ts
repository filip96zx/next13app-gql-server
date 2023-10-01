import type {
	MutationResolvers,
	OrderItemsUpdateMethod
} from 'graphql/types.generated';
import { getValidOrderItemsInput } from 'graphql/schema/resolvers/Mutation/shared/order.utils';

export const orderItemsUpdate: NonNullable<
	MutationResolvers['orderItemsUpdate']
> = async (_parent, arg, ctx) => {
	const { items, id, updateMethod } = arg;

	const isUpdateMethod = (method: OrderItemsUpdateMethod) =>
		updateMethod === method;

	const itemsToUpdate = items.filter((item) => item.quantity > 0);
	const itemsToDelete = isUpdateMethod('SET')
		? items.filter((item) => item.quantity === 0)
		: [];

	const argItemsQuantity = itemsToUpdate.reduce(
		(acc, item) => acc + item.quantity,
		0
	);
	const cart = await ctx.prisma.order.update({
		where: { id: id },
		data: {
			totalItems: isUpdateMethod('INCREMENT')
				? {
						increment: argItemsQuantity
				  }
				: undefined,
			items: {
				upsert: (await getValidOrderItemsInput(itemsToUpdate)).map(
					(item) => ({
						create: item,
						update: {
							...item,
							quantity: isUpdateMethod('INCREMENT')
								? { increment: item.quantity }
								: item.quantity
						},
						where: {
							orderId_productId_variantId: {
								orderId: id,
								productId: item.productId,
								variantId: item.variantId
							}
						}
					})
				),
				deleteMany: itemsToDelete.map((item) => ({
					orderId: id,
					productId: item.productId,
					variantId: item.variantId
				}))
			}
		},
		include: { items: true }
	});

	if (isUpdateMethod('SET')) {
		const cartWithTotalItemsUpdated = await ctx.prisma.order.update({
			where: { id: id },
			data: {
				totalItems: cart.items.reduce(
					(acc, item) => acc + item.quantity,
					0
				)
			}
		});

		return { ...cartWithTotalItemsUpdated, items: [] };
	}

	return { ...cart, items: [] };
};
