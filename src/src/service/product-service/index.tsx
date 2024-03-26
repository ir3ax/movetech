import { axiosInstance } from "../axios";
import { SaveProductRequest, SaveProductResponse } from "./schema";

export const saveProduct = async (data: SaveProductRequest) => {
    // Convert freebiesImg to base64 string
    const base64Img = data.img instanceof File ? await fileToBase64(data.img) : undefined;
    
    // Create a new object with base64Img instead of File object
    const requestData = {
        ...data,
        img: base64Img,
    };

    const response = await axiosInstance.post(`admin/product`, requestData);
    return response.data as SaveProductResponse;
};

// Function to convert File object to base64 string
const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const base64String = reader.result?.toString().split(',')[1];
            if (base64String) {
                resolve(base64String);
            } else {
                reject(new Error('Failed to convert file to base64 string.'));
            }
        };
        reader.onerror = error => reject(error);
    });
};