import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { IoMdCloudDownload } from "react-icons/io";
import { IoCloseSharp } from 'react-icons/io5';
import { SaveProductRequest } from '../../../../../../service/product-service/schema';
import { Input } from '../../../../../../components/input';
import { FormField, FormItem, FormControl, FormDescription } from '../../../../../../components/ui/form';
import { productImgAtom } from '../../../../../../atom/productDetailsAtom';
import { useAtom } from 'jotai';

export const ProductImages = () => {
  const productForm = useFormContext<SaveProductRequest>()
  const [selectedImages, setSelectedImages] = useAtom(productImgAtom);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const fileList = Array.from(files);
      setSelectedImages([...selectedImages, ...fileList]);
      
      // Create image previews
      const imageUrls = fileList.map(file => URL.createObjectURL(file));
      setImagePreviews([...imagePreviews, ...imageUrls]);
    }
  };

  const handleRemoveImage = (index: number) => {
    // Create a copy of the image previews array and remove the preview at the specified index
    const updatedPreviews = [...imagePreviews];
    updatedPreviews.splice(index, 1);
    setImagePreviews(updatedPreviews);
    
    // Create a copy of the selected images array and remove the corresponding file
    const updatedSelectedImages = [...selectedImages];
    updatedSelectedImages.splice(index, 1);
    setSelectedImages(updatedSelectedImages);
  };

  return (
    <div className='w-full pb-12'> 
      <div className='w-full  flex  justify-start items-start'>
        <h1 className='text-lg'>Product Images:</h1>
      </div>
      <div className='mt-6 row flex flex-col gap-6'>
        <div className='flex flex-col gap-2 w-[30%]'>
          <label htmlFor='doc' className='flex items-center p-4 gap-3 rounded-3xl border border-[#63B38F] border-dashed cursor-pointer'>
          <IoMdCloudDownload className='w-16 h-16' />
            <div className='space-y-2'>
                <h4 className='text-base font-semibold text-gray-50'>Upload a file</h4>
                <span className='text-sm text-gray-400'>Max 2 MO</span>
            </div>
            <FormField
                    control={productForm.control}
                    name='img'
                    render={({ field, fieldState }) => (
                        <FormItem className='col-span-full'>
                            <FormControl>
                            <Input 
                              id='doc'
                              className='focus-visible:ring-[#63B38F] hidden' 
                              type='file'
                              accept='png, jpg, jpeg'
                              multiple
                              ref={field.ref}
                              name={field.name}
                              onChange={(e) => {
                                handleImageChange(e);
                                if (e.target.files && e.target.files.length > 0) {
                                    field.onChange(e.target.files[0]);
                                }
                            }}
                              onBlur={field.onBlur}
                            />
                            </FormControl>
                            <FormDescription className='text-red-500'>
                                {fieldState.error?.message}
                            </FormDescription>
                        </FormItem>
                    )}
                  />
          </label>
        </div>
        <div className='grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 w-full h-full gap-4'>
          {/* Display image previews */}
          {imagePreviews.map((previewUrl, index) => (
            <div key={index} className='relative w-full h-full border border-[#63B38F]'>
              <button 
                type='button'
                className='absolute top-1 right-1 rounded-full w-7 h-7 flex justify-center items-center text-lg font-medium text-black border-red-500 border-2'
                onClick={() => handleRemoveImage(index)}
              >
                <IoCloseSharp className='w-5 h-5 text-red-500' />
              </button>
              <div className='w-full h-full flex justify-center items-center'>
                <img className='w-[90%] h-[90%]' src={previewUrl} alt={`Preview ${index}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
