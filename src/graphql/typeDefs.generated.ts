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
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'cartIncrement',
						loc: { start: 1005, end: 1018 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'id',
								loc: { start: 1019, end: 1021 }
							},
							type: {
								kind: 'NonNullType',
								type: {
									kind: 'NamedType',
									name: {
										kind: 'Name',
										value: 'ID',
										loc: { start: 1023, end: 1025 }
									},
									loc: { start: 1023, end: 1025 }
								},
								loc: { start: 1023, end: 1026 }
							},
							directives: [],
							loc: { start: 1019, end: 1026 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'items',
								loc: { start: 1028, end: 1033 }
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
												loc: { start: 1036, end: 1053 }
											},
											loc: { start: 1036, end: 1053 }
										},
										loc: { start: 1036, end: 1054 }
									},
									loc: { start: 1035, end: 1055 }
								},
								loc: { start: 1035, end: 1056 }
							},
							directives: [],
							loc: { start: 1028, end: 1056 }
						}
					],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'Order',
							loc: { start: 1059, end: 1064 }
						},
						loc: { start: 1059, end: 1064 }
					},
					directives: [],
					loc: { start: 1005, end: 1064 }
				}
			],
			loc: { start: 871, end: 1066 }
		},
		{
			kind: 'ObjectTypeExtension',
			name: {
				kind: 'Name',
				value: 'Query',
				loc: { start: 1080, end: 1085 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'cart',
						loc: { start: 1090, end: 1094 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'id',
								loc: { start: 1095, end: 1097 }
							},
							type: {
								kind: 'NonNullType',
								type: {
									kind: 'NamedType',
									name: {
										kind: 'Name',
										value: 'ID',
										loc: { start: 1099, end: 1101 }
									},
									loc: { start: 1099, end: 1101 }
								},
								loc: { start: 1099, end: 1102 }
							},
							directives: [],
							loc: { start: 1095, end: 1102 }
						}
					],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'Order',
							loc: { start: 1105, end: 1110 }
						},
						loc: { start: 1105, end: 1110 }
					},
					directives: [],
					loc: { start: 1090, end: 1110 }
				}
			],
			loc: { start: 1068, end: 1112 }
		},
		{
			kind: 'EnumTypeDefinition',
			name: {
				kind: 'Name',
				value: 'OrderStatus',
				loc: { start: 1119, end: 1130 }
			},
			directives: [],
			values: [
				{
					kind: 'EnumValueDefinition',
					name: {
						kind: 'Name',
						value: 'DRAFT',
						loc: { start: 1135, end: 1140 }
					},
					directives: [],
					loc: { start: 1135, end: 1140 }
				},
				{
					kind: 'EnumValueDefinition',
					name: {
						kind: 'Name',
						value: 'PENDING',
						loc: { start: 1143, end: 1150 }
					},
					directives: [],
					loc: { start: 1143, end: 1150 }
				},
				{
					kind: 'EnumValueDefinition',
					name: {
						kind: 'Name',
						value: 'PAID',
						loc: { start: 1153, end: 1157 }
					},
					directives: [],
					loc: { start: 1153, end: 1157 }
				}
			],
			loc: { start: 1114, end: 1159 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Order',
				loc: { start: 1166, end: 1171 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'id',
						loc: { start: 1176, end: 1178 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 1180, end: 1182 }
							},
							loc: { start: 1180, end: 1182 }
						},
						loc: { start: 1180, end: 1183 }
					},
					directives: [],
					loc: { start: 1176, end: 1183 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'items',
						loc: { start: 1186, end: 1191 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 1192, end: 1196 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 1198, end: 1201 }
								},
								loc: { start: 1198, end: 1201 }
							},
							directives: [],
							loc: { start: 1192, end: 1201 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 1203, end: 1208 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 1210, end: 1213 }
								},
								loc: { start: 1210, end: 1213 }
							},
							directives: [],
							loc: { start: 1203, end: 1213 }
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
										loc: { start: 1217, end: 1226 }
									},
									loc: { start: 1217, end: 1226 }
								},
								loc: { start: 1217, end: 1227 }
							},
							loc: { start: 1216, end: 1228 }
						},
						loc: { start: 1216, end: 1229 }
					},
					directives: [],
					loc: { start: 1186, end: 1229 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'status',
						loc: { start: 1232, end: 1238 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'OrderStatus',
								loc: { start: 1240, end: 1251 }
							},
							loc: { start: 1240, end: 1251 }
						},
						loc: { start: 1240, end: 1252 }
					},
					directives: [],
					loc: { start: 1232, end: 1252 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'createdAt',
						loc: { start: 1255, end: 1264 }
					},
					arguments: [],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'DateTime',
							loc: { start: 1266, end: 1274 }
						},
						loc: { start: 1266, end: 1274 }
					},
					directives: [],
					loc: { start: 1255, end: 1274 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'updatedAt',
						loc: { start: 1277, end: 1286 }
					},
					arguments: [],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'DateTime',
							loc: { start: 1288, end: 1296 }
						},
						loc: { start: 1288, end: 1296 }
					},
					directives: [],
					loc: { start: 1277, end: 1296 }
				}
			],
			loc: { start: 1161, end: 1298 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'OrderItem',
				loc: { start: 1305, end: 1314 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'id',
						loc: { start: 1319, end: 1321 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 1323, end: 1325 }
							},
							loc: { start: 1323, end: 1325 }
						},
						loc: { start: 1323, end: 1326 }
					},
					directives: [],
					loc: { start: 1319, end: 1326 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'productId',
						loc: { start: 1329, end: 1338 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 1340, end: 1342 }
							},
							loc: { start: 1340, end: 1342 }
						},
						loc: { start: 1340, end: 1343 }
					},
					directives: [],
					loc: { start: 1329, end: 1343 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'variantId',
						loc: { start: 1346, end: 1355 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 1357, end: 1359 }
							},
							loc: { start: 1357, end: 1359 }
						},
						loc: { start: 1357, end: 1360 }
					},
					directives: [],
					loc: { start: 1346, end: 1360 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'quantity',
						loc: { start: 1363, end: 1371 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 1373, end: 1376 }
							},
							loc: { start: 1373, end: 1376 }
						},
						loc: { start: 1373, end: 1377 }
					},
					directives: [],
					loc: { start: 1363, end: 1377 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'price',
						loc: { start: 1380, end: 1385 }
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
					loc: { start: 1380, end: 1391 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'name',
						loc: { start: 1394, end: 1398 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 1400, end: 1406 }
							},
							loc: { start: 1400, end: 1406 }
						},
						loc: { start: 1400, end: 1407 }
					},
					directives: [],
					loc: { start: 1394, end: 1407 }
				}
			],
			loc: { start: 1300, end: 1409 }
		},
		{
			kind: 'InputObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'CategorySomeInput',
				loc: { start: 1416, end: 1433 }
			},
			directives: [],
			fields: [
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'slug',
						loc: { start: 1438, end: 1442 }
					},
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'String',
							loc: { start: 1444, end: 1450 }
						},
						loc: { start: 1444, end: 1450 }
					},
					directives: [],
					loc: { start: 1438, end: 1450 }
				}
			],
			loc: { start: 1410, end: 1452 }
		},
		{
			kind: 'InputObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'CollectionSomeInput',
				loc: { start: 1460, end: 1479 }
			},
			directives: [],
			fields: [
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'slug',
						loc: { start: 1484, end: 1488 }
					},
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'String',
							loc: { start: 1490, end: 1496 }
						},
						loc: { start: 1490, end: 1496 }
					},
					directives: [],
					loc: { start: 1484, end: 1496 }
				}
			],
			loc: { start: 1454, end: 1498 }
		},
		{
			kind: 'InputObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'ProductWhereInput',
				loc: { start: 1506, end: 1523 }
			},
			directives: [],
			fields: [
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'nameContains',
						loc: { start: 1528, end: 1540 }
					},
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'String',
							loc: { start: 1542, end: 1548 }
						},
						loc: { start: 1542, end: 1548 }
					},
					directives: [],
					loc: { start: 1528, end: 1548 }
				},
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'categories_some',
						loc: { start: 1551, end: 1566 }
					},
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'CategorySomeInput',
							loc: { start: 1568, end: 1585 }
						},
						loc: { start: 1568, end: 1585 }
					},
					directives: [],
					loc: { start: 1551, end: 1585 }
				},
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'collections_some',
						loc: { start: 1588, end: 1604 }
					},
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'CollectionSomeInput',
							loc: { start: 1606, end: 1625 }
						},
						loc: { start: 1606, end: 1625 }
					},
					directives: [],
					loc: { start: 1588, end: 1625 }
				},
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'excludedIds',
						loc: { start: 1628, end: 1639 }
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
									loc: { start: 1642, end: 1644 }
								},
								loc: { start: 1642, end: 1644 }
							},
							loc: { start: 1642, end: 1645 }
						},
						loc: { start: 1641, end: 1646 }
					},
					directives: [],
					loc: { start: 1628, end: 1646 }
				}
			],
			loc: { start: 1500, end: 1648 }
		},
		{
			kind: 'ObjectTypeExtension',
			name: {
				kind: 'Name',
				value: 'Query',
				loc: { start: 1662, end: 1667 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'product',
						loc: { start: 1672, end: 1679 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'id',
								loc: { start: 1680, end: 1682 }
							},
							type: {
								kind: 'NonNullType',
								type: {
									kind: 'NamedType',
									name: {
										kind: 'Name',
										value: 'ID',
										loc: { start: 1684, end: 1686 }
									},
									loc: { start: 1684, end: 1686 }
								},
								loc: { start: 1684, end: 1687 }
							},
							directives: [],
							loc: { start: 1680, end: 1687 }
						}
					],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'Product',
							loc: { start: 1690, end: 1697 }
						},
						loc: { start: 1690, end: 1697 }
					},
					directives: [],
					loc: { start: 1672, end: 1697 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'products',
						loc: { start: 1700, end: 1708 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'where',
								loc: { start: 1709, end: 1714 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'ProductWhereInput',
									loc: { start: 1716, end: 1733 }
								},
								loc: { start: 1716, end: 1733 }
							},
							directives: [],
							loc: { start: 1709, end: 1733 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 1735, end: 1739 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 1741, end: 1744 }
								},
								loc: { start: 1741, end: 1744 }
							},
							directives: [],
							loc: { start: 1735, end: 1744 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 1746, end: 1751 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 1753, end: 1756 }
								},
								loc: { start: 1753, end: 1756 }
							},
							directives: [],
							loc: { start: 1746, end: 1756 }
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
										loc: { start: 1760, end: 1767 }
									},
									loc: { start: 1760, end: 1767 }
								},
								loc: { start: 1760, end: 1768 }
							},
							loc: { start: 1759, end: 1769 }
						},
						loc: { start: 1759, end: 1770 }
					},
					directives: [],
					loc: { start: 1700, end: 1770 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'productsConnection',
						loc: { start: 1773, end: 1791 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'where',
								loc: { start: 1792, end: 1797 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'ProductWhereInput',
									loc: { start: 1799, end: 1816 }
								},
								loc: { start: 1799, end: 1816 }
							},
							directives: [],
							loc: { start: 1792, end: 1816 }
						}
					],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Connection',
								loc: { start: 1819, end: 1829 }
							},
							loc: { start: 1819, end: 1829 }
						},
						loc: { start: 1819, end: 1830 }
					},
					directives: [],
					loc: { start: 1773, end: 1830 }
				}
			],
			loc: { start: 1650, end: 1832 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Product',
				loc: { start: 1839, end: 1846 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'id',
						loc: { start: 1851, end: 1853 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 1855, end: 1857 }
							},
							loc: { start: 1855, end: 1857 }
						},
						loc: { start: 1855, end: 1858 }
					},
					directives: [],
					loc: { start: 1851, end: 1858 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'name',
						loc: { start: 1861, end: 1865 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 1867, end: 1873 }
							},
							loc: { start: 1867, end: 1873 }
						},
						loc: { start: 1867, end: 1874 }
					},
					directives: [],
					loc: { start: 1861, end: 1874 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'slug',
						loc: { start: 1877, end: 1881 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 1883, end: 1889 }
							},
							loc: { start: 1883, end: 1889 }
						},
						loc: { start: 1883, end: 1890 }
					},
					directives: [],
					loc: { start: 1877, end: 1890 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'description',
						loc: { start: 1893, end: 1904 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 1906, end: 1912 }
							},
							loc: { start: 1906, end: 1912 }
						},
						loc: { start: 1906, end: 1913 }
					},
					directives: [],
					loc: { start: 1893, end: 1913 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'price',
						loc: { start: 1916, end: 1921 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 1923, end: 1926 }
							},
							loc: { start: 1923, end: 1926 }
						},
						loc: { start: 1923, end: 1927 }
					},
					directives: [],
					loc: { start: 1916, end: 1927 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'categories',
						loc: { start: 1930, end: 1940 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 1941, end: 1945 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 1947, end: 1950 }
								},
								loc: { start: 1947, end: 1950 }
							},
							directives: [],
							loc: { start: 1941, end: 1950 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 1952, end: 1957 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 1959, end: 1962 }
								},
								loc: { start: 1959, end: 1962 }
							},
							directives: [],
							loc: { start: 1952, end: 1962 }
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
									loc: { start: 1966, end: 1974 }
								},
								loc: { start: 1966, end: 1974 }
							},
							loc: { start: 1965, end: 1975 }
						},
						loc: { start: 1965, end: 1976 }
					},
					directives: [],
					loc: { start: 1930, end: 1976 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'collections',
						loc: { start: 1979, end: 1990 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 1991, end: 1995 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 1997, end: 2000 }
								},
								loc: { start: 1997, end: 2000 }
							},
							directives: [],
							loc: { start: 1991, end: 2000 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 2002, end: 2007 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2009, end: 2012 }
								},
								loc: { start: 2009, end: 2012 }
							},
							directives: [],
							loc: { start: 2002, end: 2012 }
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
									loc: { start: 2016, end: 2026 }
								},
								loc: { start: 2016, end: 2026 }
							},
							loc: { start: 2015, end: 2027 }
						},
						loc: { start: 2015, end: 2028 }
					},
					directives: [],
					loc: { start: 1979, end: 2028 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'images',
						loc: { start: 2031, end: 2037 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 2038, end: 2042 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2044, end: 2047 }
								},
								loc: { start: 2044, end: 2047 }
							},
							directives: [],
							loc: { start: 2038, end: 2047 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 2049, end: 2054 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 2056, end: 2059 }
								},
								loc: { start: 2056, end: 2059 }
							},
							directives: [],
							loc: { start: 2049, end: 2059 }
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
									loc: { start: 2063, end: 2068 }
								},
								loc: { start: 2063, end: 2068 }
							},
							loc: { start: 2062, end: 2069 }
						},
						loc: { start: 2062, end: 2070 }
					},
					directives: [],
					loc: { start: 2031, end: 2070 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'variants',
						loc: { start: 2073, end: 2081 }
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
										loc: { start: 2084, end: 2091 }
									},
									loc: { start: 2084, end: 2091 }
								},
								loc: { start: 2084, end: 2092 }
							},
							loc: { start: 2083, end: 2093 }
						},
						loc: { start: 2083, end: 2094 }
					},
					directives: [],
					loc: { start: 2073, end: 2094 }
				}
			],
			loc: { start: 1834, end: 2096 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Query',
				loc: { start: 2102, end: 2107 }
			},
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 2097, end: 2107 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Mutation',
				loc: { start: 2114, end: 2122 }
			},
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 2109, end: 2122 }
		},
		{
			kind: 'ScalarTypeDefinition',
			name: {
				kind: 'Name',
				value: 'DateTime',
				loc: { start: 2131, end: 2139 }
			},
			directives: [],
			loc: { start: 2124, end: 2139 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Aggregate',
				loc: { start: 2146, end: 2155 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'count',
						loc: { start: 2160, end: 2165 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 2167, end: 2170 }
							},
							loc: { start: 2167, end: 2170 }
						},
						loc: { start: 2167, end: 2171 }
					},
					directives: [],
					loc: { start: 2160, end: 2171 }
				}
			],
			loc: { start: 2141, end: 2173 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Connection',
				loc: { start: 2180, end: 2190 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'aggregate',
						loc: { start: 2195, end: 2204 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Aggregate',
								loc: { start: 2206, end: 2215 }
							},
							loc: { start: 2206, end: 2215 }
						},
						loc: { start: 2206, end: 2216 }
					},
					directives: [],
					loc: { start: 2195, end: 2216 }
				}
			],
			loc: { start: 2175, end: 2218 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Variant',
				loc: { start: 2224, end: 2231 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'id',
						loc: { start: 2236, end: 2238 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 2240, end: 2242 }
							},
							loc: { start: 2240, end: 2242 }
						},
						loc: { start: 2240, end: 2243 }
					},
					directives: [],
					loc: { start: 2236, end: 2243 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'name',
						loc: { start: 2246, end: 2250 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 2252, end: 2258 }
							},
							loc: { start: 2252, end: 2258 }
						},
						loc: { start: 2252, end: 2259 }
					},
					directives: [],
					loc: { start: 2246, end: 2259 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'value',
						loc: { start: 2262, end: 2267 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 2269, end: 2275 }
							},
							loc: { start: 2269, end: 2275 }
						},
						loc: { start: 2269, end: 2276 }
					},
					directives: [],
					loc: { start: 2262, end: 2276 }
				}
			],
			loc: { start: 2219, end: 2278 }
		}
	],
	loc: { start: 0, end: 2279 }
} as unknown as DocumentNode;
