import type { MutationResolvers } from 'graphql/types.generated';
import { updateCart } from 'graphql/schema/resolvers/Mutation/shared/cart.utils';

export const cartUpdate: NonNullable<
	MutationResolvers['cartUpdate']
> = async (_parent, arg, ctx) => {
	const { items, id } = arg;
	return await updateCart({
		cartId: id,
		items,
		updateMethod: 'replace'
	});
};
