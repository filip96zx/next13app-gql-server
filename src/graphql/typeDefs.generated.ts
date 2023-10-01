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
						value: 'orderUpdate',
						loc: { start: 947, end: 958 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'id',
								loc: { start: 959, end: 961 }
							},
							type: {
								kind: 'NonNullType',
								type: {
									kind: 'NamedType',
									name: {
										kind: 'Name',
										value: 'ID',
										loc: { start: 963, end: 965 }
									},
									loc: { start: 963, end: 965 }
								},
								loc: { start: 963, end: 966 }
							},
							directives: [],
							loc: { start: 959, end: 966 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'items',
								loc: { start: 968, end: 973 }
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
												loc: { start: 976, end: 993 }
											},
											loc: { start: 976, end: 993 }
										},
										loc: { start: 976, end: 994 }
									},
									loc: { start: 975, end: 995 }
								},
								loc: { start: 975, end: 996 }
							},
							directives: [],
							loc: { start: 968, end: 996 }
						}
					],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'Order',
							loc: { start: 999, end: 1004 }
						},
						loc: { start: 999, end: 1004 }
					},
					directives: [],
					loc: { start: 947, end: 1004 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'orderIncrement',
						loc: { start: 1007, end: 1021 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'id',
								loc: { start: 1022, end: 1024 }
							},
							type: {
								kind: 'NonNullType',
								type: {
									kind: 'NamedType',
									name: {
										kind: 'Name',
										value: 'ID',
										loc: { start: 1026, end: 1028 }
									},
									loc: { start: 1026, end: 1028 }
								},
								loc: { start: 1026, end: 1029 }
							},
							directives: [],
							loc: { start: 1022, end: 1029 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'items',
								loc: { start: 1031, end: 1036 }
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
												loc: { start: 1039, end: 1056 }
											},
											loc: { start: 1039, end: 1056 }
										},
										loc: { start: 1039, end: 1057 }
									},
									loc: { start: 1038, end: 1058 }
								},
								loc: { start: 1038, end: 1059 }
							},
							directives: [],
							loc: { start: 1031, end: 1059 }
						}
					],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'Order',
							loc: { start: 1062, end: 1067 }
						},
						loc: { start: 1062, end: 1067 }
					},
					directives: [],
					loc: { start: 1007, end: 1067 }
				}
			],
			loc: { start: 871, end: 1069 }
		},
		{
			kind: 'ObjectTypeExtension',
			name: {
				kind: 'Name',
				value: 'Query',
				loc: { start: 1083, end: 1088 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'order',
						loc: { start: 1093, end: 1098 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'id',
								loc: { start: 1099, end: 1101 }
							},
							type: {
								kind: 'NonNullType',
								type: {
									kind: 'NamedType',
									name: {
										kind: 'Name',
										value: 'ID',
										loc: { start: 1103, end: 1105 }
									},
									loc: { start: 1103, end: 1105 }
								},
								loc: { start: 1103, end: 1106 }
							},
							directives: [],
							loc: { start: 1099, end: 1106 }
						}
					],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'Order',
							loc: { start: 1109, end: 1114 }
						},
						loc: { start: 1109, end: 1114 }
					},
					directives: [],
					loc: { start: 1093, end: 1114 }
				}
			],
			loc: { start: 1071, end: 1116 }
		},
		{
			kind: 'EnumTypeDefinition',
			name: {
				kind: 'Name',
				value: 'OrderStatus',
				loc: { start: 1123, end: 1134 }
			},
			directives: [],
			values: [
				{
					kind: 'EnumValueDefinition',
					name: {
						kind: 'Name',
						value: 'DRAFT',
						loc: { start: 1139, end: 1144 }
					},
					directives: [],
					loc: { start: 1139, end: 1144 }
				},
				{
					kind: 'EnumValueDefinition',
					name: {
						kind: 'Name',
						value: 'PENDING',
						loc: { start: 1147, end: 1154 }
					},
					directives: [],
					loc: { start: 1147, end: 1154 }
				},
				{
					kind: 'EnumValueDefinition',
					name: {
						kind: 'Name',
						value: 'PAID',
						loc: { start: 1157, end: 1161 }
					},
					directives: [],
					loc: { start: 1157, end: 1161 }
				}
			],
			loc: { start: 1118, end: 1163 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Order',
				loc: { start: 1170, end: 1175 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'id',
						loc: { start: 1180, end: 1182 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 1184, end: 1186 }
							},
							loc: { start: 1184, end: 1186 }
						},
						loc: { start: 1184, end: 1187 }
					},
					directives: [],
					loc: { start: 1180, end: 1187 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'items',
						loc: { start: 1190, end: 1195 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 1196, end: 1200 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 1202, end: 1205 }
								},
								loc: { start: 1202, end: 1205 }
							},
							directives: [],
							loc: { start: 1196, end: 1205 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 1207, end: 1212 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 1214, end: 1217 }
								},
								loc: { start: 1214, end: 1217 }
							},
							directives: [],
							loc: { start: 1207, end: 1217 }
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
										loc: { start: 1221, end: 1230 }
									},
									loc: { start: 1221, end: 1230 }
								},
								loc: { start: 1221, end: 1231 }
							},
							loc: { start: 1220, end: 1232 }
						},
						loc: { start: 1220, end: 1233 }
					},
					directives: [],
					loc: { start: 1190, end: 1233 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'status',
						loc: { start: 1236, end: 1242 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'OrderStatus',
								loc: { start: 1244, end: 1255 }
							},
							loc: { start: 1244, end: 1255 }
						},
						loc: { start: 1244, end: 1256 }
					},
					directives: [],
					loc: { start: 1236, end: 1256 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'createdAt',
						loc: { start: 1259, end: 1268 }
					},
					arguments: [],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'DateTime',
							loc: { start: 1270, end: 1278 }
						},
						loc: { start: 1270, end: 1278 }
					},
					directives: [],
					loc: { start: 1259, end: 1278 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'updatedAt',
						loc: { start: 1281, end: 1290 }
					},
					arguments: [],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'DateTime',
							loc: { start: 1292, end: 1300 }
						},
						loc: { start: 1292, end: 1300 }
					},
					directives: [],
					loc: { start: 1281, end: 1300 }
				}
			],
			loc: { start: 1165, end: 1302 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'OrderItem',
				loc: { start: 1309, end: 1318 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'id',
						loc: { start: 1323, end: 1325 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 1327, end: 1329 }
							},
							loc: { start: 1327, end: 1329 }
						},
						loc: { start: 1327, end: 1330 }
					},
					directives: [],
					loc: { start: 1323, end: 1330 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'productId',
						loc: { start: 1333, end: 1342 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 1344, end: 1346 }
							},
							loc: { start: 1344, end: 1346 }
						},
						loc: { start: 1344, end: 1347 }
					},
					directives: [],
					loc: { start: 1333, end: 1347 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'variantId',
						loc: { start: 1350, end: 1359 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 1361, end: 1363 }
							},
							loc: { start: 1361, end: 1363 }
						},
						loc: { start: 1361, end: 1364 }
					},
					directives: [],
					loc: { start: 1350, end: 1364 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'quantity',
						loc: { start: 1367, end: 1375 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 1377, end: 1380 }
							},
							loc: { start: 1377, end: 1380 }
						},
						loc: { start: 1377, end: 1381 }
					},
					directives: [],
					loc: { start: 1367, end: 1381 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'price',
						loc: { start: 1384, end: 1389 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 1391, end: 1394 }
							},
							loc: { start: 1391, end: 1394 }
						},
						loc: { start: 1391, end: 1395 }
					},
					directives: [],
					loc: { start: 1384, end: 1395 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'name',
						loc: { start: 1398, end: 1402 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 1404, end: 1410 }
							},
							loc: { start: 1404, end: 1410 }
						},
						loc: { start: 1404, end: 1411 }
					},
					directives: [],
					loc: { start: 1398, end: 1411 }
				}
			],
			loc: { start: 1304, end: 1413 }
		},
		{
			kind: 'InputObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'CategorySomeInput',
				loc: { start: 1420, end: 1437 }
			},
			directives: [],
			fields: [
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'slug',
						loc: { start: 1442, end: 1446 }
					},
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'String',
							loc: { start: 1448, end: 1454 }
						},
						loc: { start: 1448, end: 1454 }
					},
					directives: [],
					loc: { start: 1442, end: 1454 }
				}
			],
			loc: { start: 1414, end: 1456 }
		},
		{
			kind: 'InputObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'CollectionSomeInput',
				loc: { start: 1464, end: 1483 }
			},
			directives: [],
			fields: [
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'slug',
						loc: { start: 1488, end: 1492 }
					},
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'String',
							loc: { start: 1494, end: 1500 }
						},
						loc: { start: 1494, end: 1500 }
					},
					directives: [],
					loc: { start: 1488, end: 1500 }
				}
			],
			loc: { start: 1458, end: 1502 }
		},
		{
			kind: 'InputObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'ProductWhereInput',
				loc: { start: 1510, end: 1527 }
			},
			directives: [],
			fields: [
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'nameContains',
						loc: { start: 1532, end: 1544 }
					},
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'String',
							loc: { start: 1546, end: 1552 }
						},
						loc: { start: 1546, end: 1552 }
					},
					directives: [],
					loc: { start: 1532, end: 1552 }
				},
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'categories_some',
						loc: { start: 1555, end: 1570 }
					},
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'CategorySomeInput',
							loc: { start: 1572, end: 1589 }
						},
						loc: { start: 1572, end: 1589 }
					},
					directives: [],
					loc: { start: 1555, end: 1589 }
				},
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'collections_some',
						loc: { start: 1592, end: 1608 }
					},
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'CollectionSomeInput',
							loc: { start: 1610, end: 1629 }
						},
						loc: { start: 1610, end: 1629 }
					},
					directives: [],
					loc: { start: 1592, end: 1629 }
				},
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'excludedIds',
						loc: { start: 1632, end: 1643 }
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
									loc: { start: 1646, end: 1648 }
								},
								loc: { start: 1646, end: 1648 }
							},
							loc: { start: 1646, end: 1649 }
						},
						loc: { start: 1645, end: 1650 }
					},
					directives: [],
					loc: { start: 1632, end: 1650 }
				}
			],
			loc: { start: 1504, end: 1652 }
		},
		{
			kind: 'ObjectTypeExtension',
			name: {
				kind: 'Name',
				value: 'Query',
				loc: { start: 1666, end: 1671 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'product',
						loc: { start: 1676, end: 1683 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'id',
								loc: { start: 1684, end: 1686 }
							},
							type: {
								kind: 'NonNullType',
								type: {
									kind: 'NamedType',
									name: {
										kind: 'Name',
										value: 'ID',
										loc: { start: 1688, end: 1690 }
									},
									loc: { start: 1688, end: 1690 }
								},
								loc: { start: 1688, end: 1691 }
							},
							directives: [],
							loc: { start: 1684, end: 1691 }
						}
					],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'Product',
							loc: { start: 1694, end: 1701 }
						},
						loc: { start: 1694, end: 1701 }
					},
					directives: [],
					loc: { start: 1676, end: 1701 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'products',
						loc: { start: 1704, end: 1712 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'where',
								loc: { start: 1713, end: 1718 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'ProductWhereInput',
									loc: { start: 1720, end: 1737 }
								},
								loc: { start: 1720, end: 1737 }
							},
							directives: [],
							loc: { start: 1713, end: 1737 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 1739, end: 1743 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 1745, end: 1748 }
								},
								loc: { start: 1745, end: 1748 }
							},
							directives: [],
							loc: { start: 1739, end: 1748 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 1750, end: 1755 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 1757, end: 1760 }
								},
								loc: { start: 1757, end: 1760 }
							},
							directives: [],
							loc: { start: 1750, end: 1760 }
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
										loc: { start: 1764, end: 1771 }
									},
									loc: { start: 1764, end: 1771 }
								},
								loc: { start: 1764, end: 1772 }
							},
							loc: { start: 1763, end: 1773 }
						},
						loc: { start: 1763, end: 1774 }
					},
					directives: [],
					loc: { start: 1704, end: 1774 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'productsConnection',
						loc: { start: 1777, end: 1795 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'where',
								loc: { start: 1796, end: 1801 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'ProductWhereInput',
									loc: { start: 1803, end: 1820 }
								},
								loc: { start: 1803, end: 1820 }
							},
							directives: [],
							loc: { start: 1796, end: 1820 }
						}
					],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Connection',
								loc: { start: 1823, end: 1833 }
							},
							loc: { start: 1823, end: 1833 }
						},
						loc: { start: 1823, end: 1834 }
					},
					directives: [],
					loc: { start: 1777, end: 1834 }
				}
			],
			loc: { start: 1654, end: 1836 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Product',
				loc: { start: 1843, end: 1850 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'id',
						loc: { start: 1855, end: 1857 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 1859, end: 1861 }
							},
							loc: { start: 1859, end: 1861 }
						},
						loc: { start: 1859, end: 1862 }
					},
					directives: [],
					loc: { start: 1855, end: 1862 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'name',
						loc: { start: 1865, end: 1869 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 1871, end: 1877 }
							},
							loc: { start: 1871, end: 1877 }
						},
						loc: { start: 1871, end: 1878 }
					},
					directives: [],
					loc: { start: 1865, end: 1878 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'slug',
						loc: { start: 1881, end: 1885 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 1887, end: 1893 }
							},
							loc: { start: 1887, end: 1893 }
						},
						loc: { start: 1887, end: 1894 }
					},
					directives: [],
					loc: { start: 1881, end: 1894 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'description',
						loc: { start: 1897, end: 1908 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 1910, end: 1916 }
							},
							loc: { start: 1910, end: 1916 }
						},
						loc: { start: 1910, end: 1917 }
					},
					directives: [],
					loc: { start: 1897, end: 1917 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'price',
						loc: { start: 1920, end: 1925 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 1927, end: 1930 }
							},
							loc: { start: 1927, end: 1930 }
						},
						loc: { start: 1927, end: 1931 }
					},
					directives: [],
					loc: { start: 1920, end: 1931 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'categories',
						loc: { start: 1934, end: 1944 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 1945, end: 1949 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 1951, end: 1954 }
								},
								loc: { start: 1951, end: 1954 }
							},
							directives: [],
							loc: { start: 1945, end: 1954 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 1956, end: 1961 }
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
							loc: { start: 1956, end: 1966 }
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
									loc: { start: 1970, end: 1978 }
								},
								loc: { start: 1970, end: 1978 }
							},
							loc: { start: 1969, end: 1979 }
						},
						loc: { start: 1969, end: 1980 }
					},
					directives: [],
					loc: { start: 1934, end: 1980 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'collections',
						loc: { start: 1983, end: 1994 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 1995, end: 1999 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2001, end: 2004 }
								},
								loc: { start: 2001, end: 2004 }
							},
							directives: [],
							loc: { start: 1995, end: 2004 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 2006, end: 2011 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2013, end: 2016 }
								},
								loc: { start: 2013, end: 2016 }
							},
							directives: [],
							loc: { start: 2006, end: 2016 }
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
									loc: { start: 2020, end: 2030 }
								},
								loc: { start: 2020, end: 2030 }
							},
							loc: { start: 2019, end: 2031 }
						},
						loc: { start: 2019, end: 2032 }
					},
					directives: [],
					loc: { start: 1983, end: 2032 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'images',
						loc: { start: 2035, end: 2041 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 2042, end: 2046 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2048, end: 2051 }
								},
								loc: { start: 2048, end: 2051 }
							},
							directives: [],
							loc: { start: 2042, end: 2051 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 2053, end: 2058 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2060, end: 2063 }
								},
								loc: { start: 2060, end: 2063 }
							},
							directives: [],
							loc: { start: 2053, end: 2063 }
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
									loc: { start: 2067, end: 2072 }
								},
								loc: { start: 2067, end: 2072 }
							},
							loc: { start: 2066, end: 2073 }
						},
						loc: { start: 2066, end: 2074 }
					},
					directives: [],
					loc: { start: 2035, end: 2074 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'variants',
						loc: { start: 2077, end: 2085 }
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
										loc: { start: 2088, end: 2095 }
									},
									loc: { start: 2088, end: 2095 }
								},
								loc: { start: 2088, end: 2096 }
							},
							loc: { start: 2087, end: 2097 }
						},
						loc: { start: 2087, end: 2098 }
					},
					directives: [],
					loc: { start: 2077, end: 2098 }
				}
			],
			loc: { start: 1838, end: 2100 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Query',
				loc: { start: 2106, end: 2111 }
			},
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 2101, end: 2111 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Mutation',
				loc: { start: 2118, end: 2126 }
			},
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 2113, end: 2126 }
		},
		{
			kind: 'ScalarTypeDefinition',
			name: {
				kind: 'Name',
				value: 'DateTime',
				loc: { start: 2135, end: 2143 }
			},
			directives: [],
			loc: { start: 2128, end: 2143 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Aggregate',
				loc: { start: 2150, end: 2159 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'count',
						loc: { start: 2164, end: 2169 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 2171, end: 2174 }
							},
							loc: { start: 2171, end: 2174 }
						},
						loc: { start: 2171, end: 2175 }
					},
					directives: [],
					loc: { start: 2164, end: 2175 }
				}
			],
			loc: { start: 2145, end: 2177 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Connection',
				loc: { start: 2184, end: 2194 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'aggregate',
						loc: { start: 2199, end: 2208 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Aggregate',
								loc: { start: 2210, end: 2219 }
							},
							loc: { start: 2210, end: 2219 }
						},
						loc: { start: 2210, end: 2220 }
					},
					directives: [],
					loc: { start: 2199, end: 2220 }
				}
			],
			loc: { start: 2179, end: 2222 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Variant',
				loc: { start: 2228, end: 2235 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'id',
						loc: { start: 2240, end: 2242 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 2244, end: 2246 }
							},
							loc: { start: 2244, end: 2246 }
						},
						loc: { start: 2244, end: 2247 }
					},
					directives: [],
					loc: { start: 2240, end: 2247 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'name',
						loc: { start: 2250, end: 2254 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 2256, end: 2262 }
							},
							loc: { start: 2256, end: 2262 }
						},
						loc: { start: 2256, end: 2263 }
					},
					directives: [],
					loc: { start: 2250, end: 2263 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'value',
						loc: { start: 2266, end: 2271 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 2273, end: 2279 }
							},
							loc: { start: 2273, end: 2279 }
						},
						loc: { start: 2273, end: 2280 }
					},
					directives: [],
					loc: { start: 2266, end: 2280 }
				}
			],
			loc: { start: 2223, end: 2282 }
		}
	],
	loc: { start: 0, end: 2283 }
} as unknown as DocumentNode;
