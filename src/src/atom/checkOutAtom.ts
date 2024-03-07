import { atomWithStorage } from "jotai/utils";
import { FetchCheckOut } from "../service/checkout/schema";

export const checkOutAtom = atomWithStorage<FetchCheckOut[]>( // Change to an array type
  'checkOutDetailsHandler',
  []
);