import { useAtom, useAtomValue } from "jotai"
import { productDetailsAtom } from "../../atom/productDetailsAtom"
import { TopBar } from "../../components/appLayout/topbar";
import Footer from "../../components/appLayout/footer";
import StarRatings from "react-star-ratings";
import { cartDetailsAtom } from "../../atom/cartDetailsAtom";
import { CartProduct, FetchCartDetails } from "../../service/cart/schema";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const ProductDetails = () => {

    const productDetailsValue = useAtomValue(productDetailsAtom);
    const [cartDetails, setCartDetails] = useAtom(cartDetailsAtom);
    const [ stateQuantity, setStateQuantity ] = useState<number>(1);
    const navigate = useNavigate();

    // Calculate the percentage completion
    const percentageCompletion = (
        (productDetailsValue?.currentQuantity ?? 0) / 
        (productDetailsValue?.originalQuantity ?? 0)
    ) * 100;
      

    // Set the width dynamically based on the percentage completion
    const progressBarStyle = {
        width: `${percentageCompletion}%`,
    };

    const handleAddToCart = () => {
        const newProducts: CartProduct[] = [
          {
            productId: productDetailsValue?.productId,
            productName: productDetailsValue?.imgName,
            productImg: productDetailsValue?.img,
            discount: productDetailsValue?.discount,
            rating: productDetailsValue?.productRating,
            quantity: stateQuantity,
            price: productDetailsValue?.discountedPrice,
            total: stateQuantity * (productDetailsValue?.discountedPrice || 0),
          },
        ];
      
        if (!cartDetails) {
          const initialCartDetails: FetchCartDetails = {
            products: [],
            grandTotal: 0,
          };
          setCartDetails(initialCartDetails);
        }
      
        setCartDetails((prevCartDetails) => {
            const updatedProducts = [...prevCartDetails!.products, ...newProducts];
            const updatedGrandTotal = updatedProducts.reduce((total, product) => {
            return total + (product.total || 0);
            }, 0);

            return {
            ...prevCartDetails!,
            products: updatedProducts,
            grandTotal: updatedGrandTotal,
            };
        });
        navigate('/cart')
      };

      const onAdd = () => {
        setStateQuantity(stateQuantity + 1);
      }

      const onMinus = () => {
        setStateQuantity(stateQuantity - 1);
      }
      
      
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
                            <div className='max-w-[90%] flex gap-4 max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:text-center max-sm:max-w-[100%]'>
                                <h1 className='font-normal text-2xl pt-2 max-sm:text-lg lg:text-lg line-clamp-2'>{productDetailsValue?.imgName}</h1>
                                <p className='2xl:w-[20%] xl:w-[20%] w-[20%] lg:w-[30%] max-sm:w-[40%] flex justify-center items-center text-2xl bg-[#cebebe] pl-4 pr-4 pt-2 pb-2 rounded-md font-medium max-sm:text-lg lg:text-lg lg:pl-2 lg:pr-2'>{productDetailsValue?.discount}</p>
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
                                <div className='flex justify-start items-start w-full h-full gap-2'>
                                    <StarRatings
                                        rating={productDetailsValue?.productRating}
                                        starRatedColor="#FCD53F"
                                        numberOfStars={1}
                                        name='rating'
                                        starDimension='16px'
                                    />
                                    <div className='text-gray-400 text-sm mt-1'>{productDetailsValue?.productRating} ratings |</div>
                                    <div className='text-gray-400 text-sm mt-1'>123 sold</div>
                                </div>
                            </div>
                            <div className='max-sm:hidden flex justify-center items-center w-full mt-8 lg:gap-4'>
                                <div className='flex justify-start items-start gap-1 w-[20%] max-sm:justify-center max-sm:w-[70%]'>
                                    <button disabled={stateQuantity === 1} onClick={onMinus} className={`${stateQuantity === 1 ? 'opacity-50' : 'opacity-100'} w-12 h-12 rounded-sm border bg-[#615656] max-sm:w-10 max-sm:h-10`}>
                                        <span className='text-3xl text-white lg:text-lg'>-</span>
                                    </button>
                                    <input value={stateQuantity} className='w-10 h-12 border-t border-b text-center max-sm:w-8 max-sm:h-10' />
                                    <button onClick={onAdd} className='w-12 h-12 rounded-sm border bg-[#615656] max-sm:w-10 max-sm:h-10'>
                                        <span className='text-3xl text-white lg:text-lg'>+</span>
                                    </button>
                                </div>
                                <div className='flex justify-start items-start w-full'>
                                    <button onClick={handleAddToCart} className='text-2xl font-normal text-white bg-[#615656] p-2 rounded-md pl-24 pr-24 tracking-normal hover:animate-bounce max-sm:pl-6 max-sm:pr-6 max-sm:text-lg lg:pr-12 lg:pl-12'>Add to Cart</button>
                                </div>
                            </div>
                            <h1 className='mt-24 text-xl max-sm:flex max-sm:justify-center max-sm:items-center w-full max-sm:mt-12 lg:mt-12'>Product Details</h1>
                            <span className='h-[2px] w-[80%] bg-slate-700 mt-4 border-b border-slate-700 max-sm:w-[100%] lg:w-[90%]' />
                            <div className='flex flex-col justify-start items-start w-full mt-8 pb-24 max-sm:flex max-sm:justify-center max-sm:items-center max-sm:w-full max-sm:pb-48'>
                                <div className='w-[80%] text-lg text-start max-sm:text-md'>
                                    {productDetailsValue?.description1 as string}
                                </div>
                                <div className='mt-6 text-lg max-sm:text-md'>
                                {
                                    (productDetailsValue?.description2 as string[] | undefined)?.map((item, index) => (
                                    <p className='py-1' key={index}>* {item}</p>
                                    ))
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                       {/* Sticky Add to Cart */}
                        <div className='absolute w-full bottom-0 bg-white pb-4 pl-4 pr-4 border rounded-t-2xl shadow-gray-300 shadow-inner mobile-view'>
                            <div className='mt-2 w-[60%] flex flex-col justify-start items-start gap-2 max-sm:w-[100%] max-sm:pl-12 max-sm:pr-12 max-sm:justify-center max-sm:items-center'>
                                <span className='text-xl font-normal tracking-wide'>ONLY <span className='text-[#DB1461]'>{productDetailsValue?.currentQuantity}</span> LEFT</span>
                                <div className='w-full bg-gray-200 rounded-sm h-3 dark:bg-gray-400'>
                                    <div className='bg-[#615656] h-3 rounded-sm' style={progressBarStyle}></div>
                                </div>
                            </div>
                            <div className='flex justify-center items-center w-full mt-4'>
                                <div className='flex justify-start items-start gap-1 w-[20%] max-sm:justify-center max-sm:w-[70%]'>
                                    <button disabled={stateQuantity === 1} onClick={onMinus} className={`${stateQuantity === 1 ? 'opacity-50' : 'opacity-100'} w-12 h-12 border rounded-sm bg-[#615656] max-sm:w-10 max-sm:h-10`}>
                                        <span className='text-3xl text-white'>-</span>
                                    </button>
                                    <input value={stateQuantity} className='w-10 h-12 border-t border-b text-center max-sm:w-8 max-sm:h-10' />
                                    <button onClick={onAdd} className='w-12 h-12 border rounded-sm bg-[#615656] max-sm:w-10 max-sm:h-10'>
                                        <span className='text-3xl text-white'>+</span>
                                    </button>
                                </div>
                                <div className='flex justify-start items-start w-full'>
                                    <button onClick={handleAddToCart} className='text-3xl font-normal text-white bg-[#615656] p-1 rounded-md pl-24 pr-24 tracking-widest hover:animate-bounce max-sm:pl-6 max-sm:pr-6 max-sm:text-lg'>Add to Cart</button>
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