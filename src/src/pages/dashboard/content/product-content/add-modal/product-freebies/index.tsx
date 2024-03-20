import React, { useState } from 'react';
import { IoIosAdd, IoMdClose, IoMdCloudDownload } from 'react-icons/io';
import { Input } from '../../../../../../components/input';
interface Freebie {
  freebiesCode: string;
  freebiesName: string;
  freebiesImg: string;
}

export const ProductFreebies = () => {
  const [freebies, setFreebies] = useState<Freebie[]>([]);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

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
    const freebiesCodeElement = document.getElementById('freebiesCode') as HTMLInputElement;
    const freebiesNameElement = document.getElementById('freebiesName') as HTMLInputElement;
    const fileInput = document.getElementById('doc') as HTMLInputElement;
    
    if (freebiesCodeElement && freebiesNameElement && fileInput.files && fileInput.files.length > 0) {
      const freebiesCode = freebiesCodeElement.value;
      const freebiesName = freebiesNameElement.value;
      const freebiesImg = fileInput.value;
      const newFreebie = {
        freebiesCode,
        freebiesName,
        freebiesImg
      };
  
      setFreebies(prevFreebies => [...prevFreebies, newFreebie]);
  
      // Clear input values
      freebiesCodeElement.value = '';
      freebiesNameElement.value = '';
      fileInput.value = '';
      setPreviewImage(null);
    } else {
      console.error('Required elements or files are not found.');
    }
  };

  const handleRemoveFreebie = (index: number) => {
    setFreebies(prevFreebies => prevFreebies.filter((_, i) => i !== index));
  };
  

  return (
    <div className='w-full pb-8'> 
      <div className='w-full  flex  justify-start items-start'>
        <h1 className='text-lg'>Freebies:</h1>
      </div>
      <div className='mt-6 w-full flex gap-6'>
        <div className='flex flex-1 flex-col gap-6'>
          <div className='w-[80%] flex flex-col gap-2'>
            <label>Freebies Code</label>
            <Input 
              id='freebiesCode'
              className='focus-visible:ring-[#63B38F]' 
              placeholder='Freebies Code'
              type='text'
            />
          </div>
          <div className='w-[80%] flex flex-col gap-2'>
            <label>Freebies Name</label>
            <Input 
              id='freebiesName'
              className='focus-visible:ring-[#63B38F]' 
              placeholder='Freebies Name'
              type='text'
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
                <input type='file' id='doc' name='doc' accept='png, jpg, jpeg' hidden onChange={handleFileChange}/>
                {/* Display preview image if available */}
                {previewImage && (
                  <img src={previewImage} alt='Preview' className='w-24 h-24 ml-2 rounded-lg' />
                )}
              </label>
            </div>
          </div>
          <button 
            className='mt-4 w-[80%] pl-4 pr-4 pt-2 pb-2 border border-[#63B38F] rounded-md flex justify-center items-center cursor-pointer hover:bg-[#bdfce0]'
            onClick={handleAddFreebie}
          >
            <span>Add Freebies</span>
            <IoIosAdd className='w-6 h-6' />
          </button>     
        </div>
        <div className='mt-6 flex flex-1 bg-[#172539] border border-[#63B38F] min-h-[20dvh] shadow-inner shadow-[#63B38F] px-4 py-4'>
          {/* Display added freebies */}
          <ul className='w-full flex flex-col gap-4'>
            {freebies.map((freebie, index) => (
              <li className='w-full flex border p-4 relative' key={index}>
                <div className='flex flex-col flex-1 justify-center items-start gap-4 mt-2'>
                  <p>Code: {freebie.freebiesCode}</p>
                  <p>Name: {freebie.freebiesName}</p>
                </div>
                {/* Display freebies image */}
                <div className='flex flex-1 justify-end items-end'>
                  {freebie.freebiesImg && typeof freebie.freebiesImg !== 'string' && (
                    <img src={URL.createObjectURL(freebie.freebiesImg)} alt={freebie.freebiesName} className='w-24 h-24 mt-4 rounded-lg' />
                  )}
                  <button
                        className='text-red-600 absolute top-1 right-1'
                        onClick={() => handleRemoveFreebie(index)}
                      >
                        <IoMdClose className='w-6 h-6' />
                      </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
