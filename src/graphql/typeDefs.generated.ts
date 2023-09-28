import type { DocumentNode } from 'graphql';
export const typeDefs = {
	kind: 'Document',
	definitions: [
		{
			kind: 'InputObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'WhereInput',
				loc: { start: 6, end: 16 }
			},
			directives: [],
			fields: [
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'slug',
						loc: { start: 21, end: 25 }
					},
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'String',
							loc: { start: 27, end: 33 }
						},
						loc: { start: 27, end: 33 }
					},
					directives: [],
					loc: { start: 21, end: 33 }
				}
			],
			loc: { start: 0, end: 35 }
		},
		{
			kind: 'ObjectTypeExtension',
			name: {
				kind: 'Name',
				value: 'Query',
				loc: { start: 49, end: 54 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'category',
						loc: { start: 59, end: 67 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'id',
								loc: { start: 68, end: 70 }
							},
							type: {
								kind: 'NonNullType',
								type: {
									kind: 'NamedType',
									name: {
										kind: 'Name',
										value: 'ID',
										loc: { start: 72, end: 74 }
									},
									loc: { start: 72, end: 74 }
								},
								loc: { start: 72, end: 75 }
							},
							directives: [],
							loc: { start: 68, end: 75 }
						}
					],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'Category',
							loc: { start: 78, end: 86 }
						},
						loc: { start: 78, end: 86 }
					},
					directives: [],
					loc: { start: 59, end: 86 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'categories',
						loc: { start: 89, end: 99 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 100, end: 104 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 106, end: 109 }
								},
								loc: { start: 106, end: 109 }
							},
							directives: [],
							loc: { start: 100, end: 109 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'take',
								loc: { start: 111, end: 115 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 117, end: 120 }
								},
								loc: { start: 117, end: 120 }
							},
							directives: [],
							loc: { start: 111, end: 120 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'where',
								loc: { start: 122, end: 127 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'WhereInput',
									loc: { start: 129, end: 139 }
								},
								loc: { start: 129, end: 139 }
							},
							directives: [],
							loc: { start: 122, end: 139 }
						}
					],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'ListType',
							type: {
								kind: 'NonNullType',
								type: {
									kind: 'NamedType',
									name: {
										kind: 'Name',
										value: 'Category',
										loc: { start: 143, end: 151 }
									},
									loc: { start: 143, end: 151 }
								},
								loc: { start: 143, end: 152 }
							},
							loc: { start: 142, end: 153 }
						},
						loc: { start: 142, end: 154 }
					},
					directives: [],
					loc: { start: 89, end: 154 }
				}
			],
			loc: { start: 37, end: 156 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Category',
				loc: { start: 163, end: 171 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'id',
						loc: { start: 176, end: 178 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 180, end: 182 }
							},
							loc: { start: 180, end: 182 }
						},
						loc: { start: 180, end: 183 }
					},
					directives: [],
					loc: { start: 176, end: 183 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'name',
						loc: { start: 186, end: 190 }
					},
					arguments: [],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'String',
							loc: { start: 192, end: 198 }
						},
						loc: { start: 192, end: 198 }
					},
					directives: [],
					loc: { start: 186, end: 198 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'slug',
						loc: { start: 201, end: 205 }
					},
					arguments: [],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'String',
							loc: { start: 207, end: 213 }
						},
						loc: { start: 207, end: 213 }
					},
					directives: [],
					loc: { start: 201, end: 213 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'products',
						loc: { start: 216, end: 224 }
					},
					arguments: [],
					type: {
						kind: 'ListType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Product',
								loc: { start: 227, end: 234 }
							},
							loc: { start: 227, end: 234 }
						},
						loc: { start: 226, end: 235 }
					},
					directives: [],
					loc: { start: 216, end: 235 }
				}
			],
			loc: { start: 158, end: 237 }
		},
		{
			kind: 'InputObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'CategorySomeInput',
				loc: { start: 244, end: 261 }
			},
			directives: [],
			fields: [
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'slug',
						loc: { start: 266, end: 270 }
					},
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'String',
							loc: { start: 272, end: 278 }
						},
						loc: { start: 272, end: 278 }
					},
					directives: [],
					loc: { start: 266, end: 278 }
				}
			],
			loc: { start: 238, end: 280 }
		},
		{
			kind: 'InputObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'WhereInput',
				loc: { start: 288, end: 298 }
			},
			directives: [],
			fields: [
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'nameContains',
						loc: { start: 303, end: 315 }
					},
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'String',
							loc: { start: 317, end: 323 }
						},
						loc: { start: 317, end: 323 }
					},
					directives: [],
					loc: { start: 303, end: 323 }
				},
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'categories_some',
						loc: { start: 326, end: 341 }
					},
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'CategorySomeInput',
							loc: { start: 343, end: 360 }
						},
						loc: { start: 343, end: 360 }
					},
					directives: [],
					loc: { start: 326, end: 360 }
				}
			],
			loc: { start: 282, end: 362 }
		},
		{
			kind: 'ObjectTypeExtension',
			name: {
				kind: 'Name',
				value: 'Query',
				loc: { start: 376, end: 381 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'product',
						loc: { start: 386, end: 393 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'id',
								loc: { start: 394, end: 396 }
							},
							type: {
								kind: 'NonNullType',
								type: {
									kind: 'NamedType',
									name: {
										kind: 'Name',
										value: 'ID',
										loc: { start: 398, end: 400 }
									},
									loc: { start: 398, end: 400 }
								},
								loc: { start: 398, end: 401 }
							},
							directives: [],
							loc: { start: 394, end: 401 }
						}
					],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'Product',
							loc: { start: 404, end: 411 }
						},
						loc: { start: 404, end: 411 }
					},
					directives: [],
					loc: { start: 386, end: 411 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'products',
						loc: { start: 414, end: 422 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'where',
								loc: { start: 423, end: 428 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'WhereInput',
									loc: { start: 430, end: 440 }
								},
								loc: { start: 430, end: 440 }
							},
							directives: [],
							loc: { start: 423, end: 440 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 442, end: 446 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 448, end: 451 }
								},
								loc: { start: 448, end: 451 }
							},
							directives: [],
							loc: { start: 442, end: 451 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'take',
								loc: { start: 453, end: 457 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 459, end: 462 }
								},
								loc: { start: 459, end: 462 }
							},
							directives: [],
							loc: { start: 453, end: 462 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'excludedIds',
								loc: { start: 464, end: 475 }
							},
							type: {
								kind: 'ListType',
								type: {
									kind: 'NonNullType',
									type: {
										kind: 'NamedType',
										name: {
											kind: 'Name',
											value: 'ID',
											loc: { start: 478, end: 480 }
										},
										loc: { start: 478, end: 480 }
									},
									loc: { start: 478, end: 481 }
								},
								loc: { start: 477, end: 482 }
							},
							directives: [],
							loc: { start: 464, end: 482 }
						}
					],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'ListType',
							type: {
								kind: 'NonNullType',
								type: {
									kind: 'NamedType',
									name: {
										kind: 'Name',
										value: 'Product',
										loc: { start: 486, end: 493 }
									},
									loc: { start: 486, end: 493 }
								},
								loc: { start: 486, end: 494 }
							},
							loc: { start: 485, end: 495 }
						},
						loc: { start: 485, end: 496 }
					},
					directives: [],
					loc: { start: 414, end: 496 }
				}
			],
			loc: { start: 364, end: 498 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Product',
				loc: { start: 505, end: 512 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'id',
						loc: { start: 517, end: 519 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 521, end: 523 }
							},
							loc: { start: 521, end: 523 }
						},
						loc: { start: 521, end: 524 }
					},
					directives: [],
					loc: { start: 517, end: 524 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'name',
						loc: { start: 527, end: 531 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 533, end: 539 }
							},
							loc: { start: 533, end: 539 }
						},
						loc: { start: 533, end: 540 }
					},
					directives: [],
					loc: { start: 527, end: 540 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'slug',
						loc: { start: 543, end: 547 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 549, end: 555 }
							},
							loc: { start: 549, end: 555 }
						},
						loc: { start: 549, end: 556 }
					},
					directives: [],
					loc: { start: 543, end: 556 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'description',
						loc: { start: 559, end: 570 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 572, end: 578 }
							},
							loc: { start: 572, end: 578 }
						},
						loc: { start: 572, end: 579 }
					},
					directives: [],
					loc: { start: 559, end: 579 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'price',
						loc: { start: 582, end: 587 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 589, end: 592 }
							},
							loc: { start: 589, end: 592 }
						},
						loc: { start: 589, end: 593 }
					},
					directives: [],
					loc: { start: 582, end: 593 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'categories',
						loc: { start: 596, end: 606 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'ListType',
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Category',
									loc: { start: 609, end: 617 }
								},
								loc: { start: 609, end: 617 }
							},
							loc: { start: 608, end: 618 }
						},
						loc: { start: 608, end: 619 }
					},
					directives: [],
					loc: { start: 596, end: 619 }
				}
			],
			loc: { start: 500, end: 621 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Query',
				loc: { start: 627, end: 632 }
			},
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 622, end: 632 }
		},
		{
			kind: 'ScalarTypeDefinition',
			name: {
				kind: 'Name',
				value: 'DateTime',
				loc: { start: 641, end: 649 }
			},
			directives: [],
			loc: { start: 634, end: 649 }
		}
	],
	loc: { start: 0, end: 650 }
} as unknown as DocumentNode;
