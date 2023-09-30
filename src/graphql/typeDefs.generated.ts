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
						value: 'quantity',
						loc: { start: 836, end: 844 }
					},
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 846, end: 849 }
							},
							loc: { start: 846, end: 849 }
						},
						loc: { start: 846, end: 850 }
					},
					directives: [],
					loc: { start: 836, end: 850 }
				}
			],
			loc: { start: 791, end: 852 }
		},
		{
			kind: 'ObjectTypeExtension',
			name: {
				kind: 'Name',
				value: 'Mutation',
				loc: { start: 866, end: 874 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'cartCreate',
						loc: { start: 879, end: 889 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'items',
								loc: { start: 890, end: 895 }
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
												loc: { start: 898, end: 915 }
											},
											loc: { start: 898, end: 915 }
										},
										loc: { start: 898, end: 916 }
									},
									loc: { start: 897, end: 917 }
								},
								loc: { start: 897, end: 918 }
							},
							directives: [],
							loc: { start: 890, end: 918 }
						}
					],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'Order',
							loc: { start: 921, end: 926 }
						},
						loc: { start: 921, end: 926 }
					},
					directives: [],
					loc: { start: 879, end: 926 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'cartUpdate',
						loc: { start: 929, end: 939 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'id',
								loc: { start: 940, end: 942 }
							},
							type: {
								kind: 'NonNullType',
								type: {
									kind: 'NamedType',
									name: {
										kind: 'Name',
										value: 'ID',
										loc: { start: 944, end: 946 }
									},
									loc: { start: 944, end: 946 }
								},
								loc: { start: 944, end: 947 }
							},
							directives: [],
							loc: { start: 940, end: 947 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'items',
								loc: { start: 949, end: 954 }
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
												loc: { start: 957, end: 974 }
											},
											loc: { start: 957, end: 974 }
										},
										loc: { start: 957, end: 975 }
									},
									loc: { start: 956, end: 976 }
								},
								loc: { start: 956, end: 977 }
							},
							directives: [],
							loc: { start: 949, end: 977 }
						}
					],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'Order',
							loc: { start: 980, end: 985 }
						},
						loc: { start: 980, end: 985 }
					},
					directives: [],
					loc: { start: 929, end: 985 }
				}
			],
			loc: { start: 854, end: 987 }
		},
		{
			kind: 'ObjectTypeExtension',
			name: {
				kind: 'Name',
				value: 'Query',
				loc: { start: 1001, end: 1006 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'cart',
						loc: { start: 1011, end: 1015 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'id',
								loc: { start: 1016, end: 1018 }
							},
							type: {
								kind: 'NonNullType',
								type: {
									kind: 'NamedType',
									name: {
										kind: 'Name',
										value: 'ID',
										loc: { start: 1020, end: 1022 }
									},
									loc: { start: 1020, end: 1022 }
								},
								loc: { start: 1020, end: 1023 }
							},
							directives: [],
							loc: { start: 1016, end: 1023 }
						}
					],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'Order',
							loc: { start: 1026, end: 1031 }
						},
						loc: { start: 1026, end: 1031 }
					},
					directives: [],
					loc: { start: 1011, end: 1031 }
				}
			],
			loc: { start: 989, end: 1033 }
		},
		{
			kind: 'EnumTypeDefinition',
			name: {
				kind: 'Name',
				value: 'OrderStatus',
				loc: { start: 1040, end: 1051 }
			},
			directives: [],
			values: [
				{
					kind: 'EnumValueDefinition',
					name: {
						kind: 'Name',
						value: 'DRAFT',
						loc: { start: 1056, end: 1061 }
					},
					directives: [],
					loc: { start: 1056, end: 1061 }
				},
				{
					kind: 'EnumValueDefinition',
					name: {
						kind: 'Name',
						value: 'PENDING',
						loc: { start: 1064, end: 1071 }
					},
					directives: [],
					loc: { start: 1064, end: 1071 }
				},
				{
					kind: 'EnumValueDefinition',
					name: {
						kind: 'Name',
						value: 'PAID',
						loc: { start: 1074, end: 1078 }
					},
					directives: [],
					loc: { start: 1074, end: 1078 }
				}
			],
			loc: { start: 1035, end: 1080 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Order',
				loc: { start: 1087, end: 1092 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'id',
						loc: { start: 1097, end: 1099 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 1101, end: 1103 }
							},
							loc: { start: 1101, end: 1103 }
						},
						loc: { start: 1101, end: 1104 }
					},
					directives: [],
					loc: { start: 1097, end: 1104 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'items',
						loc: { start: 1107, end: 1112 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 1113, end: 1117 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 1119, end: 1122 }
								},
								loc: { start: 1119, end: 1122 }
							},
							directives: [],
							loc: { start: 1113, end: 1122 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 1124, end: 1129 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 1131, end: 1134 }
								},
								loc: { start: 1131, end: 1134 }
							},
							directives: [],
							loc: { start: 1124, end: 1134 }
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
										loc: { start: 1138, end: 1147 }
									},
									loc: { start: 1138, end: 1147 }
								},
								loc: { start: 1138, end: 1148 }
							},
							loc: { start: 1137, end: 1149 }
						},
						loc: { start: 1137, end: 1150 }
					},
					directives: [],
					loc: { start: 1107, end: 1150 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'status',
						loc: { start: 1153, end: 1159 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'OrderStatus',
								loc: { start: 1161, end: 1172 }
							},
							loc: { start: 1161, end: 1172 }
						},
						loc: { start: 1161, end: 1173 }
					},
					directives: [],
					loc: { start: 1153, end: 1173 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'createdAt',
						loc: { start: 1176, end: 1185 }
					},
					arguments: [],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'DateTime',
							loc: { start: 1187, end: 1195 }
						},
						loc: { start: 1187, end: 1195 }
					},
					directives: [],
					loc: { start: 1176, end: 1195 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'updatedAt',
						loc: { start: 1198, end: 1207 }
					},
					arguments: [],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'DateTime',
							loc: { start: 1209, end: 1217 }
						},
						loc: { start: 1209, end: 1217 }
					},
					directives: [],
					loc: { start: 1198, end: 1217 }
				}
			],
			loc: { start: 1082, end: 1219 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'OrderItem',
				loc: { start: 1226, end: 1235 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'id',
						loc: { start: 1240, end: 1242 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 1244, end: 1246 }
							},
							loc: { start: 1244, end: 1246 }
						},
						loc: { start: 1244, end: 1247 }
					},
					directives: [],
					loc: { start: 1240, end: 1247 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'quantity',
						loc: { start: 1250, end: 1258 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 1260, end: 1263 }
							},
							loc: { start: 1260, end: 1263 }
						},
						loc: { start: 1260, end: 1264 }
					},
					directives: [],
					loc: { start: 1250, end: 1264 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'price',
						loc: { start: 1267, end: 1272 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 1274, end: 1277 }
							},
							loc: { start: 1274, end: 1277 }
						},
						loc: { start: 1274, end: 1278 }
					},
					directives: [],
					loc: { start: 1267, end: 1278 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'name',
						loc: { start: 1281, end: 1285 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 1287, end: 1293 }
							},
							loc: { start: 1287, end: 1293 }
						},
						loc: { start: 1287, end: 1294 }
					},
					directives: [],
					loc: { start: 1281, end: 1294 }
				}
			],
			loc: { start: 1221, end: 1296 }
		},
		{
			kind: 'InputObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'CategorySomeInput',
				loc: { start: 1303, end: 1320 }
			},
			directives: [],
			fields: [
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'slug',
						loc: { start: 1325, end: 1329 }
					},
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'String',
							loc: { start: 1331, end: 1337 }
						},
						loc: { start: 1331, end: 1337 }
					},
					directives: [],
					loc: { start: 1325, end: 1337 }
				}
			],
			loc: { start: 1297, end: 1339 }
		},
		{
			kind: 'InputObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'CollectionSomeInput',
				loc: { start: 1347, end: 1366 }
			},
			directives: [],
			fields: [
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'slug',
						loc: { start: 1371, end: 1375 }
					},
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'String',
							loc: { start: 1377, end: 1383 }
						},
						loc: { start: 1377, end: 1383 }
					},
					directives: [],
					loc: { start: 1371, end: 1383 }
				}
			],
			loc: { start: 1341, end: 1385 }
		},
		{
			kind: 'InputObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'ProductWhereInput',
				loc: { start: 1393, end: 1410 }
			},
			directives: [],
			fields: [
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'nameContains',
						loc: { start: 1415, end: 1427 }
					},
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'String',
							loc: { start: 1429, end: 1435 }
						},
						loc: { start: 1429, end: 1435 }
					},
					directives: [],
					loc: { start: 1415, end: 1435 }
				},
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'categories_some',
						loc: { start: 1438, end: 1453 }
					},
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'CategorySomeInput',
							loc: { start: 1455, end: 1472 }
						},
						loc: { start: 1455, end: 1472 }
					},
					directives: [],
					loc: { start: 1438, end: 1472 }
				},
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'collections_some',
						loc: { start: 1475, end: 1491 }
					},
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'CollectionSomeInput',
							loc: { start: 1493, end: 1512 }
						},
						loc: { start: 1493, end: 1512 }
					},
					directives: [],
					loc: { start: 1475, end: 1512 }
				},
				{
					kind: 'InputValueDefinition',
					name: {
						kind: 'Name',
						value: 'excludedIds',
						loc: { start: 1515, end: 1526 }
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
									loc: { start: 1529, end: 1531 }
								},
								loc: { start: 1529, end: 1531 }
							},
							loc: { start: 1529, end: 1532 }
						},
						loc: { start: 1528, end: 1533 }
					},
					directives: [],
					loc: { start: 1515, end: 1533 }
				}
			],
			loc: { start: 1387, end: 1535 }
		},
		{
			kind: 'ObjectTypeExtension',
			name: {
				kind: 'Name',
				value: 'Query',
				loc: { start: 1549, end: 1554 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'product',
						loc: { start: 1559, end: 1566 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'id',
								loc: { start: 1567, end: 1569 }
							},
							type: {
								kind: 'NonNullType',
								type: {
									kind: 'NamedType',
									name: {
										kind: 'Name',
										value: 'ID',
										loc: { start: 1571, end: 1573 }
									},
									loc: { start: 1571, end: 1573 }
								},
								loc: { start: 1571, end: 1574 }
							},
							directives: [],
							loc: { start: 1567, end: 1574 }
						}
					],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'Product',
							loc: { start: 1577, end: 1584 }
						},
						loc: { start: 1577, end: 1584 }
					},
					directives: [],
					loc: { start: 1559, end: 1584 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'products',
						loc: { start: 1587, end: 1595 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'where',
								loc: { start: 1596, end: 1601 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'ProductWhereInput',
									loc: { start: 1603, end: 1620 }
								},
								loc: { start: 1603, end: 1620 }
							},
							directives: [],
							loc: { start: 1596, end: 1620 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 1622, end: 1626 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 1628, end: 1631 }
								},
								loc: { start: 1628, end: 1631 }
							},
							directives: [],
							loc: { start: 1622, end: 1631 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 1633, end: 1638 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 1640, end: 1643 }
								},
								loc: { start: 1640, end: 1643 }
							},
							directives: [],
							loc: { start: 1633, end: 1643 }
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
										loc: { start: 1647, end: 1654 }
									},
									loc: { start: 1647, end: 1654 }
								},
								loc: { start: 1647, end: 1655 }
							},
							loc: { start: 1646, end: 1656 }
						},
						loc: { start: 1646, end: 1657 }
					},
					directives: [],
					loc: { start: 1587, end: 1657 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'productsConnection',
						loc: { start: 1660, end: 1678 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'where',
								loc: { start: 1679, end: 1684 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'ProductWhereInput',
									loc: { start: 1686, end: 1703 }
								},
								loc: { start: 1686, end: 1703 }
							},
							directives: [],
							loc: { start: 1679, end: 1703 }
						}
					],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Connection',
								loc: { start: 1706, end: 1716 }
							},
							loc: { start: 1706, end: 1716 }
						},
						loc: { start: 1706, end: 1717 }
					},
					directives: [],
					loc: { start: 1660, end: 1717 }
				}
			],
			loc: { start: 1537, end: 1719 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Product',
				loc: { start: 1726, end: 1733 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'id',
						loc: { start: 1738, end: 1740 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'ID',
								loc: { start: 1742, end: 1744 }
							},
							loc: { start: 1742, end: 1744 }
						},
						loc: { start: 1742, end: 1745 }
					},
					directives: [],
					loc: { start: 1738, end: 1745 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'name',
						loc: { start: 1748, end: 1752 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 1754, end: 1760 }
							},
							loc: { start: 1754, end: 1760 }
						},
						loc: { start: 1754, end: 1761 }
					},
					directives: [],
					loc: { start: 1748, end: 1761 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'slug',
						loc: { start: 1764, end: 1768 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 1770, end: 1776 }
							},
							loc: { start: 1770, end: 1776 }
						},
						loc: { start: 1770, end: 1777 }
					},
					directives: [],
					loc: { start: 1764, end: 1777 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'description',
						loc: { start: 1780, end: 1791 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'String',
								loc: { start: 1793, end: 1799 }
							},
							loc: { start: 1793, end: 1799 }
						},
						loc: { start: 1793, end: 1800 }
					},
					directives: [],
					loc: { start: 1780, end: 1800 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'price',
						loc: { start: 1803, end: 1808 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 1810, end: 1813 }
							},
							loc: { start: 1810, end: 1813 }
						},
						loc: { start: 1810, end: 1814 }
					},
					directives: [],
					loc: { start: 1803, end: 1814 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'categories',
						loc: { start: 1817, end: 1827 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 1828, end: 1832 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 1834, end: 1837 }
								},
								loc: { start: 1834, end: 1837 }
							},
							directives: [],
							loc: { start: 1828, end: 1837 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 1839, end: 1844 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 1846, end: 1849 }
								},
								loc: { start: 1846, end: 1849 }
							},
							directives: [],
							loc: { start: 1839, end: 1849 }
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
									loc: { start: 1853, end: 1861 }
								},
								loc: { start: 1853, end: 1861 }
							},
							loc: { start: 1852, end: 1862 }
						},
						loc: { start: 1852, end: 1863 }
					},
					directives: [],
					loc: { start: 1817, end: 1863 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'collections',
						loc: { start: 1866, end: 1877 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 1878, end: 1882 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 1884, end: 1887 }
								},
								loc: { start: 1884, end: 1887 }
							},
							directives: [],
							loc: { start: 1878, end: 1887 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 1889, end: 1894 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 1896, end: 1899 }
								},
								loc: { start: 1896, end: 1899 }
							},
							directives: [],
							loc: { start: 1889, end: 1899 }
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
									loc: { start: 1903, end: 1913 }
								},
								loc: { start: 1903, end: 1913 }
							},
							loc: { start: 1902, end: 1914 }
						},
						loc: { start: 1902, end: 1915 }
					},
					directives: [],
					loc: { start: 1866, end: 1915 }
				},
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'images',
						loc: { start: 1918, end: 1924 }
					},
					arguments: [
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'skip',
								loc: { start: 1925, end: 1929 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 1931, end: 1934 }
								},
								loc: { start: 1931, end: 1934 }
							},
							directives: [],
							loc: { start: 1925, end: 1934 }
						},
						{
							kind: 'InputValueDefinition',
							name: {
								kind: 'Name',
								value: 'first',
								loc: { start: 1936, end: 1941 }
							},
							type: {
								kind: 'NamedType',
								name: {
									kind: 'Name',
									value: 'Int',
									loc: { start: 1943, end: 1946 }
								},
								loc: { start: 1943, end: 1946 }
							},
							directives: [],
							loc: { start: 1936, end: 1946 }
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
									loc: { start: 1950, end: 1955 }
								},
								loc: { start: 1950, end: 1955 }
							},
							loc: { start: 1949, end: 1956 }
						},
						loc: { start: 1949, end: 1957 }
					},
					directives: [],
					loc: { start: 1918, end: 1957 }
				}
			],
			loc: { start: 1721, end: 1959 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Query',
				loc: { start: 1965, end: 1970 }
			},
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 1960, end: 1970 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Mutation',
				loc: { start: 1977, end: 1985 }
			},
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 1972, end: 1985 }
		},
		{
			kind: 'ScalarTypeDefinition',
			name: {
				kind: 'Name',
				value: 'DateTime',
				loc: { start: 1994, end: 2002 }
			},
			directives: [],
			loc: { start: 1987, end: 2002 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Aggregate',
				loc: { start: 2009, end: 2018 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'count',
						loc: { start: 2023, end: 2028 }
					},
					arguments: [],
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: {
								kind: 'Name',
								value: 'Int',
								loc: { start: 2030, end: 2033 }
							},
							loc: { start: 2030, end: 2033 }
						},
						loc: { start: 2030, end: 2034 }
					},
					directives: [],
					loc: { start: 2023, end: 2034 }
				}
			],
			loc: { start: 2004, end: 2036 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: {
				kind: 'Name',
				value: 'Connection',
				loc: { start: 2043, end: 2053 }
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: {
						kind: 'Name',
						value: 'aggregate',
						loc: { start: 2058, end: 2067 }
					},
					arguments: [],
					type: {
						kind: 'NamedType',
						name: {
							kind: 'Name',
							value: 'Aggregate',
							loc: { start: 2069, end: 2078 }
						},
						loc: { start: 2069, end: 2078 }
					},
					directives: [],
					loc: { start: 2058, end: 2078 }
				}
			],
			loc: { start: 2038, end: 2080 }
		}
	],
	loc: { start: 0, end: 2081 }
} as unknown as DocumentNode;
