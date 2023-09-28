/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated';
import { Aggregate } from './schema/resolvers/Aggregate';
import { Category } from './schema/resolvers/Category';
import { Collection } from './schema/resolvers/Collection';
import { Connection } from './schema/resolvers/Connection';
import { Product } from './schema/resolvers/Product';
import { categories as Query_categories } from './schema/resolvers/Query/categories';
import { categoriesConnection as Query_categoriesConnection } from './schema/resolvers/Query/categoriesConnection';
import { category as Query_category } from './schema/resolvers/Query/category';
import { collections as Query_collections } from './schema/resolvers/Query/collections';
import { collectionsConnection as Query_collectionsConnection } from './schema/resolvers/Query/collectionsConnection';
import { product as Query_product } from './schema/resolvers/Query/product';
import { products as Query_products } from './schema/resolvers/Query/products';
import { productsConnection as Query_productsConnection } from './schema/resolvers/Query/productsConnection';
import { DateTimeResolver } from 'graphql-scalars';
export const resolvers: Resolvers = {
	Query: {
		categories: Query_categories,
		categoriesConnection: Query_categoriesConnection,
		category: Query_category,
		collections: Query_collections,
		collectionsConnection: Query_collectionsConnection,
		product: Query_product,
		products: Query_products,
		productsConnection: Query_productsConnection
	},

	Aggregate: Aggregate,
	Category: Category,
	Collection: Collection,
	Connection: Connection,
	Product: Product,
	DateTime: DateTimeResolver
};
