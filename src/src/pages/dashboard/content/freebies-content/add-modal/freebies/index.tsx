import React, { useState } from 'react';
import { IoIosAdd, IoMdClose, IoMdCloudDownload } from 'react-icons/io';
import { Input } from '../../../../../../components/input';
import { useFormContext } from 'react-hook-form';
import { SaveFreebiesRequest } from '../../../../../../service/freebies/schema';
import { FormControl, FormDescription, FormField, FormItem } from '../../../../../../components/ui/form';
import { freebiesAtom } from '../../../../../../atom/freebiesAtom';
import { useAtom } from 'jotai';

interface Freebie {
  freebiesName: string;
  freebiesStorePrice: number;
  freebiesOriginal: number;
  freebiesCurrent: number;
  freebiesImg: File;
}

export const FreebiesModal = () => {
  const [freebiesAtomValue, setFreebiesAtomValue] = useAtom(freebiesAtom);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [currentQuantityValue, setCurrentQuantity] = useState<string | number | readonly string[] | undefined>('0');
  
  console.log(freebiesAtomValue)

  const freebiesForm = useFormContext<SaveFreebiesRequest>()
    // const { formState } = freebiesForm
    // const { isValid, isSubmitting } = formState
    // const shouldDisable = !isValid || isSubmitting

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewImage(null);
    }
  };

  const handleAddFreebie = () => {
    const freebiesNameElement = document.getElementById('freebiesName') as HTMLInputElement;
    const freebiesOriginalElement = document.getElementById('freebiesOriginalQuantity') as HTMLInputElement;
    const freebiesCurrentElement = document.getElementById('freebiesCurrentQuantity') as HTMLInputElement;
    const freebiesStorePriceElement = document.getElementById('freebiesStorePrice') as HTMLInputElement;
    const fileInput = document.getElementById('doc') as HTMLInputElement;
    
    if (freebiesStorePriceElement && freebiesOriginalElement && freebiesNameElement && fileInput.files && fileInput.files.length > 0) {
      const freebiesName = freebiesNameElement.value;
      const freebiesOriginal = parseFloat(freebiesOriginalElement.value);
      const freebiesCurrent = parseFloat(freebiesCurrentElement.value);
      const freebiesStorePrice = parseFloat(freebiesStorePriceElement.value);
      const freebiesImg = fileInput.files[0];

      const newFreebie: Freebie = {
        freebiesName,
        freebiesStorePrice,
        freebiesOriginal,
        freebiesCurrent,
        freebiesImg
      };
      
      
      setFreebiesAtomValue(newFreebie);
  
      // Clear input values
      freebiesNameElement.value = '';
      freebiesOriginalElement.value = '';
      freebiesCurrentElement.value = '';
      freebiesStorePriceElement.value = '';
      fileInput.value = '';
      setPreviewImage(null);
      setCurrentQuantity('0')
    } else {
      console.error('Required elements or files are not found.');
    }
  };

  // const handleRemoveFreebie = (index: number) => {
  //   setFreebiesAtomValue(prevFreebies => prevFreebies.filter((_, i) => i !== index));
  // };

  return (
    <div className='w-full pb-8'> 
      <div className='w-full  flex  justify-start items-start'>
        <h1 className='text-lg'>Freebies:</h1>
      </div>
      <div className='mt-6 w-full flex gap-6'>
        <div className='flex flex-1 flex-col gap-6'>
          <div className='w-[80%] flex flex-col gap-2'>
            <label>Freebies Name</label>
            <FormField
                control={freebiesForm.control}
                name='freebiesName'
                render={({ field, fieldState }) => (
                    <FormItem className='col-span-full'>
                        <FormControl>
                        <Input 
                          id='freebiesName'
                          className='focus-visible:ring-[#63B38F]' 
                          placeholder='Freebies Name'
                          type='text'
                          ref={field.ref}
                          name={field.name}
                          onChange={field.onChange}
                          onBlur={field.onBlur}
                        />
                        </FormControl>
                        <FormDescription className='text-red-500'>
                            {fieldState.error?.message}
                        </FormDescription>
                    </FormItem>
                )}
            />
          </div>
          <div className='w-[80%] flex flex-col gap-2'>
            <label>Freebies Store Price</label>
            <FormField
                control={freebiesForm.control}
                name='freebiesStorePrice'
                render={({ field, fieldState }) => (
                    <FormItem className='col-span-full'>
                        <FormControl>
                        <Input 
                          id='freebiesStorePrice'
                          className='focus-visible:ring-[#63B38F]' 
                          placeholder='Freebies Store Price'
                          type='number'
                          ref={field.ref}
                          name={field.name}
                          onChange={field.onChange}
                          onBlur={field.onBlur}
                        />
                        </FormControl>
                        <FormDescription className='text-red-500'>
                            {fieldState.error?.message}
                        </FormDescription>
                    </FormItem>
                )}
            />
          </div>
          <div className='w-[80%] flex flex-col gap-2'>
            <label>Freebies Original Quantity</label>
            <FormField
                control={freebiesForm.control}
                name='freebiesOriginalQuantity'
                render={({ field, fieldState }) => (
                    <FormItem className='col-span-full'>
                        <FormControl>
                        <Input 
                          id='freebiesOriginalQuantity'
                          className='focus-visible:ring-[#63B38F]' 
                          placeholder='Freebies Original Quantity'
                          type='number'
                          // onChange={(e) => setCurrentQuantity(e.target.value)}
                          ref={field.ref}
                          name={field.name}
                          onChange={(e) => {
                            field.onChange(e); // Handle form field change
                            setCurrentQuantity(e.target.value); // Handle original quantity change
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
          </div>
          <div className='w-[80%] flex flex-col gap-2'>
            <label>Freebies Current Quantity</label>
            <FormField
                control={freebiesForm.control}
                name='freebiesCurrentQuantity'
                render={({ field, fieldState }) => (
                    <FormItem className='col-span-full'>
                        <FormControl>
                        <Input 
                          id='freebiesCurrentQuantity'
                          className='focus-visible:ring-[#63B38F]' 
                          placeholder='Freebies Current Quantity'
                          type='number'
                          // value={currentQuantityValue}
                          ref={field.ref}
                          name={field.name}
                          // disabled
                          onChange={field.onChange}
                          onBlur={field.onBlur}
                        />
                        </FormControl>
                        <FormDescription className='text-red-500'>
                            {fieldState.error?.message}
                        </FormDescription>
                    </FormItem>
                )}
            />
          </div>
          <div className='w-[80%] flex flex-col gap-2'>
            <label>Freebies Image</label>
            <div className='flex flex-col gap-2 w-[90%]'>
              <label htmlFor='doc' className='flex items-center p-2 gap-3 rounded-3xl border border-[#63B38F] border-dashed cursor-pointer'>
                <IoMdCloudDownload className='w-10 h-10' />
                <div className='space-y-2'>
                  <h4 className='text-base font-semibold text-gray-50'>Upload a file</h4>
                  <span className='text-sm text-gray-400'>Max 2 MO</span>
                </div>
                <FormField
                  control={freebiesForm.control}
                  name='freebiesImg'
                  render={({ field, fieldState }) => (
                      <FormItem className='col-span-full'>
                          <FormControl>
                          <Input 
                            id='doc'
                            className='focus-visible:ring-[#63B38F] hidden' 
                            type='file'
                            accept='png, jpg, jpeg'
                            ref={field.ref}
                            name={field.name}
                            onChange={(e) => {
                              // Call handleFileChange with the event and set field value to the selected file
                              handleFileChange(e);
                              // Check if e.target.files exists and has length > 0 before accessing the first file
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
                {/* Display preview image if available */}
                {previewImage && (
                  <img src={previewImage} alt='Preview' className='w-24 h-24 ml-2 rounded-lg' />
                )}
              </label>

              <div className='pb-10'>
                <button type='submit' className='w-full' >
                    Send Message
                </button>
            </div>
            </div>
          </div>
          <button 
            type='button'
            className='mt-4 w-[80%] pl-4 pr-4 pt-2 pb-2 border border-[#63B38F] rounded-md flex justify-center items-center cursor-pointer hover:bg-[#bdfce0]'
            onClick={handleAddFreebie}
          >
            <span>Add Freebies</span>
            <IoIosAdd className='w-6 h-6' />
          </button>     
        </div>
        {/* <div className='mt-6 flex flex-1 bg-[#172539] border border-[#63B38F] min-h-[20dvh] shadow-inner shadow-[#63B38F] px-4 py-4'>
          
          <ul className='w-full flex flex-col gap-4'>
            {freebiesAtomValue.map((freebie, index) => (
              <li className='w-full flex border p-4 relative' key={index}>
                <div className='flex flex-col flex-1 justify-center items-start gap-4 mt-2'>
                  <p>Name: {freebie.freebiesName}</p>
                  <p>Original Quantity: {freebie.freebiesOriginal}</p>
                  <p>Current Quantity: {freebie.freebiesCurrent}</p>
                </div>
                
                <div className='flex flex-1 justify-end items-end'>
                  {freebie.freebiesImg && typeof freebie.freebiesImg !== 'string' && (
                    <img src={URL.createObjectURL(freebie.freebiesImg)} alt={freebie.freebiesName} className='w-24 h-24 mt-4 rounded-lg' />
                  )}
                  <button
                        type='button'
                        className='text-red-600 absolute top-1 right-1'
                        onClick={() => handleRemoveFreebie(index)}
                      >
                        <IoMdClose className='w-6 h-6' />
                      </button>
                </div>
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </div>
  );
}
