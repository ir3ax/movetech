import { atomWithStorage } from "jotai/utils";
import { FetchProductDetails } from "../service/product-service/schema";

export const productDetailsAtom = atomWithStorage<FetchProductDetails | undefined>(
    'productDetailsHandler',
    undefined
)