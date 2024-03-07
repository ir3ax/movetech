import { atomWithStorage } from "jotai/utils";
import { CompleteCheckOut, FetchCheckOut } from "../service/checkout/schema";

export const checkOutAtom = atomWithStorage<FetchCheckOut[]>( // Change to an array type
  'checkOutDetailsHandler',
  []
);

export const completeCheckOut = atomWithStorage<CompleteCheckOut[]>( // Change to an array type
  'completeCheckOutHandler',
  []
);