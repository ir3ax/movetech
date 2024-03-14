
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoAddCircleOutline } from "react-icons/io5";
import { ModalView } from "./add-modal";
import { useState } from "react";

export const ProductContent = () => {

    const [openView, setOpenView] = useState<boolean>(false);

    const handleCloseView = () => {
        setOpenView(false);
    }
    
    return (
        <div className='w-full h-full bg-[#f9fbfc]'>
            <ModalView isVisible={openView} handleClose={handleCloseView} />
                <div className='flex w-full'>
                    <div className='relative w-full flex flex-1 justify-start items-start'>
                        <span className='absolute top-3 left-4'>
                            <HiMagnifyingGlass />
                        </span>
                        <input
                            className='flex w-[80%] h-[40px] rounded-md border border-input bg-background px-12 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#5962FF] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                            type='search' 
                            placeholder='Search' 
                        />
                    </div>
                    <div className='w-full flex flex-1 justify-end items-end'>
                        <button
                        className='flex justify-center items-center gap-2 pl-8 pr-8 h-[40px]  rounded-md border text-md bg-[#5962FF] text-white font-semibold hover:bg-[#8265FF]'
                        onClick={() => setOpenView(true)}
                        >
                            <span>Add Product</span>
                            <span className='mt-[1px]'>
                                <IoAddCircleOutline className='w-6 h-6' />
                            </span>
                        </button>
                    </div>
                </div>
                <div className='mt-12 flex flex-col w-full min-h-[70dvh] text-[#555758]'>
                    <div className='w-full h-full flex'>
                        <span className='ml-1 flex flex-1 justify-start items-start font-semibold text-xl'>My Products</span>
                        <div className='flex justify-end'>
                            <div className="relative h-10 w-48 min-w-[100px]">
                                <select
                                    className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-[#5962FF] focus:border-2 focus:border-[#5962FF] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
                                    <option value="ASC">A -&gt; Z</option>
                                    <option value="DESC">Z -&gt; A</option>
                                    <option value="Price High to Low">Price High to Low</option>
                                    <option value="Price Low to High">Price Low to High</option>
                                </select>
                                <label
                                    className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#5962FF] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-[#5962FF] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-[#5962FF] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    SORT LIST BY
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='mt-8 bg-white w-full h-full min-h-[60dvh] border'>
                        
                    </div>
                </div>
        </div>
    )
}