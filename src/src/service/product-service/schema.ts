import z from 'zod';

// Define a union type for productFreebies that can accept either string[], Freebie[], or a single string
const productFreebiesType = z.union([
    z.string(),
    z.array(z.string()),
    z.array(z.object({
        freebiesId: z.string(),
        freebiesName: z.string(),
        freebiesStorePrice: z.number(),
        freebiesOriginalQuantity: z.number(),
        freebiesCurrentQuantity: z.number(),
        freebiesImg: z.string(),
    })),
]);

const imgType = z.union([
    z.array(z.instanceof(File)),
    z.array(z.string()),
]);

const description2Type = z.union([
    z.string(),
    z.array(z.string()),
]);

export const saveProductRequest = z.object({
    productName: z.string().nonempty({ message: 'Freebies name is required.'}).max(255, { message: 'Freebies name must be between 1 and 255 characters' }),
    img: imgType.nullable().optional(),
    discount: z.string().transform((val) => {
        const parsedValue = parseFloat(val);
        if (isNaN(parsedValue)) {
            throw new Error('Please provide a valid store price');
        }
        return parsedValue;
    }).optional(),
    supplierPrice: z.string().nonempty({ message: 'Freebies supplier price is required.'}).transform((val) => {
        const parsedValue = parseFloat(val);
        if (isNaN(parsedValue)) {
            throw new Error('Please provide a valid original quantity');
        }
        return parsedValue;
    }),
    originalPrice: z.string().nonempty({ message: 'Freebies original price is required.'}).transform((val) => {
        const parsedValue = parseFloat(val);
        if (isNaN(parsedValue)) {
            throw new Error('Please provide a valid original quantity');
        }
        return parsedValue;
    }),
    discountedPrice: z.number(),
    description1: z.string().optional(),
    description2: description2Type.nullable().optional(),
    originalQuantity: z.string().nonempty({ message: 'Freebies orginal quantity is required.'}).transform((val) => {
        const parsedValue = parseFloat(val);
        if (isNaN(parsedValue)) {
            throw new Error('Please provide a valid original quantity');
        }
        return parsedValue;
    }),
    currentQuantity: z.number(),
    productSold: z.string().nonempty({ message: 'Freebies orginal quantity is required.'}).transform((val) => {
        const parsedValue = parseFloat(val);
        if (isNaN(parsedValue)) {
            throw new Error('Please provide a valid original quantity');
        }
        return parsedValue;
    }),
    productFreebies: productFreebiesType.nullable().optional(),
});

export const saveProductResponse = z.object({
    ProductData: z.array(z.object({
        productId: z.string(),
        productName: z.string(),
        img: z.string(),
        discount: z.number(),
        supplierPrice: z.number(),
        originalPrice: z.number(),
        discountedPrice: z.number(),
        description1: z.string(),
        description2: z.string(),
        originalQuantity: z.number(),
        currentQuantity: z.number(),
        productSold: z.number(),
        productFreebies: z.string(),
        createdBy: z.string(),
        createdAt: z.string(),
        updatedBy: z.string(),
        updatedAt: z.string(),
    })),
});

export type SaveProductRequest   = z.infer<typeof saveProductRequest>;
export type SaveProductResponse  = z.infer<typeof saveProductResponse>;