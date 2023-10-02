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
				}
			],
			loc: { start: 238, end: 340 }
		},
		{
			kind: 'InputObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'CollectionWhereInput',
				loc: { start: 347, end: 367 }
			},
			directives: [],
			fields: [
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'slug',
						loc: { start: 372, end: 376 }
					},
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'String',
							loc: { start: 378, end: 384 }
						},
						loc: { start: 378, end: 384 }
					},
					directives: [],
					loc: { start: 372, end: 384 }
				}
			],
			loc: { start: 341, end: 386 }
		},
		{
			kind: 'ObjectTypeExtension',
			name: {
				kind: 'Name',
				value: 'Query',
				loc: { start: 400, end: 405 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'collections',
						loc: { start: 410, end: 421 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 422, end: 426 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 428, end: 431 }
								},
								loc: { start: 428, end: 431 }
							},
							directives: [],
							loc: { start: 422, end: 431 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 433, end: 438 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 440, end: 443 }
								},
								loc: { start: 440, end: 443 }
							},
							directives: [],
							loc: { start: 433, end: 443 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'where',
								loc: { start: 445, end: 450 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'CollectionWhereInput',
									loc: { start: 452, end: 472 }
								},
								loc: { start: 452, end: 472 }
							},
							directives: [],
							loc: { start: 445, end: 472 }
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
										loc: { start: 476, end: 486 }
									},
									loc: { start: 476, end: 486 }
								},
								loc: { start: 476, end: 487 }
							},
							loc: { start: 475, end: 488 }
						},
						loc: { start: 475, end: 489 }
					},
					directives: [],
					loc: { start: 410, end: 489 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'collectionsConnection',
						loc: { start: 492, end: 513 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'where',
								loc: { start: 514, end: 519 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'CollectionWhereInput',
									loc: { start: 521, end: 541 }
								},
								loc: { start: 521, end: 541 }
							},
							directives: [],
							loc: { start: 514, end: 541 }
						}
					],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Connection',
								loc: { start: 544, end: 554 }
							},
							loc: { start: 544, end: 554 }
						},
						loc: { start: 544, end: 555 }
					},
					directives: [],
					loc: { start: 492, end: 555 }
				}
			],
			loc: { start: 388, end: 557 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Collection',
				loc: { start: 564, end: 574 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'id',
						loc: { start: 579, end: 581 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 583, end: 585 }
							},
							loc: { start: 583, end: 585 }
						},
						loc: { start: 583, end: 586 }
					},
					directives: [],
					loc: { start: 579, end: 586 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'name',
						loc: { start: 589, end: 593 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 595, end: 601 }
							},
							loc: { start: 595, end: 601 }
						},
						loc: { start: 595, end: 602 }
					},
					directives: [],
					loc: { start: 589, end: 602 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'slug',
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
						value: 'description',
						loc: { start: 621, end: 632 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 634, end: 640 }
							},
							loc: { start: 634, end: 640 }
						},
						loc: { start: 634, end: 641 }
					},
					directives: [],
					loc: { start: 621, end: 641 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'products',
						loc: { start: 644, end: 652 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 653, end: 657 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 659, end: 662 }
								},
								loc: { start: 659, end: 662 }
							},
							directives: [],
							loc: { start: 653, end: 662 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 664, end: 669 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 671, end: 674 }
								},
								loc: { start: 671, end: 674 }
							},
							directives: [],
							loc: { start: 664, end: 674 }
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
										loc: { start: 678, end: 685 }
									},
									loc: { start: 678, end: 685 }
								},
								loc: { start: 678, end: 686 }
							},
							loc: { start: 677, end: 687 }
						},
						loc: { start: 677, end: 688 }
					},
					directives: [],
					loc: { start: 644, end: 688 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'images',
						loc: { start: 691, end: 697 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 698, end: 702 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 704, end: 707 }
								},
								loc: { start: 704, end: 707 }
							},
							directives: [],
							loc: { start: 698, end: 707 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 709, end: 714 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 716, end: 719 }
								},
								loc: { start: 716, end: 719 }
							},
							directives: [],
							loc: { start: 709, end: 719 }
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
										loc: { start: 723, end: 728 }
									},
									loc: { start: 723, end: 728 }
								},
								loc: { start: 723, end: 729 }
							},
							loc: { start: 722, end: 730 }
						},
						loc: { start: 722, end: 731 }
					},
					directives: [],
					loc: { start: 691, end: 731 }
				}
			],
			loc: { start: 559, end: 733 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Image',
				loc: { start: 739, end: 744 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'url',
						loc: { start: 749, end: 752 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 754, end: 760 }
							},
							loc: { start: 754, end: 760 }
						},
						loc: { start: 754, end: 761 }
					},
					directives: [],
					loc: { start: 749, end: 761 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'height',
						loc: { start: 764, end: 770 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 772, end: 775 }
							},
							loc: { start: 772, end: 775 }
						},
						loc: { start: 772, end: 776 }
					},
					directives: [],
					loc: { start: 764, end: 776 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'width',
						loc: { start: 779, end: 784 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 786, end: 789 }
							},
							loc: { start: 786, end: 789 }
						},
						loc: { start: 786, end: 790 }
					},
					directives: [],
					loc: { start: 779, end: 790 }
				}
			],
			loc: { start: 734, end: 792 }
		},
		{
			kind: 'InputObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'OrderItemInput',
				loc: { start: 799, end: 813 }
			},
			directives: [],
			fields: [
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'productId',
						loc: { start: 818, end: 827 }
					},
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 829, end: 831 }
							},
							loc: { start: 829, end: 831 }
						},
						loc: { start: 829, end: 832 }
					},
					directives: [],
					loc: { start: 818, end: 832 }
				},
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'variantId',
						loc: { start: 835, end: 844 }
					},
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 846, end: 848 }
							},
							loc: { start: 846, end: 848 }
						},
						loc: { start: 846, end: 849 }
					},
					directives: [],
					loc: { start: 835, end: 849 }
				},
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'quantity',
						loc: { start: 852, end: 860 }
					},
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 862, end: 865 }
							},
							loc: { start: 862, end: 865 }
						},
						loc: { start: 862, end: 866 }
					},
					directives: [],
					loc: { start: 852, end: 866 }
				}
			],
			loc: { start: 793, end: 868 }
		},
		{
			kind: 'InputObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'OrderWhereInput',
				loc: { start: 876, end: 891 }
			},
			directives: [],
			fields: [
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'status',
						loc: { start: 896, end: 902 }
					},
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'OrderStatus',
							loc: { start: 904, end: 915 }
						},
						loc: { start: 904, end: 915 }
					},
					directives: [],
					loc: { start: 896, end: 915 }
				}
			],
			loc: { start: 870, end: 917 }
		},
		{
			kind: 'ObjectTypeExtension',
			name: {
				kind: 'Name',
				value: 'Mutation',
				loc: { start: 931, end: 939 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'orderCreate',
						loc: { start: 944, end: 955 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'items',
								loc: { start: 956, end: 961 }
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
												loc: { start: 964, end: 978 }
											},
											loc: { start: 964, end: 978 }
										},
										loc: { start: 964, end: 979 }
									},
									loc: { start: 963, end: 980 }
								},
								loc: { start: 963, end: 981 }
							},
							directives: [],
							loc: { start: 956, end: 981 }
						}
					],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'Order',
							loc: { start: 984, end: 989 }
						},
						loc: { start: 984, end: 989 }
					},
					directives: [],
					loc: { start: 944, end: 989 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'orderItemsUpdate',
						loc: { start: 992, end: 1008 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'id',
								loc: { start: 1009, end: 1011 }
							},
							type: {
								kind: 'NonNullType',
								type: {
									kind: 'NamedType',
									name: {
										kind: 'Name',
										value: 'ID',
										loc: { start: 1013, end: 1015 }
									},
									loc: { start: 1013, end: 1015 }
								},
								loc: { start: 1013, end: 1016 }
							},
							directives: [],
							loc: { start: 1009, end: 1016 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'items',
								loc: { start: 1018, end: 1023 }
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
												loc: { start: 1026, end: 1040 }
											},
											loc: { start: 1026, end: 1040 }
										},
										loc: { start: 1026, end: 1041 }
									},
									loc: { start: 1025, end: 1042 }
								},
								loc: { start: 1025, end: 1043 }
							},
							directives: [],
							loc: { start: 1018, end: 1043 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'updateMethod',
								loc: { start: 1045, end: 1057 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'OrderItemsUpdateMethod',
									loc: { start: 1059, end: 1081 }
								},
								loc: { start: 1059, end: 1081 }
							},
							directives: [],
							loc: { start: 1045, end: 1081 }
						}
					],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'Order',
							loc: { start: 1084, end: 1089 }
						},
						loc: { start: 1084, end: 1089 }
					},
					directives: [],
					loc: { start: 992, end: 1089 }
				}
			],
			loc: { start: 919, end: 1091 }
		},
		{
			kind: 'ObjectTypeExtension',
			name: {
				kind: 'Name',
				value: 'Query',
				loc: { start: 1105, end: 1110 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'order',
						loc: { start: 1115, end: 1120 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'id',
								loc: { start: 1121, end: 1123 }
							},
							type: {
								kind: 'NonNullType',
								type: {
									kind: 'NamedType',
									name: {
										kind: 'Name',
										value: 'ID',
										loc: { start: 1125, end: 1127 }
									},
									loc: { start: 1125, end: 1127 }
								},
								loc: { start: 1125, end: 1128 }
							},
							directives: [],
							loc: { start: 1121, end: 1128 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'where',
								loc: { start: 1130, end: 1135 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'OrderWhereInput',
									loc: { start: 1137, end: 1152 }
								},
								loc: { start: 1137, end: 1152 }
							},
							directives: [],
							loc: { start: 1130, end: 1152 }
						}
					],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'Order',
							loc: { start: 1155, end: 1160 }
						},
						loc: { start: 1155, end: 1160 }
					},
					directives: [],
					loc: { start: 1115, end: 1160 }
				}
			],
			loc: { start: 1093, end: 1162 }
		},
		{
			kind: 'EnumTypeDefinition',
			name: {
				kind: 'Name',
				value: 'OrderStatus',
				loc: { start: 1169, end: 1180 }
			},
			directives: [],
			values: [
				{
					kind: 'EnumValueDefinition',
					name: {
						kind: 'Name',
						value: 'DRAFT',
						loc: { start: 1185, end: 1190 }
					},
					directives: [],
					loc: { start: 1185, end: 1190 }
				},
				{
					kind: 'EnumValueDefinition',
					name: {
						kind: 'Name',
						value: 'PENDING',
						loc: { start: 1193, end: 1200 }
					},
					directives: [],
					loc: { start: 1193, end: 1200 }
				},
				{
					kind: 'EnumValueDefinition',
					name: {
						kind: 'Name',
						value: 'PAID',
						loc: { start: 1203, end: 1207 }
					},
					directives: [],
					loc: { start: 1203, end: 1207 }
				}
			],
			loc: { start: 1164, end: 1209 }
		},
		{
			kind: 'EnumTypeDefinition',
			name: {
				kind: 'Name',
				value: 'OrderItemsUpdateMethod',
				loc: { start: 1216, end: 1238 }
			},
			directives: [],
			values: [
				{
					kind: 'EnumValueDefinition',
					name: {
						kind: 'Name',
						value: 'SET',
						loc: { start: 1243, end: 1246 }
					},
					directives: [],
					loc: { start: 1243, end: 1246 }
				},
				{
					kind: 'EnumValueDefinition',
					name: {
						kind: 'Name',
						value: 'INCREMENT',
						loc: { start: 1249, end: 1258 }
					},
					directives: [],
					loc: { start: 1249, end: 1258 }
				}
			],
			loc: { start: 1211, end: 1260 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Order',
				loc: { start: 1267, end: 1272 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'id',
						loc: { start: 1277, end: 1279 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 1281, end: 1283 }
							},
							loc: { start: 1281, end: 1283 }
						},
						loc: { start: 1281, end: 1284 }
					},
					directives: [],
					loc: { start: 1277, end: 1284 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'items',
						loc: { start: 1287, end: 1292 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 1293, end: 1297 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 1299, end: 1302 }
								},
								loc: { start: 1299, end: 1302 }
							},
							directives: [],
							loc: { start: 1293, end: 1302 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 1304, end: 1309 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 1311, end: 1314 }
								},
								loc: { start: 1311, end: 1314 }
							},
							directives: [],
							loc: { start: 1304, end: 1314 }
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
										loc: { start: 1318, end: 1327 }
									},
									loc: { start: 1318, end: 1327 }
								},
								loc: { start: 1318, end: 1328 }
							},
							loc: { start: 1317, end: 1329 }
						},
						loc: { start: 1317, end: 1330 }
					},
					directives: [],
					loc: { start: 1287, end: 1330 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'totalItems',
						loc: { start: 1333, end: 1343 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 1345, end: 1348 }
							},
							loc: { start: 1345, end: 1348 }
						},
						loc: { start: 1345, end: 1349 }
					},
					directives: [],
					loc: { start: 1333, end: 1349 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'status',
						loc: { start: 1352, end: 1358 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'OrderStatus',
								loc: { start: 1360, end: 1371 }
							},
							loc: { start: 1360, end: 1371 }
						},
						loc: { start: 1360, end: 1372 }
					},
					directives: [],
					loc: { start: 1352, end: 1372 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'createdAt',
						loc: { start: 1375, end: 1384 }
					},
					arguments: [],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'DateTime',
							loc: { start: 1386, end: 1394 }
						},
						loc: { start: 1386, end: 1394 }
					},
					directives: [],
					loc: { start: 1375, end: 1394 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'updatedAt',
						loc: { start: 1397, end: 1406 }
					},
					arguments: [],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'DateTime',
							loc: { start: 1408, end: 1416 }
						},
						loc: { start: 1408, end: 1416 }
					},
					directives: [],
					loc: { start: 1397, end: 1416 }
				}
			],
			loc: { start: 1262, end: 1418 }
		},
		{
			kind: 'ObjectTypeExtension',
			name: {
				kind: 'Name',
				value: 'Mutation',
				loc: { start: 1431, end: 1439 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'orderItemUpdate',
						loc: { start: 1444, end: 1459 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'id',
								loc: { start: 1460, end: 1462 }
							},
							type: {
								kind: 'NonNullType',
								type: {
									kind: 'NamedType',
									name: {
										kind: 'Name',
										value: 'ID',
										loc: { start: 1464, end: 1466 }
									},
									loc: { start: 1464, end: 1466 }
								},
								loc: { start: 1464, end: 1467 }
							},
							directives: [],
							loc: { start: 1460, end: 1467 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'quantity',
								loc: { start: 1469, end: 1477 }
							},
							type: {
								kind: 'NonNullType',
								type: {
									kind: 'NamedType',
									name: {
										kind: 'Name',
										value: 'Int',
										loc: { start: 1479, end: 1482 }
									},
									loc: { start: 1479, end: 1482 }
								},
								loc: { start: 1479, end: 1483 }
							},
							directives: [],
							loc: { start: 1469, end: 1483 }
						}
					],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'OrderItem',
							loc: { start: 1486, end: 1495 }
						},
						loc: { start: 1486, end: 1495 }
					},
					directives: [],
					loc: { start: 1444, end: 1495 }
				}
			],
			loc: { start: 1419, end: 1497 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'OrderItem',
				loc: { start: 1504, end: 1513 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'id',
						loc: { start: 1518, end: 1520 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 1522, end: 1524 }
							},
							loc: { start: 1522, end: 1524 }
						},
						loc: { start: 1522, end: 1525 }
					},
					directives: [],
					loc: { start: 1518, end: 1525 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'productId',
						loc: { start: 1528, end: 1537 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 1539, end: 1541 }
							},
							loc: { start: 1539, end: 1541 }
						},
						loc: { start: 1539, end: 1542 }
					},
					directives: [],
					loc: { start: 1528, end: 1542 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'variantId',
						loc: { start: 1545, end: 1554 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 1556, end: 1558 }
							},
							loc: { start: 1556, end: 1558 }
						},
						loc: { start: 1556, end: 1559 }
					},
					directives: [],
					loc: { start: 1545, end: 1559 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'quantity',
						loc: { start: 1562, end: 1570 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 1572, end: 1575 }
							},
							loc: { start: 1572, end: 1575 }
						},
						loc: { start: 1572, end: 1576 }
					},
					directives: [],
					loc: { start: 1562, end: 1576 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'price',
						loc: { start: 1579, end: 1584 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 1586, end: 1589 }
							},
							loc: { start: 1586, end: 1589 }
						},
						loc: { start: 1586, end: 1590 }
					},
					directives: [],
					loc: { start: 1579, end: 1590 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'name',
						loc: { start: 1593, end: 1597 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 1599, end: 1605 }
							},
							loc: { start: 1599, end: 1605 }
						},
						loc: { start: 1599, end: 1606 }
					},
					directives: [],
					loc: { start: 1593, end: 1606 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'variantName',
						loc: { start: 1609, end: 1620 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 1622, end: 1628 }
							},
							loc: { start: 1622, end: 1628 }
						},
						loc: { start: 1622, end: 1629 }
					},
					directives: [],
					loc: { start: 1609, end: 1629 }
				}
			],
			loc: { start: 1499, end: 1631 }
		},
		{
			kind: 'InputObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'CategorySomeInput',
				loc: { start: 1638, end: 1655 }
			},
			directives: [],
			fields: [
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'slug',
						loc: { start: 1660, end: 1664 }
					},
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'String',
							loc: { start: 1666, end: 1672 }
						},
						loc: { start: 1666, end: 1672 }
					},
					directives: [],
					loc: { start: 1660, end: 1672 }
				}
			],
			loc: { start: 1632, end: 1674 }
		},
		{
			kind: 'InputObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'CollectionSomeInput',
				loc: { start: 1682, end: 1701 }
			},
			directives: [],
			fields: [
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'slug',
						loc: { start: 1706, end: 1710 }
					},
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'String',
							loc: { start: 1712, end: 1718 }
						},
						loc: { start: 1712, end: 1718 }
					},
					directives: [],
					loc: { start: 1706, end: 1718 }
				}
			],
			loc: { start: 1676, end: 1720 }
		},
		{
			kind: 'InputObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'ProductWhereInput',
				loc: { start: 1728, end: 1745 }
			},
			directives: [],
			fields: [
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'nameContains',
						loc: { start: 1750, end: 1762 }
					},
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'String',
							loc: { start: 1764, end: 1770 }
						},
						loc: { start: 1764, end: 1770 }
					},
					directives: [],
					loc: { start: 1750, end: 1770 }
				},
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'categories_some',
						loc: { start: 1773, end: 1788 }
					},
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'CategorySomeInput',
							loc: { start: 1790, end: 1807 }
						},
						loc: { start: 1790, end: 1807 }
					},
					directives: [],
					loc: { start: 1773, end: 1807 }
				},
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'collections_some',
						loc: { start: 1810, end: 1826 }
					},
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'CollectionSomeInput',
							loc: { start: 1828, end: 1847 }
						},
						loc: { start: 1828, end: 1847 }
					},
					directives: [],
					loc: { start: 1810, end: 1847 }
				},
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'excludedIds',
						loc: { start: 1850, end: 1861 }
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
									loc: { start: 1864, end: 1866 }
								},
								loc: { start: 1864, end: 1866 }
							},
							loc: { start: 1864, end: 1867 }
						},
						loc: { start: 1863, end: 1868 }
					},
					directives: [],
					loc: { start: 1850, end: 1868 }
				}
			],
			loc: { start: 1722, end: 1870 }
		},
		{
			kind: 'EnumTypeDefinition',
			name: {
				kind: 'Name',
				value: 'SortOrder',
				loc: { start: 1877, end: 1886 }
			},
			directives: [],
			values: [
				{
					kind: 'EnumValueDefinition',
					name: {
						kind: 'Name',
						value: 'asc',
						loc: { start: 1891, end: 1894 }
					},
					directives: [],
					loc: { start: 1891, end: 1894 }
				},
				{
					kind: 'EnumValueDefinition',
					name: {
						kind: 'Name',
						value: 'desc',
						loc: { start: 1897, end: 1901 }
					},
					directives: [],
					loc: { start: 1897, end: 1901 }
				}
			],
			loc: { start: 1872, end: 1903 }
		},
		{
			kind: 'EnumTypeDefinition',
			name: {
				kind: 'Name',
				value: 'SortableField',
				loc: { start: 1910, end: 1923 }
			},
			directives: [],
			values: [
				{
					kind: 'EnumValueDefinition',
					name: {
						kind: 'Name',
						value: 'name',
						loc: { start: 1928, end: 1932 }
					},
					directives: [],
					loc: { start: 1928, end: 1932 }
				},
				{
					kind: 'EnumValueDefinition',
					name: {
						kind: 'Name',
						value: 'slug',
						loc: { start: 1935, end: 1939 }
					},
					directives: [],
					loc: { start: 1935, end: 1939 }
				},
				{
					kind: 'EnumValueDefinition',
					name: {
						kind: 'Name',
						value: 'price',
						loc: { start: 1942, end: 1947 }
					},
					directives: [],
					loc: { start: 1942, end: 1947 }
				},
				{
					kind: 'EnumValueDefinition',
					name: {
						kind: 'Name',
						value: 'averageRating',
						loc: { start: 1950, end: 1963 }
					},
					directives: [],
					loc: { start: 1950, end: 1963 }
				},
				{
					kind: 'EnumValueDefinition',
					name: {
						kind: 'Name',
						value: 'createdAt',
						loc: { start: 1966, end: 1975 }
					},
					directives: [],
					loc: { start: 1966, end: 1975 }
				}
			],
			loc: { start: 1905, end: 1977 }
		},
		{
			kind: 'InputObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'OrderByInput',
				loc: { start: 1985, end: 1997 }
			},
			directives: [],
			fields: [
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'field',
						loc: { start: 2002, end: 2007 }
					},
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'SortableField',
								loc: { start: 2009, end: 2022 }
							},
							loc: { start: 2009, end: 2022 }
						},
						loc: { start: 2009, end: 2023 }
					},
					directives: [],
					loc: { start: 2002, end: 2023 }
				},
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'order',
						loc: { start: 2026, end: 2031 }
					},
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'SortOrder',
								loc: { start: 2033, end: 2042 }
							},
							loc: { start: 2033, end: 2042 }
						},
						loc: { start: 2033, end: 2043 }
					},
					directives: [],
					loc: { start: 2026, end: 2043 }
				}
			],
			loc: { start: 1979, end: 2045 }
		},
		{
			kind: 'ObjectTypeExtension',
			name: {
				kind: 'Name',
				value: 'Query',
				loc: { start: 2059, end: 2064 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'product',
						loc: { start: 2069, end: 2076 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'id',
								loc: { start: 2077, end: 2079 }
							},
							type: {
								kind: 'NonNullType',
								type: {
									kind: 'NamedType',
									name: {
										kind: 'Name',
										value: 'ID',
										loc: { start: 2081, end: 2083 }
									},
									loc: { start: 2081, end: 2083 }
								},
								loc: { start: 2081, end: 2084 }
							},
							directives: [],
							loc: { start: 2077, end: 2084 }
						}
					],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'Product',
							loc: { start: 2087, end: 2094 }
						},
						loc: { start: 2087, end: 2094 }
					},
					directives: [],
					loc: { start: 2069, end: 2094 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'products',
						loc: { start: 2097, end: 2105 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'where',
								loc: { start: 2106, end: 2111 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'ProductWhereInput',
									loc: { start: 2113, end: 2130 }
								},
								loc: { start: 2113, end: 2130 }
							},
							directives: [],
							loc: { start: 2106, end: 2130 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 2132, end: 2136 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2138, end: 2141 }
								},
								loc: { start: 2138, end: 2141 }
							},
							directives: [],
							loc: { start: 2132, end: 2141 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'orderBy',
								loc: { start: 2143, end: 2150 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'OrderByInput',
									loc: { start: 2152, end: 2164 }
								},
								loc: { start: 2152, end: 2164 }
							},
							directives: [],
							loc: { start: 2143, end: 2164 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 2166, end: 2171 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2173, end: 2176 }
								},
								loc: { start: 2173, end: 2176 }
							},
							directives: [],
							loc: { start: 2166, end: 2176 }
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
										loc: { start: 2180, end: 2187 }
									},
									loc: { start: 2180, end: 2187 }
								},
								loc: { start: 2180, end: 2188 }
							},
							loc: { start: 2179, end: 2189 }
						},
						loc: { start: 2179, end: 2190 }
					},
					directives: [],
					loc: { start: 2097, end: 2190 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'productsConnection',
						loc: { start: 2193, end: 2211 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'where',
								loc: { start: 2212, end: 2217 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'ProductWhereInput',
									loc: { start: 2219, end: 2236 }
								},
								loc: { start: 2219, end: 2236 }
							},
							directives: [],
							loc: { start: 2212, end: 2236 }
						}
					],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Connection',
								loc: { start: 2239, end: 2249 }
							},
							loc: { start: 2239, end: 2249 }
						},
						loc: { start: 2239, end: 2250 }
					},
					directives: [],
					loc: { start: 2193, end: 2250 }
				}
			],
			loc: { start: 2047, end: 2252 }
		},
		{
			kind: 'ObjectTypeExtension',
			name: {
				kind: 'Name',
				value: 'Mutation',
				loc: { start: 2266, end: 2274 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'productCalculateAndUpdateAverageRating',
						loc: { start: 2279, end: 2317 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'id',
								loc: { start: 2318, end: 2320 }
							},
							type: {
								kind: 'NonNullType',
								type: {
									kind: 'NamedType',
									name: {
										kind: 'Name',
										value: 'ID',
										loc: { start: 2322, end: 2324 }
									},
									loc: { start: 2322, end: 2324 }
								},
								loc: { start: 2322, end: 2325 }
							},
							directives: [],
							loc: { start: 2318, end: 2325 }
						}
					],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'Product',
							loc: { start: 2328, end: 2335 }
						},
						loc: { start: 2328, end: 2335 }
					},
					directives: [],
					loc: { start: 2279, end: 2335 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'productsCalculateAndUpdateAverageRating',
						loc: { start: 2338, end: 2377 }
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
										loc: { start: 2380, end: 2387 }
									},
									loc: { start: 2380, end: 2387 }
								},
								loc: { start: 2380, end: 2388 }
							},
							loc: { start: 2379, end: 2389 }
						},
						loc: { start: 2379, end: 2390 }
					},
					directives: [],
					loc: { start: 2338, end: 2390 }
				}
			],
			loc: { start: 2254, end: 2392 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Product',
				loc: { start: 2399, end: 2406 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'id',
						loc: { start: 2411, end: 2413 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 2415, end: 2417 }
							},
							loc: { start: 2415, end: 2417 }
						},
						loc: { start: 2415, end: 2418 }
					},
					directives: [],
					loc: { start: 2411, end: 2418 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'name',
						loc: { start: 2421, end: 2425 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 2427, end: 2433 }
							},
							loc: { start: 2427, end: 2433 }
						},
						loc: { start: 2427, end: 2434 }
					},
					directives: [],
					loc: { start: 2421, end: 2434 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'slug',
						loc: { start: 2437, end: 2441 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 2443, end: 2449 }
							},
							loc: { start: 2443, end: 2449 }
						},
						loc: { start: 2443, end: 2450 }
					},
					directives: [],
					loc: { start: 2437, end: 2450 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'description',
						loc: { start: 2453, end: 2464 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 2466, end: 2472 }
							},
							loc: { start: 2466, end: 2472 }
						},
						loc: { start: 2466, end: 2473 }
					},
					directives: [],
					loc: { start: 2453, end: 2473 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'price',
						loc: { start: 2476, end: 2481 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 2483, end: 2486 }
							},
							loc: { start: 2483, end: 2486 }
						},
						loc: { start: 2483, end: 2487 }
					},
					directives: [],
					loc: { start: 2476, end: 2487 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'averageRating',
						loc: { start: 2490, end: 2503 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Float',
								loc: { start: 2505, end: 2510 }
							},
							loc: { start: 2505, end: 2510 }
						},
						loc: { start: 2505, end: 2511 }
					},
					directives: [],
					loc: { start: 2490, end: 2511 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'createdAt',
						loc: { start: 2514, end: 2523 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'DateTime',
								loc: { start: 2525, end: 2533 }
							},
							loc: { start: 2525, end: 2533 }
						},
						loc: { start: 2525, end: 2534 }
					},
					directives: [],
					loc: { start: 2514, end: 2534 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'categories',
						loc: { start: 2537, end: 2547 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 2548, end: 2552 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2554, end: 2557 }
								},
								loc: { start: 2554, end: 2557 }
							},
							directives: [],
							loc: { start: 2548, end: 2557 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 2559, end: 2564 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2566, end: 2569 }
								},
								loc: { start: 2566, end: 2569 }
							},
							directives: [],
							loc: { start: 2559, end: 2569 }
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
									loc: { start: 2573, end: 2581 }
								},
								loc: { start: 2573, end: 2581 }
							},
							loc: { start: 2572, end: 2582 }
						},
						loc: { start: 2572, end: 2583 }
					},
					directives: [],
					loc: { start: 2537, end: 2583 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'collections',
						loc: { start: 2586, end: 2597 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 2598, end: 2602 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2604, end: 2607 }
								},
								loc: { start: 2604, end: 2607 }
							},
							directives: [],
							loc: { start: 2598, end: 2607 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 2609, end: 2614 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2616, end: 2619 }
								},
								loc: { start: 2616, end: 2619 }
							},
							directives: [],
							loc: { start: 2609, end: 2619 }
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
									loc: { start: 2623, end: 2633 }
								},
								loc: { start: 2623, end: 2633 }
							},
							loc: { start: 2622, end: 2634 }
						},
						loc: { start: 2622, end: 2635 }
					},
					directives: [],
					loc: { start: 2586, end: 2635 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'images',
						loc: { start: 2638, end: 2644 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 2645, end: 2649 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2651, end: 2654 }
								},
								loc: { start: 2651, end: 2654 }
							},
							directives: [],
							loc: { start: 2645, end: 2654 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 2656, end: 2661 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2663, end: 2666 }
								},
								loc: { start: 2663, end: 2666 }
							},
							directives: [],
							loc: { start: 2656, end: 2666 }
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
									loc: { start: 2670, end: 2675 }
								},
								loc: { start: 2670, end: 2675 }
							},
							loc: { start: 2669, end: 2676 }
						},
						loc: { start: 2669, end: 2677 }
					},
					directives: [],
					loc: { start: 2638, end: 2677 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'variants',
						loc: { start: 2680, end: 2688 }
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
										loc: { start: 2691, end: 2698 }
									},
									loc: { start: 2691, end: 2698 }
								},
								loc: { start: 2691, end: 2699 }
							},
							loc: { start: 2690, end: 2700 }
						},
						loc: { start: 2690, end: 2701 }
					},
					directives: [],
					loc: { start: 2680, end: 2701 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'ratings',
						loc: { start: 2704, end: 2711 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 2712, end: 2716 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2718, end: 2721 }
								},
								loc: { start: 2718, end: 2721 }
							},
							directives: [],
							loc: { start: 2712, end: 2721 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 2723, end: 2728 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2730, end: 2733 }
								},
								loc: { start: 2730, end: 2733 }
							},
							directives: [],
							loc: { start: 2723, end: 2733 }
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
										loc: { start: 2737, end: 2743 }
									},
									loc: { start: 2737, end: 2743 }
								},
								loc: { start: 2737, end: 2744 }
							},
							loc: { start: 2736, end: 2745 }
						},
						loc: { start: 2736, end: 2746 }
					},
					directives: [],
					loc: { start: 2704, end: 2746 }
				}
			],
			loc: { start: 2394, end: 2748 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Rating',
				loc: { start: 2754, end: 2760 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'id',
						loc: { start: 2765, end: 2767 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 2769, end: 2771 }
							},
							loc: { start: 2769, end: 2771 }
						},
						loc: { start: 2769, end: 2772 }
					},
					directives: [],
					loc: { start: 2765, end: 2772 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'comment',
						loc: { start: 2775, end: 2782 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 2784, end: 2790 }
							},
							loc: { start: 2784, end: 2790 }
						},
						loc: { start: 2784, end: 2791 }
					},
					directives: [],
					loc: { start: 2775, end: 2791 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'rating',
						loc: { start: 2794, end: 2800 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 2802, end: 2805 }
							},
							loc: { start: 2802, end: 2805 }
						},
						loc: { start: 2802, end: 2806 }
					},
					directives: [],
					loc: { start: 2794, end: 2806 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'createdAt',
						loc: { start: 2809, end: 2818 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'DateTime',
								loc: { start: 2820, end: 2828 }
							},
							loc: { start: 2820, end: 2828 }
						},
						loc: { start: 2820, end: 2829 }
					},
					directives: [],
					loc: { start: 2809, end: 2829 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'updatedAt',
						loc: { start: 2832, end: 2841 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'DateTime',
								loc: { start: 2843, end: 2851 }
							},
							loc: { start: 2843, end: 2851 }
						},
						loc: { start: 2843, end: 2852 }
					},
					directives: [],
					loc: { start: 2832, end: 2852 }
				}
			],
			loc: { start: 2749, end: 2854 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Query',
				loc: { start: 2860, end: 2865 }
			},
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 2855, end: 2865 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Mutation',
				loc: { start: 2872, end: 2880 }
			},
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 2867, end: 2880 }
		},
		{
			kind: 'ScalarTypeDefinition',
			name: {
				kind: 'Name',
				value: 'DateTime',
				loc: { start: 2889, end: 2897 }
			},
			directives: [],
			loc: { start: 2882, end: 2897 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Aggregate',
				loc: { start: 2904, end: 2913 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'count',
						loc: { start: 2918, end: 2923 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 2925, end: 2928 }
							},
							loc: { start: 2925, end: 2928 }
						},
						loc: { start: 2925, end: 2929 }
					},
					directives: [],
					loc: { start: 2918, end: 2929 }
				}
			],
			loc: { start: 2899, end: 2931 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Connection',
				loc: { start: 2938, end: 2948 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'aggregate',
						loc: { start: 2953, end: 2962 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Aggregate',
								loc: { start: 2964, end: 2973 }
							},
							loc: { start: 2964, end: 2973 }
						},
						loc: { start: 2964, end: 2974 }
					},
					directives: [],
					loc: { start: 2953, end: 2974 }
				}
			],
			loc: { start: 2933, end: 2976 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Variant',
				loc: { start: 2982, end: 2989 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'id',
						loc: { start: 2994, end: 2996 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 2998, end: 3000 }
							},
							loc: { start: 2998, end: 3000 }
						},
						loc: { start: 2998, end: 3001 }
					},
					directives: [],
					loc: { start: 2994, end: 3001 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'name',
						loc: { start: 3004, end: 3008 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 3010, end: 3016 }
							},
							loc: { start: 3010, end: 3016 }
						},
						loc: { start: 3010, end: 3017 }
					},
					directives: [],
					loc: { start: 3004, end: 3017 }
				}
			],
			loc: { start: 2977, end: 3019 }
		}
	],
	loc: { start: 0, end: 3020 }
} as unknown as DocumentNode;
