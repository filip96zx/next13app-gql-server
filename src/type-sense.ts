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

// client.collections().create({
// 	name: 'books',
// 	fields: [
// 		{ name: 'title', type: 'string' },
// 		{ name: 'authors', type: 'string[]', facet: true },

// 		{ name: 'publication_year', type: 'int32', facet: true },
// 		{ name: 'ratings_count', type: 'int32' },
// 		{ name: 'average_rating', type: 'float' }
// 	],
// 	default_sorting_field: 'ratings_count'
// });
client.collections('products').delete();
client.collections().create({
	name: 'products',
	fields: [
		{ name: 'name', type: 'string' },
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
	// console.log({ products });
	if (!productCache) {
		productCache = products;
		await client.collections('products').documents().import(products);
	}
	let searchParameters = {
		q: query,
		query_by: 'embedding'
		// sort_by: 'ratings_count:desc'
	};

	await client
		.collections('products')
		.documents()
		.search(searchParameters)
		.then(function (searchResults) {
			console.dir(searchResults, { depth: 5 });
		});
}
