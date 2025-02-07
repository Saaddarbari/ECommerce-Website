export interface Product {
    _id : string;
    title: string;
    productImage: {
        _type: 'image',
        asset: {
          _ref: 'string'
        }
      },
    price : number;
    description : string;
    isNew: boolean;
    tags: string[];
    discountPercentage: number;
    inventory:number;
}
