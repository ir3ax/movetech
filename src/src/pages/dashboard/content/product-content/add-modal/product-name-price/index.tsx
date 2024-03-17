import { Input } from '../../../../../../components/input';


export const ProductName = () => {
  
    return (
      <div className='w-full pb-8'> 
      <div className='w-full  flex  justify-start items-start'>
        <h1 className='text-lg'>Product Details:</h1>
      </div>
      <div className='w-full flex flex-col gap-6'>
          <div className='w-full mt-6 row flex gap-6'>
            <div className='w-full flex flex-col gap-2'>
              <label>Product Name</label>
              <Input 
                className='focus-visible:ring-[#63B38F]' 
                placeholder='Product Name'
              />
            </div>
            <div className='w-full flex flex-col gap-2'>
                  <label>Product Sold</label>
                  <Input 
                    className='focus-visible:ring-[#63B38F]' 
                    placeholder='Product Sold'
                    type='number'
                  />
            </div>
          </div>

          <div className='w-full flex flex-col gap-4'>
            <div className='w-full flex gap-6'>

              <div className='w-full flex flex-col gap-2'>
                <label>Supplier Price</label>
                <Input 
                  className='focus-visible:ring-[#63B38F]' 
                  placeholder='Suppliers Price'
                  type='number'
                />
              </div>
              <div className='w-full flex flex-col gap-2'>
                <label>Store Price (w/o discount)</label>
                <Input 
                  className='focus-visible:ring-[#63B38F]' 
                  placeholder='Store Price'
                  type='number'
                />
              </div>
            </div>

            <div className='w-full flex gap-6'>
              <div className='w-full flex flex-col gap-2'>
                <label>Discount</label>
                <Input 
                  className='focus-visible:ring-[#63B38F]' 
                  placeholder='Discount'
                  type='number'
                />
              </div>
              <div className='w-full flex flex-col gap-2'>
                <label>Discounted Price</label>
                <Input 
                  className='focus-visible:ring-[#63B38F] text-[#66fcb9]' 
                  placeholder='Discounted Price'
                  type='number'
                  disabled={true}
                  value={12}
                />
              </div>
            </div>

            <div className='w-full flex gap-6'>
              <div className='w-full flex flex-col gap-2'>
                <label>Original Quantity</label>
                <Input 
                  className='focus-visible:ring-[#63B38F]' 
                  placeholder='Original Quantity'
                  type='number'
                />
              </div>
              <div className='w-full flex flex-col gap-2'>
                <label>Current Quantity</label>
                <Input 
                  className='focus-visible:ring-[#63B38F] text-[#66fcb9]' 
                  placeholder='Current Quantity'
                  type='number'
                  value={12}
                  disabled={true}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    );
}
