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
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'orderUpdateStatus',
						loc: { start: 1092, end: 1109 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'id',
								loc: { start: 1110, end: 1112 }
							},
							type: {
								kind: 'NonNullType',
								type: {
									kind: 'NamedType',
									name: {
										kind: 'Name',
										value: 'ID',
										loc: { start: 1114, end: 1116 }
									},
									loc: { start: 1114, end: 1116 }
								},
								loc: { start: 1114, end: 1117 }
							},
							directives: [],
							loc: { start: 1110, end: 1117 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'status',
								loc: { start: 1119, end: 1125 }
							},
							type: {
								kind: 'NonNullType',
								type: {
									kind: 'NamedType',
									name: {
										kind: 'Name',
										value: 'OrderStatus',
										loc: { start: 1127, end: 1138 }
									},
									loc: { start: 1127, end: 1138 }
								},
								loc: { start: 1127, end: 1139 }
							},
							directives: [],
							loc: { start: 1119, end: 1139 }
						}
					],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'Order',
							loc: { start: 1142, end: 1147 }
						},
						loc: { start: 1142, end: 1147 }
					},
					directives: [],
					loc: { start: 1092, end: 1147 }
				}
			],
			loc: { start: 919, end: 1149 }
		},
		{
			kind: 'ObjectTypeExtension',
			name: {
				kind: 'Name',
				value: 'Query',
				loc: { start: 1163, end: 1168 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'order',
						loc: { start: 1173, end: 1178 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'id',
								loc: { start: 1179, end: 1181 }
							},
							type: {
								kind: 'NonNullType',
								type: {
									kind: 'NamedType',
									name: {
										kind: 'Name',
										value: 'ID',
										loc: { start: 1183, end: 1185 }
									},
									loc: { start: 1183, end: 1185 }
								},
								loc: { start: 1183, end: 1186 }
							},
							directives: [],
							loc: { start: 1179, end: 1186 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'where',
								loc: { start: 1188, end: 1193 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'OrderWhereInput',
									loc: { start: 1195, end: 1210 }
								},
								loc: { start: 1195, end: 1210 }
							},
							directives: [],
							loc: { start: 1188, end: 1210 }
						}
					],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'Order',
							loc: { start: 1213, end: 1218 }
						},
						loc: { start: 1213, end: 1218 }
					},
					directives: [],
					loc: { start: 1173, end: 1218 }
				}
			],
			loc: { start: 1151, end: 1220 }
		},
		{
			kind: 'EnumTypeDefinition',
			name: {
				kind: 'Name',
				value: 'OrderStatus',
				loc: { start: 1227, end: 1238 }
			},
			directives: [],
			values: [
				{
					kind: 'EnumValueDefinition',
					name: {
						kind: 'Name',
						value: 'DRAFT',
						loc: { start: 1243, end: 1248 }
					},
					directives: [],
					loc: { start: 1243, end: 1248 }
				},
				{
					kind: 'EnumValueDefinition',
					name: {
						kind: 'Name',
						value: 'PENDING',
						loc: { start: 1251, end: 1258 }
					},
					directives: [],
					loc: { start: 1251, end: 1258 }
				},
				{
					kind: 'EnumValueDefinition',
					name: {
						kind: 'Name',
						value: 'PAID',
						loc: { start: 1261, end: 1265 }
					},
					directives: [],
					loc: { start: 1261, end: 1265 }
				}
			],
			loc: { start: 1222, end: 1267 }
		},
		{
			kind: 'EnumTypeDefinition',
			name: {
				kind: 'Name',
				value: 'OrderItemsUpdateMethod',
				loc: { start: 1274, end: 1296 }
			},
			directives: [],
			values: [
				{
					kind: 'EnumValueDefinition',
					name: {
						kind: 'Name',
						value: 'SET',
						loc: { start: 1301, end: 1304 }
					},
					directives: [],
					loc: { start: 1301, end: 1304 }
				},
				{
					kind: 'EnumValueDefinition',
					name: {
						kind: 'Name',
						value: 'INCREMENT',
						loc: { start: 1307, end: 1316 }
					},
					directives: [],
					loc: { start: 1307, end: 1316 }
				}
			],
			loc: { start: 1269, end: 1318 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Order',
				loc: { start: 1325, end: 1330 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'id',
						loc: { start: 1335, end: 1337 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 1339, end: 1341 }
							},
							loc: { start: 1339, end: 1341 }
						},
						loc: { start: 1339, end: 1342 }
					},
					directives: [],
					loc: { start: 1335, end: 1342 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'items',
						loc: { start: 1345, end: 1350 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 1351, end: 1355 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 1357, end: 1360 }
								},
								loc: { start: 1357, end: 1360 }
							},
							directives: [],
							loc: { start: 1351, end: 1360 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 1362, end: 1367 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 1369, end: 1372 }
								},
								loc: { start: 1369, end: 1372 }
							},
							directives: [],
							loc: { start: 1362, end: 1372 }
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
										loc: { start: 1376, end: 1385 }
									},
									loc: { start: 1376, end: 1385 }
								},
								loc: { start: 1376, end: 1386 }
							},
							loc: { start: 1375, end: 1387 }
						},
						loc: { start: 1375, end: 1388 }
					},
					directives: [],
					loc: { start: 1345, end: 1388 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'totalItems',
						loc: { start: 1391, end: 1401 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 1403, end: 1406 }
							},
							loc: { start: 1403, end: 1406 }
						},
						loc: { start: 1403, end: 1407 }
					},
					directives: [],
					loc: { start: 1391, end: 1407 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'status',
						loc: { start: 1410, end: 1416 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'OrderStatus',
								loc: { start: 1418, end: 1429 }
							},
							loc: { start: 1418, end: 1429 }
						},
						loc: { start: 1418, end: 1430 }
					},
					directives: [],
					loc: { start: 1410, end: 1430 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'createdAt',
						loc: { start: 1433, end: 1442 }
					},
					arguments: [],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'DateTime',
							loc: { start: 1444, end: 1452 }
						},
						loc: { start: 1444, end: 1452 }
					},
					directives: [],
					loc: { start: 1433, end: 1452 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'updatedAt',
						loc: { start: 1455, end: 1464 }
					},
					arguments: [],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'DateTime',
							loc: { start: 1466, end: 1474 }
						},
						loc: { start: 1466, end: 1474 }
					},
					directives: [],
					loc: { start: 1455, end: 1474 }
				}
			],
			loc: { start: 1320, end: 1476 }
		},
		{
			kind: 'ObjectTypeExtension',
			name: {
				kind: 'Name',
				value: 'Mutation',
				loc: { start: 1489, end: 1497 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'orderItemUpdate',
						loc: { start: 1502, end: 1517 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'id',
								loc: { start: 1518, end: 1520 }
							},
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
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'quantity',
								loc: { start: 1527, end: 1535 }
							},
							type: {
								kind: 'NonNullType',
								type: {
									kind: 'NamedType',
									name: {
										kind: 'Name',
										value: 'Int',
										loc: { start: 1537, end: 1540 }
									},
									loc: { start: 1537, end: 1540 }
								},
								loc: { start: 1537, end: 1541 }
							},
							directives: [],
							loc: { start: 1527, end: 1541 }
						}
					],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'OrderItem',
							loc: { start: 1544, end: 1553 }
						},
						loc: { start: 1544, end: 1553 }
					},
					directives: [],
					loc: { start: 1502, end: 1553 }
				}
			],
			loc: { start: 1477, end: 1555 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'OrderItem',
				loc: { start: 1562, end: 1571 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'id',
						loc: { start: 1576, end: 1578 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 1580, end: 1582 }
							},
							loc: { start: 1580, end: 1582 }
						},
						loc: { start: 1580, end: 1583 }
					},
					directives: [],
					loc: { start: 1576, end: 1583 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'productId',
						loc: { start: 1586, end: 1595 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 1597, end: 1599 }
							},
							loc: { start: 1597, end: 1599 }
						},
						loc: { start: 1597, end: 1600 }
					},
					directives: [],
					loc: { start: 1586, end: 1600 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'variantId',
						loc: { start: 1603, end: 1612 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 1614, end: 1616 }
							},
							loc: { start: 1614, end: 1616 }
						},
						loc: { start: 1614, end: 1617 }
					},
					directives: [],
					loc: { start: 1603, end: 1617 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'quantity',
						loc: { start: 1620, end: 1628 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 1630, end: 1633 }
							},
							loc: { start: 1630, end: 1633 }
						},
						loc: { start: 1630, end: 1634 }
					},
					directives: [],
					loc: { start: 1620, end: 1634 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'price',
						loc: { start: 1637, end: 1642 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 1644, end: 1647 }
							},
							loc: { start: 1644, end: 1647 }
						},
						loc: { start: 1644, end: 1648 }
					},
					directives: [],
					loc: { start: 1637, end: 1648 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'name',
						loc: { start: 1651, end: 1655 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 1657, end: 1663 }
							},
							loc: { start: 1657, end: 1663 }
						},
						loc: { start: 1657, end: 1664 }
					},
					directives: [],
					loc: { start: 1651, end: 1664 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'variantName',
						loc: { start: 1667, end: 1678 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 1680, end: 1686 }
							},
							loc: { start: 1680, end: 1686 }
						},
						loc: { start: 1680, end: 1687 }
					},
					directives: [],
					loc: { start: 1667, end: 1687 }
				}
			],
			loc: { start: 1557, end: 1689 }
		},
		{
			kind: 'InputObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'CategorySomeInput',
				loc: { start: 1696, end: 1713 }
			},
			directives: [],
			fields: [
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'slug',
						loc: { start: 1718, end: 1722 }
					},
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'String',
							loc: { start: 1724, end: 1730 }
						},
						loc: { start: 1724, end: 1730 }
					},
					directives: [],
					loc: { start: 1718, end: 1730 }
				}
			],
			loc: { start: 1690, end: 1732 }
		},
		{
			kind: 'InputObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'CollectionSomeInput',
				loc: { start: 1740, end: 1759 }
			},
			directives: [],
			fields: [
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'slug',
						loc: { start: 1764, end: 1768 }
					},
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'String',
							loc: { start: 1770, end: 1776 }
						},
						loc: { start: 1770, end: 1776 }
					},
					directives: [],
					loc: { start: 1764, end: 1776 }
				}
			],
			loc: { start: 1734, end: 1778 }
		},
		{
			kind: 'InputObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'ProductWhereInput',
				loc: { start: 1786, end: 1803 }
			},
			directives: [],
			fields: [
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'nameContains',
						loc: { start: 1808, end: 1820 }
					},
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'String',
							loc: { start: 1822, end: 1828 }
						},
						loc: { start: 1822, end: 1828 }
					},
					directives: [],
					loc: { start: 1808, end: 1828 }
				},
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'categories_some',
						loc: { start: 1831, end: 1846 }
					},
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'CategorySomeInput',
							loc: { start: 1848, end: 1865 }
						},
						loc: { start: 1848, end: 1865 }
					},
					directives: [],
					loc: { start: 1831, end: 1865 }
				},
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'collections_some',
						loc: { start: 1868, end: 1884 }
					},
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'CollectionSomeInput',
							loc: { start: 1886, end: 1905 }
						},
						loc: { start: 1886, end: 1905 }
					},
					directives: [],
					loc: { start: 1868, end: 1905 }
				},
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'excludedIds',
						loc: { start: 1908, end: 1919 }
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
									loc: { start: 1922, end: 1924 }
								},
								loc: { start: 1922, end: 1924 }
							},
							loc: { start: 1922, end: 1925 }
						},
						loc: { start: 1921, end: 1926 }
					},
					directives: [],
					loc: { start: 1908, end: 1926 }
				}
			],
			loc: { start: 1780, end: 1928 }
		},
		{
			kind: 'EnumTypeDefinition',
			name: {
				kind: 'Name',
				value: 'SortOrder',
				loc: { start: 1935, end: 1944 }
			},
			directives: [],
			values: [
				{
					kind: 'EnumValueDefinition',
					name: {
						kind: 'Name',
						value: 'asc',
						loc: { start: 1949, end: 1952 }
					},
					directives: [],
					loc: { start: 1949, end: 1952 }
				},
				{
					kind: 'EnumValueDefinition',
					name: {
						kind: 'Name',
						value: 'desc',
						loc: { start: 1955, end: 1959 }
					},
					directives: [],
					loc: { start: 1955, end: 1959 }
				}
			],
			loc: { start: 1930, end: 1961 }
		},
		{
			kind: 'EnumTypeDefinition',
			name: {
				kind: 'Name',
				value: 'SortableField',
				loc: { start: 1968, end: 1981 }
			},
			directives: [],
			values: [
				{
					kind: 'EnumValueDefinition',
					name: {
						kind: 'Name',
						value: 'name',
						loc: { start: 1986, end: 1990 }
					},
					directives: [],
					loc: { start: 1986, end: 1990 }
				},
				{
					kind: 'EnumValueDefinition',
					name: {
						kind: 'Name',
						value: 'slug',
						loc: { start: 1993, end: 1997 }
					},
					directives: [],
					loc: { start: 1993, end: 1997 }
				},
				{
					kind: 'EnumValueDefinition',
					name: {
						kind: 'Name',
						value: 'price',
						loc: { start: 2000, end: 2005 }
					},
					directives: [],
					loc: { start: 2000, end: 2005 }
				},
				{
					kind: 'EnumValueDefinition',
					name: {
						kind: 'Name',
						value: 'averageRating',
						loc: { start: 2008, end: 2021 }
					},
					directives: [],
					loc: { start: 2008, end: 2021 }
				},
				{
					kind: 'EnumValueDefinition',
					name: {
						kind: 'Name',
						value: 'createdAt',
						loc: { start: 2024, end: 2033 }
					},
					directives: [],
					loc: { start: 2024, end: 2033 }
				}
			],
			loc: { start: 1963, end: 2035 }
		},
		{
			kind: 'InputObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'OrderByInput',
				loc: { start: 2043, end: 2055 }
			},
			directives: [],
			fields: [
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'field',
						loc: { start: 2060, end: 2065 }
					},
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'SortableField',
								loc: { start: 2067, end: 2080 }
							},
							loc: { start: 2067, end: 2080 }
						},
						loc: { start: 2067, end: 2081 }
					},
					directives: [],
					loc: { start: 2060, end: 2081 }
				},
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'order',
						loc: { start: 2084, end: 2089 }
					},
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'SortOrder',
								loc: { start: 2091, end: 2100 }
							},
							loc: { start: 2091, end: 2100 }
						},
						loc: { start: 2091, end: 2101 }
					},
					directives: [],
					loc: { start: 2084, end: 2101 }
				}
			],
			loc: { start: 2037, end: 2103 }
		},
		{
			kind: 'ObjectTypeExtension',
			name: {
				kind: 'Name',
				value: 'Query',
				loc: { start: 2117, end: 2122 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'product',
						loc: { start: 2127, end: 2134 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'id',
								loc: { start: 2135, end: 2137 }
							},
							type: {
								kind: 'NonNullType',
								type: {
									kind: 'NamedType',
									name: {
										kind: 'Name',
										value: 'ID',
										loc: { start: 2139, end: 2141 }
									},
									loc: { start: 2139, end: 2141 }
								},
								loc: { start: 2139, end: 2142 }
							},
							directives: [],
							loc: { start: 2135, end: 2142 }
						}
					],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'Product',
							loc: { start: 2145, end: 2152 }
						},
						loc: { start: 2145, end: 2152 }
					},
					directives: [],
					loc: { start: 2127, end: 2152 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'products',
						loc: { start: 2155, end: 2163 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'where',
								loc: { start: 2164, end: 2169 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'ProductWhereInput',
									loc: { start: 2171, end: 2188 }
								},
								loc: { start: 2171, end: 2188 }
							},
							directives: [],
							loc: { start: 2164, end: 2188 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 2190, end: 2194 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2196, end: 2199 }
								},
								loc: { start: 2196, end: 2199 }
							},
							directives: [],
							loc: { start: 2190, end: 2199 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'orderBy',
								loc: { start: 2201, end: 2208 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'OrderByInput',
									loc: { start: 2210, end: 2222 }
								},
								loc: { start: 2210, end: 2222 }
							},
							directives: [],
							loc: { start: 2201, end: 2222 }
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
								kind: 'NonNullType',
								type: {
									kind: 'NamedType',
									name: {
										kind: 'Name',
										value: 'Product',
										loc: { start: 2238, end: 2245 }
									},
									loc: { start: 2238, end: 2245 }
								},
								loc: { start: 2238, end: 2246 }
							},
							loc: { start: 2237, end: 2247 }
						},
						loc: { start: 2237, end: 2248 }
					},
					directives: [],
					loc: { start: 2155, end: 2248 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'productsConnection',
						loc: { start: 2251, end: 2269 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'where',
								loc: { start: 2270, end: 2275 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'ProductWhereInput',
									loc: { start: 2277, end: 2294 }
								},
								loc: { start: 2277, end: 2294 }
							},
							directives: [],
							loc: { start: 2270, end: 2294 }
						}
					],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Connection',
								loc: { start: 2297, end: 2307 }
							},
							loc: { start: 2297, end: 2307 }
						},
						loc: { start: 2297, end: 2308 }
					},
					directives: [],
					loc: { start: 2251, end: 2308 }
				}
			],
			loc: { start: 2105, end: 2310 }
		},
		{
			kind: 'ObjectTypeExtension',
			name: {
				kind: 'Name',
				value: 'Mutation',
				loc: { start: 2324, end: 2332 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'productCalculateAndUpdateAverageRating',
						loc: { start: 2337, end: 2375 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'id',
								loc: { start: 2376, end: 2378 }
							},
							type: {
								kind: 'NonNullType',
								type: {
									kind: 'NamedType',
									name: {
										kind: 'Name',
										value: 'ID',
										loc: { start: 2380, end: 2382 }
									},
									loc: { start: 2380, end: 2382 }
								},
								loc: { start: 2380, end: 2383 }
							},
							directives: [],
							loc: { start: 2376, end: 2383 }
						}
					],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'Product',
							loc: { start: 2386, end: 2393 }
						},
						loc: { start: 2386, end: 2393 }
					},
					directives: [],
					loc: { start: 2337, end: 2393 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'productsCalculateAndUpdateAverageRating',
						loc: { start: 2396, end: 2435 }
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
										loc: { start: 2438, end: 2445 }
									},
									loc: { start: 2438, end: 2445 }
								},
								loc: { start: 2438, end: 2446 }
							},
							loc: { start: 2437, end: 2447 }
						},
						loc: { start: 2437, end: 2448 }
					},
					directives: [],
					loc: { start: 2396, end: 2448 }
				}
			],
			loc: { start: 2312, end: 2450 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Product',
				loc: { start: 2457, end: 2464 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'id',
						loc: { start: 2469, end: 2471 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 2473, end: 2475 }
							},
							loc: { start: 2473, end: 2475 }
						},
						loc: { start: 2473, end: 2476 }
					},
					directives: [],
					loc: { start: 2469, end: 2476 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'name',
						loc: { start: 2479, end: 2483 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 2485, end: 2491 }
							},
							loc: { start: 2485, end: 2491 }
						},
						loc: { start: 2485, end: 2492 }
					},
					directives: [],
					loc: { start: 2479, end: 2492 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'slug',
						loc: { start: 2495, end: 2499 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 2501, end: 2507 }
							},
							loc: { start: 2501, end: 2507 }
						},
						loc: { start: 2501, end: 2508 }
					},
					directives: [],
					loc: { start: 2495, end: 2508 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'description',
						loc: { start: 2511, end: 2522 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 2524, end: 2530 }
							},
							loc: { start: 2524, end: 2530 }
						},
						loc: { start: 2524, end: 2531 }
					},
					directives: [],
					loc: { start: 2511, end: 2531 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'price',
						loc: { start: 2534, end: 2539 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 2541, end: 2544 }
							},
							loc: { start: 2541, end: 2544 }
						},
						loc: { start: 2541, end: 2545 }
					},
					directives: [],
					loc: { start: 2534, end: 2545 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'averageRating',
						loc: { start: 2548, end: 2561 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Float',
								loc: { start: 2563, end: 2568 }
							},
							loc: { start: 2563, end: 2568 }
						},
						loc: { start: 2563, end: 2569 }
					},
					directives: [],
					loc: { start: 2548, end: 2569 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'createdAt',
						loc: { start: 2572, end: 2581 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'DateTime',
								loc: { start: 2583, end: 2591 }
							},
							loc: { start: 2583, end: 2591 }
						},
						loc: { start: 2583, end: 2592 }
					},
					directives: [],
					loc: { start: 2572, end: 2592 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'categories',
						loc: { start: 2595, end: 2605 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 2606, end: 2610 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2612, end: 2615 }
								},
								loc: { start: 2612, end: 2615 }
							},
							directives: [],
							loc: { start: 2606, end: 2615 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 2617, end: 2622 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2624, end: 2627 }
								},
								loc: { start: 2624, end: 2627 }
							},
							directives: [],
							loc: { start: 2617, end: 2627 }
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
									loc: { start: 2631, end: 2639 }
								},
								loc: { start: 2631, end: 2639 }
							},
							loc: { start: 2630, end: 2640 }
						},
						loc: { start: 2630, end: 2641 }
					},
					directives: [],
					loc: { start: 2595, end: 2641 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'collections',
						loc: { start: 2644, end: 2655 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 2656, end: 2660 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2662, end: 2665 }
								},
								loc: { start: 2662, end: 2665 }
							},
							directives: [],
							loc: { start: 2656, end: 2665 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 2667, end: 2672 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2674, end: 2677 }
								},
								loc: { start: 2674, end: 2677 }
							},
							directives: [],
							loc: { start: 2667, end: 2677 }
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
									loc: { start: 2681, end: 2691 }
								},
								loc: { start: 2681, end: 2691 }
							},
							loc: { start: 2680, end: 2692 }
						},
						loc: { start: 2680, end: 2693 }
					},
					directives: [],
					loc: { start: 2644, end: 2693 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'images',
						loc: { start: 2696, end: 2702 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 2703, end: 2707 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2709, end: 2712 }
								},
								loc: { start: 2709, end: 2712 }
							},
							directives: [],
							loc: { start: 2703, end: 2712 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 2714, end: 2719 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2721, end: 2724 }
								},
								loc: { start: 2721, end: 2724 }
							},
							directives: [],
							loc: { start: 2714, end: 2724 }
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
									loc: { start: 2728, end: 2733 }
								},
								loc: { start: 2728, end: 2733 }
							},
							loc: { start: 2727, end: 2734 }
						},
						loc: { start: 2727, end: 2735 }
					},
					directives: [],
					loc: { start: 2696, end: 2735 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'variants',
						loc: { start: 2738, end: 2746 }
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
										loc: { start: 2749, end: 2756 }
									},
									loc: { start: 2749, end: 2756 }
								},
								loc: { start: 2749, end: 2757 }
							},
							loc: { start: 2748, end: 2758 }
						},
						loc: { start: 2748, end: 2759 }
					},
					directives: [],
					loc: { start: 2738, end: 2759 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'ratings',
						loc: { start: 2762, end: 2769 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 2770, end: 2774 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2776, end: 2779 }
								},
								loc: { start: 2776, end: 2779 }
							},
							directives: [],
							loc: { start: 2770, end: 2779 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 2781, end: 2786 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2788, end: 2791 }
								},
								loc: { start: 2788, end: 2791 }
							},
							directives: [],
							loc: { start: 2781, end: 2791 }
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
										loc: { start: 2795, end: 2801 }
									},
									loc: { start: 2795, end: 2801 }
								},
								loc: { start: 2795, end: 2802 }
							},
							loc: { start: 2794, end: 2803 }
						},
						loc: { start: 2794, end: 2804 }
					},
					directives: [],
					loc: { start: 2762, end: 2804 }
				}
			],
			loc: { start: 2452, end: 2806 }
		},
		{
			kind: 'InputObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'RatingInput',
				loc: { start: 2813, end: 2824 }
			},
			directives: [],
			fields: [
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'comment',
						loc: { start: 2829, end: 2836 }
					},
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 2838, end: 2844 }
							},
							loc: { start: 2838, end: 2844 }
						},
						loc: { start: 2838, end: 2845 }
					},
					directives: [],
					loc: { start: 2829, end: 2845 }
				},
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'rating',
						loc: { start: 2848, end: 2854 }
					},
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 2856, end: 2859 }
							},
							loc: { start: 2856, end: 2859 }
						},
						loc: { start: 2856, end: 2860 }
					},
					directives: [],
					loc: { start: 2848, end: 2860 }
				},
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'userName',
						loc: { start: 2863, end: 2871 }
					},
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 2873, end: 2879 }
							},
							loc: { start: 2873, end: 2879 }
						},
						loc: { start: 2873, end: 2880 }
					},
					directives: [],
					loc: { start: 2863, end: 2880 }
				},
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'title',
						loc: { start: 2883, end: 2888 }
					},
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 2890, end: 2896 }
							},
							loc: { start: 2890, end: 2896 }
						},
						loc: { start: 2890, end: 2897 }
					},
					directives: [],
					loc: { start: 2883, end: 2897 }
				},
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'email',
						loc: { start: 2900, end: 2905 }
					},
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 2907, end: 2913 }
							},
							loc: { start: 2907, end: 2913 }
						},
						loc: { start: 2907, end: 2914 }
					},
					directives: [],
					loc: { start: 2900, end: 2914 }
				}
			],
			loc: { start: 2807, end: 2916 }
		},
		{
			kind: 'ObjectTypeExtension',
			name: {
				kind: 'Name',
				value: 'Mutation',
				loc: { start: 2930, end: 2938 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'ratingCreate',
						loc: { start: 2943, end: 2955 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'productId',
								loc: { start: 2956, end: 2965 }
							},
							type: {
								kind: 'NonNullType',
								type: {
									kind: 'NamedType',
									name: {
										kind: 'Name',
										value: 'ID',
										loc: { start: 2967, end: 2969 }
									},
									loc: { start: 2967, end: 2969 }
								},
								loc: { start: 2967, end: 2970 }
							},
							directives: [],
							loc: { start: 2956, end: 2970 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'ratingInput',
								loc: { start: 2972, end: 2983 }
							},
							type: {
								kind: 'NonNullType',
								type: {
									kind: 'NamedType',
									name: {
										kind: 'Name',
										value: 'RatingInput',
										loc: { start: 2985, end: 2996 }
									},
									loc: { start: 2985, end: 2996 }
								},
								loc: { start: 2985, end: 2997 }
							},
							directives: [],
							loc: { start: 2972, end: 2997 }
						}
					],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Rating',
								loc: { start: 3000, end: 3006 }
							},
							loc: { start: 3000, end: 3006 }
						},
						loc: { start: 3000, end: 3007 }
					},
					directives: [],
					loc: { start: 2943, end: 3007 }
				}
			],
			loc: { start: 2918, end: 3009 }
		},
		{
			kind: 'InputObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'RatingWhereInput',
				loc: { start: 3017, end: 3033 }
			},
			directives: [],
			fields: [
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'productId',
						loc: { start: 3038, end: 3047 }
					},
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'ID',
							loc: { start: 3049, end: 3051 }
						},
						loc: { start: 3049, end: 3051 }
					},
					directives: [],
					loc: { start: 3038, end: 3051 }
				}
			],
			loc: { start: 3011, end: 3053 }
		},
		{
			kind: 'ObjectTypeExtension',
			name: {
				kind: 'Name',
				value: 'Query',
				loc: { start: 3067, end: 3072 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'ratingConnection',
						loc: { start: 3077, end: 3093 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'where',
								loc: { start: 3094, end: 3099 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'RatingWhereInput',
									loc: { start: 3101, end: 3117 }
								},
								loc: { start: 3101, end: 3117 }
							},
							directives: [],
							loc: { start: 3094, end: 3117 }
						}
					],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Connection',
								loc: { start: 3120, end: 3130 }
							},
							loc: { start: 3120, end: 3130 }
						},
						loc: { start: 3120, end: 3131 }
					},
					directives: [],
					loc: { start: 3077, end: 3131 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'ratings',
						loc: { start: 3134, end: 3141 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 3142, end: 3147 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 3149, end: 3152 }
								},
								loc: { start: 3149, end: 3152 }
							},
							directives: [],
							loc: { start: 3142, end: 3152 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 3154, end: 3158 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 3160, end: 3163 }
								},
								loc: { start: 3160, end: 3163 }
							},
							directives: [],
							loc: { start: 3154, end: 3163 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'where',
								loc: { start: 3165, end: 3170 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'RatingWhereInput',
									loc: { start: 3172, end: 3188 }
								},
								loc: { start: 3172, end: 3188 }
							},
							directives: [],
							loc: { start: 3165, end: 3188 }
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
										loc: { start: 3192, end: 3198 }
									},
									loc: { start: 3192, end: 3198 }
								},
								loc: { start: 3192, end: 3199 }
							},
							loc: { start: 3191, end: 3200 }
						},
						loc: { start: 3191, end: 3201 }
					},
					directives: [],
					loc: { start: 3134, end: 3201 }
				}
			],
			loc: { start: 3055, end: 3203 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Rating',
				loc: { start: 3210, end: 3216 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'id',
						loc: { start: 3221, end: 3223 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 3225, end: 3227 }
							},
							loc: { start: 3225, end: 3227 }
						},
						loc: { start: 3225, end: 3228 }
					},
					directives: [],
					loc: { start: 3221, end: 3228 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'comment',
						loc: { start: 3231, end: 3238 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 3240, end: 3246 }
							},
							loc: { start: 3240, end: 3246 }
						},
						loc: { start: 3240, end: 3247 }
					},
					directives: [],
					loc: { start: 3231, end: 3247 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'email',
						loc: { start: 3250, end: 3255 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 3257, end: 3263 }
							},
							loc: { start: 3257, end: 3263 }
						},
						loc: { start: 3257, end: 3264 }
					},
					directives: [],
					loc: { start: 3250, end: 3264 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'userName',
						loc: { start: 3267, end: 3275 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 3277, end: 3283 }
							},
							loc: { start: 3277, end: 3283 }
						},
						loc: { start: 3277, end: 3284 }
					},
					directives: [],
					loc: { start: 3267, end: 3284 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'title',
						loc: { start: 3287, end: 3292 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 3294, end: 3300 }
							},
							loc: { start: 3294, end: 3300 }
						},
						loc: { start: 3294, end: 3301 }
					},
					directives: [],
					loc: { start: 3287, end: 3301 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'rating',
						loc: { start: 3304, end: 3310 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 3312, end: 3315 }
							},
							loc: { start: 3312, end: 3315 }
						},
						loc: { start: 3312, end: 3316 }
					},
					directives: [],
					loc: { start: 3304, end: 3316 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'createdAt',
						loc: { start: 3319, end: 3328 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'DateTime',
								loc: { start: 3330, end: 3338 }
							},
							loc: { start: 3330, end: 3338 }
						},
						loc: { start: 3330, end: 3339 }
					},
					directives: [],
					loc: { start: 3319, end: 3339 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'updatedAt',
						loc: { start: 3342, end: 3351 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'DateTime',
								loc: { start: 3353, end: 3361 }
							},
							loc: { start: 3353, end: 3361 }
						},
						loc: { start: 3353, end: 3362 }
					},
					directives: [],
					loc: { start: 3342, end: 3362 }
				}
			],
			loc: { start: 3205, end: 3364 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Query',
				loc: { start: 3370, end: 3375 }
			},
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 3365, end: 3375 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Mutation',
				loc: { start: 3382, end: 3390 }
			},
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 3377, end: 3390 }
		},
		{
			kind: 'ScalarTypeDefinition',
			name: {
				kind: 'Name',
				value: 'DateTime',
				loc: { start: 3399, end: 3407 }
			},
			directives: [],
			loc: { start: 3392, end: 3407 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Aggregate',
				loc: { start: 3414, end: 3423 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'count',
						loc: { start: 3428, end: 3433 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 3435, end: 3438 }
							},
							loc: { start: 3435, end: 3438 }
						},
						loc: { start: 3435, end: 3439 }
					},
					directives: [],
					loc: { start: 3428, end: 3439 }
				}
			],
			loc: { start: 3409, end: 3441 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Connection',
				loc: { start: 3448, end: 3458 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'aggregate',
						loc: { start: 3463, end: 3472 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Aggregate',
								loc: { start: 3474, end: 3483 }
							},
							loc: { start: 3474, end: 3483 }
						},
						loc: { start: 3474, end: 3484 }
					},
					directives: [],
					loc: { start: 3463, end: 3484 }
				}
			],
			loc: { start: 3443, end: 3486 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Variant',
				loc: { start: 3492, end: 3499 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'id',
						loc: { start: 3504, end: 3506 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 3508, end: 3510 }
							},
							loc: { start: 3508, end: 3510 }
						},
						loc: { start: 3508, end: 3511 }
					},
					directives: [],
					loc: { start: 3504, end: 3511 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'name',
						loc: { start: 3514, end: 3518 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 3520, end: 3526 }
							},
							loc: { start: 3520, end: 3526 }
						},
						loc: { start: 3520, end: 3527 }
					},
					directives: [],
					loc: { start: 3514, end: 3527 }
				}
			],
			loc: { start: 3487, end: 3529 }
		}
	],
	loc: { start: 0, end: 3530 }
} as unknown as DocumentNode;
