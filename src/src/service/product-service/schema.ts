import z from 'zod';

export const saveProductRequest = z.object({
    imgName: z.string().nonempty({ message: 'Freebies name is required.'}).max(255, { message: 'Freebies name must be between 1 and 255 characters' }),
    img: z.array(z.instanceof(File)).nullable(),
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
    description2: z.string().optional(),
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
    productFreebies: z.string().optional(),
});

export const saveProductResponse = z.object({
    ProductData: z.array(z.object({
        productId: z.string(),
        imgName: z.string(),
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