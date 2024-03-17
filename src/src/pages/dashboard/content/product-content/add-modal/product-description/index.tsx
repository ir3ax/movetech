import { useState } from 'react';
import { Input } from '../../../../../../components/input';
import { IoIosAdd, IoMdClose } from 'react-icons/io';

export const ProductDescription = () => {
  const [bulletDescriptions, setBulletDescriptions] = useState<string[]>([]);

  const handleAddBulletDescription = () => {
    const inputElement = document.getElementById('bulletDescriptionInput') as HTMLInputElement;
    if (inputElement) {
      const inputValue = inputElement.value;
      setBulletDescriptions(prevDescriptions => [...prevDescriptions, inputValue]);
      inputElement.value = '';
    }
  };

  const handleRemoveBulletDescription = (indexToRemove: number) => {
    setBulletDescriptions(prevDescriptions =>
      prevDescriptions.filter((_, index) => index !== indexToRemove)
    );
  };

  console.log(bulletDescriptions)

  return (
    <div className='w-full pb-8'> 
      <div className='w-full  flex  justify-start items-start'>
        <h1 className='text-lg'>Description:</h1>
      </div>
      <div className='mt-6 row flex flex-col gap-6'>
        <div className='flex flex-col gap-2'>
            <label>Main Description</label>
            <textarea 
              className='focus-visible:ring-[#63B38F] w-[100%] px-5 py-2 min-h-[20dvh]' 
              placeholder='Type Here...'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label>Bullet Description</label>
            <div className='w-full flex gap-4'>
              <div className='flex flex-1 gap-2'>
                <Input 
                  id='bulletDescriptionInput'
                  className='focus-visible:ring-[#63B38F] w-[80%]' 
                  placeholder='Type Here...'
                />
                <button 
                  className='w-10 h-10 border border-[#63B38F] rounded-md flex justify-center items-center cursor-pointer hover:bg-[#bdfce0]'
                  onClick={handleAddBulletDescription}
                >
                  <IoIosAdd className='w-6 h-6' />
                </button>
              </div>
              <div id='displayedDescription' className='flex flex-1 bg-[#172539] border border-[#63B38F] min-h-[20dvh] shadow-inner shadow-[#63B38F] px-4 py-4'>
                {/* Display added bullet descriptions */}
                <ul className='relative'>
                  {bulletDescriptions.map((description, index) => (
                    <li key={index}>
                      <span>&#8226;</span> {description}
                      <button
                        className='ml-4 text-red-600 absolute'
                        onClick={() => handleRemoveBulletDescription(index)}
                      >
                        <IoMdClose className='w-6 h-6' />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
