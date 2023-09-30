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
						value: 'cartCreate',
						loc: { start: 896, end: 906 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'items',
								loc: { start: 907, end: 912 }
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
												loc: { start: 915, end: 932 }
											},
											loc: { start: 915, end: 932 }
										},
										loc: { start: 915, end: 933 }
									},
									loc: { start: 914, end: 934 }
								},
								loc: { start: 914, end: 935 }
							},
							directives: [],
							loc: { start: 907, end: 935 }
						}
					],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'Order',
							loc: { start: 938, end: 943 }
						},
						loc: { start: 938, end: 943 }
					},
					directives: [],
					loc: { start: 896, end: 943 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'cartUpdate',
						loc: { start: 946, end: 956 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'id',
								loc: { start: 957, end: 959 }
							},
							type: {
								kind: 'NonNullType',
								type: {
									kind: 'NamedType',
									name: {
										kind: 'Name',
										value: 'ID',
										loc: { start: 961, end: 963 }
									},
									loc: { start: 961, end: 963 }
								},
								loc: { start: 961, end: 964 }
							},
							directives: [],
							loc: { start: 957, end: 964 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'items',
								loc: { start: 966, end: 971 }
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
												loc: { start: 974, end: 991 }
											},
											loc: { start: 974, end: 991 }
										},
										loc: { start: 974, end: 992 }
									},
									loc: { start: 973, end: 993 }
								},
								loc: { start: 973, end: 994 }
							},
							directives: [],
							loc: { start: 966, end: 994 }
						}
					],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'Order',
							loc: { start: 997, end: 1002 }
						},
						loc: { start: 997, end: 1002 }
					},
					directives: [],
					loc: { start: 946, end: 1002 }
				}
			],
			loc: { start: 871, end: 1004 }
		},
		{
			kind: 'ObjectTypeExtension',
			name: {
				kind: 'Name',
				value: 'Query',
				loc: { start: 1018, end: 1023 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'cart',
						loc: { start: 1028, end: 1032 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'id',
								loc: { start: 1033, end: 1035 }
							},
							type: {
								kind: 'NonNullType',
								type: {
									kind: 'NamedType',
									name: {
										kind: 'Name',
										value: 'ID',
										loc: { start: 1037, end: 1039 }
									},
									loc: { start: 1037, end: 1039 }
								},
								loc: { start: 1037, end: 1040 }
							},
							directives: [],
							loc: { start: 1033, end: 1040 }
						}
					],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'Order',
							loc: { start: 1043, end: 1048 }
						},
						loc: { start: 1043, end: 1048 }
					},
					directives: [],
					loc: { start: 1028, end: 1048 }
				}
			],
			loc: { start: 1006, end: 1050 }
		},
		{
			kind: 'EnumTypeDefinition',
			name: {
				kind: 'Name',
				value: 'OrderStatus',
				loc: { start: 1057, end: 1068 }
			},
			directives: [],
			values: [
				{
					kind: 'EnumValueDefinition',
					name: {
						kind: 'Name',
						value: 'DRAFT',
						loc: { start: 1073, end: 1078 }
					},
					directives: [],
					loc: { start: 1073, end: 1078 }
				},
				{
					kind: 'EnumValueDefinition',
					name: {
						kind: 'Name',
						value: 'PENDING',
						loc: { start: 1081, end: 1088 }
					},
					directives: [],
					loc: { start: 1081, end: 1088 }
				},
				{
					kind: 'EnumValueDefinition',
					name: {
						kind: 'Name',
						value: 'PAID',
						loc: { start: 1091, end: 1095 }
					},
					directives: [],
					loc: { start: 1091, end: 1095 }
				}
			],
			loc: { start: 1052, end: 1097 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Order',
				loc: { start: 1104, end: 1109 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'id',
						loc: { start: 1114, end: 1116 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 1118, end: 1120 }
							},
							loc: { start: 1118, end: 1120 }
						},
						loc: { start: 1118, end: 1121 }
					},
					directives: [],
					loc: { start: 1114, end: 1121 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'items',
						loc: { start: 1124, end: 1129 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 1130, end: 1134 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 1136, end: 1139 }
								},
								loc: { start: 1136, end: 1139 }
							},
							directives: [],
							loc: { start: 1130, end: 1139 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 1141, end: 1146 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 1148, end: 1151 }
								},
								loc: { start: 1148, end: 1151 }
							},
							directives: [],
							loc: { start: 1141, end: 1151 }
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
										loc: { start: 1155, end: 1164 }
									},
									loc: { start: 1155, end: 1164 }
								},
								loc: { start: 1155, end: 1165 }
							},
							loc: { start: 1154, end: 1166 }
						},
						loc: { start: 1154, end: 1167 }
					},
					directives: [],
					loc: { start: 1124, end: 1167 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'status',
						loc: { start: 1170, end: 1176 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'OrderStatus',
								loc: { start: 1178, end: 1189 }
							},
							loc: { start: 1178, end: 1189 }
						},
						loc: { start: 1178, end: 1190 }
					},
					directives: [],
					loc: { start: 1170, end: 1190 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'createdAt',
						loc: { start: 1193, end: 1202 }
					},
					arguments: [],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'DateTime',
							loc: { start: 1204, end: 1212 }
						},
						loc: { start: 1204, end: 1212 }
					},
					directives: [],
					loc: { start: 1193, end: 1212 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'updatedAt',
						loc: { start: 1215, end: 1224 }
					},
					arguments: [],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'DateTime',
							loc: { start: 1226, end: 1234 }
						},
						loc: { start: 1226, end: 1234 }
					},
					directives: [],
					loc: { start: 1215, end: 1234 }
				}
			],
			loc: { start: 1099, end: 1236 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'OrderItem',
				loc: { start: 1243, end: 1252 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'id',
						loc: { start: 1257, end: 1259 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 1261, end: 1263 }
							},
							loc: { start: 1261, end: 1263 }
						},
						loc: { start: 1261, end: 1264 }
					},
					directives: [],
					loc: { start: 1257, end: 1264 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'quantity',
						loc: { start: 1267, end: 1275 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 1277, end: 1280 }
							},
							loc: { start: 1277, end: 1280 }
						},
						loc: { start: 1277, end: 1281 }
					},
					directives: [],
					loc: { start: 1267, end: 1281 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'price',
						loc: { start: 1284, end: 1289 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 1291, end: 1294 }
							},
							loc: { start: 1291, end: 1294 }
						},
						loc: { start: 1291, end: 1295 }
					},
					directives: [],
					loc: { start: 1284, end: 1295 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'name',
						loc: { start: 1298, end: 1302 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 1304, end: 1310 }
							},
							loc: { start: 1304, end: 1310 }
						},
						loc: { start: 1304, end: 1311 }
					},
					directives: [],
					loc: { start: 1298, end: 1311 }
				}
			],
			loc: { start: 1238, end: 1313 }
		},
		{
			kind: 'InputObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'CategorySomeInput',
				loc: { start: 1320, end: 1337 }
			},
			directives: [],
			fields: [
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'slug',
						loc: { start: 1342, end: 1346 }
					},
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'String',
							loc: { start: 1348, end: 1354 }
						},
						loc: { start: 1348, end: 1354 }
					},
					directives: [],
					loc: { start: 1342, end: 1354 }
				}
			],
			loc: { start: 1314, end: 1356 }
		},
		{
			kind: 'InputObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'CollectionSomeInput',
				loc: { start: 1364, end: 1383 }
			},
			directives: [],
			fields: [
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'slug',
						loc: { start: 1388, end: 1392 }
					},
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'String',
							loc: { start: 1394, end: 1400 }
						},
						loc: { start: 1394, end: 1400 }
					},
					directives: [],
					loc: { start: 1388, end: 1400 }
				}
			],
			loc: { start: 1358, end: 1402 }
		},
		{
			kind: 'InputObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'ProductWhereInput',
				loc: { start: 1410, end: 1427 }
			},
			directives: [],
			fields: [
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'nameContains',
						loc: { start: 1432, end: 1444 }
					},
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'String',
							loc: { start: 1446, end: 1452 }
						},
						loc: { start: 1446, end: 1452 }
					},
					directives: [],
					loc: { start: 1432, end: 1452 }
				},
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'categories_some',
						loc: { start: 1455, end: 1470 }
					},
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'CategorySomeInput',
							loc: { start: 1472, end: 1489 }
						},
						loc: { start: 1472, end: 1489 }
					},
					directives: [],
					loc: { start: 1455, end: 1489 }
				},
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'collections_some',
						loc: { start: 1492, end: 1508 }
					},
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'CollectionSomeInput',
							loc: { start: 1510, end: 1529 }
						},
						loc: { start: 1510, end: 1529 }
					},
					directives: [],
					loc: { start: 1492, end: 1529 }
				},
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'excludedIds',
						loc: { start: 1532, end: 1543 }
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
									loc: { start: 1546, end: 1548 }
								},
								loc: { start: 1546, end: 1548 }
							},
							loc: { start: 1546, end: 1549 }
						},
						loc: { start: 1545, end: 1550 }
					},
					directives: [],
					loc: { start: 1532, end: 1550 }
				}
			],
			loc: { start: 1404, end: 1552 }
		},
		{
			kind: 'ObjectTypeExtension',
			name: {
				kind: 'Name',
				value: 'Query',
				loc: { start: 1566, end: 1571 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'product',
						loc: { start: 1576, end: 1583 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'id',
								loc: { start: 1584, end: 1586 }
							},
							type: {
								kind: 'NonNullType',
								type: {
									kind: 'NamedType',
									name: {
										kind: 'Name',
										value: 'ID',
										loc: { start: 1588, end: 1590 }
									},
									loc: { start: 1588, end: 1590 }
								},
								loc: { start: 1588, end: 1591 }
							},
							directives: [],
							loc: { start: 1584, end: 1591 }
						}
					],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'Product',
							loc: { start: 1594, end: 1601 }
						},
						loc: { start: 1594, end: 1601 }
					},
					directives: [],
					loc: { start: 1576, end: 1601 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'products',
						loc: { start: 1604, end: 1612 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'where',
								loc: { start: 1613, end: 1618 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'ProductWhereInput',
									loc: { start: 1620, end: 1637 }
								},
								loc: { start: 1620, end: 1637 }
							},
							directives: [],
							loc: { start: 1613, end: 1637 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 1639, end: 1643 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 1645, end: 1648 }
								},
								loc: { start: 1645, end: 1648 }
							},
							directives: [],
							loc: { start: 1639, end: 1648 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 1650, end: 1655 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 1657, end: 1660 }
								},
								loc: { start: 1657, end: 1660 }
							},
							directives: [],
							loc: { start: 1650, end: 1660 }
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
										loc: { start: 1664, end: 1671 }
									},
									loc: { start: 1664, end: 1671 }
								},
								loc: { start: 1664, end: 1672 }
							},
							loc: { start: 1663, end: 1673 }
						},
						loc: { start: 1663, end: 1674 }
					},
					directives: [],
					loc: { start: 1604, end: 1674 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'productsConnection',
						loc: { start: 1677, end: 1695 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'where',
								loc: { start: 1696, end: 1701 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'ProductWhereInput',
									loc: { start: 1703, end: 1720 }
								},
								loc: { start: 1703, end: 1720 }
							},
							directives: [],
							loc: { start: 1696, end: 1720 }
						}
					],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Connection',
								loc: { start: 1723, end: 1733 }
							},
							loc: { start: 1723, end: 1733 }
						},
						loc: { start: 1723, end: 1734 }
					},
					directives: [],
					loc: { start: 1677, end: 1734 }
				}
			],
			loc: { start: 1554, end: 1736 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Product',
				loc: { start: 1743, end: 1750 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'id',
						loc: { start: 1755, end: 1757 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 1759, end: 1761 }
							},
							loc: { start: 1759, end: 1761 }
						},
						loc: { start: 1759, end: 1762 }
					},
					directives: [],
					loc: { start: 1755, end: 1762 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'name',
						loc: { start: 1765, end: 1769 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 1771, end: 1777 }
							},
							loc: { start: 1771, end: 1777 }
						},
						loc: { start: 1771, end: 1778 }
					},
					directives: [],
					loc: { start: 1765, end: 1778 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'slug',
						loc: { start: 1781, end: 1785 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 1787, end: 1793 }
							},
							loc: { start: 1787, end: 1793 }
						},
						loc: { start: 1787, end: 1794 }
					},
					directives: [],
					loc: { start: 1781, end: 1794 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'description',
						loc: { start: 1797, end: 1808 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 1810, end: 1816 }
							},
							loc: { start: 1810, end: 1816 }
						},
						loc: { start: 1810, end: 1817 }
					},
					directives: [],
					loc: { start: 1797, end: 1817 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'price',
						loc: { start: 1820, end: 1825 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 1827, end: 1830 }
							},
							loc: { start: 1827, end: 1830 }
						},
						loc: { start: 1827, end: 1831 }
					},
					directives: [],
					loc: { start: 1820, end: 1831 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'categories',
						loc: { start: 1834, end: 1844 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 1845, end: 1849 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 1851, end: 1854 }
								},
								loc: { start: 1851, end: 1854 }
							},
							directives: [],
							loc: { start: 1845, end: 1854 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 1856, end: 1861 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 1863, end: 1866 }
								},
								loc: { start: 1863, end: 1866 }
							},
							directives: [],
							loc: { start: 1856, end: 1866 }
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
									loc: { start: 1870, end: 1878 }
								},
								loc: { start: 1870, end: 1878 }
							},
							loc: { start: 1869, end: 1879 }
						},
						loc: { start: 1869, end: 1880 }
					},
					directives: [],
					loc: { start: 1834, end: 1880 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'collections',
						loc: { start: 1883, end: 1894 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 1895, end: 1899 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 1901, end: 1904 }
								},
								loc: { start: 1901, end: 1904 }
							},
							directives: [],
							loc: { start: 1895, end: 1904 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 1906, end: 1911 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 1913, end: 1916 }
								},
								loc: { start: 1913, end: 1916 }
							},
							directives: [],
							loc: { start: 1906, end: 1916 }
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
									loc: { start: 1920, end: 1930 }
								},
								loc: { start: 1920, end: 1930 }
							},
							loc: { start: 1919, end: 1931 }
						},
						loc: { start: 1919, end: 1932 }
					},
					directives: [],
					loc: { start: 1883, end: 1932 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'images',
						loc: { start: 1935, end: 1941 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 1942, end: 1946 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 1948, end: 1951 }
								},
								loc: { start: 1948, end: 1951 }
							},
							directives: [],
							loc: { start: 1942, end: 1951 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 1953, end: 1958 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 1960, end: 1963 }
								},
								loc: { start: 1960, end: 1963 }
							},
							directives: [],
							loc: { start: 1953, end: 1963 }
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
									loc: { start: 1967, end: 1972 }
								},
								loc: { start: 1967, end: 1972 }
							},
							loc: { start: 1966, end: 1973 }
						},
						loc: { start: 1966, end: 1974 }
					},
					directives: [],
					loc: { start: 1935, end: 1974 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'variants',
						loc: { start: 1977, end: 1985 }
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
									value: 'Variant',
									loc: { start: 1988, end: 1995 }
								},
								loc: { start: 1988, end: 1995 }
							},
							loc: { start: 1987, end: 1996 }
						},
						loc: { start: 1987, end: 1997 }
					},
					directives: [],
					loc: { start: 1977, end: 1997 }
				}
			],
			loc: { start: 1738, end: 1999 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Query',
				loc: { start: 2005, end: 2010 }
			},
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 2000, end: 2010 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Mutation',
				loc: { start: 2017, end: 2025 }
			},
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 2012, end: 2025 }
		},
		{
			kind: 'ScalarTypeDefinition',
			name: {
				kind: 'Name',
				value: 'DateTime',
				loc: { start: 2034, end: 2042 }
			},
			directives: [],
			loc: { start: 2027, end: 2042 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Aggregate',
				loc: { start: 2049, end: 2058 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'count',
						loc: { start: 2063, end: 2068 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 2070, end: 2073 }
							},
							loc: { start: 2070, end: 2073 }
						},
						loc: { start: 2070, end: 2074 }
					},
					directives: [],
					loc: { start: 2063, end: 2074 }
				}
			],
			loc: { start: 2044, end: 2076 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Connection',
				loc: { start: 2083, end: 2093 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'aggregate',
						loc: { start: 2098, end: 2107 }
					},
					arguments: [],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'Aggregate',
							loc: { start: 2109, end: 2118 }
						},
						loc: { start: 2109, end: 2118 }
					},
					directives: [],
					loc: { start: 2098, end: 2118 }
				}
			],
			loc: { start: 2078, end: 2120 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Variant',
				loc: { start: 2126, end: 2133 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'id',
						loc: { start: 2138, end: 2140 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 2142, end: 2144 }
							},
							loc: { start: 2142, end: 2144 }
						},
						loc: { start: 2142, end: 2145 }
					},
					directives: [],
					loc: { start: 2138, end: 2145 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'name',
						loc: { start: 2148, end: 2152 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 2154, end: 2160 }
							},
							loc: { start: 2154, end: 2160 }
						},
						loc: { start: 2154, end: 2161 }
					},
					directives: [],
					loc: { start: 2148, end: 2161 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'value',
						loc: { start: 2164, end: 2169 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 2171, end: 2177 }
							},
							loc: { start: 2171, end: 2177 }
						},
						loc: { start: 2171, end: 2178 }
					},
					directives: [],
					loc: { start: 2164, end: 2178 }
				}
			],
			loc: { start: 2121, end: 2180 }
		}
	],
	loc: { start: 0, end: 2181 }
} as unknown as DocumentNode;
