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
						value: 'productsRelated',
						loc: { start: 2251, end: 2266 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'where',
								loc: { start: 2267, end: 2272 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'ProductWhereInput',
									loc: { start: 2274, end: 2291 }
								},
								loc: { start: 2274, end: 2291 }
							},
							directives: [],
							loc: { start: 2267, end: 2291 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 2293, end: 2297 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2299, end: 2302 }
								},
								loc: { start: 2299, end: 2302 }
							},
							directives: [],
							loc: { start: 2293, end: 2302 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'orderBy',
								loc: { start: 2304, end: 2311 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'OrderByInput',
									loc: { start: 2313, end: 2325 }
								},
								loc: { start: 2313, end: 2325 }
							},
							directives: [],
							loc: { start: 2304, end: 2325 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 2327, end: 2332 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2334, end: 2337 }
								},
								loc: { start: 2334, end: 2337 }
							},
							directives: [],
							loc: { start: 2327, end: 2337 }
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
										loc: { start: 2341, end: 2348 }
									},
									loc: { start: 2341, end: 2348 }
								},
								loc: { start: 2341, end: 2349 }
							},
							loc: { start: 2340, end: 2350 }
						},
						loc: { start: 2340, end: 2351 }
					},
					directives: [],
					loc: { start: 2251, end: 2351 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'productsConnection',
						loc: { start: 2354, end: 2372 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'where',
								loc: { start: 2373, end: 2378 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'ProductWhereInput',
									loc: { start: 2380, end: 2397 }
								},
								loc: { start: 2380, end: 2397 }
							},
							directives: [],
							loc: { start: 2373, end: 2397 }
						}
					],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Connection',
								loc: { start: 2400, end: 2410 }
							},
							loc: { start: 2400, end: 2410 }
						},
						loc: { start: 2400, end: 2411 }
					},
					directives: [],
					loc: { start: 2354, end: 2411 }
				}
			],
			loc: { start: 2105, end: 2413 }
		},
		{
			kind: 'ObjectTypeExtension',
			name: {
				kind: 'Name',
				value: 'Mutation',
				loc: { start: 2427, end: 2435 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'productCalculateAndUpdateAverageRating',
						loc: { start: 2440, end: 2478 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'id',
								loc: { start: 2479, end: 2481 }
							},
							type: {
								kind: 'NonNullType',
								type: {
									kind: 'NamedType',
									name: {
										kind: 'Name',
										value: 'ID',
										loc: { start: 2483, end: 2485 }
									},
									loc: { start: 2483, end: 2485 }
								},
								loc: { start: 2483, end: 2486 }
							},
							directives: [],
							loc: { start: 2479, end: 2486 }
						}
					],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'Product',
							loc: { start: 2489, end: 2496 }
						},
						loc: { start: 2489, end: 2496 }
					},
					directives: [],
					loc: { start: 2440, end: 2496 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'productsCalculateAndUpdateAverageRating',
						loc: { start: 2499, end: 2538 }
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
										loc: { start: 2541, end: 2548 }
									},
									loc: { start: 2541, end: 2548 }
								},
								loc: { start: 2541, end: 2549 }
							},
							loc: { start: 2540, end: 2550 }
						},
						loc: { start: 2540, end: 2551 }
					},
					directives: [],
					loc: { start: 2499, end: 2551 }
				}
			],
			loc: { start: 2415, end: 2553 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Product',
				loc: { start: 2560, end: 2567 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'id',
						loc: { start: 2572, end: 2574 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 2576, end: 2578 }
							},
							loc: { start: 2576, end: 2578 }
						},
						loc: { start: 2576, end: 2579 }
					},
					directives: [],
					loc: { start: 2572, end: 2579 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'name',
						loc: { start: 2582, end: 2586 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 2588, end: 2594 }
							},
							loc: { start: 2588, end: 2594 }
						},
						loc: { start: 2588, end: 2595 }
					},
					directives: [],
					loc: { start: 2582, end: 2595 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'slug',
						loc: { start: 2598, end: 2602 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 2604, end: 2610 }
							},
							loc: { start: 2604, end: 2610 }
						},
						loc: { start: 2604, end: 2611 }
					},
					directives: [],
					loc: { start: 2598, end: 2611 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'description',
						loc: { start: 2614, end: 2625 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 2627, end: 2633 }
							},
							loc: { start: 2627, end: 2633 }
						},
						loc: { start: 2627, end: 2634 }
					},
					directives: [],
					loc: { start: 2614, end: 2634 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'price',
						loc: { start: 2637, end: 2642 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 2644, end: 2647 }
							},
							loc: { start: 2644, end: 2647 }
						},
						loc: { start: 2644, end: 2648 }
					},
					directives: [],
					loc: { start: 2637, end: 2648 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'averageRating',
						loc: { start: 2651, end: 2664 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Float',
								loc: { start: 2666, end: 2671 }
							},
							loc: { start: 2666, end: 2671 }
						},
						loc: { start: 2666, end: 2672 }
					},
					directives: [],
					loc: { start: 2651, end: 2672 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'createdAt',
						loc: { start: 2675, end: 2684 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'DateTime',
								loc: { start: 2686, end: 2694 }
							},
							loc: { start: 2686, end: 2694 }
						},
						loc: { start: 2686, end: 2695 }
					},
					directives: [],
					loc: { start: 2675, end: 2695 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'categories',
						loc: { start: 2698, end: 2708 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 2709, end: 2713 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2715, end: 2718 }
								},
								loc: { start: 2715, end: 2718 }
							},
							directives: [],
							loc: { start: 2709, end: 2718 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 2720, end: 2725 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2727, end: 2730 }
								},
								loc: { start: 2727, end: 2730 }
							},
							directives: [],
							loc: { start: 2720, end: 2730 }
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
									loc: { start: 2734, end: 2742 }
								},
								loc: { start: 2734, end: 2742 }
							},
							loc: { start: 2733, end: 2743 }
						},
						loc: { start: 2733, end: 2744 }
					},
					directives: [],
					loc: { start: 2698, end: 2744 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'collections',
						loc: { start: 2747, end: 2758 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 2759, end: 2763 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2765, end: 2768 }
								},
								loc: { start: 2765, end: 2768 }
							},
							directives: [],
							loc: { start: 2759, end: 2768 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 2770, end: 2775 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2777, end: 2780 }
								},
								loc: { start: 2777, end: 2780 }
							},
							directives: [],
							loc: { start: 2770, end: 2780 }
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
									loc: { start: 2784, end: 2794 }
								},
								loc: { start: 2784, end: 2794 }
							},
							loc: { start: 2783, end: 2795 }
						},
						loc: { start: 2783, end: 2796 }
					},
					directives: [],
					loc: { start: 2747, end: 2796 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'images',
						loc: { start: 2799, end: 2805 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 2806, end: 2810 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2812, end: 2815 }
								},
								loc: { start: 2812, end: 2815 }
							},
							directives: [],
							loc: { start: 2806, end: 2815 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 2817, end: 2822 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2824, end: 2827 }
								},
								loc: { start: 2824, end: 2827 }
							},
							directives: [],
							loc: { start: 2817, end: 2827 }
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
									loc: { start: 2831, end: 2836 }
								},
								loc: { start: 2831, end: 2836 }
							},
							loc: { start: 2830, end: 2837 }
						},
						loc: { start: 2830, end: 2838 }
					},
					directives: [],
					loc: { start: 2799, end: 2838 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'variants',
						loc: { start: 2841, end: 2849 }
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
										loc: { start: 2852, end: 2859 }
									},
									loc: { start: 2852, end: 2859 }
								},
								loc: { start: 2852, end: 2860 }
							},
							loc: { start: 2851, end: 2861 }
						},
						loc: { start: 2851, end: 2862 }
					},
					directives: [],
					loc: { start: 2841, end: 2862 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'ratings',
						loc: { start: 2865, end: 2872 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 2873, end: 2877 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2879, end: 2882 }
								},
								loc: { start: 2879, end: 2882 }
							},
							directives: [],
							loc: { start: 2873, end: 2882 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 2884, end: 2889 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2891, end: 2894 }
								},
								loc: { start: 2891, end: 2894 }
							},
							directives: [],
							loc: { start: 2884, end: 2894 }
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
										loc: { start: 2898, end: 2904 }
									},
									loc: { start: 2898, end: 2904 }
								},
								loc: { start: 2898, end: 2905 }
							},
							loc: { start: 2897, end: 2906 }
						},
						loc: { start: 2897, end: 2907 }
					},
					directives: [],
					loc: { start: 2865, end: 2907 }
				}
			],
			loc: { start: 2555, end: 2909 }
		},
		{
			kind: 'InputObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'RatingInput',
				loc: { start: 2916, end: 2927 }
			},
			directives: [],
			fields: [
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'comment',
						loc: { start: 2932, end: 2939 }
					},
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 2941, end: 2947 }
							},
							loc: { start: 2941, end: 2947 }
						},
						loc: { start: 2941, end: 2948 }
					},
					directives: [],
					loc: { start: 2932, end: 2948 }
				},
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'rating',
						loc: { start: 2951, end: 2957 }
					},
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 2959, end: 2962 }
							},
							loc: { start: 2959, end: 2962 }
						},
						loc: { start: 2959, end: 2963 }
					},
					directives: [],
					loc: { start: 2951, end: 2963 }
				},
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'userName',
						loc: { start: 2966, end: 2974 }
					},
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 2976, end: 2982 }
							},
							loc: { start: 2976, end: 2982 }
						},
						loc: { start: 2976, end: 2983 }
					},
					directives: [],
					loc: { start: 2966, end: 2983 }
				},
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'title',
						loc: { start: 2986, end: 2991 }
					},
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 2993, end: 2999 }
							},
							loc: { start: 2993, end: 2999 }
						},
						loc: { start: 2993, end: 3000 }
					},
					directives: [],
					loc: { start: 2986, end: 3000 }
				},
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'email',
						loc: { start: 3003, end: 3008 }
					},
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
					loc: { start: 3003, end: 3017 }
				}
			],
			loc: { start: 2910, end: 3019 }
		},
		{
			kind: 'ObjectTypeExtension',
			name: {
				kind: 'Name',
				value: 'Mutation',
				loc: { start: 3033, end: 3041 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'ratingCreate',
						loc: { start: 3046, end: 3058 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'productId',
								loc: { start: 3059, end: 3068 }
							},
							type: {
								kind: 'NonNullType',
								type: {
									kind: 'NamedType',
									name: {
										kind: 'Name',
										value: 'ID',
										loc: { start: 3070, end: 3072 }
									},
									loc: { start: 3070, end: 3072 }
								},
								loc: { start: 3070, end: 3073 }
							},
							directives: [],
							loc: { start: 3059, end: 3073 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'ratingInput',
								loc: { start: 3075, end: 3086 }
							},
							type: {
								kind: 'NonNullType',
								type: {
									kind: 'NamedType',
									name: {
										kind: 'Name',
										value: 'RatingInput',
										loc: { start: 3088, end: 3099 }
									},
									loc: { start: 3088, end: 3099 }
								},
								loc: { start: 3088, end: 3100 }
							},
							directives: [],
							loc: { start: 3075, end: 3100 }
						}
					],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Rating',
								loc: { start: 3103, end: 3109 }
							},
							loc: { start: 3103, end: 3109 }
						},
						loc: { start: 3103, end: 3110 }
					},
					directives: [],
					loc: { start: 3046, end: 3110 }
				}
			],
			loc: { start: 3021, end: 3112 }
		},
		{
			kind: 'InputObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'RatingWhereInput',
				loc: { start: 3120, end: 3136 }
			},
			directives: [],
			fields: [
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'productId',
						loc: { start: 3141, end: 3150 }
					},
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'ID',
							loc: { start: 3152, end: 3154 }
						},
						loc: { start: 3152, end: 3154 }
					},
					directives: [],
					loc: { start: 3141, end: 3154 }
				}
			],
			loc: { start: 3114, end: 3156 }
		},
		{
			kind: 'ObjectTypeExtension',
			name: {
				kind: 'Name',
				value: 'Query',
				loc: { start: 3170, end: 3175 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'ratingConnection',
						loc: { start: 3180, end: 3196 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'where',
								loc: { start: 3197, end: 3202 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'RatingWhereInput',
									loc: { start: 3204, end: 3220 }
								},
								loc: { start: 3204, end: 3220 }
							},
							directives: [],
							loc: { start: 3197, end: 3220 }
						}
					],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Connection',
								loc: { start: 3223, end: 3233 }
							},
							loc: { start: 3223, end: 3233 }
						},
						loc: { start: 3223, end: 3234 }
					},
					directives: [],
					loc: { start: 3180, end: 3234 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'ratings',
						loc: { start: 3237, end: 3244 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 3245, end: 3250 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 3252, end: 3255 }
								},
								loc: { start: 3252, end: 3255 }
							},
							directives: [],
							loc: { start: 3245, end: 3255 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 3257, end: 3261 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 3263, end: 3266 }
								},
								loc: { start: 3263, end: 3266 }
							},
							directives: [],
							loc: { start: 3257, end: 3266 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'where',
								loc: { start: 3268, end: 3273 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'RatingWhereInput',
									loc: { start: 3275, end: 3291 }
								},
								loc: { start: 3275, end: 3291 }
							},
							directives: [],
							loc: { start: 3268, end: 3291 }
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
										loc: { start: 3295, end: 3301 }
									},
									loc: { start: 3295, end: 3301 }
								},
								loc: { start: 3295, end: 3302 }
							},
							loc: { start: 3294, end: 3303 }
						},
						loc: { start: 3294, end: 3304 }
					},
					directives: [],
					loc: { start: 3237, end: 3304 }
				}
			],
			loc: { start: 3158, end: 3306 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Rating',
				loc: { start: 3313, end: 3319 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'id',
						loc: { start: 3324, end: 3326 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 3328, end: 3330 }
							},
							loc: { start: 3328, end: 3330 }
						},
						loc: { start: 3328, end: 3331 }
					},
					directives: [],
					loc: { start: 3324, end: 3331 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'comment',
						loc: { start: 3334, end: 3341 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 3343, end: 3349 }
							},
							loc: { start: 3343, end: 3349 }
						},
						loc: { start: 3343, end: 3350 }
					},
					directives: [],
					loc: { start: 3334, end: 3350 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'email',
						loc: { start: 3353, end: 3358 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 3360, end: 3366 }
							},
							loc: { start: 3360, end: 3366 }
						},
						loc: { start: 3360, end: 3367 }
					},
					directives: [],
					loc: { start: 3353, end: 3367 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'userName',
						loc: { start: 3370, end: 3378 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 3380, end: 3386 }
							},
							loc: { start: 3380, end: 3386 }
						},
						loc: { start: 3380, end: 3387 }
					},
					directives: [],
					loc: { start: 3370, end: 3387 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'title',
						loc: { start: 3390, end: 3395 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 3397, end: 3403 }
							},
							loc: { start: 3397, end: 3403 }
						},
						loc: { start: 3397, end: 3404 }
					},
					directives: [],
					loc: { start: 3390, end: 3404 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'rating',
						loc: { start: 3407, end: 3413 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 3415, end: 3418 }
							},
							loc: { start: 3415, end: 3418 }
						},
						loc: { start: 3415, end: 3419 }
					},
					directives: [],
					loc: { start: 3407, end: 3419 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'createdAt',
						loc: { start: 3422, end: 3431 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'DateTime',
								loc: { start: 3433, end: 3441 }
							},
							loc: { start: 3433, end: 3441 }
						},
						loc: { start: 3433, end: 3442 }
					},
					directives: [],
					loc: { start: 3422, end: 3442 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'updatedAt',
						loc: { start: 3445, end: 3454 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'DateTime',
								loc: { start: 3456, end: 3464 }
							},
							loc: { start: 3456, end: 3464 }
						},
						loc: { start: 3456, end: 3465 }
					},
					directives: [],
					loc: { start: 3445, end: 3465 }
				}
			],
			loc: { start: 3308, end: 3467 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Query',
				loc: { start: 3473, end: 3478 }
			},
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 3468, end: 3478 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Mutation',
				loc: { start: 3485, end: 3493 }
			},
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 3480, end: 3493 }
		},
		{
			kind: 'ScalarTypeDefinition',
			name: {
				kind: 'Name',
				value: 'DateTime',
				loc: { start: 3502, end: 3510 }
			},
			directives: [],
			loc: { start: 3495, end: 3510 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Aggregate',
				loc: { start: 3517, end: 3526 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'count',
						loc: { start: 3531, end: 3536 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 3538, end: 3541 }
							},
							loc: { start: 3538, end: 3541 }
						},
						loc: { start: 3538, end: 3542 }
					},
					directives: [],
					loc: { start: 3531, end: 3542 }
				}
			],
			loc: { start: 3512, end: 3544 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Connection',
				loc: { start: 3551, end: 3561 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'aggregate',
						loc: { start: 3566, end: 3575 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Aggregate',
								loc: { start: 3577, end: 3586 }
							},
							loc: { start: 3577, end: 3586 }
						},
						loc: { start: 3577, end: 3587 }
					},
					directives: [],
					loc: { start: 3566, end: 3587 }
				}
			],
			loc: { start: 3546, end: 3589 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Variant',
				loc: { start: 3595, end: 3602 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'id',
						loc: { start: 3607, end: 3609 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 3611, end: 3613 }
							},
							loc: { start: 3611, end: 3613 }
						},
						loc: { start: 3611, end: 3614 }
					},
					directives: [],
					loc: { start: 3607, end: 3614 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'name',
						loc: { start: 3617, end: 3621 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 3623, end: 3629 }
							},
							loc: { start: 3623, end: 3629 }
						},
						loc: { start: 3623, end: 3630 }
					},
					directives: [],
					loc: { start: 3617, end: 3630 }
				}
			],
			loc: { start: 3590, end: 3632 }
		}
	],
	loc: { start: 0, end: 3633 }
} as unknown as DocumentNode;
