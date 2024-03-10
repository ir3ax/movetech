export type FetchCheckOut = {
    productId: string | undefined;
    quantity: number | undefined;
    total: number | undefined;
    discount: string | undefined;
    price: number | undefined;
    productImg: string | undefined;
    productName: string | undefined;
    productSold: number | undefined;
    productFreebies: string | undefined | null;
    rating: number | undefined;
};

export type CompleteCheckOut = {
    product : CompleteProductInfo[];
    total: number | undefined;
    contactNumber: string | undefined;
    firstName: string | undefined;
    lastName: string | undefined;
    emailAddress: string | undefined;
    completeAddress: CompleteAddress[];
}

export type CompleteAddress = {
    landmark: string | undefined;
    address: string | undefined;
    houseNumber: string | undefined;
    region: string | undefined;
    province: string | undefined;
    city: string | undefined;
    barangay: string | undefined;
};

export type CompleteProductInfo = {
    productId: string | undefined;
    productName: string | undefined;
    quantity: number | undefined;
    productFreebies: string | undefined | null;
};
