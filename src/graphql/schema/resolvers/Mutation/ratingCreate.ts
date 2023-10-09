import type { MutationResolvers } from './../../../types.generated';
export const ratingCreate: NonNullable<
	MutationResolvers['ratingCreate']
> = async (_parent, arg, ctx) => {
	const { ratingInput, productId } = arg;

	if (ratingInput.rating > 5 || ratingInput.rating < 1) {
		throw new Error('Rating must be between 1 and 5');
	}
	if (ratingInput.comment.length > 2000) {
		throw new Error('Comment must be less than 2000 characters');
	}
	if (!ratingInput.email.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)) {
		throw new Error('Email is invalid');
	}
	const rating = await ctx.prisma.rating.create({
		data: {
			...ratingInput,
			product: {
				connect: {
					id: productId
				}
			}
		}
	});

	return rating;
};
