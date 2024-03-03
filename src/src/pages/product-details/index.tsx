// import StarRatings from 'react-star-ratings'

import { useAtomValue } from "jotai"
import { productDetailsAtom } from "../../atom/productDetailsAtom"
import { TopBar } from "../../components/appLayout/topbar";
import Footer from "../../components/appLayout/footer";


export const ProductDetails = () => {

    const productDetailsValue = useAtomValue(productDetailsAtom);

    // Calculate the percentage completion
    const percentageCompletion = (
        (productDetailsValue?.currentQuantity ?? 0) / 
        (productDetailsValue?.originalQuantity ?? 0)
    ) * 100;
      

    // Set the width dynamically based on the percentage completion
    const progressBarStyle = {
        width: `${percentageCompletion}%`,
    };

    return (
        <div className='w-full h-full'>
            <div className='sticky top-0 z-50 drop-shadow-md shadow-black bg-[#f3efef]'>
                <TopBar />
            </div>
            <div className='mt-12 bg-white relative pb-12'>
                <div className='flex justify-center items-center gap-8 max-sm:flex-col'>
                    <div className='flex flex-1 justify-end items-end gap-4 max-sm:flex-col-reverse max-sm:mr-12 max-sm:ml-12 max-sm:justify-center max-sm:items-center'>
                        <div className='flex flex-col flex-1 justify-end items-end gap-4 w-full h-[80dvh] max-sm:flex-row'>
                                <button className='max-sm:w-28 max-sm:h-28 flex justify-center items-center w-32 h-32 border rounded-md p-2 hover:border-[#1796CC] active:border-[#1796CC] focus:active:border-[#1796CC]'>
                                    <img className='w-24 h-24 max-sm:w-20 max-sm:h-20' src={productDetailsValue?.img} alt={productDetailsValue?.imgName} />
                                </button>
                                <button className='max-sm:w-28 max-sm:h-28 flex justify-center items-center w-32 h-32 border rounded-md p-2 hover:border-[#1796CC] active:border-[#1796CC] focus:active:border-[#1796CC]'>
                                    <img className='w-24 h-24 max-sm:w-20 max-sm:h-20' src={productDetailsValue?.img} alt={productDetailsValue?.imgName} />
                                </button>
                                <button className='max-sm:w-28 max-sm:h-28 flex justify-center items-center w-32 h-32 border rounded-md p-2 hover:border-[#1796CC] active:border-[#1796CC] focus:active:border-[#1796CC]'>
                                    <img className='w-24 h-24 max-sm:w-20 max-sm:h-20' src={productDetailsValue?.img} alt={productDetailsValue?.imgName} />
                                </button>
                        </div>
                        <div className='flex flex-1 justify-center items-center w-full h-[80dvh] p-16 border rounded-md max-sm:p-6'>
                            <img src={productDetailsValue?.img} alt={productDetailsValue?.imgName} />
                        </div>
                    </div>
                    <div className='flex flex-1 justify-start items-start max-sm:justify-center max-sm:items-center'>
                        <div className='flex flex-col justify-start items-start w-full h-[80dvh] max-h-[85dvh] overflow-y-auto'>
                            <div className='flex gap-4 max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:text-center'>
                                <h1 className='font-normal text-2xl pt-2 max-sm:text-lg lg:text-lg'>{productDetailsValue?.imgName}</h1>
                                <p className='text-2xl bg-[#cebebe] pl-4 pr-4 pt-2 pb-2 rounded-md font-medium max-sm:text-lg lg:text-lg lg:pl-2 lg:pr-2'>{productDetailsValue?.discount}</p>
                            </div>
                            <span className='h-[2px] w-[80%] bg-slate-700 mt-4 border-b border-slate-700 max-sm:w-[100%] lg:w-[90%]' />
                            <div className='flex justify-center items-center w-full mt-12 text-2xl max-sm:mt-6 lg:mt-6'>
                                <p className='flex flex-1 justify-start items-start text-[#A1133A] font-semibold line-through max-sm:justify-center lg:text-lg'>₱{productDetailsValue?.originalPrice}</p>
                                <p className='flex flex-1 justify-start items-start text-[#F36000] font-semibold max-sm:justify-center lg:text-lg'>₱{productDetailsValue?.discountedPrice}</p>
                            </div>
                            <div className='max-sm:hidden mt-6 w-[60%] flex flex-col justify-start items-start gap-2 max-sm:w-[100%] max-sm:pl-12 max-sm:pr-12 max-sm:justify-center max-sm:items-center'>
                                <span className='text-xl font-normal tracking-wide'>ONLY <span className='text-[#DB1461]'>{productDetailsValue?.currentQuantity}</span> LEFT</span>
                                <div className='w-full bg-gray-200 rounded-sm h-3 dark:bg-gray-400'>
                                    <div className='bg-[#615656] h-3 rounded-sm' style={progressBarStyle} />
                                </div>
                            </div>
                            <div className='max-sm:hidden flex justify-center items-center w-full mt-8 lg:gap-4'>
                                <div className='flex justify-start items-start gap-1 w-[20%] max-sm:justify-center max-sm:w-[70%]'>
                                    <button className='w-12 h-12 rounded-sm border bg-[#615656] max-sm:w-10 max-sm:h-10'>
                                        <span className='text-3xl text-white lg:text-lg'>-</span>
                                    </button>
                                    <input value={1} className='w-10 h-12 border-t border-b text-center max-sm:w-8 max-sm:h-10' />
                                    <button className='w-12 h-12 rounded-sm border bg-[#615656] max-sm:w-10 max-sm:h-10'>
                                        <span className='text-3xl text-white lg:text-lg'>+</span>
                                    </button>
                                </div>
                                <div className='flex justify-start items-start w-full'>
                                    <button className='text-2xl font-normal text-white bg-[#615656] p-2 rounded-sm pl-24 pr-24 tracking-normal hover:animate-bounce max-sm:pl-6 max-sm:pr-6 max-sm:text-lg lg:pr-12 lg:pl-12'>ADD TO CART!</button>
                                </div>
                            </div>
                            <h1 className='mt-24 text-xl max-sm:flex max-sm:justify-center max-sm:items-center w-full max-sm:mt-12 lg:mt-12'>Product Details</h1>
                            <span className='h-[2px] w-[80%] bg-slate-700 mt-4 border-b border-slate-700 max-sm:w-[100%] lg:w-[90%]' />
                            <div className='flex flex-col justify-start items-start w-full mt-8 pb-24 max-sm:flex max-sm:justify-center max-sm:items-center max-sm:w-full max-sm:pb-48'>
                                <div className='w-[80%] text-lg text-start max-sm:text-md'>
                                    The Watch Series X1 elevates your wristwear game with stacked smart technology. Not only do you experience enhanced functionality, but you also get a sleek design, creating the perfect blend of style and innovation. Layered materials in polished metallic tones add sophistication and dimension for a premium look you'll be syncing with your lifestyle again and again.
                                </div>
                                <div className='mt-6 text-lg max-sm:text-md'>
                                {
                                    (productDetailsValue?.description as string[] | undefined)?.map((item, index) => (
                                    <p className='py-1' key={index}>* {item}</p>
                                    ))
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                       {/* Sticky Add To Cart */}
                        <div className='absolute w-full bottom-0 bg-white pb-4 pl-4 pr-4 border rounded-t-2xl shadow-gray-300 shadow-inner mobile-view'>
                            <div className='mt-2 w-[60%] flex flex-col justify-start items-start gap-2 max-sm:w-[100%] max-sm:pl-12 max-sm:pr-12 max-sm:justify-center max-sm:items-center'>
                                <span className='text-xl font-normal tracking-wide'>ONLY <span className='text-[#DB1461]'>{productDetailsValue?.currentQuantity}</span> LEFT</span>
                                <div className='w-full bg-gray-200 rounded-sm h-3 dark:bg-gray-400'>
                                    <div className='bg-[#615656] h-3 rounded-sm' style={progressBarStyle}></div>
                                </div>
                            </div>
                            <div className='flex justify-center items-center w-full mt-4'>
                                <div className='flex justify-start items-start gap-1 w-[20%] max-sm:justify-center max-sm:w-[70%]'>
                                    <button className='w-12 h-12 border rounded-sm bg-[#615656] max-sm:w-10 max-sm:h-10'>
                                        <span className='text-3xl text-white'>-</span>
                                    </button>
                                    <input value={1} className='w-10 h-12 border-t border-b text-center max-sm:w-8 max-sm:h-10' />
                                    <button className='w-12 h-12 border rounded-sm bg-[#615656] max-sm:w-10 max-sm:h-10'>
                                        <span className='text-3xl text-white'>+</span>
                                    </button>
                                </div>
                                <div className='flex justify-start items-start w-full'>
                                    <button className='text-3xl font-normal text-white bg-[#615656] p-1 rounded-sm pl-24 pr-24 tracking-widest hover:animate-bounce max-sm:pl-6 max-sm:pr-6 max-sm:text-lg'>ADD TO CART!</button>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}