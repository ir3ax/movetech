import { atomWithStorage } from "jotai/utils";
import { FetchProductDetails } from "../service/product-service/schema";
import { atom } from "jotai";

export const productDetailsAtom = atomWithStorage<FetchProductDetails | undefined>(
    'productDetailsHandler',
    undefined
)

export const productImgAtom = atom<File[]>([]);
export const productDescription2Atom = atom<string[]>([]);

interface Freebie {
    freebiesId: string;
    freebiesName: string;
    freebiesStorePrice: number;
    freebiesOriginalQuantity: number;
    freebiesCurrentQuantity: number;
    freebiesImg: string;
}

export const productFreebiesAtom = atom<Freebie[]>([]);
export const productDiscountedPriceAtom = atom<number>(0);

const getCurrentQuantityFromLocalStorage = () => {
  const storedValue = localStorage.getItem('currentQuantityValue');
  return storedValue ? parseFloat(storedValue) : 0;
};

export const productCurrentQuantityAtom = atom<number>(
  getCurrentQuantityFromLocalStorage()
);