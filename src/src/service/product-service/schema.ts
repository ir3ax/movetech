export type FetchProductDetails = {
    productId: number;
    img: string;
    imgName: string;
    discount: string;
    rating: number;
    originalPrice: number;
    discountedPrice: number;
    description: unknown;
    originalQuantity:number;
    currentQuantity:number;
}  