import { axiosInstance } from "../axios";
import { SaveFreebiesRequest, SaveFreebiesResponse } from "./schema";

export const saveFreebies = async (data: SaveFreebiesRequest) => {
    // Convert freebiesImg to base64 string
    const base64Img = data.freebiesImg instanceof File ? await fileToBase64(data.freebiesImg) : undefined;
    
    // Create a new object with base64Img instead of File object
    const requestData = {
        ...data,
        freebiesImg: base64Img,
    };

    const response = await axiosInstance.post(`admin/freebies`, requestData);
    return response.data as SaveFreebiesResponse;
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


// export const saveFreebies = async (data: SaveFreebiesRequest) => {
//     const formData = new FormData();
//     formData.append('freebiesName', data.freebiesName);
//     formData.append('freebiesOriginalQuantity', String(data.freebiesOriginalQuantity));
//     formData.append('freebiesCurrentQuantity', String(data.freebiesCurrentQuantity));
//     if (data.freebiesImg instanceof File) {
//         formData.append('freebiesImg', data.freebiesImg);
//     }
	
// 	// eslint-disable-next-line no-useless-catch
// 	try {
// 		const response = await axiosInstance.post<SaveFreebiesResponse>(`admin/freebies`, formData, {
// 			headers: {
// 				'Content-Type': 'multipart/form-data'
// 			}
// 		});
// 		return response.data;
// 	} catch (error) {
// 		throw error;
// 	}
// };