export type FetchCartDetails = {
    products: CartProduct[];
    grandTotal: number;
  };
  
  export type CartProduct = {
    productId: string | undefined;
    productName: string | undefined;
    productImg: string | undefined;
    discount: string | undefined;
    rating: number | undefined;
    quantity: number | undefined;
    price: number | undefined;
    total: number | undefined;
  };