import {
	GraphQLResolveInfo,
	GraphQLScalarType,
	GraphQLScalarTypeConfig
} from 'graphql';
import { Context, Mapper } from '../types.js';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
	T extends { [key: string]: unknown },
	K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
	| T
	| {
			[P in keyof T]?: P extends ' $fragmentName' | '__typename'
				? T[P]
				: never;
	  };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
	[P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
	DateTime: { input: Date; output: Date };
};

export type Aggregate = {
	__typename?: 'Aggregate';
	count: Scalars['Int']['output'];
};

export type Category = {
	__typename?: 'Category';
	id: Scalars['ID']['output'];
	name?: Maybe<Scalars['String']['output']>;
	products?: Maybe<Array<Maybe<Product>>>;
	slug?: Maybe<Scalars['String']['output']>;
};

export type CategoryProductsArgs = {
	first?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
};

export type CategorySomeInput = {
	slug?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryWhereInput = {
	slug?: InputMaybe<Scalars['String']['input']>;
};

export type Collection = {
	__typename?: 'Collection';
	description: Scalars['String']['output'];
	id: Scalars['ID']['output'];
	images?: Maybe<Array<Maybe<Image>>>;
	name: Scalars['String']['output'];
	products?: Maybe<Array<Maybe<Product>>>;
	slug: Scalars['String']['output'];
};

export type CollectionImagesArgs = {
	first?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
};

export type CollectionProductsArgs = {
	first?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
};

export type CollectionSomeInput = {
	slug?: InputMaybe<Scalars['String']['input']>;
};

export type CollectionWhereInput = {
	slug?: InputMaybe<Scalars['String']['input']>;
};

export type Connection = {
	__typename?: 'Connection';
	aggregate?: Maybe<Aggregate>;
};

export type Image = {
	__typename?: 'Image';
	height: Scalars['Int']['output'];
	url: Scalars['String']['output'];
	width: Scalars['Int']['output'];
};

export type Product = {
	__typename?: 'Product';
	categories: Array<Maybe<Category>>;
	collections: Array<Maybe<Collection>>;
	description: Scalars['String']['output'];
	id: Scalars['ID']['output'];
	images: Array<Maybe<Image>>;
	name: Scalars['String']['output'];
	price: Scalars['Int']['output'];
	slug: Scalars['String']['output'];
};

export type ProductCategoriesArgs = {
	first?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductCollectionsArgs = {
	first?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductImagesArgs = {
	first?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductWhereInput = {
	categories_some?: InputMaybe<CategorySomeInput>;
	collections_some?: InputMaybe<CollectionSomeInput>;
	excludedIds?: InputMaybe<Array<Scalars['ID']['input']>>;
	nameContains?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
	__typename?: 'Query';
	categories: Array<Category>;
	categoriesConnection: Connection;
	category?: Maybe<Category>;
	collections: Array<Maybe<Collection>>;
	collectionsConnection: Connection;
	product?: Maybe<Product>;
	products: Array<Product>;
	productsConnection: Connection;
};

export type QueryCategoriesArgs = {
	first?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<CategoryWhereInput>;
};

export type QueryCategoriesConnectionArgs = {
	where?: InputMaybe<CategoryWhereInput>;
};

export type QueryCategoryArgs = {
	id: Scalars['ID']['input'];
};

export type QueryCollectionsArgs = {
	first?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<CollectionWhereInput>;
};

export type QueryCollectionsConnectionArgs = {
	where?: InputMaybe<CollectionWhereInput>;
};

export type QueryProductArgs = {
	id: Scalars['ID']['input'];
};

export type QueryProductsArgs = {
	first?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<ProductWhereInput>;
};

export type QueryProductsConnectionArgs = {
	where?: InputMaybe<ProductWhereInput>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
	resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<
	TResult,
	TParent = {},
	TContext = {},
	TArgs = {}
> =
	| ResolverFn<TResult, TParent, TContext, TArgs>
	| ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info?: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<
	TResult,
	TParent,
	TContext,
	TArgs
> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info?: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> =
	(
		parent: TParent,
		args: TArgs,
		context: TContext,
		info?: GraphQLResolveInfo
	) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
	TResult,
	TKey extends string,
	TParent,
	TContext,
	TArgs
> {
	subscribe: SubscriptionSubscribeFn<
		{ [key in TKey]: TResult },
		TParent,
		TContext,
		TArgs
	>;
	resolve?: SubscriptionResolveFn<
		TResult,
		{ [key in TKey]: TResult },
		TContext,
		TArgs
	>;
}

export interface SubscriptionResolverObject<
	TResult,
	TParent,
	TContext,
	TArgs
> {
	subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
	resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
	TResult,
	TKey extends string,
	TParent,
	TContext,
	TArgs
> =
	| SubscriptionSubscriberObject<
			TResult,
			TKey,
			TParent,
			TContext,
			TArgs
	  >
	| SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
	TResult,
	TKey extends string,
	TParent = {},
	TContext = {},
	TArgs = {}
> =
	| ((
			...args: any[]
	  ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
	| SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
	parent: TParent,
	context: TContext,
	info?: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
	obj: T,
	context: TContext,
	info?: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
	TResult = {},
	TParent = {},
	TContext = {},
	TArgs = {}
> = (
	next: NextResolverFn<TResult>,
	parent: TParent,
	args: TArgs,
	context: TContext,
	info?: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
	Aggregate: ResolverTypeWrapper<Mapper<Aggregate>>;
	Int: ResolverTypeWrapper<Mapper<Scalars['Int']['output']>>;
	Category: ResolverTypeWrapper<Mapper<Category>>;
	ID: ResolverTypeWrapper<Mapper<Scalars['ID']['output']>>;
	String: ResolverTypeWrapper<Mapper<Scalars['String']['output']>>;
	CategorySomeInput: ResolverTypeWrapper<Mapper<CategorySomeInput>>;
	CategoryWhereInput: ResolverTypeWrapper<Mapper<CategoryWhereInput>>;
	Collection: ResolverTypeWrapper<Mapper<Collection>>;
	CollectionSomeInput: ResolverTypeWrapper<
		Mapper<CollectionSomeInput>
	>;
	CollectionWhereInput: ResolverTypeWrapper<
		Mapper<CollectionWhereInput>
	>;
	Connection: ResolverTypeWrapper<Mapper<Connection>>;
	DateTime: ResolverTypeWrapper<
		Mapper<Scalars['DateTime']['output']>
	>;
	Image: ResolverTypeWrapper<Mapper<Image>>;
	Product: ResolverTypeWrapper<Mapper<Product>>;
	ProductWhereInput: ResolverTypeWrapper<Mapper<ProductWhereInput>>;
	Query: ResolverTypeWrapper<{}>;
	Boolean: ResolverTypeWrapper<Mapper<Scalars['Boolean']['output']>>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
	Aggregate: Mapper<Aggregate>;
	Int: Mapper<Scalars['Int']['output']>;
	Category: Mapper<Category>;
	ID: Mapper<Scalars['ID']['output']>;
	String: Mapper<Scalars['String']['output']>;
	CategorySomeInput: Mapper<CategorySomeInput>;
	CategoryWhereInput: Mapper<CategoryWhereInput>;
	Collection: Mapper<Collection>;
	CollectionSomeInput: Mapper<CollectionSomeInput>;
	CollectionWhereInput: Mapper<CollectionWhereInput>;
	Connection: Mapper<Connection>;
	DateTime: Mapper<Scalars['DateTime']['output']>;
	Image: Mapper<Image>;
	Product: Mapper<Product>;
	ProductWhereInput: Mapper<ProductWhereInput>;
	Query: {};
	Boolean: Mapper<Scalars['Boolean']['output']>;
};

export type AggregateResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes['Aggregate'] = ResolversParentTypes['Aggregate']
> = {
	count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes['Category'] = ResolversParentTypes['Category']
> = {
	id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
	name?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	products?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['Product']>>>,
		ParentType,
		ContextType,
		Partial<CategoryProductsArgs>
	>;
	slug?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes['Collection'] = ResolversParentTypes['Collection']
> = {
	description?: Resolver<
		ResolversTypes['String'],
		ParentType,
		ContextType
	>;
	id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
	images?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['Image']>>>,
		ParentType,
		ContextType,
		Partial<CollectionImagesArgs>
	>;
	name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	products?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['Product']>>>,
		ParentType,
		ContextType,
		Partial<CollectionProductsArgs>
	>;
	slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConnectionResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes['Connection'] = ResolversParentTypes['Connection']
> = {
	aggregate?: Resolver<
		Maybe<ResolversTypes['Aggregate']>,
		ParentType,
		ContextType
	>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig
	extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
	name: 'DateTime';
}

export type ImageResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes['Image'] = ResolversParentTypes['Image']
> = {
	height?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
	url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	width?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes['Product'] = ResolversParentTypes['Product']
> = {
	categories?: Resolver<
		Array<Maybe<ResolversTypes['Category']>>,
		ParentType,
		ContextType,
		Partial<ProductCategoriesArgs>
	>;
	collections?: Resolver<
		Array<Maybe<ResolversTypes['Collection']>>,
		ParentType,
		ContextType,
		Partial<ProductCollectionsArgs>
	>;
	description?: Resolver<
		ResolversTypes['String'],
		ParentType,
		ContextType
	>;
	id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
	images?: Resolver<
		Array<Maybe<ResolversTypes['Image']>>,
		ParentType,
		ContextType,
		Partial<ProductImagesArgs>
	>;
	name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
	slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
	categories?: Resolver<
		Array<ResolversTypes['Category']>,
		ParentType,
		ContextType,
		Partial<QueryCategoriesArgs>
	>;
	categoriesConnection?: Resolver<
		ResolversTypes['Connection'],
		ParentType,
		ContextType,
		Partial<QueryCategoriesConnectionArgs>
	>;
	category?: Resolver<
		Maybe<ResolversTypes['Category']>,
		ParentType,
		ContextType,
		RequireFields<QueryCategoryArgs, 'id'>
	>;
	collections?: Resolver<
		Array<Maybe<ResolversTypes['Collection']>>,
		ParentType,
		ContextType,
		Partial<QueryCollectionsArgs>
	>;
	collectionsConnection?: Resolver<
		ResolversTypes['Connection'],
		ParentType,
		ContextType,
		Partial<QueryCollectionsConnectionArgs>
	>;
	product?: Resolver<
		Maybe<ResolversTypes['Product']>,
		ParentType,
		ContextType,
		RequireFields<QueryProductArgs, 'id'>
	>;
	products?: Resolver<
		Array<ResolversTypes['Product']>,
		ParentType,
		ContextType,
		Partial<QueryProductsArgs>
	>;
	productsConnection?: Resolver<
		ResolversTypes['Connection'],
		ParentType,
		ContextType,
		Partial<QueryProductsConnectionArgs>
	>;
};

export type Resolvers<ContextType = Context> = {
	Aggregate?: AggregateResolvers<ContextType>;
	Category?: CategoryResolvers<ContextType>;
	Collection?: CollectionResolvers<ContextType>;
	Connection?: ConnectionResolvers<ContextType>;
	DateTime?: GraphQLScalarType;
	Image?: ImageResolvers<ContextType>;
	Product?: ProductResolvers<ContextType>;
	Query?: QueryResolvers<ContextType>;
};
