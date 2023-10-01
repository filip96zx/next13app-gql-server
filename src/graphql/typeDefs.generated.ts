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
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Collection',
									loc: { start: 476, end: 486 }
								},
								loc: { start: 476, end: 486 }
							},
							loc: { start: 475, end: 487 }
						},
						loc: { start: 475, end: 488 }
					},
					directives: [],
					loc: { start: 410, end: 488 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'collectionsConnection',
						loc: { start: 491, end: 512 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'where',
								loc: { start: 513, end: 518 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'CollectionWhereInput',
									loc: { start: 520, end: 540 }
								},
								loc: { start: 520, end: 540 }
							},
							directives: [],
							loc: { start: 513, end: 540 }
						}
					],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Connection',
								loc: { start: 543, end: 553 }
							},
							loc: { start: 543, end: 553 }
						},
						loc: { start: 543, end: 554 }
					},
					directives: [],
					loc: { start: 491, end: 554 }
				}
			],
			loc: { start: 388, end: 556 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Collection',
				loc: { start: 563, end: 573 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'id',
						loc: { start: 578, end: 580 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 582, end: 584 }
							},
							loc: { start: 582, end: 584 }
						},
						loc: { start: 582, end: 585 }
					},
					directives: [],
					loc: { start: 578, end: 585 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'name',
						loc: { start: 588, end: 592 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 594, end: 600 }
							},
							loc: { start: 594, end: 600 }
						},
						loc: { start: 594, end: 601 }
					},
					directives: [],
					loc: { start: 588, end: 601 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'slug',
						loc: { start: 604, end: 608 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 610, end: 616 }
							},
							loc: { start: 610, end: 616 }
						},
						loc: { start: 610, end: 617 }
					},
					directives: [],
					loc: { start: 604, end: 617 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'description',
						loc: { start: 620, end: 631 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 633, end: 639 }
							},
							loc: { start: 633, end: 639 }
						},
						loc: { start: 633, end: 640 }
					},
					directives: [],
					loc: { start: 620, end: 640 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'products',
						loc: { start: 643, end: 651 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 652, end: 656 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 658, end: 661 }
								},
								loc: { start: 658, end: 661 }
							},
							directives: [],
							loc: { start: 652, end: 661 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 663, end: 668 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 670, end: 673 }
								},
								loc: { start: 670, end: 673 }
							},
							directives: [],
							loc: { start: 663, end: 673 }
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
									value: 'Product',
									loc: { start: 677, end: 684 }
								},
								loc: { start: 677, end: 684 }
							},
							loc: { start: 676, end: 685 }
						},
						loc: { start: 676, end: 686 }
					},
					directives: [],
					loc: { start: 643, end: 686 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'images',
						loc: { start: 689, end: 695 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 696, end: 700 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 702, end: 705 }
								},
								loc: { start: 702, end: 705 }
							},
							directives: [],
							loc: { start: 696, end: 705 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 707, end: 712 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 714, end: 717 }
								},
								loc: { start: 714, end: 717 }
							},
							directives: [],
							loc: { start: 707, end: 717 }
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
										loc: { start: 721, end: 726 }
									},
									loc: { start: 721, end: 726 }
								},
								loc: { start: 721, end: 727 }
							},
							loc: { start: 720, end: 728 }
						},
						loc: { start: 720, end: 729 }
					},
					directives: [],
					loc: { start: 689, end: 729 }
				}
			],
			loc: { start: 558, end: 731 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Image',
				loc: { start: 737, end: 742 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'url',
						loc: { start: 747, end: 750 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 752, end: 758 }
							},
							loc: { start: 752, end: 758 }
						},
						loc: { start: 752, end: 759 }
					},
					directives: [],
					loc: { start: 747, end: 759 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'height',
						loc: { start: 762, end: 768 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 770, end: 773 }
							},
							loc: { start: 770, end: 773 }
						},
						loc: { start: 770, end: 774 }
					},
					directives: [],
					loc: { start: 762, end: 774 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'width',
						loc: { start: 777, end: 782 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 784, end: 787 }
							},
							loc: { start: 784, end: 787 }
						},
						loc: { start: 784, end: 788 }
					},
					directives: [],
					loc: { start: 777, end: 788 }
				}
			],
			loc: { start: 732, end: 790 }
		},
		{
			kind: 'InputObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'OrderProductInput',
				loc: { start: 797, end: 814 }
			},
			directives: [],
			fields: [
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'productId',
						loc: { start: 819, end: 828 }
					},
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 830, end: 832 }
							},
							loc: { start: 830, end: 832 }
						},
						loc: { start: 830, end: 833 }
					},
					directives: [],
					loc: { start: 819, end: 833 }
				},
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'variantId',
						loc: { start: 836, end: 845 }
					},
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 847, end: 849 }
							},
							loc: { start: 847, end: 849 }
						},
						loc: { start: 847, end: 850 }
					},
					directives: [],
					loc: { start: 836, end: 850 }
				},
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'quantity',
						loc: { start: 853, end: 861 }
					},
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 863, end: 866 }
							},
							loc: { start: 863, end: 866 }
						},
						loc: { start: 863, end: 867 }
					},
					directives: [],
					loc: { start: 853, end: 867 }
				}
			],
			loc: { start: 791, end: 869 }
		},
		{
			kind: 'ObjectTypeExtension',
			name: {
				kind: 'Name',
				value: 'Mutation',
				loc: { start: 883, end: 891 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'orderCreate',
						loc: { start: 896, end: 907 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'items',
								loc: { start: 908, end: 913 }
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
												value: 'OrderProductInput',
												loc: { start: 916, end: 933 }
											},
											loc: { start: 916, end: 933 }
										},
										loc: { start: 916, end: 934 }
									},
									loc: { start: 915, end: 935 }
								},
								loc: { start: 915, end: 936 }
							},
							directives: [],
							loc: { start: 908, end: 936 }
						}
					],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'Order',
							loc: { start: 939, end: 944 }
						},
						loc: { start: 939, end: 944 }
					},
					directives: [],
					loc: { start: 896, end: 944 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'orderItemsUpdate',
						loc: { start: 947, end: 963 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'id',
								loc: { start: 964, end: 966 }
							},
							type: {
								kind: 'NonNullType',
								type: {
									kind: 'NamedType',
									name: {
										kind: 'Name',
										value: 'ID',
										loc: { start: 968, end: 970 }
									},
									loc: { start: 968, end: 970 }
								},
								loc: { start: 968, end: 971 }
							},
							directives: [],
							loc: { start: 964, end: 971 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'items',
								loc: { start: 973, end: 978 }
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
												value: 'OrderProductInput',
												loc: { start: 981, end: 998 }
											},
											loc: { start: 981, end: 998 }
										},
										loc: { start: 981, end: 999 }
									},
									loc: { start: 980, end: 1000 }
								},
								loc: { start: 980, end: 1001 }
							},
							directives: [],
							loc: { start: 973, end: 1001 }
						}
					],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'Order',
							loc: { start: 1004, end: 1009 }
						},
						loc: { start: 1004, end: 1009 }
					},
					directives: [],
					loc: { start: 947, end: 1009 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'orderItemsIncrement',
						loc: { start: 1012, end: 1031 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'id',
								loc: { start: 1032, end: 1034 }
							},
							type: {
								kind: 'NonNullType',
								type: {
									kind: 'NamedType',
									name: {
										kind: 'Name',
										value: 'ID',
										loc: { start: 1036, end: 1038 }
									},
									loc: { start: 1036, end: 1038 }
								},
								loc: { start: 1036, end: 1039 }
							},
							directives: [],
							loc: { start: 1032, end: 1039 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'items',
								loc: { start: 1041, end: 1046 }
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
												value: 'OrderProductInput',
												loc: { start: 1049, end: 1066 }
											},
											loc: { start: 1049, end: 1066 }
										},
										loc: { start: 1049, end: 1067 }
									},
									loc: { start: 1048, end: 1068 }
								},
								loc: { start: 1048, end: 1069 }
							},
							directives: [],
							loc: { start: 1041, end: 1069 }
						}
					],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'Order',
							loc: { start: 1072, end: 1077 }
						},
						loc: { start: 1072, end: 1077 }
					},
					directives: [],
					loc: { start: 1012, end: 1077 }
				}
			],
			loc: { start: 871, end: 1079 }
		},
		{
			kind: 'ObjectTypeExtension',
			name: {
				kind: 'Name',
				value: 'Query',
				loc: { start: 1093, end: 1098 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'order',
						loc: { start: 1103, end: 1108 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'id',
								loc: { start: 1109, end: 1111 }
							},
							type: {
								kind: 'NonNullType',
								type: {
									kind: 'NamedType',
									name: {
										kind: 'Name',
										value: 'ID',
										loc: { start: 1113, end: 1115 }
									},
									loc: { start: 1113, end: 1115 }
								},
								loc: { start: 1113, end: 1116 }
							},
							directives: [],
							loc: { start: 1109, end: 1116 }
						}
					],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'Order',
							loc: { start: 1119, end: 1124 }
						},
						loc: { start: 1119, end: 1124 }
					},
					directives: [],
					loc: { start: 1103, end: 1124 }
				}
			],
			loc: { start: 1081, end: 1126 }
		},
		{
			kind: 'EnumTypeDefinition',
			name: {
				kind: 'Name',
				value: 'OrderStatus',
				loc: { start: 1133, end: 1144 }
			},
			directives: [],
			values: [
				{
					kind: 'EnumValueDefinition',
					name: {
						kind: 'Name',
						value: 'DRAFT',
						loc: { start: 1149, end: 1154 }
					},
					directives: [],
					loc: { start: 1149, end: 1154 }
				},
				{
					kind: 'EnumValueDefinition',
					name: {
						kind: 'Name',
						value: 'PENDING',
						loc: { start: 1157, end: 1164 }
					},
					directives: [],
					loc: { start: 1157, end: 1164 }
				},
				{
					kind: 'EnumValueDefinition',
					name: {
						kind: 'Name',
						value: 'PAID',
						loc: { start: 1167, end: 1171 }
					},
					directives: [],
					loc: { start: 1167, end: 1171 }
				}
			],
			loc: { start: 1128, end: 1173 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Order',
				loc: { start: 1180, end: 1185 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'id',
						loc: { start: 1190, end: 1192 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 1194, end: 1196 }
							},
							loc: { start: 1194, end: 1196 }
						},
						loc: { start: 1194, end: 1197 }
					},
					directives: [],
					loc: { start: 1190, end: 1197 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'items',
						loc: { start: 1200, end: 1205 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 1206, end: 1210 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 1212, end: 1215 }
								},
								loc: { start: 1212, end: 1215 }
							},
							directives: [],
							loc: { start: 1206, end: 1215 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 1217, end: 1222 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 1224, end: 1227 }
								},
								loc: { start: 1224, end: 1227 }
							},
							directives: [],
							loc: { start: 1217, end: 1227 }
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
										loc: { start: 1231, end: 1240 }
									},
									loc: { start: 1231, end: 1240 }
								},
								loc: { start: 1231, end: 1241 }
							},
							loc: { start: 1230, end: 1242 }
						},
						loc: { start: 1230, end: 1243 }
					},
					directives: [],
					loc: { start: 1200, end: 1243 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'status',
						loc: { start: 1246, end: 1252 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'OrderStatus',
								loc: { start: 1254, end: 1265 }
							},
							loc: { start: 1254, end: 1265 }
						},
						loc: { start: 1254, end: 1266 }
					},
					directives: [],
					loc: { start: 1246, end: 1266 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'createdAt',
						loc: { start: 1269, end: 1278 }
					},
					arguments: [],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'DateTime',
							loc: { start: 1280, end: 1288 }
						},
						loc: { start: 1280, end: 1288 }
					},
					directives: [],
					loc: { start: 1269, end: 1288 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'updatedAt',
						loc: { start: 1291, end: 1300 }
					},
					arguments: [],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'DateTime',
							loc: { start: 1302, end: 1310 }
						},
						loc: { start: 1302, end: 1310 }
					},
					directives: [],
					loc: { start: 1291, end: 1310 }
				}
			],
			loc: { start: 1175, end: 1312 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'OrderItem',
				loc: { start: 1319, end: 1328 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'id',
						loc: { start: 1333, end: 1335 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 1337, end: 1339 }
							},
							loc: { start: 1337, end: 1339 }
						},
						loc: { start: 1337, end: 1340 }
					},
					directives: [],
					loc: { start: 1333, end: 1340 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'productId',
						loc: { start: 1343, end: 1352 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 1354, end: 1356 }
							},
							loc: { start: 1354, end: 1356 }
						},
						loc: { start: 1354, end: 1357 }
					},
					directives: [],
					loc: { start: 1343, end: 1357 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'variantId',
						loc: { start: 1360, end: 1369 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 1371, end: 1373 }
							},
							loc: { start: 1371, end: 1373 }
						},
						loc: { start: 1371, end: 1374 }
					},
					directives: [],
					loc: { start: 1360, end: 1374 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'quantity',
						loc: { start: 1377, end: 1385 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 1387, end: 1390 }
							},
							loc: { start: 1387, end: 1390 }
						},
						loc: { start: 1387, end: 1391 }
					},
					directives: [],
					loc: { start: 1377, end: 1391 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'price',
						loc: { start: 1394, end: 1399 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 1401, end: 1404 }
							},
							loc: { start: 1401, end: 1404 }
						},
						loc: { start: 1401, end: 1405 }
					},
					directives: [],
					loc: { start: 1394, end: 1405 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'name',
						loc: { start: 1408, end: 1412 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 1414, end: 1420 }
							},
							loc: { start: 1414, end: 1420 }
						},
						loc: { start: 1414, end: 1421 }
					},
					directives: [],
					loc: { start: 1408, end: 1421 }
				}
			],
			loc: { start: 1314, end: 1423 }
		},
		{
			kind: 'InputObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'CategorySomeInput',
				loc: { start: 1430, end: 1447 }
			},
			directives: [],
			fields: [
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'slug',
						loc: { start: 1452, end: 1456 }
					},
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'String',
							loc: { start: 1458, end: 1464 }
						},
						loc: { start: 1458, end: 1464 }
					},
					directives: [],
					loc: { start: 1452, end: 1464 }
				}
			],
			loc: { start: 1424, end: 1466 }
		},
		{
			kind: 'InputObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'CollectionSomeInput',
				loc: { start: 1474, end: 1493 }
			},
			directives: [],
			fields: [
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'slug',
						loc: { start: 1498, end: 1502 }
					},
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'String',
							loc: { start: 1504, end: 1510 }
						},
						loc: { start: 1504, end: 1510 }
					},
					directives: [],
					loc: { start: 1498, end: 1510 }
				}
			],
			loc: { start: 1468, end: 1512 }
		},
		{
			kind: 'InputObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'ProductWhereInput',
				loc: { start: 1520, end: 1537 }
			},
			directives: [],
			fields: [
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'nameContains',
						loc: { start: 1542, end: 1554 }
					},
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'String',
							loc: { start: 1556, end: 1562 }
						},
						loc: { start: 1556, end: 1562 }
					},
					directives: [],
					loc: { start: 1542, end: 1562 }
				},
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'categories_some',
						loc: { start: 1565, end: 1580 }
					},
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'CategorySomeInput',
							loc: { start: 1582, end: 1599 }
						},
						loc: { start: 1582, end: 1599 }
					},
					directives: [],
					loc: { start: 1565, end: 1599 }
				},
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'collections_some',
						loc: { start: 1602, end: 1618 }
					},
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'CollectionSomeInput',
							loc: { start: 1620, end: 1639 }
						},
						loc: { start: 1620, end: 1639 }
					},
					directives: [],
					loc: { start: 1602, end: 1639 }
				},
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'excludedIds',
						loc: { start: 1642, end: 1653 }
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
									loc: { start: 1656, end: 1658 }
								},
								loc: { start: 1656, end: 1658 }
							},
							loc: { start: 1656, end: 1659 }
						},
						loc: { start: 1655, end: 1660 }
					},
					directives: [],
					loc: { start: 1642, end: 1660 }
				}
			],
			loc: { start: 1514, end: 1662 }
		},
		{
			kind: 'ObjectTypeExtension',
			name: {
				kind: 'Name',
				value: 'Query',
				loc: { start: 1676, end: 1681 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'product',
						loc: { start: 1686, end: 1693 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'id',
								loc: { start: 1694, end: 1696 }
							},
							type: {
								kind: 'NonNullType',
								type: {
									kind: 'NamedType',
									name: {
										kind: 'Name',
										value: 'ID',
										loc: { start: 1698, end: 1700 }
									},
									loc: { start: 1698, end: 1700 }
								},
								loc: { start: 1698, end: 1701 }
							},
							directives: [],
							loc: { start: 1694, end: 1701 }
						}
					],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'Product',
							loc: { start: 1704, end: 1711 }
						},
						loc: { start: 1704, end: 1711 }
					},
					directives: [],
					loc: { start: 1686, end: 1711 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'products',
						loc: { start: 1714, end: 1722 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'where',
								loc: { start: 1723, end: 1728 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'ProductWhereInput',
									loc: { start: 1730, end: 1747 }
								},
								loc: { start: 1730, end: 1747 }
							},
							directives: [],
							loc: { start: 1723, end: 1747 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 1749, end: 1753 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 1755, end: 1758 }
								},
								loc: { start: 1755, end: 1758 }
							},
							directives: [],
							loc: { start: 1749, end: 1758 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 1760, end: 1765 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 1767, end: 1770 }
								},
								loc: { start: 1767, end: 1770 }
							},
							directives: [],
							loc: { start: 1760, end: 1770 }
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
										loc: { start: 1774, end: 1781 }
									},
									loc: { start: 1774, end: 1781 }
								},
								loc: { start: 1774, end: 1782 }
							},
							loc: { start: 1773, end: 1783 }
						},
						loc: { start: 1773, end: 1784 }
					},
					directives: [],
					loc: { start: 1714, end: 1784 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'productsConnection',
						loc: { start: 1787, end: 1805 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'where',
								loc: { start: 1806, end: 1811 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'ProductWhereInput',
									loc: { start: 1813, end: 1830 }
								},
								loc: { start: 1813, end: 1830 }
							},
							directives: [],
							loc: { start: 1806, end: 1830 }
						}
					],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Connection',
								loc: { start: 1833, end: 1843 }
							},
							loc: { start: 1833, end: 1843 }
						},
						loc: { start: 1833, end: 1844 }
					},
					directives: [],
					loc: { start: 1787, end: 1844 }
				}
			],
			loc: { start: 1664, end: 1846 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Product',
				loc: { start: 1853, end: 1860 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'id',
						loc: { start: 1865, end: 1867 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 1869, end: 1871 }
							},
							loc: { start: 1869, end: 1871 }
						},
						loc: { start: 1869, end: 1872 }
					},
					directives: [],
					loc: { start: 1865, end: 1872 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'name',
						loc: { start: 1875, end: 1879 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 1881, end: 1887 }
							},
							loc: { start: 1881, end: 1887 }
						},
						loc: { start: 1881, end: 1888 }
					},
					directives: [],
					loc: { start: 1875, end: 1888 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'slug',
						loc: { start: 1891, end: 1895 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 1897, end: 1903 }
							},
							loc: { start: 1897, end: 1903 }
						},
						loc: { start: 1897, end: 1904 }
					},
					directives: [],
					loc: { start: 1891, end: 1904 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'description',
						loc: { start: 1907, end: 1918 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 1920, end: 1926 }
							},
							loc: { start: 1920, end: 1926 }
						},
						loc: { start: 1920, end: 1927 }
					},
					directives: [],
					loc: { start: 1907, end: 1927 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'price',
						loc: { start: 1930, end: 1935 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 1937, end: 1940 }
							},
							loc: { start: 1937, end: 1940 }
						},
						loc: { start: 1937, end: 1941 }
					},
					directives: [],
					loc: { start: 1930, end: 1941 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'categories',
						loc: { start: 1944, end: 1954 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 1955, end: 1959 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 1961, end: 1964 }
								},
								loc: { start: 1961, end: 1964 }
							},
							directives: [],
							loc: { start: 1955, end: 1964 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 1966, end: 1971 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 1973, end: 1976 }
								},
								loc: { start: 1973, end: 1976 }
							},
							directives: [],
							loc: { start: 1966, end: 1976 }
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
									loc: { start: 1980, end: 1988 }
								},
								loc: { start: 1980, end: 1988 }
							},
							loc: { start: 1979, end: 1989 }
						},
						loc: { start: 1979, end: 1990 }
					},
					directives: [],
					loc: { start: 1944, end: 1990 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'collections',
						loc: { start: 1993, end: 2004 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 2005, end: 2009 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2011, end: 2014 }
								},
								loc: { start: 2011, end: 2014 }
							},
							directives: [],
							loc: { start: 2005, end: 2014 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 2016, end: 2021 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2023, end: 2026 }
								},
								loc: { start: 2023, end: 2026 }
							},
							directives: [],
							loc: { start: 2016, end: 2026 }
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
									loc: { start: 2030, end: 2040 }
								},
								loc: { start: 2030, end: 2040 }
							},
							loc: { start: 2029, end: 2041 }
						},
						loc: { start: 2029, end: 2042 }
					},
					directives: [],
					loc: { start: 1993, end: 2042 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'images',
						loc: { start: 2045, end: 2051 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 2052, end: 2056 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2058, end: 2061 }
								},
								loc: { start: 2058, end: 2061 }
							},
							directives: [],
							loc: { start: 2052, end: 2061 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 2063, end: 2068 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2070, end: 2073 }
								},
								loc: { start: 2070, end: 2073 }
							},
							directives: [],
							loc: { start: 2063, end: 2073 }
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
									loc: { start: 2077, end: 2082 }
								},
								loc: { start: 2077, end: 2082 }
							},
							loc: { start: 2076, end: 2083 }
						},
						loc: { start: 2076, end: 2084 }
					},
					directives: [],
					loc: { start: 2045, end: 2084 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'variants',
						loc: { start: 2087, end: 2095 }
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
										loc: { start: 2098, end: 2105 }
									},
									loc: { start: 2098, end: 2105 }
								},
								loc: { start: 2098, end: 2106 }
							},
							loc: { start: 2097, end: 2107 }
						},
						loc: { start: 2097, end: 2108 }
					},
					directives: [],
					loc: { start: 2087, end: 2108 }
				}
			],
			loc: { start: 1848, end: 2110 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Query',
				loc: { start: 2116, end: 2121 }
			},
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 2111, end: 2121 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Mutation',
				loc: { start: 2128, end: 2136 }
			},
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 2123, end: 2136 }
		},
		{
			kind: 'ScalarTypeDefinition',
			name: {
				kind: 'Name',
				value: 'DateTime',
				loc: { start: 2145, end: 2153 }
			},
			directives: [],
			loc: { start: 2138, end: 2153 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Aggregate',
				loc: { start: 2160, end: 2169 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'count',
						loc: { start: 2174, end: 2179 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 2181, end: 2184 }
							},
							loc: { start: 2181, end: 2184 }
						},
						loc: { start: 2181, end: 2185 }
					},
					directives: [],
					loc: { start: 2174, end: 2185 }
				}
			],
			loc: { start: 2155, end: 2187 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Connection',
				loc: { start: 2194, end: 2204 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'aggregate',
						loc: { start: 2209, end: 2218 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Aggregate',
								loc: { start: 2220, end: 2229 }
							},
							loc: { start: 2220, end: 2229 }
						},
						loc: { start: 2220, end: 2230 }
					},
					directives: [],
					loc: { start: 2209, end: 2230 }
				}
			],
			loc: { start: 2189, end: 2232 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Variant',
				loc: { start: 2238, end: 2245 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'id',
						loc: { start: 2250, end: 2252 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 2254, end: 2256 }
							},
							loc: { start: 2254, end: 2256 }
						},
						loc: { start: 2254, end: 2257 }
					},
					directives: [],
					loc: { start: 2250, end: 2257 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'name',
						loc: { start: 2260, end: 2264 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 2266, end: 2272 }
							},
							loc: { start: 2266, end: 2272 }
						},
						loc: { start: 2266, end: 2273 }
					},
					directives: [],
					loc: { start: 2260, end: 2273 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'value',
						loc: { start: 2276, end: 2281 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 2283, end: 2289 }
							},
							loc: { start: 2283, end: 2289 }
						},
						loc: { start: 2283, end: 2290 }
					},
					directives: [],
					loc: { start: 2276, end: 2290 }
				}
			],
			loc: { start: 2233, end: 2292 }
		}
	],
	loc: { start: 0, end: 2293 }
} as unknown as DocumentNode;
