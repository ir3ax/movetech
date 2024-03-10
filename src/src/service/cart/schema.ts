export type FetchCartDetails = {
  products: CartProduct[];
};
  
export type CartProduct = {
  productId: string | undefined;
  productName: string | undefined;
  productImg: string | undefined;
  discount: string | undefined;
  rating: number | undefined;
  productSold: number | undefined;
  productFreebies: string | undefined | null;
  quantity: number | undefined;
  price: number | undefined;
  total: number | undefined;
};