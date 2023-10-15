import { Prisma, Product } from '@prisma/client';
import { parseProductToProductWithNotNullableLists } from 'graphql/schema/resolvers/shared/product.utils';
import type {
	InputMaybe,
	ProductWhereInput,
	QueryResolvers
} from 'graphql/types.generated';
import { getData } from 'type-sense';

export const productsRelated: NonNullable<
	QueryResolvers['productsRelated']
> = async (_parent, arg, ctx) => {
	const { where, skip, first } = arg;

	if (!where?.productName) {
		return [];
	}
	const productName = where.productName;

	const products = await ctx.prisma.product.findMany({
		include: { collections: { include: { collection: true } } }
	});
	const data = (await getData({
		products: products.map((p) => ({
			...p,
			collectionsSlugs: p.collections.map((c) => c.collection.slug)
		})),
		query: productName
	})) as unknown as Array<{ document: Product }>;

	const filteredData = data
		.filter(
			({ document }) =>
				!document.name
					.toLocaleLowerCase()
					.includes(productName.toLocaleLowerCase())
		)
		.slice(skip || undefined, first ? skip || 0 + first : undefined)
		.map(({ document }) => ({
			...parseProductToProductWithNotNullableLists(document)
		}));

	return filteredData;
};
