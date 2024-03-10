export type FetchProductDetails = {
    productId: string;
    img: string | string[];
    imgName: string;
    discount: string;
    originalPrice: number;
    discountedPrice: number;
    description1: unknown;
    description2: unknown;
    originalQuantity:number;
    currentQuantity:number;
    productStatus:string;
    productRating: number;
    productSold: number | undefined;
    productFreebies: string | undefined | null | unknown;
}  