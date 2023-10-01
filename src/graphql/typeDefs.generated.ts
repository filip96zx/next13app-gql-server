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
			kind: 'ObjectTypeExtension',
			name: {
				kind: 'Name',
				value: 'Query',
				loc: { start: 1884, end: 1889 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'product',
						loc: { start: 1894, end: 1901 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'id',
								loc: { start: 1902, end: 1904 }
							},
							type: {
								kind: 'NonNullType',
								type: {
									kind: 'NamedType',
									name: {
										kind: 'Name',
										value: 'ID',
										loc: { start: 1906, end: 1908 }
									},
									loc: { start: 1906, end: 1908 }
								},
								loc: { start: 1906, end: 1909 }
							},
							directives: [],
							loc: { start: 1902, end: 1909 }
						}
					],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'Product',
							loc: { start: 1912, end: 1919 }
						},
						loc: { start: 1912, end: 1919 }
					},
					directives: [],
					loc: { start: 1894, end: 1919 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'products',
						loc: { start: 1922, end: 1930 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'where',
								loc: { start: 1931, end: 1936 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'ProductWhereInput',
									loc: { start: 1938, end: 1955 }
								},
								loc: { start: 1938, end: 1955 }
							},
							directives: [],
							loc: { start: 1931, end: 1955 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 1957, end: 1961 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 1963, end: 1966 }
								},
								loc: { start: 1963, end: 1966 }
							},
							directives: [],
							loc: { start: 1957, end: 1966 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 1968, end: 1973 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 1975, end: 1978 }
								},
								loc: { start: 1975, end: 1978 }
							},
							directives: [],
							loc: { start: 1968, end: 1978 }
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
										loc: { start: 1982, end: 1989 }
									},
									loc: { start: 1982, end: 1989 }
								},
								loc: { start: 1982, end: 1990 }
							},
							loc: { start: 1981, end: 1991 }
						},
						loc: { start: 1981, end: 1992 }
					},
					directives: [],
					loc: { start: 1922, end: 1992 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'productsConnection',
						loc: { start: 1995, end: 2013 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'where',
								loc: { start: 2014, end: 2019 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'ProductWhereInput',
									loc: { start: 2021, end: 2038 }
								},
								loc: { start: 2021, end: 2038 }
							},
							directives: [],
							loc: { start: 2014, end: 2038 }
						}
					],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Connection',
								loc: { start: 2041, end: 2051 }
							},
							loc: { start: 2041, end: 2051 }
						},
						loc: { start: 2041, end: 2052 }
					},
					directives: [],
					loc: { start: 1995, end: 2052 }
				}
			],
			loc: { start: 1872, end: 2054 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Product',
				loc: { start: 2061, end: 2068 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'id',
						loc: { start: 2073, end: 2075 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 2077, end: 2079 }
							},
							loc: { start: 2077, end: 2079 }
						},
						loc: { start: 2077, end: 2080 }
					},
					directives: [],
					loc: { start: 2073, end: 2080 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'name',
						loc: { start: 2083, end: 2087 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 2089, end: 2095 }
							},
							loc: { start: 2089, end: 2095 }
						},
						loc: { start: 2089, end: 2096 }
					},
					directives: [],
					loc: { start: 2083, end: 2096 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'slug',
						loc: { start: 2099, end: 2103 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 2105, end: 2111 }
							},
							loc: { start: 2105, end: 2111 }
						},
						loc: { start: 2105, end: 2112 }
					},
					directives: [],
					loc: { start: 2099, end: 2112 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'description',
						loc: { start: 2115, end: 2126 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 2128, end: 2134 }
							},
							loc: { start: 2128, end: 2134 }
						},
						loc: { start: 2128, end: 2135 }
					},
					directives: [],
					loc: { start: 2115, end: 2135 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'price',
						loc: { start: 2138, end: 2143 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 2145, end: 2148 }
							},
							loc: { start: 2145, end: 2148 }
						},
						loc: { start: 2145, end: 2149 }
					},
					directives: [],
					loc: { start: 2138, end: 2149 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'categories',
						loc: { start: 2152, end: 2162 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 2163, end: 2167 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2169, end: 2172 }
								},
								loc: { start: 2169, end: 2172 }
							},
							directives: [],
							loc: { start: 2163, end: 2172 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 2174, end: 2179 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2181, end: 2184 }
								},
								loc: { start: 2181, end: 2184 }
							},
							directives: [],
							loc: { start: 2174, end: 2184 }
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
									loc: { start: 2188, end: 2196 }
								},
								loc: { start: 2188, end: 2196 }
							},
							loc: { start: 2187, end: 2197 }
						},
						loc: { start: 2187, end: 2198 }
					},
					directives: [],
					loc: { start: 2152, end: 2198 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'collections',
						loc: { start: 2201, end: 2212 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 2213, end: 2217 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2219, end: 2222 }
								},
								loc: { start: 2219, end: 2222 }
							},
							directives: [],
							loc: { start: 2213, end: 2222 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 2224, end: 2229 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2231, end: 2234 }
								},
								loc: { start: 2231, end: 2234 }
							},
							directives: [],
							loc: { start: 2224, end: 2234 }
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
									loc: { start: 2238, end: 2248 }
								},
								loc: { start: 2238, end: 2248 }
							},
							loc: { start: 2237, end: 2249 }
						},
						loc: { start: 2237, end: 2250 }
					},
					directives: [],
					loc: { start: 2201, end: 2250 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'images',
						loc: { start: 2253, end: 2259 }
					},
					arguments: [
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
								value: 'first',
								loc: { start: 2271, end: 2276 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2278, end: 2281 }
								},
								loc: { start: 2278, end: 2281 }
							},
							directives: [],
							loc: { start: 2271, end: 2281 }
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
									loc: { start: 2285, end: 2290 }
								},
								loc: { start: 2285, end: 2290 }
							},
							loc: { start: 2284, end: 2291 }
						},
						loc: { start: 2284, end: 2292 }
					},
					directives: [],
					loc: { start: 2253, end: 2292 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'variants',
						loc: { start: 2295, end: 2303 }
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
										loc: { start: 2306, end: 2313 }
									},
									loc: { start: 2306, end: 2313 }
								},
								loc: { start: 2306, end: 2314 }
							},
							loc: { start: 2305, end: 2315 }
						},
						loc: { start: 2305, end: 2316 }
					},
					directives: [],
					loc: { start: 2295, end: 2316 }
				}
			],
			loc: { start: 2056, end: 2318 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Query',
				loc: { start: 2324, end: 2329 }
			},
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 2319, end: 2329 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Mutation',
				loc: { start: 2336, end: 2344 }
			},
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 2331, end: 2344 }
		},
		{
			kind: 'ScalarTypeDefinition',
			name: {
				kind: 'Name',
				value: 'DateTime',
				loc: { start: 2353, end: 2361 }
			},
			directives: [],
			loc: { start: 2346, end: 2361 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Aggregate',
				loc: { start: 2368, end: 2377 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'count',
						loc: { start: 2382, end: 2387 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 2389, end: 2392 }
							},
							loc: { start: 2389, end: 2392 }
						},
						loc: { start: 2389, end: 2393 }
					},
					directives: [],
					loc: { start: 2382, end: 2393 }
				}
			],
			loc: { start: 2363, end: 2395 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Connection',
				loc: { start: 2402, end: 2412 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'aggregate',
						loc: { start: 2417, end: 2426 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Aggregate',
								loc: { start: 2428, end: 2437 }
							},
							loc: { start: 2428, end: 2437 }
						},
						loc: { start: 2428, end: 2438 }
					},
					directives: [],
					loc: { start: 2417, end: 2438 }
				}
			],
			loc: { start: 2397, end: 2440 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Variant',
				loc: { start: 2446, end: 2453 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'id',
						loc: { start: 2458, end: 2460 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 2462, end: 2464 }
							},
							loc: { start: 2462, end: 2464 }
						},
						loc: { start: 2462, end: 2465 }
					},
					directives: [],
					loc: { start: 2458, end: 2465 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'name',
						loc: { start: 2468, end: 2472 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 2474, end: 2480 }
							},
							loc: { start: 2474, end: 2480 }
						},
						loc: { start: 2474, end: 2481 }
					},
					directives: [],
					loc: { start: 2468, end: 2481 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'value',
						loc: { start: 2484, end: 2489 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 2491, end: 2497 }
							},
							loc: { start: 2491, end: 2497 }
						},
						loc: { start: 2491, end: 2498 }
					},
					directives: [],
					loc: { start: 2484, end: 2498 }
				}
			],
			loc: { start: 2441, end: 2500 }
		}
	],
	loc: { start: 0, end: 2501 }
} as unknown as DocumentNode;
