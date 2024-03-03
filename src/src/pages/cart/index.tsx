import Footer from "../../components/appLayout/footer"
import { TopBar } from "../../components/appLayout/topbar"
import { TableBody, TableCell, TableRow } from "../../components/ui/table";
import { FetchCartDetails } from "../../service/cart/schema";
import { RiDeleteBin6Line } from "react-icons/ri";

export const Cart = () => {

    // Sample data
const cartDetailsValue: FetchCartDetails = {
    products: [
      {
        productId: 1,
        productName: "[Baak] Ticarto T-2648G Stainless Couple Watch",
        productImg: "https://yelsewph.business/cdn/shop/products/new_couple_540x.jpg?v=1560926945",
        discount:"70% OFF",
        quantity: 2,
        price: 20.00,
        total: 40.00
      },
      {
        productId: 2,
        productName: "Shard Brand Luxury Couple watch Free Couple Ring",
        productImg: "https://yelsewph.business/cdn/shop/products/NEW_CP_WATCH_540x.jpg?v=1555255601",
        discount:"50% OFF",
        quantity: 1,
        price: 15.00,
        total: 15.00
      },
      {
        productId: 3,
        productName: "FNGEEN Mechanical Luminous Automatic watch Green",
        productImg: "https://yelsewph.business/cdn/shop/products/authentic_fngeen_540x.jpg?v=1548169228",
        discount:"65% OFF",
        quantity: 3,
        price: 10.00,
        total: 30.00
      },
    ],
    grandTotal: 85.00
  };

  console.log(cartDetailsValue)

return(
    <div className='w-full h-full'>
       <div className='sticky top-0 z-50 drop-shadow-md shadow-black bg-[#f3efef]'>
            <TopBar />
        </div>
        <div className='flex flex-col w-full min-h-[90dvh] bg-[#F4F4F4] 2xl:p-24 lg:p-12 text-[#1D1D1D] max-sm:p-2'>
            <div className='w-full h-full text-3xl font-medium tracking-wide'>YOUR CART</div>
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
                                    <div className='text-md text-gray-400'>
                                        {index.discount}
                                    </div>
                                </div>
                            </TableCell> 
                            <TableCell className='w-[50%] max-sm:w-[100%]'>
                                <div className='flex flex-col justify-start items-start gap-4 max-sm:justify-center max-sm:items-center lg:justify-center lg:items-center max-sm:flex-row'>
                                    <div className='text-lg text-[#F36000] font-semibold tracking-wide'>
                                        ₱{index.price}
                                    </div>
                                    <button className='text-sm text-gray-400 cursor-pointer'>
                                        <RiDeleteBin6Line className='w-6 h-6' />
                                    </button>
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
                            <button className='w-[80%] text-2xl font-normal text-white bg-[#615656] p-2 rounded-sm tracking-widest hover:animate-bounce max-sm:pl-6 max-sm:pr-6 max-sm:text-lg lg:w-[100%] lg:text-xl max-sm:text-[16px] max-sm:w-[100%]'>PROCEED TO CHECKOUT</button>
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