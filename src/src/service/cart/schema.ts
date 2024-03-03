export type FetchCartDetails = {
    products: CartProduct[];
    grandTotal: number;
  };
  
  export type CartProduct = {
    productId: number;
    productName: string;
    productImg: string;
    discount: string;
    quantity: number;
    price: number;
    total: number;
  };