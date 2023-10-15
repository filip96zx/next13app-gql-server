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
						value: 'productName',
						loc: { start: 1990, end: 2001 }
					},
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'String',
							loc: { start: 2003, end: 2009 }
						},
						loc: { start: 2003, end: 2009 }
					},
					directives: [],
					loc: { start: 1990, end: 2009 }
				}
			],
			loc: { start: 1955, end: 2011 }
		},
		{
			kind: 'EnumTypeDefinition',
			name: {
				kind: 'Name',
				value: 'SortOrder',
				loc: { start: 2018, end: 2027 }
			},
			directives: [],
			values: [
				{
					kind: 'EnumValueDefinition',
					name: {
						kind: 'Name',
						value: 'asc',
						loc: { start: 2032, end: 2035 }
					},
					directives: [],
					loc: { start: 2032, end: 2035 }
				},
				{
					kind: 'EnumValueDefinition',
					name: {
						kind: 'Name',
						value: 'desc',
						loc: { start: 2038, end: 2042 }
					},
					directives: [],
					loc: { start: 2038, end: 2042 }
				}
			],
			loc: { start: 2013, end: 2044 }
		},
		{
			kind: 'EnumTypeDefinition',
			name: {
				kind: 'Name',
				value: 'SortableField',
				loc: { start: 2051, end: 2064 }
			},
			directives: [],
			values: [
				{
					kind: 'EnumValueDefinition',
					name: {
						kind: 'Name',
						value: 'name',
						loc: { start: 2069, end: 2073 }
					},
					directives: [],
					loc: { start: 2069, end: 2073 }
				},
				{
					kind: 'EnumValueDefinition',
					name: {
						kind: 'Name',
						value: 'slug',
						loc: { start: 2076, end: 2080 }
					},
					directives: [],
					loc: { start: 2076, end: 2080 }
				},
				{
					kind: 'EnumValueDefinition',
					name: {
						kind: 'Name',
						value: 'price',
						loc: { start: 2083, end: 2088 }
					},
					directives: [],
					loc: { start: 2083, end: 2088 }
				},
				{
					kind: 'EnumValueDefinition',
					name: {
						kind: 'Name',
						value: 'averageRating',
						loc: { start: 2091, end: 2104 }
					},
					directives: [],
					loc: { start: 2091, end: 2104 }
				},
				{
					kind: 'EnumValueDefinition',
					name: {
						kind: 'Name',
						value: 'createdAt',
						loc: { start: 2107, end: 2116 }
					},
					directives: [],
					loc: { start: 2107, end: 2116 }
				}
			],
			loc: { start: 2046, end: 2118 }
		},
		{
			kind: 'InputObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'OrderByInput',
				loc: { start: 2126, end: 2138 }
			},
			directives: [],
			fields: [
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'field',
						loc: { start: 2143, end: 2148 }
					},
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'SortableField',
								loc: { start: 2150, end: 2163 }
							},
							loc: { start: 2150, end: 2163 }
						},
						loc: { start: 2150, end: 2164 }
					},
					directives: [],
					loc: { start: 2143, end: 2164 }
				},
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'order',
						loc: { start: 2167, end: 2172 }
					},
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'SortOrder',
								loc: { start: 2174, end: 2183 }
							},
							loc: { start: 2174, end: 2183 }
						},
						loc: { start: 2174, end: 2184 }
					},
					directives: [],
					loc: { start: 2167, end: 2184 }
				}
			],
			loc: { start: 2120, end: 2186 }
		},
		{
			kind: 'ObjectTypeExtension',
			name: {
				kind: 'Name',
				value: 'Query',
				loc: { start: 2200, end: 2205 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'product',
						loc: { start: 2210, end: 2217 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'id',
								loc: { start: 2218, end: 2220 }
							},
							type: {
								kind: 'NonNullType',
								type: {
									kind: 'NamedType',
									name: {
										kind: 'Name',
										value: 'ID',
										loc: { start: 2222, end: 2224 }
									},
									loc: { start: 2222, end: 2224 }
								},
								loc: { start: 2222, end: 2225 }
							},
							directives: [],
							loc: { start: 2218, end: 2225 }
						}
					],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'Product',
							loc: { start: 2228, end: 2235 }
						},
						loc: { start: 2228, end: 2235 }
					},
					directives: [],
					loc: { start: 2210, end: 2235 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'products',
						loc: { start: 2238, end: 2246 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'where',
								loc: { start: 2247, end: 2252 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'ProductWhereInput',
									loc: { start: 2254, end: 2271 }
								},
								loc: { start: 2254, end: 2271 }
							},
							directives: [],
							loc: { start: 2247, end: 2271 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 2273, end: 2277 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2279, end: 2282 }
								},
								loc: { start: 2279, end: 2282 }
							},
							directives: [],
							loc: { start: 2273, end: 2282 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'orderBy',
								loc: { start: 2284, end: 2291 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'OrderByInput',
									loc: { start: 2293, end: 2305 }
								},
								loc: { start: 2293, end: 2305 }
							},
							directives: [],
							loc: { start: 2284, end: 2305 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 2307, end: 2312 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2314, end: 2317 }
								},
								loc: { start: 2314, end: 2317 }
							},
							directives: [],
							loc: { start: 2307, end: 2317 }
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
										loc: { start: 2321, end: 2328 }
									},
									loc: { start: 2321, end: 2328 }
								},
								loc: { start: 2321, end: 2329 }
							},
							loc: { start: 2320, end: 2330 }
						},
						loc: { start: 2320, end: 2331 }
					},
					directives: [],
					loc: { start: 2238, end: 2331 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'productsRelated',
						loc: { start: 2334, end: 2349 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'where',
								loc: { start: 2350, end: 2355 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'ProductRelatedWhereInput',
									loc: { start: 2357, end: 2381 }
								},
								loc: { start: 2357, end: 2381 }
							},
							directives: [],
							loc: { start: 2350, end: 2381 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 2383, end: 2387 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2389, end: 2392 }
								},
								loc: { start: 2389, end: 2392 }
							},
							directives: [],
							loc: { start: 2383, end: 2392 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 2394, end: 2399 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2401, end: 2404 }
								},
								loc: { start: 2401, end: 2404 }
							},
							directives: [],
							loc: { start: 2394, end: 2404 }
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
										loc: { start: 2408, end: 2415 }
									},
									loc: { start: 2408, end: 2415 }
								},
								loc: { start: 2408, end: 2416 }
							},
							loc: { start: 2407, end: 2417 }
						},
						loc: { start: 2407, end: 2418 }
					},
					directives: [],
					loc: { start: 2334, end: 2418 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'productsConnection',
						loc: { start: 2421, end: 2439 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'where',
								loc: { start: 2440, end: 2445 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'ProductWhereInput',
									loc: { start: 2447, end: 2464 }
								},
								loc: { start: 2447, end: 2464 }
							},
							directives: [],
							loc: { start: 2440, end: 2464 }
						}
					],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Connection',
								loc: { start: 2467, end: 2477 }
							},
							loc: { start: 2467, end: 2477 }
						},
						loc: { start: 2467, end: 2478 }
					},
					directives: [],
					loc: { start: 2421, end: 2478 }
				}
			],
			loc: { start: 2188, end: 2480 }
		},
		{
			kind: 'ObjectTypeExtension',
			name: {
				kind: 'Name',
				value: 'Mutation',
				loc: { start: 2494, end: 2502 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'productCalculateAndUpdateAverageRating',
						loc: { start: 2507, end: 2545 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'id',
								loc: { start: 2546, end: 2548 }
							},
							type: {
								kind: 'NonNullType',
								type: {
									kind: 'NamedType',
									name: {
										kind: 'Name',
										value: 'ID',
										loc: { start: 2550, end: 2552 }
									},
									loc: { start: 2550, end: 2552 }
								},
								loc: { start: 2550, end: 2553 }
							},
							directives: [],
							loc: { start: 2546, end: 2553 }
						}
					],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'Product',
							loc: { start: 2556, end: 2563 }
						},
						loc: { start: 2556, end: 2563 }
					},
					directives: [],
					loc: { start: 2507, end: 2563 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'productsCalculateAndUpdateAverageRating',
						loc: { start: 2566, end: 2605 }
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
										loc: { start: 2608, end: 2615 }
									},
									loc: { start: 2608, end: 2615 }
								},
								loc: { start: 2608, end: 2616 }
							},
							loc: { start: 2607, end: 2617 }
						},
						loc: { start: 2607, end: 2618 }
					},
					directives: [],
					loc: { start: 2566, end: 2618 }
				}
			],
			loc: { start: 2482, end: 2620 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Product',
				loc: { start: 2627, end: 2634 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'id',
						loc: { start: 2639, end: 2641 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 2643, end: 2645 }
							},
							loc: { start: 2643, end: 2645 }
						},
						loc: { start: 2643, end: 2646 }
					},
					directives: [],
					loc: { start: 2639, end: 2646 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'name',
						loc: { start: 2649, end: 2653 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 2655, end: 2661 }
							},
							loc: { start: 2655, end: 2661 }
						},
						loc: { start: 2655, end: 2662 }
					},
					directives: [],
					loc: { start: 2649, end: 2662 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'slug',
						loc: { start: 2665, end: 2669 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 2671, end: 2677 }
							},
							loc: { start: 2671, end: 2677 }
						},
						loc: { start: 2671, end: 2678 }
					},
					directives: [],
					loc: { start: 2665, end: 2678 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'description',
						loc: { start: 2681, end: 2692 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 2694, end: 2700 }
							},
							loc: { start: 2694, end: 2700 }
						},
						loc: { start: 2694, end: 2701 }
					},
					directives: [],
					loc: { start: 2681, end: 2701 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'price',
						loc: { start: 2704, end: 2709 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 2711, end: 2714 }
							},
							loc: { start: 2711, end: 2714 }
						},
						loc: { start: 2711, end: 2715 }
					},
					directives: [],
					loc: { start: 2704, end: 2715 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'averageRating',
						loc: { start: 2718, end: 2731 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Float',
								loc: { start: 2733, end: 2738 }
							},
							loc: { start: 2733, end: 2738 }
						},
						loc: { start: 2733, end: 2739 }
					},
					directives: [],
					loc: { start: 2718, end: 2739 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'createdAt',
						loc: { start: 2742, end: 2751 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'DateTime',
								loc: { start: 2753, end: 2761 }
							},
							loc: { start: 2753, end: 2761 }
						},
						loc: { start: 2753, end: 2762 }
					},
					directives: [],
					loc: { start: 2742, end: 2762 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'ratingsCount',
						loc: { start: 2765, end: 2777 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 2779, end: 2782 }
							},
							loc: { start: 2779, end: 2782 }
						},
						loc: { start: 2779, end: 2783 }
					},
					directives: [],
					loc: { start: 2765, end: 2783 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'categories',
						loc: { start: 2786, end: 2796 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 2797, end: 2801 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2803, end: 2806 }
								},
								loc: { start: 2803, end: 2806 }
							},
							directives: [],
							loc: { start: 2797, end: 2806 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 2808, end: 2813 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2815, end: 2818 }
								},
								loc: { start: 2815, end: 2818 }
							},
							directives: [],
							loc: { start: 2808, end: 2818 }
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
									loc: { start: 2822, end: 2830 }
								},
								loc: { start: 2822, end: 2830 }
							},
							loc: { start: 2821, end: 2831 }
						},
						loc: { start: 2821, end: 2832 }
					},
					directives: [],
					loc: { start: 2786, end: 2832 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'collections',
						loc: { start: 2835, end: 2846 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 2847, end: 2851 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2853, end: 2856 }
								},
								loc: { start: 2853, end: 2856 }
							},
							directives: [],
							loc: { start: 2847, end: 2856 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 2858, end: 2863 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2865, end: 2868 }
								},
								loc: { start: 2865, end: 2868 }
							},
							directives: [],
							loc: { start: 2858, end: 2868 }
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
									loc: { start: 2872, end: 2882 }
								},
								loc: { start: 2872, end: 2882 }
							},
							loc: { start: 2871, end: 2883 }
						},
						loc: { start: 2871, end: 2884 }
					},
					directives: [],
					loc: { start: 2835, end: 2884 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'images',
						loc: { start: 2887, end: 2893 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 2894, end: 2898 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2900, end: 2903 }
								},
								loc: { start: 2900, end: 2903 }
							},
							directives: [],
							loc: { start: 2894, end: 2903 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 2905, end: 2910 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2912, end: 2915 }
								},
								loc: { start: 2912, end: 2915 }
							},
							directives: [],
							loc: { start: 2905, end: 2915 }
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
									loc: { start: 2919, end: 2924 }
								},
								loc: { start: 2919, end: 2924 }
							},
							loc: { start: 2918, end: 2925 }
						},
						loc: { start: 2918, end: 2926 }
					},
					directives: [],
					loc: { start: 2887, end: 2926 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'variants',
						loc: { start: 2929, end: 2937 }
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
										loc: { start: 2940, end: 2947 }
									},
									loc: { start: 2940, end: 2947 }
								},
								loc: { start: 2940, end: 2948 }
							},
							loc: { start: 2939, end: 2949 }
						},
						loc: { start: 2939, end: 2950 }
					},
					directives: [],
					loc: { start: 2929, end: 2950 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'ratings',
						loc: { start: 2953, end: 2960 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 2961, end: 2965 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2967, end: 2970 }
								},
								loc: { start: 2967, end: 2970 }
							},
							directives: [],
							loc: { start: 2961, end: 2970 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 2972, end: 2977 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2979, end: 2982 }
								},
								loc: { start: 2979, end: 2982 }
							},
							directives: [],
							loc: { start: 2972, end: 2982 }
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
										loc: { start: 2986, end: 2992 }
									},
									loc: { start: 2986, end: 2992 }
								},
								loc: { start: 2986, end: 2993 }
							},
							loc: { start: 2985, end: 2994 }
						},
						loc: { start: 2985, end: 2995 }
					},
					directives: [],
					loc: { start: 2953, end: 2995 }
				}
			],
			loc: { start: 2622, end: 2997 }
		},
		{
			kind: 'InputObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'RatingInput',
				loc: { start: 3004, end: 3015 }
			},
			directives: [],
			fields: [
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'comment',
						loc: { start: 3020, end: 3027 }
					},
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 3029, end: 3035 }
							},
							loc: { start: 3029, end: 3035 }
						},
						loc: { start: 3029, end: 3036 }
					},
					directives: [],
					loc: { start: 3020, end: 3036 }
				},
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'rating',
						loc: { start: 3039, end: 3045 }
					},
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 3047, end: 3050 }
							},
							loc: { start: 3047, end: 3050 }
						},
						loc: { start: 3047, end: 3051 }
					},
					directives: [],
					loc: { start: 3039, end: 3051 }
				},
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'userName',
						loc: { start: 3054, end: 3062 }
					},
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 3064, end: 3070 }
							},
							loc: { start: 3064, end: 3070 }
						},
						loc: { start: 3064, end: 3071 }
					},
					directives: [],
					loc: { start: 3054, end: 3071 }
				},
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'title',
						loc: { start: 3074, end: 3079 }
					},
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 3081, end: 3087 }
							},
							loc: { start: 3081, end: 3087 }
						},
						loc: { start: 3081, end: 3088 }
					},
					directives: [],
					loc: { start: 3074, end: 3088 }
				},
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'email',
						loc: { start: 3091, end: 3096 }
					},
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 3098, end: 3104 }
							},
							loc: { start: 3098, end: 3104 }
						},
						loc: { start: 3098, end: 3105 }
					},
					directives: [],
					loc: { start: 3091, end: 3105 }
				}
			],
			loc: { start: 2998, end: 3107 }
		},
		{
			kind: 'ObjectTypeExtension',
			name: {
				kind: 'Name',
				value: 'Mutation',
				loc: { start: 3121, end: 3129 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'ratingCreate',
						loc: { start: 3134, end: 3146 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'productId',
								loc: { start: 3147, end: 3156 }
							},
							type: {
								kind: 'NonNullType',
								type: {
									kind: 'NamedType',
									name: {
										kind: 'Name',
										value: 'ID',
										loc: { start: 3158, end: 3160 }
									},
									loc: { start: 3158, end: 3160 }
								},
								loc: { start: 3158, end: 3161 }
							},
							directives: [],
							loc: { start: 3147, end: 3161 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'ratingInput',
								loc: { start: 3163, end: 3174 }
							},
							type: {
								kind: 'NonNullType',
								type: {
									kind: 'NamedType',
									name: {
										kind: 'Name',
										value: 'RatingInput',
										loc: { start: 3176, end: 3187 }
									},
									loc: { start: 3176, end: 3187 }
								},
								loc: { start: 3176, end: 3188 }
							},
							directives: [],
							loc: { start: 3163, end: 3188 }
						}
					],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Rating',
								loc: { start: 3191, end: 3197 }
							},
							loc: { start: 3191, end: 3197 }
						},
						loc: { start: 3191, end: 3198 }
					},
					directives: [],
					loc: { start: 3134, end: 3198 }
				}
			],
			loc: { start: 3109, end: 3200 }
		},
		{
			kind: 'InputObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'RatingWhereInput',
				loc: { start: 3208, end: 3224 }
			},
			directives: [],
			fields: [
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'productId',
						loc: { start: 3229, end: 3238 }
					},
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'ID',
							loc: { start: 3240, end: 3242 }
						},
						loc: { start: 3240, end: 3242 }
					},
					directives: [],
					loc: { start: 3229, end: 3242 }
				}
			],
			loc: { start: 3202, end: 3244 }
		},
		{
			kind: 'ObjectTypeExtension',
			name: {
				kind: 'Name',
				value: 'Query',
				loc: { start: 3258, end: 3263 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'ratingConnection',
						loc: { start: 3268, end: 3284 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'where',
								loc: { start: 3285, end: 3290 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'RatingWhereInput',
									loc: { start: 3292, end: 3308 }
								},
								loc: { start: 3292, end: 3308 }
							},
							directives: [],
							loc: { start: 3285, end: 3308 }
						}
					],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Connection',
								loc: { start: 3311, end: 3321 }
							},
							loc: { start: 3311, end: 3321 }
						},
						loc: { start: 3311, end: 3322 }
					},
					directives: [],
					loc: { start: 3268, end: 3322 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'ratings',
						loc: { start: 3325, end: 3332 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 3333, end: 3338 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 3340, end: 3343 }
								},
								loc: { start: 3340, end: 3343 }
							},
							directives: [],
							loc: { start: 3333, end: 3343 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 3345, end: 3349 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 3351, end: 3354 }
								},
								loc: { start: 3351, end: 3354 }
							},
							directives: [],
							loc: { start: 3345, end: 3354 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'where',
								loc: { start: 3356, end: 3361 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'RatingWhereInput',
									loc: { start: 3363, end: 3379 }
								},
								loc: { start: 3363, end: 3379 }
							},
							directives: [],
							loc: { start: 3356, end: 3379 }
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
										loc: { start: 3383, end: 3389 }
									},
									loc: { start: 3383, end: 3389 }
								},
								loc: { start: 3383, end: 3390 }
							},
							loc: { start: 3382, end: 3391 }
						},
						loc: { start: 3382, end: 3392 }
					},
					directives: [],
					loc: { start: 3325, end: 3392 }
				}
			],
			loc: { start: 3246, end: 3394 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Rating',
				loc: { start: 3401, end: 3407 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'id',
						loc: { start: 3412, end: 3414 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 3416, end: 3418 }
							},
							loc: { start: 3416, end: 3418 }
						},
						loc: { start: 3416, end: 3419 }
					},
					directives: [],
					loc: { start: 3412, end: 3419 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'comment',
						loc: { start: 3422, end: 3429 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 3431, end: 3437 }
							},
							loc: { start: 3431, end: 3437 }
						},
						loc: { start: 3431, end: 3438 }
					},
					directives: [],
					loc: { start: 3422, end: 3438 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'email',
						loc: { start: 3441, end: 3446 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 3448, end: 3454 }
							},
							loc: { start: 3448, end: 3454 }
						},
						loc: { start: 3448, end: 3455 }
					},
					directives: [],
					loc: { start: 3441, end: 3455 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'userName',
						loc: { start: 3458, end: 3466 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 3468, end: 3474 }
							},
							loc: { start: 3468, end: 3474 }
						},
						loc: { start: 3468, end: 3475 }
					},
					directives: [],
					loc: { start: 3458, end: 3475 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'title',
						loc: { start: 3478, end: 3483 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 3485, end: 3491 }
							},
							loc: { start: 3485, end: 3491 }
						},
						loc: { start: 3485, end: 3492 }
					},
					directives: [],
					loc: { start: 3478, end: 3492 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'rating',
						loc: { start: 3495, end: 3501 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 3503, end: 3506 }
							},
							loc: { start: 3503, end: 3506 }
						},
						loc: { start: 3503, end: 3507 }
					},
					directives: [],
					loc: { start: 3495, end: 3507 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'createdAt',
						loc: { start: 3510, end: 3519 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'DateTime',
								loc: { start: 3521, end: 3529 }
							},
							loc: { start: 3521, end: 3529 }
						},
						loc: { start: 3521, end: 3530 }
					},
					directives: [],
					loc: { start: 3510, end: 3530 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'updatedAt',
						loc: { start: 3533, end: 3542 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'DateTime',
								loc: { start: 3544, end: 3552 }
							},
							loc: { start: 3544, end: 3552 }
						},
						loc: { start: 3544, end: 3553 }
					},
					directives: [],
					loc: { start: 3533, end: 3553 }
				}
			],
			loc: { start: 3396, end: 3555 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Query',
				loc: { start: 3561, end: 3566 }
			},
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 3556, end: 3566 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Mutation',
				loc: { start: 3573, end: 3581 }
			},
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 3568, end: 3581 }
		},
		{
			kind: 'ScalarTypeDefinition',
			name: {
				kind: 'Name',
				value: 'DateTime',
				loc: { start: 3590, end: 3598 }
			},
			directives: [],
			loc: { start: 3583, end: 3598 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Aggregate',
				loc: { start: 3605, end: 3614 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'count',
						loc: { start: 3619, end: 3624 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 3626, end: 3629 }
							},
							loc: { start: 3626, end: 3629 }
						},
						loc: { start: 3626, end: 3630 }
					},
					directives: [],
					loc: { start: 3619, end: 3630 }
				}
			],
			loc: { start: 3600, end: 3632 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Connection',
				loc: { start: 3639, end: 3649 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'aggregate',
						loc: { start: 3654, end: 3663 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Aggregate',
								loc: { start: 3665, end: 3674 }
							},
							loc: { start: 3665, end: 3674 }
						},
						loc: { start: 3665, end: 3675 }
					},
					directives: [],
					loc: { start: 3654, end: 3675 }
				}
			],
			loc: { start: 3634, end: 3677 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Variant',
				loc: { start: 3683, end: 3690 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'id',
						loc: { start: 3695, end: 3697 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 3699, end: 3701 }
							},
							loc: { start: 3699, end: 3701 }
						},
						loc: { start: 3699, end: 3702 }
					},
					directives: [],
					loc: { start: 3695, end: 3702 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'name',
						loc: { start: 3705, end: 3709 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 3711, end: 3717 }
							},
							loc: { start: 3711, end: 3717 }
						},
						loc: { start: 3711, end: 3718 }
					},
					directives: [],
					loc: { start: 3705, end: 3718 }
				}
			],
			loc: { start: 3678, end: 3720 }
		}
	],
	loc: { start: 0, end: 3721 }
} as unknown as DocumentNode;
