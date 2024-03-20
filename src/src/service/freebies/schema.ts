import z from 'zod';

export const saveFreebiesRequest = z.object({
    freebiesName: z.string().optional(),
    freebiesImg: z.union([z.string(), z.instanceof(File)]).nullable().optional(),
    freebiesStorePrice: z.string().transform((val) => {
        const parsedValue = parseFloat(val);
        if (isNaN(parsedValue)) {
            throw new Error('Please provide a valid original quantity');
        }
        return parsedValue;
    }).optional(),
    freebiesOriginalQuantity: z.string().transform((val) => {
        const parsedValue = parseFloat(val);
        if (isNaN(parsedValue)) {
            throw new Error('Please provide a valid original quantity');
        }
        return parsedValue;
    }).optional(),
    freebiesCurrentQuantity: z.string().transform((val) => {
        const parsedValue = parseFloat(val);
        if (isNaN(parsedValue)) {
            throw new Error('Please provide a valid original quantity');
        }
        return parsedValue;
    }).optional(),
});

export const saveFreebiesResponse = z.object({
    freebiesData: z.array(z.object({
        freebiesId: z.string(),
        freebiesName: z.string(),
        freebiesImg: z.string(),
        freebiesStorePrice: z.number(),
        freebiesOriginalQuantity: z.number(),
        freebiesCurrentQuantity: z.number(),
        createdBy: z.string(),
        createdAt: z.string(),
        updatedBy: z.string(),
        updatedAt: z.string(),
    })),
});

export type SaveFreebiesRequest   = z.infer<typeof saveFreebiesRequest>;
export type SaveFreebiesResponse  = z.infer<typeof saveFreebiesResponse>;


export const getAllFreebiesRequest = z.object({
    search: z.string().optional(),
    sortOption: z.string().optional(),
});

export type GetAllFreebiesRequest   = z.infer<typeof getAllFreebiesRequest>;
export type GetAllFreebiesResponse  = SaveFreebiesResponse;