import StarRatings from "react-star-ratings";
import Footer from "../../components/appLayout/footer"
import { TopBar } from "../../components/appLayout/topbar"
import { TableBody, TableCell, TableRow } from "../../components/ui/table";
import { FetchCartDetails } from "../../service/cart/schema";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { cartDetailsAtom } from "../../atom/cartDetailsAtom";

export const Cart = () => {

    const navigate = useNavigate();
    const [cartDetails, setCartDetails] = useAtom(cartDetailsAtom);
    console.log('cart-details',cartDetails);

    // Sample data
const cartDetailsValue: FetchCartDetails = {
    products: [
      {
        productId: "123e4567-e89b-12d3-a456-426655440001",
        productName: "[Baak] Ticarto T-2648G Stainless Couple Watch",
        productImg: "https://yelsewph.business/cdn/shop/products/new_couple_540x.jpg?v=1560926945",
        discount:"70% OFF",
        rating:5,
        quantity: 2,
        price: 20.00,
        total: 40.00
      },
      {
        productId: "123e4567-e89b-12d3-a456-426655440002",
        productName: "Shard Brand Luxury Couple watch Free Couple Ring",
        productImg: "https://yelsewph.business/cdn/shop/products/NEW_CP_WATCH_540x.jpg?v=1555255601",
        discount:"50% OFF",
        rating:4.8,
        quantity: 1,
        price: 15.00,
        total: 15.00
      },
      {
        productId: "123e4567-e89b-12d3-a456-426655440003",
        productName: "FNGEEN Mechanical Luminous Automatic watch Green",
        productImg: "https://yelsewph.business/cdn/shop/products/authentic_fngeen_540x.jpg?v=1548169228",
        discount:"65% OFF",
        rating:4.6,
        quantity: 3,
        price: 10.00,
        total: 30.00,
      },
    ],
    grandTotal: 85.00
  };

  const handleCheckout = () => {
    navigate('/checkout')
  }

return(
    <div className='w-full h-full'>
       <div className='sticky top-0 z-50 drop-shadow-md shadow-black bg-[#f3efef]'>
            <TopBar />
        </div>
        <div className='flex flex-col w-full min-h-[90dvh] bg-[#F4F4F4] 2xl:p-24 lg:p-12 text-[#1D1D1D] max-sm:p-2'>
            <div className='w-full h-full text-3xl font-normal tracking-wide'>Your Cart</div>
            <span className='w-[100%]  mt-4 border-b border-black max-sm:w-[100%] lg:w-[100%]' />
            <div className='flex justify-center items-center gap-8 mt-4 max-sm:flex-col max-sm:pb-12'>
                <div className='flex flex-col w-[60%] min-h-[50dvh] max-h-[60vh] overflow-auto max-sm:w-[90%]'>
                {/* <TableHeaders /> */}
                {cartDetailsValue.products.map((index) => (
                    <TableBody className='h-full text-center w-full mt-6 bg-white'>  
                        <TableRow className='flex max-sm:flex-col'> 
                            <TableCell className='w-[30%] flex justify-center items-center'>
                                <input className='w-6 h-6 accent-[#615656]' type="checkbox" />
                            </TableCell>
                            <TableCell className='w-[80%] flex justify-center items-center max-sm:w-[100%]'>
                                <img className='w-24 h-24' src={index.productImg} alt={index.productName} />
                            </TableCell>
                            <TableCell className='w-[100%] flex justify-center items-center'>
                                <div className='flex flex-col justify-center items-center gap-4 max-sm:justify-center max-sm:items-center lg:justify-center lg:items-center'>
                                    <div>
                                        {index.productName}
                                    </div>
                                    <div className='flex justify-center items-center w-full h-full gap-2'>
                                    <StarRatings
                                        rating={1}
                                        starRatedColor="#FCD53F"
                                        numberOfStars={1}
                                        name='rating'
                                        starDimension='16px'
                                    />
                                    <div className='text-gray-400 text-sm mt-1'>{index.rating} ratings |</div>
                                    <div className='text-gray-400 text-sm mt-1'>123 sold</div>
                                </div>
                                </div>
                            </TableCell> 
                            <TableCell className='w-[50%] max-sm:w-[100%]'>
                                <div className='flex flex-col justify-start items-start gap-4 max-sm:justify-center max-sm:items-center lg:justify-center lg:items-center max-sm:flex-row'>
                                    <div className='text-lg text-[#F36000] font-semibold tracking-wide'>
                                        ₱{index.price}
                                    </div>
                                    <div className='flex justify-center items-center gap-3'>
                                        <div className='text-sm text-gray-400'>
                                            {index.discount}
                                        </div>
                                        <button className='text-sm text-gray-400 cursor-pointer'>
                                            <RiDeleteBin6Line className='w-6 h-6' />
                                        </button>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell className='w-[100%] flex justify-center items-center'>
                                <div className='flex justify-center items-center w-full mt-4'>
                                    <div className='flex justify-center items-center gap-2 w-[100%] max-sm:justify-center max-sm:w-[70%]'>
                                        <button className='w-10 h-11 rounded-sm border bg-[#615656] max-sm:w-10 max-sm:h-10 hover:bg-[#918585]'>
                                            <span className='text-1xl text-white'>-</span>
                                        </button>
                                        <input value={index.quantity} className='w-8 h-11 border-t border-b text-center max-sm:w-8 max-sm:h-10' />
                                        <button className='w-10 h-11 rounded-sm border bg-[#615656] max-sm:w-10 max-sm:h-10 hover:bg-[#918585]'>
                                            <span className='text-1xl text-white'>+</span>
                                        </button>
                                    </div>
                                </div>
                            </TableCell>
                        </TableRow>
                        <span className='h-[2px] w-[10%] bg-slate-700 mt-4 border-b border-slate-700 max-sm:w-[100%] lg:w-[10%]' />
                </TableBody>
                ))}
                </div>
                <div className='flex w-[40%] justify-start items-start border min-h-[50dvh] max-h-[60vh] bg-white max-sm:w-[90%]'>
                <div className='p-12 w-full h-full max-sm:p-4'>
                    <div className='flex flex-col w-full h-full'>
                        <h1 className='text-xl max-sm:text-[16px]'>Order Summary</h1>
                        <span className='w-[100%] border-b max-sm:w-[100%] lg:w-[100%] mt-4' />
                        <div className='flex flex-col mt-8 gap-4'>
                            <div className='flex text-lg'>
                                <p className='flex flex-1 justify-start items-start tracking-wide max-sm:text-[16px]'>Subtotal</p>
                                <p className='flex flex-1 justify-center items-center max-sm:text-[16px]'>₱0.00</p>
                            </div>
                            <div className='flex text-lg'>
                                <p className='flex flex-1 justify-start items-start tracking-wide max-sm:text-[16px]'>Shipping Fee</p>
                                <p className='flex flex-1 justify-center items-center max-sm:text-[16px]'>Free</p>
                            </div>
                            <div className='flex text-lg mt-10'>
                                <p className='flex flex-1 justify-start items-start tracking-wide max-sm:text-[16px]'>Total</p>
                                <p className='flex flex-1 justify-center items-center max-sm:text-[16px]'>₱0.00</p>
                            </div>
                        </div>
                        <div className='flex justify-start items-start w-full mt-12'>
                            <button onClick={() => handleCheckout()} className='w-[80%] text-2xl font-normal text-white bg-[#615656] p-2 rounded-sm tracking-widest hover:animate-bounce max-sm:pl-6 max-sm:pr-6 max-sm:text-lg lg:w-[100%] lg:text-xl max-sm:text-[16px] max-sm:w-[100%]'>PROCEED TO CHECKOUT</button>
                        </div>
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