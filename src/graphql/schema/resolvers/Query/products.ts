import type { QueryResolvers } from './../../../types.generated';
export const products: NonNullable<
	QueryResolvers['products']
> = async (_parent, arg, ctx) => {
	const { where, skip, take, excludedIds } = arg;
	const { nameContains, categories_some } = where || {};
	const products = await ctx.prisma.product.findMany({
		include: {
			categories: { include: { category: true } }
		},
		...(where && {
			where: {
				...(nameContains && {
					name: {
						contains: nameContains,
						mode: 'insensitive'
					}
				}),
				...(categories_some?.slug && {
					categories: {
						some: {
							category: {
								slug: categories_some.slug
							}
						}
					}
				}),
				...(excludedIds && {
					AND: {
						id: {
							notIn: excludedIds
						}
					}
				})
			}
		}),
		skip: skip ?? undefined,
		take: take ?? undefined
	});
	return products;
};
