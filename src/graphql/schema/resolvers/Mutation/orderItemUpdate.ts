import { OrderItem } from '@prisma/client';
import type { MutationResolvers } from 'graphql/types.generated';
export const orderItemUpdate: NonNullable<
	MutationResolvers['orderItemUpdate']
> = async (_parent, arg, ctx) => {
	const { id, quantity } = arg;
	async function updateTotalItems(
		orderId: string,
		items: Array<OrderItem>
	) {
		await ctx.prisma.order.update({
			where: { id: orderId },
			data: {
				totalItems: items.reduce(
					(acc, item) => acc + item.quantity,
					0
				)
			}
		});
	}
	if (quantity <= 0) {
		const item = await ctx.prisma.orderItem.delete({
			where: { id },
			include: { order: { include: { items: true } } }
		});
		await updateTotalItems(
			item.orderId,
			item.order.items.filter((item) => item.id !== id)
		);
		return null;
	}

	const item = await ctx.prisma.orderItem.update({
		where: { id },
		data: { quantity },
		include: {
			order: { include: { items: true } }
		}
	});

	await updateTotalItems(item.orderId, item.order.items);

	return item;
};
