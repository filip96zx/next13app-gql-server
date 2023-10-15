import type { DocumentNode } from 'graphql';
export const typeDefs = {
	kind: 'Document',
	definitions: [
		{
			kind: 'InputObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'CategoryWhereInput',
				loc: { start: 6, end: 24 }
			},
			directives: [],
			fields: [
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'slug',
						loc: { start: 29, end: 33 }
					},
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'String',
							loc: { start: 35, end: 41 }
						},
						loc: { start: 35, end: 41 }
					},
					directives: [],
					loc: { start: 29, end: 41 }
				}
			],
			loc: { start: 0, end: 43 }
		},
		{
			kind: 'ObjectTypeExtension',
			name: {
				kind: 'Name',
				value: 'Query',
				loc: { start: 57, end: 62 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'category',
						loc: { start: 67, end: 75 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'id',
								loc: { start: 76, end: 78 }
							},
							type: {
								kind: 'NonNullType',
								type: {
									kind: 'NamedType',
									name: {
										kind: 'Name',
										value: 'ID',
										loc: { start: 80, end: 82 }
									},
									loc: { start: 80, end: 82 }
								},
								loc: { start: 80, end: 83 }
							},
							directives: [],
							loc: { start: 76, end: 83 }
						}
					],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'Category',
							loc: { start: 86, end: 94 }
						},
						loc: { start: 86, end: 94 }
					},
					directives: [],
					loc: { start: 67, end: 94 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'categories',
						loc: { start: 97, end: 107 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 108, end: 112 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 114, end: 117 }
								},
								loc: { start: 114, end: 117 }
							},
							directives: [],
							loc: { start: 108, end: 117 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 119, end: 124 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 126, end: 129 }
								},
								loc: { start: 126, end: 129 }
							},
							directives: [],
							loc: { start: 119, end: 129 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'where',
								loc: { start: 131, end: 136 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'CategoryWhereInput',
									loc: { start: 138, end: 156 }
								},
								loc: { start: 138, end: 156 }
							},
							directives: [],
							loc: { start: 131, end: 156 }
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
										loc: { start: 160, end: 168 }
									},
									loc: { start: 160, end: 168 }
								},
								loc: { start: 160, end: 169 }
							},
							loc: { start: 159, end: 170 }
						},
						loc: { start: 159, end: 171 }
					},
					directives: [],
					loc: { start: 97, end: 171 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'categoriesConnection',
						loc: { start: 174, end: 194 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'where',
								loc: { start: 195, end: 200 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'CategoryWhereInput',
									loc: { start: 202, end: 220 }
								},
								loc: { start: 202, end: 220 }
							},
							directives: [],
							loc: { start: 195, end: 220 }
						}
					],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Connection',
								loc: { start: 223, end: 233 }
							},
							loc: { start: 223, end: 233 }
						},
						loc: { start: 223, end: 234 }
					},
					directives: [],
					loc: { start: 174, end: 234 }
				}
			],
			loc: { start: 45, end: 236 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Category',
				loc: { start: 243, end: 251 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'id',
						loc: { start: 256, end: 258 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 260, end: 262 }
							},
							loc: { start: 260, end: 262 }
						},
						loc: { start: 260, end: 263 }
					},
					directives: [],
					loc: { start: 256, end: 263 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'name',
						loc: { start: 266, end: 270 }
					},
					arguments: [],
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
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'slug',
						loc: { start: 281, end: 285 }
					},
					arguments: [],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'String',
							loc: { start: 287, end: 293 }
						},
						loc: { start: 287, end: 293 }
					},
					directives: [],
					loc: { start: 281, end: 293 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'products',
						loc: { start: 296, end: 304 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 305, end: 309 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 311, end: 314 }
								},
								loc: { start: 311, end: 314 }
							},
							directives: [],
							loc: { start: 305, end: 314 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 316, end: 321 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 323, end: 326 }
								},
								loc: { start: 323, end: 326 }
							},
							directives: [],
							loc: { start: 316, end: 326 }
						}
					],
					type: {
						kind: 'ListType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Product',
								loc: { start: 330, end: 337 }
							},
							loc: { start: 330, end: 337 }
						},
						loc: { start: 329, end: 338 }
					},
					directives: [],
					loc: { start: 296, end: 338 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'image',
						loc: { start: 341, end: 346 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Image',
								loc: { start: 348, end: 353 }
							},
							loc: { start: 348, end: 353 }
						},
						loc: { start: 348, end: 354 }
					},
					directives: [],
					loc: { start: 341, end: 354 }
				}
			],
			loc: { start: 238, end: 356 }
		},
		{
			kind: 'InputObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'CollectionWhereInput',
				loc: { start: 363, end: 383 }
			},
			directives: [],
			fields: [
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'slug',
						loc: { start: 388, end: 392 }
					},
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'String',
							loc: { start: 394, end: 400 }
						},
						loc: { start: 394, end: 400 }
					},
					directives: [],
					loc: { start: 388, end: 400 }
				}
			],
			loc: { start: 357, end: 402 }
		},
		{
			kind: 'ObjectTypeExtension',
			name: {
				kind: 'Name',
				value: 'Query',
				loc: { start: 416, end: 421 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'collections',
						loc: { start: 426, end: 437 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 438, end: 442 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 444, end: 447 }
								},
								loc: { start: 444, end: 447 }
							},
							directives: [],
							loc: { start: 438, end: 447 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 449, end: 454 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 456, end: 459 }
								},
								loc: { start: 456, end: 459 }
							},
							directives: [],
							loc: { start: 449, end: 459 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'where',
								loc: { start: 461, end: 466 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'CollectionWhereInput',
									loc: { start: 468, end: 488 }
								},
								loc: { start: 468, end: 488 }
							},
							directives: [],
							loc: { start: 461, end: 488 }
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
										value: 'Collection',
										loc: { start: 492, end: 502 }
									},
									loc: { start: 492, end: 502 }
								},
								loc: { start: 492, end: 503 }
							},
							loc: { start: 491, end: 504 }
						},
						loc: { start: 491, end: 505 }
					},
					directives: [],
					loc: { start: 426, end: 505 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'collectionsConnection',
						loc: { start: 508, end: 529 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'where',
								loc: { start: 530, end: 535 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'CollectionWhereInput',
									loc: { start: 537, end: 557 }
								},
								loc: { start: 537, end: 557 }
							},
							directives: [],
							loc: { start: 530, end: 557 }
						}
					],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Connection',
								loc: { start: 560, end: 570 }
							},
							loc: { start: 560, end: 570 }
						},
						loc: { start: 560, end: 571 }
					},
					directives: [],
					loc: { start: 508, end: 571 }
				}
			],
			loc: { start: 404, end: 573 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Collection',
				loc: { start: 580, end: 590 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'id',
						loc: { start: 595, end: 597 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 599, end: 601 }
							},
							loc: { start: 599, end: 601 }
						},
						loc: { start: 599, end: 602 }
					},
					directives: [],
					loc: { start: 595, end: 602 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'name',
						loc: { start: 605, end: 609 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 611, end: 617 }
							},
							loc: { start: 611, end: 617 }
						},
						loc: { start: 611, end: 618 }
					},
					directives: [],
					loc: { start: 605, end: 618 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'slug',
						loc: { start: 621, end: 625 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 627, end: 633 }
							},
							loc: { start: 627, end: 633 }
						},
						loc: { start: 627, end: 634 }
					},
					directives: [],
					loc: { start: 621, end: 634 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'description',
						loc: { start: 637, end: 648 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 650, end: 656 }
							},
							loc: { start: 650, end: 656 }
						},
						loc: { start: 650, end: 657 }
					},
					directives: [],
					loc: { start: 637, end: 657 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'products',
						loc: { start: 660, end: 668 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 669, end: 673 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 675, end: 678 }
								},
								loc: { start: 675, end: 678 }
							},
							directives: [],
							loc: { start: 669, end: 678 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 680, end: 685 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 687, end: 690 }
								},
								loc: { start: 687, end: 690 }
							},
							directives: [],
							loc: { start: 680, end: 690 }
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
										loc: { start: 694, end: 701 }
									},
									loc: { start: 694, end: 701 }
								},
								loc: { start: 694, end: 702 }
							},
							loc: { start: 693, end: 703 }
						},
						loc: { start: 693, end: 704 }
					},
					directives: [],
					loc: { start: 660, end: 704 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'images',
						loc: { start: 707, end: 713 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 714, end: 718 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 720, end: 723 }
								},
								loc: { start: 720, end: 723 }
							},
							directives: [],
							loc: { start: 714, end: 723 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 725, end: 730 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 732, end: 735 }
								},
								loc: { start: 732, end: 735 }
							},
							directives: [],
							loc: { start: 725, end: 735 }
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
										value: 'Image',
										loc: { start: 739, end: 744 }
									},
									loc: { start: 739, end: 744 }
								},
								loc: { start: 739, end: 745 }
							},
							loc: { start: 738, end: 746 }
						},
						loc: { start: 738, end: 747 }
					},
					directives: [],
					loc: { start: 707, end: 747 }
				}
			],
			loc: { start: 575, end: 749 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Image',
				loc: { start: 755, end: 760 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'url',
						loc: { start: 765, end: 768 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 770, end: 776 }
							},
							loc: { start: 770, end: 776 }
						},
						loc: { start: 770, end: 777 }
					},
					directives: [],
					loc: { start: 765, end: 777 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'height',
						loc: { start: 780, end: 786 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 788, end: 791 }
							},
							loc: { start: 788, end: 791 }
						},
						loc: { start: 788, end: 792 }
					},
					directives: [],
					loc: { start: 780, end: 792 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'width',
						loc: { start: 795, end: 800 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 802, end: 805 }
							},
							loc: { start: 802, end: 805 }
						},
						loc: { start: 802, end: 806 }
					},
					directives: [],
					loc: { start: 795, end: 806 }
				}
			],
			loc: { start: 750, end: 808 }
		},
		{
			kind: 'InputObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'OrderItemInput',
				loc: { start: 815, end: 829 }
			},
			directives: [],
			fields: [
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'productId',
						loc: { start: 834, end: 843 }
					},
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 845, end: 847 }
							},
							loc: { start: 845, end: 847 }
						},
						loc: { start: 845, end: 848 }
					},
					directives: [],
					loc: { start: 834, end: 848 }
				},
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'variantId',
						loc: { start: 851, end: 860 }
					},
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 862, end: 864 }
							},
							loc: { start: 862, end: 864 }
						},
						loc: { start: 862, end: 865 }
					},
					directives: [],
					loc: { start: 851, end: 865 }
				},
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'quantity',
						loc: { start: 868, end: 876 }
					},
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 878, end: 881 }
							},
							loc: { start: 878, end: 881 }
						},
						loc: { start: 878, end: 882 }
					},
					directives: [],
					loc: { start: 868, end: 882 }
				}
			],
			loc: { start: 809, end: 884 }
		},
		{
			kind: 'InputObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'OrderWhereInput',
				loc: { start: 892, end: 907 }
			},
			directives: [],
			fields: [
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'status',
						loc: { start: 912, end: 918 }
					},
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'OrderStatus',
							loc: { start: 920, end: 931 }
						},
						loc: { start: 920, end: 931 }
					},
					directives: [],
					loc: { start: 912, end: 931 }
				}
			],
			loc: { start: 886, end: 933 }
		},
		{
			kind: 'ObjectTypeExtension',
			name: {
				kind: 'Name',
				value: 'Mutation',
				loc: { start: 947, end: 955 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'orderCreate',
						loc: { start: 960, end: 971 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'items',
								loc: { start: 972, end: 977 }
							},
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
												value: 'OrderItemInput',
												loc: { start: 980, end: 994 }
											},
											loc: { start: 980, end: 994 }
										},
										loc: { start: 980, end: 995 }
									},
									loc: { start: 979, end: 996 }
								},
								loc: { start: 979, end: 997 }
							},
							directives: [],
							loc: { start: 972, end: 997 }
						}
					],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'Order',
							loc: { start: 1000, end: 1005 }
						},
						loc: { start: 1000, end: 1005 }
					},
					directives: [],
					loc: { start: 960, end: 1005 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'orderItemsUpdate',
						loc: { start: 1008, end: 1024 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'id',
								loc: { start: 1025, end: 1027 }
							},
							type: {
								kind: 'NonNullType',
								type: {
									kind: 'NamedType',
									name: {
										kind: 'Name',
										value: 'ID',
										loc: { start: 1029, end: 1031 }
									},
									loc: { start: 1029, end: 1031 }
								},
								loc: { start: 1029, end: 1032 }
							},
							directives: [],
							loc: { start: 1025, end: 1032 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'items',
								loc: { start: 1034, end: 1039 }
							},
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
												value: 'OrderItemInput',
												loc: { start: 1042, end: 1056 }
											},
											loc: { start: 1042, end: 1056 }
										},
										loc: { start: 1042, end: 1057 }
									},
									loc: { start: 1041, end: 1058 }
								},
								loc: { start: 1041, end: 1059 }
							},
							directives: [],
							loc: { start: 1034, end: 1059 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'updateMethod',
								loc: { start: 1061, end: 1073 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'OrderItemsUpdateMethod',
									loc: { start: 1075, end: 1097 }
								},
								loc: { start: 1075, end: 1097 }
							},
							directives: [],
							loc: { start: 1061, end: 1097 }
						}
					],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'Order',
							loc: { start: 1100, end: 1105 }
						},
						loc: { start: 1100, end: 1105 }
					},
					directives: [],
					loc: { start: 1008, end: 1105 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'orderUpdateStatus',
						loc: { start: 1108, end: 1125 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'id',
								loc: { start: 1126, end: 1128 }
							},
							type: {
								kind: 'NonNullType',
								type: {
									kind: 'NamedType',
									name: {
										kind: 'Name',
										value: 'ID',
										loc: { start: 1130, end: 1132 }
									},
									loc: { start: 1130, end: 1132 }
								},
								loc: { start: 1130, end: 1133 }
							},
							directives: [],
							loc: { start: 1126, end: 1133 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'status',
								loc: { start: 1135, end: 1141 }
							},
							type: {
								kind: 'NonNullType',
								type: {
									kind: 'NamedType',
									name: {
										kind: 'Name',
										value: 'OrderStatus',
										loc: { start: 1143, end: 1154 }
									},
									loc: { start: 1143, end: 1154 }
								},
								loc: { start: 1143, end: 1155 }
							},
							directives: [],
							loc: { start: 1135, end: 1155 }
						}
					],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'Order',
							loc: { start: 1158, end: 1163 }
						},
						loc: { start: 1158, end: 1163 }
					},
					directives: [],
					loc: { start: 1108, end: 1163 }
				}
			],
			loc: { start: 935, end: 1165 }
		},
		{
			kind: 'ObjectTypeExtension',
			name: {
				kind: 'Name',
				value: 'Query',
				loc: { start: 1179, end: 1184 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'order',
						loc: { start: 1189, end: 1194 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'id',
								loc: { start: 1195, end: 1197 }
							},
							type: {
								kind: 'NonNullType',
								type: {
									kind: 'NamedType',
									name: {
										kind: 'Name',
										value: 'ID',
										loc: { start: 1199, end: 1201 }
									},
									loc: { start: 1199, end: 1201 }
								},
								loc: { start: 1199, end: 1202 }
							},
							directives: [],
							loc: { start: 1195, end: 1202 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'where',
								loc: { start: 1204, end: 1209 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'OrderWhereInput',
									loc: { start: 1211, end: 1226 }
								},
								loc: { start: 1211, end: 1226 }
							},
							directives: [],
							loc: { start: 1204, end: 1226 }
						}
					],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'Order',
							loc: { start: 1229, end: 1234 }
						},
						loc: { start: 1229, end: 1234 }
					},
					directives: [],
					loc: { start: 1189, end: 1234 }
				}
			],
			loc: { start: 1167, end: 1236 }
		},
		{
			kind: 'EnumTypeDefinition',
			name: {
				kind: 'Name',
				value: 'OrderStatus',
				loc: { start: 1243, end: 1254 }
			},
			directives: [],
			values: [
				{
					kind: 'EnumValueDefinition',
					name: {
						kind: 'Name',
						value: 'DRAFT',
						loc: { start: 1259, end: 1264 }
					},
					directives: [],
					loc: { start: 1259, end: 1264 }
				},
				{
					kind: 'EnumValueDefinition',
					name: {
						kind: 'Name',
						value: 'PENDING',
						loc: { start: 1267, end: 1274 }
					},
					directives: [],
					loc: { start: 1267, end: 1274 }
				},
				{
					kind: 'EnumValueDefinition',
					name: {
						kind: 'Name',
						value: 'PAID',
						loc: { start: 1277, end: 1281 }
					},
					directives: [],
					loc: { start: 1277, end: 1281 }
				}
			],
			loc: { start: 1238, end: 1283 }
		},
		{
			kind: 'EnumTypeDefinition',
			name: {
				kind: 'Name',
				value: 'OrderItemsUpdateMethod',
				loc: { start: 1290, end: 1312 }
			},
			directives: [],
			values: [
				{
					kind: 'EnumValueDefinition',
					name: {
						kind: 'Name',
						value: 'SET',
						loc: { start: 1317, end: 1320 }
					},
					directives: [],
					loc: { start: 1317, end: 1320 }
				},
				{
					kind: 'EnumValueDefinition',
					name: {
						kind: 'Name',
						value: 'INCREMENT',
						loc: { start: 1323, end: 1332 }
					},
					directives: [],
					loc: { start: 1323, end: 1332 }
				}
			],
			loc: { start: 1285, end: 1334 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Order',
				loc: { start: 1341, end: 1346 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'id',
						loc: { start: 1351, end: 1353 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 1355, end: 1357 }
							},
							loc: { start: 1355, end: 1357 }
						},
						loc: { start: 1355, end: 1358 }
					},
					directives: [],
					loc: { start: 1351, end: 1358 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'items',
						loc: { start: 1361, end: 1366 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 1367, end: 1371 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 1373, end: 1376 }
								},
								loc: { start: 1373, end: 1376 }
							},
							directives: [],
							loc: { start: 1367, end: 1376 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 1378, end: 1383 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 1385, end: 1388 }
								},
								loc: { start: 1385, end: 1388 }
							},
							directives: [],
							loc: { start: 1378, end: 1388 }
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
										value: 'OrderItem',
										loc: { start: 1392, end: 1401 }
									},
									loc: { start: 1392, end: 1401 }
								},
								loc: { start: 1392, end: 1402 }
							},
							loc: { start: 1391, end: 1403 }
						},
						loc: { start: 1391, end: 1404 }
					},
					directives: [],
					loc: { start: 1361, end: 1404 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'totalItems',
						loc: { start: 1407, end: 1417 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 1419, end: 1422 }
							},
							loc: { start: 1419, end: 1422 }
						},
						loc: { start: 1419, end: 1423 }
					},
					directives: [],
					loc: { start: 1407, end: 1423 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'status',
						loc: { start: 1426, end: 1432 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'OrderStatus',
								loc: { start: 1434, end: 1445 }
							},
							loc: { start: 1434, end: 1445 }
						},
						loc: { start: 1434, end: 1446 }
					},
					directives: [],
					loc: { start: 1426, end: 1446 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'createdAt',
						loc: { start: 1449, end: 1458 }
					},
					arguments: [],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'DateTime',
							loc: { start: 1460, end: 1468 }
						},
						loc: { start: 1460, end: 1468 }
					},
					directives: [],
					loc: { start: 1449, end: 1468 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'updatedAt',
						loc: { start: 1471, end: 1480 }
					},
					arguments: [],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'DateTime',
							loc: { start: 1482, end: 1490 }
						},
						loc: { start: 1482, end: 1490 }
					},
					directives: [],
					loc: { start: 1471, end: 1490 }
				}
			],
			loc: { start: 1336, end: 1492 }
		},
		{
			kind: 'ObjectTypeExtension',
			name: {
				kind: 'Name',
				value: 'Mutation',
				loc: { start: 1505, end: 1513 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'orderItemUpdate',
						loc: { start: 1518, end: 1533 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'id',
								loc: { start: 1534, end: 1536 }
							},
							type: {
								kind: 'NonNullType',
								type: {
									kind: 'NamedType',
									name: {
										kind: 'Name',
										value: 'ID',
										loc: { start: 1538, end: 1540 }
									},
									loc: { start: 1538, end: 1540 }
								},
								loc: { start: 1538, end: 1541 }
							},
							directives: [],
							loc: { start: 1534, end: 1541 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'quantity',
								loc: { start: 1543, end: 1551 }
							},
							type: {
								kind: 'NonNullType',
								type: {
									kind: 'NamedType',
									name: {
										kind: 'Name',
										value: 'Int',
										loc: { start: 1553, end: 1556 }
									},
									loc: { start: 1553, end: 1556 }
								},
								loc: { start: 1553, end: 1557 }
							},
							directives: [],
							loc: { start: 1543, end: 1557 }
						}
					],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'OrderItem',
							loc: { start: 1560, end: 1569 }
						},
						loc: { start: 1560, end: 1569 }
					},
					directives: [],
					loc: { start: 1518, end: 1569 }
				}
			],
			loc: { start: 1493, end: 1571 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'OrderItem',
				loc: { start: 1578, end: 1587 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'id',
						loc: { start: 1592, end: 1594 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 1596, end: 1598 }
							},
							loc: { start: 1596, end: 1598 }
						},
						loc: { start: 1596, end: 1599 }
					},
					directives: [],
					loc: { start: 1592, end: 1599 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'productId',
						loc: { start: 1602, end: 1611 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 1613, end: 1615 }
							},
							loc: { start: 1613, end: 1615 }
						},
						loc: { start: 1613, end: 1616 }
					},
					directives: [],
					loc: { start: 1602, end: 1616 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'variantId',
						loc: { start: 1619, end: 1628 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 1630, end: 1632 }
							},
							loc: { start: 1630, end: 1632 }
						},
						loc: { start: 1630, end: 1633 }
					},
					directives: [],
					loc: { start: 1619, end: 1633 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'quantity',
						loc: { start: 1636, end: 1644 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 1646, end: 1649 }
							},
							loc: { start: 1646, end: 1649 }
						},
						loc: { start: 1646, end: 1650 }
					},
					directives: [],
					loc: { start: 1636, end: 1650 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'price',
						loc: { start: 1653, end: 1658 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 1660, end: 1663 }
							},
							loc: { start: 1660, end: 1663 }
						},
						loc: { start: 1660, end: 1664 }
					},
					directives: [],
					loc: { start: 1653, end: 1664 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'name',
						loc: { start: 1667, end: 1671 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 1673, end: 1679 }
							},
							loc: { start: 1673, end: 1679 }
						},
						loc: { start: 1673, end: 1680 }
					},
					directives: [],
					loc: { start: 1667, end: 1680 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'variantName',
						loc: { start: 1683, end: 1694 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 1696, end: 1702 }
							},
							loc: { start: 1696, end: 1702 }
						},
						loc: { start: 1696, end: 1703 }
					},
					directives: [],
					loc: { start: 1683, end: 1703 }
				}
			],
			loc: { start: 1573, end: 1705 }
		},
		{
			kind: 'InputObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'CategorySomeInput',
				loc: { start: 1712, end: 1729 }
			},
			directives: [],
			fields: [
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'slug',
						loc: { start: 1734, end: 1738 }
					},
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'String',
							loc: { start: 1740, end: 1746 }
						},
						loc: { start: 1740, end: 1746 }
					},
					directives: [],
					loc: { start: 1734, end: 1746 }
				}
			],
			loc: { start: 1706, end: 1748 }
		},
		{
			kind: 'InputObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'CollectionSomeInput',
				loc: { start: 1756, end: 1775 }
			},
			directives: [],
			fields: [
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'slug',
						loc: { start: 1780, end: 1784 }
					},
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'String',
							loc: { start: 1786, end: 1792 }
						},
						loc: { start: 1786, end: 1792 }
					},
					directives: [],
					loc: { start: 1780, end: 1792 }
				}
			],
			loc: { start: 1750, end: 1794 }
		},
		{
			kind: 'InputObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'ProductWhereInput',
				loc: { start: 1802, end: 1819 }
			},
			directives: [],
			fields: [
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'nameContains',
						loc: { start: 1824, end: 1836 }
					},
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'String',
							loc: { start: 1838, end: 1844 }
						},
						loc: { start: 1838, end: 1844 }
					},
					directives: [],
					loc: { start: 1824, end: 1844 }
				},
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'categories_some',
						loc: { start: 1847, end: 1862 }
					},
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'CategorySomeInput',
							loc: { start: 1864, end: 1881 }
						},
						loc: { start: 1864, end: 1881 }
					},
					directives: [],
					loc: { start: 1847, end: 1881 }
				},
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'collections_some',
						loc: { start: 1884, end: 1900 }
					},
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'CollectionSomeInput',
							loc: { start: 1902, end: 1921 }
						},
						loc: { start: 1902, end: 1921 }
					},
					directives: [],
					loc: { start: 1884, end: 1921 }
				},
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'excludedIds',
						loc: { start: 1924, end: 1935 }
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
									loc: { start: 1938, end: 1940 }
								},
								loc: { start: 1938, end: 1940 }
							},
							loc: { start: 1938, end: 1941 }
						},
						loc: { start: 1937, end: 1942 }
					},
					directives: [],
					loc: { start: 1924, end: 1942 }
				},
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'id',
						loc: { start: 1945, end: 1947 }
					},
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'ID',
							loc: { start: 1949, end: 1951 }
						},
						loc: { start: 1949, end: 1951 }
					},
					directives: [],
					loc: { start: 1945, end: 1951 }
				}
			],
			loc: { start: 1796, end: 1953 }
		},
		{
			kind: 'InputObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'ProductRelatedWhereInput',
				loc: { start: 1961, end: 1985 }
			},
			directives: [],
			fields: [
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'id',
						loc: { start: 1990, end: 1992 }
					},
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'ID',
							loc: { start: 1994, end: 1996 }
						},
						loc: { start: 1994, end: 1996 }
					},
					directives: [],
					loc: { start: 1990, end: 1996 }
				}
			],
			loc: { start: 1955, end: 1998 }
		},
		{
			kind: 'EnumTypeDefinition',
			name: {
				kind: 'Name',
				value: 'SortOrder',
				loc: { start: 2005, end: 2014 }
			},
			directives: [],
			values: [
				{
					kind: 'EnumValueDefinition',
					name: {
						kind: 'Name',
						value: 'asc',
						loc: { start: 2019, end: 2022 }
					},
					directives: [],
					loc: { start: 2019, end: 2022 }
				},
				{
					kind: 'EnumValueDefinition',
					name: {
						kind: 'Name',
						value: 'desc',
						loc: { start: 2025, end: 2029 }
					},
					directives: [],
					loc: { start: 2025, end: 2029 }
				}
			],
			loc: { start: 2000, end: 2031 }
		},
		{
			kind: 'EnumTypeDefinition',
			name: {
				kind: 'Name',
				value: 'SortableField',
				loc: { start: 2038, end: 2051 }
			},
			directives: [],
			values: [
				{
					kind: 'EnumValueDefinition',
					name: {
						kind: 'Name',
						value: 'name',
						loc: { start: 2056, end: 2060 }
					},
					directives: [],
					loc: { start: 2056, end: 2060 }
				},
				{
					kind: 'EnumValueDefinition',
					name: {
						kind: 'Name',
						value: 'slug',
						loc: { start: 2063, end: 2067 }
					},
					directives: [],
					loc: { start: 2063, end: 2067 }
				},
				{
					kind: 'EnumValueDefinition',
					name: {
						kind: 'Name',
						value: 'price',
						loc: { start: 2070, end: 2075 }
					},
					directives: [],
					loc: { start: 2070, end: 2075 }
				},
				{
					kind: 'EnumValueDefinition',
					name: {
						kind: 'Name',
						value: 'averageRating',
						loc: { start: 2078, end: 2091 }
					},
					directives: [],
					loc: { start: 2078, end: 2091 }
				},
				{
					kind: 'EnumValueDefinition',
					name: {
						kind: 'Name',
						value: 'createdAt',
						loc: { start: 2094, end: 2103 }
					},
					directives: [],
					loc: { start: 2094, end: 2103 }
				}
			],
			loc: { start: 2033, end: 2105 }
		},
		{
			kind: 'InputObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'OrderByInput',
				loc: { start: 2113, end: 2125 }
			},
			directives: [],
			fields: [
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'field',
						loc: { start: 2130, end: 2135 }
					},
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'SortableField',
								loc: { start: 2137, end: 2150 }
							},
							loc: { start: 2137, end: 2150 }
						},
						loc: { start: 2137, end: 2151 }
					},
					directives: [],
					loc: { start: 2130, end: 2151 }
				},
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'order',
						loc: { start: 2154, end: 2159 }
					},
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'SortOrder',
								loc: { start: 2161, end: 2170 }
							},
							loc: { start: 2161, end: 2170 }
						},
						loc: { start: 2161, end: 2171 }
					},
					directives: [],
					loc: { start: 2154, end: 2171 }
				}
			],
			loc: { start: 2107, end: 2173 }
		},
		{
			kind: 'ObjectTypeExtension',
			name: {
				kind: 'Name',
				value: 'Query',
				loc: { start: 2187, end: 2192 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'product',
						loc: { start: 2197, end: 2204 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'id',
								loc: { start: 2205, end: 2207 }
							},
							type: {
								kind: 'NonNullType',
								type: {
									kind: 'NamedType',
									name: {
										kind: 'Name',
										value: 'ID',
										loc: { start: 2209, end: 2211 }
									},
									loc: { start: 2209, end: 2211 }
								},
								loc: { start: 2209, end: 2212 }
							},
							directives: [],
							loc: { start: 2205, end: 2212 }
						}
					],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'Product',
							loc: { start: 2215, end: 2222 }
						},
						loc: { start: 2215, end: 2222 }
					},
					directives: [],
					loc: { start: 2197, end: 2222 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'products',
						loc: { start: 2225, end: 2233 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'where',
								loc: { start: 2234, end: 2239 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'ProductWhereInput',
									loc: { start: 2241, end: 2258 }
								},
								loc: { start: 2241, end: 2258 }
							},
							directives: [],
							loc: { start: 2234, end: 2258 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 2260, end: 2264 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2266, end: 2269 }
								},
								loc: { start: 2266, end: 2269 }
							},
							directives: [],
							loc: { start: 2260, end: 2269 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'orderBy',
								loc: { start: 2271, end: 2278 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'OrderByInput',
									loc: { start: 2280, end: 2292 }
								},
								loc: { start: 2280, end: 2292 }
							},
							directives: [],
							loc: { start: 2271, end: 2292 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 2294, end: 2299 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2301, end: 2304 }
								},
								loc: { start: 2301, end: 2304 }
							},
							directives: [],
							loc: { start: 2294, end: 2304 }
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
										loc: { start: 2308, end: 2315 }
									},
									loc: { start: 2308, end: 2315 }
								},
								loc: { start: 2308, end: 2316 }
							},
							loc: { start: 2307, end: 2317 }
						},
						loc: { start: 2307, end: 2318 }
					},
					directives: [],
					loc: { start: 2225, end: 2318 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'productsRelated',
						loc: { start: 2321, end: 2336 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'where',
								loc: { start: 2337, end: 2342 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'ProductRelatedWhereInput',
									loc: { start: 2344, end: 2368 }
								},
								loc: { start: 2344, end: 2368 }
							},
							directives: [],
							loc: { start: 2337, end: 2368 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 2370, end: 2374 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2376, end: 2379 }
								},
								loc: { start: 2376, end: 2379 }
							},
							directives: [],
							loc: { start: 2370, end: 2379 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'orderBy',
								loc: { start: 2381, end: 2388 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'OrderByInput',
									loc: { start: 2390, end: 2402 }
								},
								loc: { start: 2390, end: 2402 }
							},
							directives: [],
							loc: { start: 2381, end: 2402 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 2404, end: 2409 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2411, end: 2414 }
								},
								loc: { start: 2411, end: 2414 }
							},
							directives: [],
							loc: { start: 2404, end: 2414 }
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
										loc: { start: 2418, end: 2425 }
									},
									loc: { start: 2418, end: 2425 }
								},
								loc: { start: 2418, end: 2426 }
							},
							loc: { start: 2417, end: 2427 }
						},
						loc: { start: 2417, end: 2428 }
					},
					directives: [],
					loc: { start: 2321, end: 2428 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'productsConnection',
						loc: { start: 2431, end: 2449 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'where',
								loc: { start: 2450, end: 2455 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'ProductWhereInput',
									loc: { start: 2457, end: 2474 }
								},
								loc: { start: 2457, end: 2474 }
							},
							directives: [],
							loc: { start: 2450, end: 2474 }
						}
					],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Connection',
								loc: { start: 2477, end: 2487 }
							},
							loc: { start: 2477, end: 2487 }
						},
						loc: { start: 2477, end: 2488 }
					},
					directives: [],
					loc: { start: 2431, end: 2488 }
				}
			],
			loc: { start: 2175, end: 2490 }
		},
		{
			kind: 'ObjectTypeExtension',
			name: {
				kind: 'Name',
				value: 'Mutation',
				loc: { start: 2504, end: 2512 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'productCalculateAndUpdateAverageRating',
						loc: { start: 2517, end: 2555 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'id',
								loc: { start: 2556, end: 2558 }
							},
							type: {
								kind: 'NonNullType',
								type: {
									kind: 'NamedType',
									name: {
										kind: 'Name',
										value: 'ID',
										loc: { start: 2560, end: 2562 }
									},
									loc: { start: 2560, end: 2562 }
								},
								loc: { start: 2560, end: 2563 }
							},
							directives: [],
							loc: { start: 2556, end: 2563 }
						}
					],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'Product',
							loc: { start: 2566, end: 2573 }
						},
						loc: { start: 2566, end: 2573 }
					},
					directives: [],
					loc: { start: 2517, end: 2573 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'productsCalculateAndUpdateAverageRating',
						loc: { start: 2576, end: 2615 }
					},
					arguments: [],
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
										loc: { start: 2618, end: 2625 }
									},
									loc: { start: 2618, end: 2625 }
								},
								loc: { start: 2618, end: 2626 }
							},
							loc: { start: 2617, end: 2627 }
						},
						loc: { start: 2617, end: 2628 }
					},
					directives: [],
					loc: { start: 2576, end: 2628 }
				}
			],
			loc: { start: 2492, end: 2630 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Product',
				loc: { start: 2637, end: 2644 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'id',
						loc: { start: 2649, end: 2651 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 2653, end: 2655 }
							},
							loc: { start: 2653, end: 2655 }
						},
						loc: { start: 2653, end: 2656 }
					},
					directives: [],
					loc: { start: 2649, end: 2656 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'name',
						loc: { start: 2659, end: 2663 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 2665, end: 2671 }
							},
							loc: { start: 2665, end: 2671 }
						},
						loc: { start: 2665, end: 2672 }
					},
					directives: [],
					loc: { start: 2659, end: 2672 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'slug',
						loc: { start: 2675, end: 2679 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 2681, end: 2687 }
							},
							loc: { start: 2681, end: 2687 }
						},
						loc: { start: 2681, end: 2688 }
					},
					directives: [],
					loc: { start: 2675, end: 2688 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'description',
						loc: { start: 2691, end: 2702 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 2704, end: 2710 }
							},
							loc: { start: 2704, end: 2710 }
						},
						loc: { start: 2704, end: 2711 }
					},
					directives: [],
					loc: { start: 2691, end: 2711 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'price',
						loc: { start: 2714, end: 2719 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 2721, end: 2724 }
							},
							loc: { start: 2721, end: 2724 }
						},
						loc: { start: 2721, end: 2725 }
					},
					directives: [],
					loc: { start: 2714, end: 2725 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'averageRating',
						loc: { start: 2728, end: 2741 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Float',
								loc: { start: 2743, end: 2748 }
							},
							loc: { start: 2743, end: 2748 }
						},
						loc: { start: 2743, end: 2749 }
					},
					directives: [],
					loc: { start: 2728, end: 2749 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'createdAt',
						loc: { start: 2752, end: 2761 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'DateTime',
								loc: { start: 2763, end: 2771 }
							},
							loc: { start: 2763, end: 2771 }
						},
						loc: { start: 2763, end: 2772 }
					},
					directives: [],
					loc: { start: 2752, end: 2772 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'ratingsCount',
						loc: { start: 2775, end: 2787 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 2789, end: 2792 }
							},
							loc: { start: 2789, end: 2792 }
						},
						loc: { start: 2789, end: 2793 }
					},
					directives: [],
					loc: { start: 2775, end: 2793 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'categories',
						loc: { start: 2796, end: 2806 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 2807, end: 2811 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2813, end: 2816 }
								},
								loc: { start: 2813, end: 2816 }
							},
							directives: [],
							loc: { start: 2807, end: 2816 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 2818, end: 2823 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2825, end: 2828 }
								},
								loc: { start: 2825, end: 2828 }
							},
							directives: [],
							loc: { start: 2818, end: 2828 }
						}
					],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'ListType',
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Category',
									loc: { start: 2832, end: 2840 }
								},
								loc: { start: 2832, end: 2840 }
							},
							loc: { start: 2831, end: 2841 }
						},
						loc: { start: 2831, end: 2842 }
					},
					directives: [],
					loc: { start: 2796, end: 2842 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'collections',
						loc: { start: 2845, end: 2856 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 2857, end: 2861 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2863, end: 2866 }
								},
								loc: { start: 2863, end: 2866 }
							},
							directives: [],
							loc: { start: 2857, end: 2866 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 2868, end: 2873 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2875, end: 2878 }
								},
								loc: { start: 2875, end: 2878 }
							},
							directives: [],
							loc: { start: 2868, end: 2878 }
						}
					],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'ListType',
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Collection',
									loc: { start: 2882, end: 2892 }
								},
								loc: { start: 2882, end: 2892 }
							},
							loc: { start: 2881, end: 2893 }
						},
						loc: { start: 2881, end: 2894 }
					},
					directives: [],
					loc: { start: 2845, end: 2894 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'images',
						loc: { start: 2897, end: 2903 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 2904, end: 2908 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2910, end: 2913 }
								},
								loc: { start: 2910, end: 2913 }
							},
							directives: [],
							loc: { start: 2904, end: 2913 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 2915, end: 2920 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2922, end: 2925 }
								},
								loc: { start: 2922, end: 2925 }
							},
							directives: [],
							loc: { start: 2915, end: 2925 }
						}
					],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'ListType',
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Image',
									loc: { start: 2929, end: 2934 }
								},
								loc: { start: 2929, end: 2934 }
							},
							loc: { start: 2928, end: 2935 }
						},
						loc: { start: 2928, end: 2936 }
					},
					directives: [],
					loc: { start: 2897, end: 2936 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'variants',
						loc: { start: 2939, end: 2947 }
					},
					arguments: [],
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
										value: 'Variant',
										loc: { start: 2950, end: 2957 }
									},
									loc: { start: 2950, end: 2957 }
								},
								loc: { start: 2950, end: 2958 }
							},
							loc: { start: 2949, end: 2959 }
						},
						loc: { start: 2949, end: 2960 }
					},
					directives: [],
					loc: { start: 2939, end: 2960 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'ratings',
						loc: { start: 2963, end: 2970 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 2971, end: 2975 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2977, end: 2980 }
								},
								loc: { start: 2977, end: 2980 }
							},
							directives: [],
							loc: { start: 2971, end: 2980 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 2982, end: 2987 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2989, end: 2992 }
								},
								loc: { start: 2989, end: 2992 }
							},
							directives: [],
							loc: { start: 2982, end: 2992 }
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
										value: 'Rating',
										loc: { start: 2996, end: 3002 }
									},
									loc: { start: 2996, end: 3002 }
								},
								loc: { start: 2996, end: 3003 }
							},
							loc: { start: 2995, end: 3004 }
						},
						loc: { start: 2995, end: 3005 }
					},
					directives: [],
					loc: { start: 2963, end: 3005 }
				}
			],
			loc: { start: 2632, end: 3007 }
		},
		{
			kind: 'InputObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'RatingInput',
				loc: { start: 3014, end: 3025 }
			},
			directives: [],
			fields: [
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'comment',
						loc: { start: 3030, end: 3037 }
					},
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 3039, end: 3045 }
							},
							loc: { start: 3039, end: 3045 }
						},
						loc: { start: 3039, end: 3046 }
					},
					directives: [],
					loc: { start: 3030, end: 3046 }
				},
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'rating',
						loc: { start: 3049, end: 3055 }
					},
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 3057, end: 3060 }
							},
							loc: { start: 3057, end: 3060 }
						},
						loc: { start: 3057, end: 3061 }
					},
					directives: [],
					loc: { start: 3049, end: 3061 }
				},
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'userName',
						loc: { start: 3064, end: 3072 }
					},
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 3074, end: 3080 }
							},
							loc: { start: 3074, end: 3080 }
						},
						loc: { start: 3074, end: 3081 }
					},
					directives: [],
					loc: { start: 3064, end: 3081 }
				},
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'title',
						loc: { start: 3084, end: 3089 }
					},
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 3091, end: 3097 }
							},
							loc: { start: 3091, end: 3097 }
						},
						loc: { start: 3091, end: 3098 }
					},
					directives: [],
					loc: { start: 3084, end: 3098 }
				},
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'email',
						loc: { start: 3101, end: 3106 }
					},
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 3108, end: 3114 }
							},
							loc: { start: 3108, end: 3114 }
						},
						loc: { start: 3108, end: 3115 }
					},
					directives: [],
					loc: { start: 3101, end: 3115 }
				}
			],
			loc: { start: 3008, end: 3117 }
		},
		{
			kind: 'ObjectTypeExtension',
			name: {
				kind: 'Name',
				value: 'Mutation',
				loc: { start: 3131, end: 3139 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'ratingCreate',
						loc: { start: 3144, end: 3156 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'productId',
								loc: { start: 3157, end: 3166 }
							},
							type: {
								kind: 'NonNullType',
								type: {
									kind: 'NamedType',
									name: {
										kind: 'Name',
										value: 'ID',
										loc: { start: 3168, end: 3170 }
									},
									loc: { start: 3168, end: 3170 }
								},
								loc: { start: 3168, end: 3171 }
							},
							directives: [],
							loc: { start: 3157, end: 3171 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'ratingInput',
								loc: { start: 3173, end: 3184 }
							},
							type: {
								kind: 'NonNullType',
								type: {
									kind: 'NamedType',
									name: {
										kind: 'Name',
										value: 'RatingInput',
										loc: { start: 3186, end: 3197 }
									},
									loc: { start: 3186, end: 3197 }
								},
								loc: { start: 3186, end: 3198 }
							},
							directives: [],
							loc: { start: 3173, end: 3198 }
						}
					],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Rating',
								loc: { start: 3201, end: 3207 }
							},
							loc: { start: 3201, end: 3207 }
						},
						loc: { start: 3201, end: 3208 }
					},
					directives: [],
					loc: { start: 3144, end: 3208 }
				}
			],
			loc: { start: 3119, end: 3210 }
		},
		{
			kind: 'InputObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'RatingWhereInput',
				loc: { start: 3218, end: 3234 }
			},
			directives: [],
			fields: [
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'productId',
						loc: { start: 3239, end: 3248 }
					},
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'ID',
							loc: { start: 3250, end: 3252 }
						},
						loc: { start: 3250, end: 3252 }
					},
					directives: [],
					loc: { start: 3239, end: 3252 }
				}
			],
			loc: { start: 3212, end: 3254 }
		},
		{
			kind: 'ObjectTypeExtension',
			name: {
				kind: 'Name',
				value: 'Query',
				loc: { start: 3268, end: 3273 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'ratingConnection',
						loc: { start: 3278, end: 3294 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'where',
								loc: { start: 3295, end: 3300 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'RatingWhereInput',
									loc: { start: 3302, end: 3318 }
								},
								loc: { start: 3302, end: 3318 }
							},
							directives: [],
							loc: { start: 3295, end: 3318 }
						}
					],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Connection',
								loc: { start: 3321, end: 3331 }
							},
							loc: { start: 3321, end: 3331 }
						},
						loc: { start: 3321, end: 3332 }
					},
					directives: [],
					loc: { start: 3278, end: 3332 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'ratings',
						loc: { start: 3335, end: 3342 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 3343, end: 3348 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 3350, end: 3353 }
								},
								loc: { start: 3350, end: 3353 }
							},
							directives: [],
							loc: { start: 3343, end: 3353 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 3355, end: 3359 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 3361, end: 3364 }
								},
								loc: { start: 3361, end: 3364 }
							},
							directives: [],
							loc: { start: 3355, end: 3364 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'where',
								loc: { start: 3366, end: 3371 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'RatingWhereInput',
									loc: { start: 3373, end: 3389 }
								},
								loc: { start: 3373, end: 3389 }
							},
							directives: [],
							loc: { start: 3366, end: 3389 }
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
										value: 'Rating',
										loc: { start: 3393, end: 3399 }
									},
									loc: { start: 3393, end: 3399 }
								},
								loc: { start: 3393, end: 3400 }
							},
							loc: { start: 3392, end: 3401 }
						},
						loc: { start: 3392, end: 3402 }
					},
					directives: [],
					loc: { start: 3335, end: 3402 }
				}
			],
			loc: { start: 3256, end: 3404 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Rating',
				loc: { start: 3411, end: 3417 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'id',
						loc: { start: 3422, end: 3424 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 3426, end: 3428 }
							},
							loc: { start: 3426, end: 3428 }
						},
						loc: { start: 3426, end: 3429 }
					},
					directives: [],
					loc: { start: 3422, end: 3429 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'comment',
						loc: { start: 3432, end: 3439 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 3441, end: 3447 }
							},
							loc: { start: 3441, end: 3447 }
						},
						loc: { start: 3441, end: 3448 }
					},
					directives: [],
					loc: { start: 3432, end: 3448 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'email',
						loc: { start: 3451, end: 3456 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 3458, end: 3464 }
							},
							loc: { start: 3458, end: 3464 }
						},
						loc: { start: 3458, end: 3465 }
					},
					directives: [],
					loc: { start: 3451, end: 3465 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'userName',
						loc: { start: 3468, end: 3476 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 3478, end: 3484 }
							},
							loc: { start: 3478, end: 3484 }
						},
						loc: { start: 3478, end: 3485 }
					},
					directives: [],
					loc: { start: 3468, end: 3485 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'title',
						loc: { start: 3488, end: 3493 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 3495, end: 3501 }
							},
							loc: { start: 3495, end: 3501 }
						},
						loc: { start: 3495, end: 3502 }
					},
					directives: [],
					loc: { start: 3488, end: 3502 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'rating',
						loc: { start: 3505, end: 3511 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 3513, end: 3516 }
							},
							loc: { start: 3513, end: 3516 }
						},
						loc: { start: 3513, end: 3517 }
					},
					directives: [],
					loc: { start: 3505, end: 3517 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'createdAt',
						loc: { start: 3520, end: 3529 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'DateTime',
								loc: { start: 3531, end: 3539 }
							},
							loc: { start: 3531, end: 3539 }
						},
						loc: { start: 3531, end: 3540 }
					},
					directives: [],
					loc: { start: 3520, end: 3540 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'updatedAt',
						loc: { start: 3543, end: 3552 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'DateTime',
								loc: { start: 3554, end: 3562 }
							},
							loc: { start: 3554, end: 3562 }
						},
						loc: { start: 3554, end: 3563 }
					},
					directives: [],
					loc: { start: 3543, end: 3563 }
				}
			],
			loc: { start: 3406, end: 3565 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Query',
				loc: { start: 3571, end: 3576 }
			},
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 3566, end: 3576 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Mutation',
				loc: { start: 3583, end: 3591 }
			},
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 3578, end: 3591 }
		},
		{
			kind: 'ScalarTypeDefinition',
			name: {
				kind: 'Name',
				value: 'DateTime',
				loc: { start: 3600, end: 3608 }
			},
			directives: [],
			loc: { start: 3593, end: 3608 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Aggregate',
				loc: { start: 3615, end: 3624 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'count',
						loc: { start: 3629, end: 3634 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 3636, end: 3639 }
							},
							loc: { start: 3636, end: 3639 }
						},
						loc: { start: 3636, end: 3640 }
					},
					directives: [],
					loc: { start: 3629, end: 3640 }
				}
			],
			loc: { start: 3610, end: 3642 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Connection',
				loc: { start: 3649, end: 3659 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'aggregate',
						loc: { start: 3664, end: 3673 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Aggregate',
								loc: { start: 3675, end: 3684 }
							},
							loc: { start: 3675, end: 3684 }
						},
						loc: { start: 3675, end: 3685 }
					},
					directives: [],
					loc: { start: 3664, end: 3685 }
				}
			],
			loc: { start: 3644, end: 3687 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Variant',
				loc: { start: 3693, end: 3700 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'id',
						loc: { start: 3705, end: 3707 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 3709, end: 3711 }
							},
							loc: { start: 3709, end: 3711 }
						},
						loc: { start: 3709, end: 3712 }
					},
					directives: [],
					loc: { start: 3705, end: 3712 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'name',
						loc: { start: 3715, end: 3719 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 3721, end: 3727 }
							},
							loc: { start: 3721, end: 3727 }
						},
						loc: { start: 3721, end: 3728 }
					},
					directives: [],
					loc: { start: 3715, end: 3728 }
				}
			],
			loc: { start: 3688, end: 3730 }
		}
	],
	loc: { start: 0, end: 3731 }
} as unknown as DocumentNode;
