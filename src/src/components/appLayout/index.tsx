import { Outlet } from "react-router-dom";
import { TopBar } from "./topbar";
import { SlideShow } from "../../pages/slideShow";
import { ProductPage } from "../../pages/product";


export const AppLayout = () => {

    const techStackData = [
        {
            "imgName":"[Baak] Ticarto T-2648G Stainless Couple Watch",
            "img":"https://yelsewph.business/cdn/shop/products/new_couple_540x.jpg?v=1560926945",
            "discount":"77% Off",
            "rating": 4.6,
            "originalPrice": 1999,
            "discountedPrice": 459.77
        },
        {
            "imgName":"Shard Brand Luxury Couple watch Free Couple Ring",
            "img":"https://yelsewph.business/cdn/shop/products/NEW_CP_WATCH_540x.jpg?v=1555255601",
            "discount":"50% Off",
            "rating": 4.8,
            "originalPrice": 1000,
            "discountedPrice": 500
        },
        {
            "imgName":"FNGEEN Mechanical Luminous Automatic watch Blue",
            "img":"https://yelsewph.business/cdn/shop/products/authentic_fngeen_blue_540x.jpg?v=1547268460",
            "discount":"45% Off",
            "rating": 4.5,
            "originalPrice": 1499,
            "discountedPrice": 824.45
        },
        {
            "imgName":"FNGEEN Mechanical Luminous Automatic watch Green",
            "img":"https://yelsewph.business/cdn/shop/products/authentic_fngeen_540x.jpg?v=1548169228",
            "discount":"90% Off",
            "rating": 5,
            "originalPrice": 3000,
            "discountedPrice": 300
        },
        {
            "imgName":"Yelsew Winner Automatic Skeleton Watch",
            "img":"https://yelsewph.business/cdn/shop/products/authentic_winner_540x.jpg?v=1564172957",
            "discount":"35% Off",
            "rating": 4.2,
            "originalPrice": 1750,
            "discountedPrice": 1137.5
        },
        {
            "imgName":"LT Electronic Windproof USB Lighter Watch",
            "img":"https://yelsewph.business/cdn/shop/products/lig_540x.jpg?v=1575078706",
            "discount":"25% Off",
            "rating": 4.2,
            "originalPrice": 2550,
            "discountedPrice": 1912.5
        },
    ]

    return (
        <div className='w-full h-full flex flex-col'>
            <div className='w-full h-full'>
                <div className='sticky top-0 z-50 drop-shadow-md shadow-black bg-[#f3efef]'>
                    <TopBar />
                </div>
                <main className='grow h-auto min-h-[100dvh]'>
                    <div className='w-full h-full'>
                        <SlideShow />
                    </div>
                    <div className='w-full h-full bg-[#f4f6f7]'>
                        <div className='flex justify-center items-center p-12'>
                            <div className='mt-4 flex flex-col justify-center items-center max-sm:mt-0'>
                                <h1 className='font-black text-7xl tracking-tighter text-center max-sm:text-2xl'>LEVEL UP YOUR LOOK</h1>
                                <p className='flex text-center py-4 text-xl max-sm:text-sm'>Unleash elegance and precision with our watches and earpods - where style meets technology. Elevate every moment in timeless sophistication. Shop now for the epitome of class and clarity.</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-full bg-white pl-20 pr-20 pb-20 pt-10 max-sm:pl-10 max-sm:pr-10 max-sm:pb-10'>
                        <div className='grid grid-cols-5 gap-6 max-sm:grid-cols-1'>
                        {
                        techStackData.map((index, key) => (
                            <ProductPage key={key} imgName={index.imgName} img={index.img} discount={index.discount} rating={index.rating} originalPrice={index.originalPrice} discountedPrice={index.discountedPrice} />
                            ))
                        }
                        </div>
                    </div>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}
