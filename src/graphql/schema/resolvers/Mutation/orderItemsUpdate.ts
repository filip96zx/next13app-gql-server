import type { MutationResolvers } from 'graphql/types.generated';
import { updateOrderItems } from 'graphql/schema/resolvers/Mutation/shared/order.utils';

export const orderItemsUpdate: NonNullable<
	MutationResolvers['orderItemsUpdate']
> = async (_parent, arg, ctx) => {
	const { items, id } = arg;
	return await updateOrderItems({
		cartId: id,
		items,
		updateMethod: 'replace'
	});
};
