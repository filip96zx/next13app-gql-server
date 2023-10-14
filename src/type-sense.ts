import Typesense from 'typesense/src/Typesense';
import fs from 'fs/promises';

if (!process.env.TYPESENSE_API_KEY)
	throw new Error('No API key found in .env file');

let client = new Typesense.Client({
	nodes: [
		{
			host: 'localhost', // For Typesense Cloud use xxx.a1.typesense.net
			port: 8108, // For Typesense Cloud use 443
			protocol: 'http' // For Typesense Cloud use https
		}
	],
	apiKey: process.env.TYPESENSE_API_KEY,
	connectionTimeoutSeconds: 2
});

client.collections('products').delete();
client.collections().create({
	name: 'products',
	fields: [
		{ name: 'name', type: 'string' },
		{ name: 'collectionsSlugs', type: 'string[]', facet: true },
		{ name: 'averageRating', type: 'float' },
		{
			name: 'embedding',
			type: 'float[]',
			embed: {
				from: ['name'],
				model_config: {
					model_name: 'ts/all-MiniLM-L12-v2'
				}
			}
		}
	],
	default_sorting_field: 'averageRating'
});

let productCache: any;
export async function getData({
	products,
	query
}: {
	products: any;
	query: string;
}) {
	if (!productCache) {
		productCache = products;
		await client.collections('products').documents().import(products);
	}
	return await client
		.collections('products')
		.documents()
		.search({
			q: query,
			query_by: 'embedding',
			sort_by: 'averageRating:desc'
		})
		.then(function (searchResults) {
			return searchResults.hits;
		});
}
