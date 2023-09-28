import { category } from 'graphql/schema/resolvers/Query/category';
import type { QueryResolvers } from './../../../types.generated';
export const categories: NonNullable<
	QueryResolvers['categories']
> = async (_parent, arg, ctx) => {
	const { skip, first } = arg || {};
	const categories = await ctx.prisma.category.findMany({
		include: {
			products: {
				include: {
					product: {
						include: {
							collections: { include: { collection: true } },
							categories: { include: { category: true } }
						}
					}
				}
			}
		},
		skip: skip ?? undefined,
		take: first ?? undefined
	});

	return categories.map((c) => ({
		...c,
		products: c.products.map((p) => ({
			...p.product,
			categories: p.product.categories.map((pc) => pc.category),
			collections: p.product.collections.map((pc) => pc.collection)
		}))
	}));
};
