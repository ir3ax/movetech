import { Outlet } from "react-router-dom";
import { TopBar } from "./topbar";
import { SlideShow } from "../../pages/slideShow";
import { ProductPage } from "../../pages/product";
import Footer from "./footer";


export const AppLayout = () => {

    const productReview = [
        {
            "reviewId":"1",
            "productId":"123e4567-e89b-12d3-a456-426655440001",
            "reviewStatement":"Good quality.",
            "reviewRating":4.8,
            "createdAt":1709700347
        },
        {
            "reviewId":"2",
            "productId":"123e4567-e89b-12d3-a456-426655440001",
            "reviewStatement":"Good product.",
            "reviewRating":5,
            "createdAt":1709700347
        },
        {
            "reviewId":"3",
            "productId":"123e4567-e89b-12d3-a456-426655440002",
            "reviewStatement":"Nice Product.",
            "reviewRating":4.5,
            "createdAt":1709700347
        },
        {
            "reviewId":"4",
            "productId":"123e4567-e89b-12d3-a456-426655440005",
            "reviewStatement":"Nice quality.",
            "reviewRating":4.9,
            "createdAt":1709700347
        },
        {
            "reviewId":"5",
            "productId":"123e4567-e89b-12d3-a456-426655440003",
            "reviewStatement":"Fast Delivery and Nice Product",
            "reviewRating":4.2,
            "createdAt":1709700347
        }
    ]

    const techStackData = [
        {
            "productId":"123e4567-e89b-12d3-a456-426655440001",
            "imgName":"[Baak] Ticarto T-2648G Stainless Couple Watch",
            "img":"https://yelsewph.business/cdn/shop/products/new_couple_540x.jpg?v=1560926945",
            "discount":"77% OFF",
            "originalPrice": 1999,
            "discountedPrice": 459.77,
            "description1":"The Watch Series X1 elevates your wristwear game with stacked smart technology. Not only do you experience enhanced functionality, but you also get a sleek design, creating the perfect blend of style and innovation. Layered materials in polished metallic tones add sophistication and dimension for a premium look you'll be syncing with your lifestyle again and again.",
            "description2":[
                "Brand Name:Shard Brand",
                "Item Type:Quartz Wristwatches",
                "Case Material:Alloy",
                "Dial Window Material Type:Glass",
                "Water Resistance Depth:3Bar",
                "Movement:Quartz",
                "Dial Diameter:39.5mm",
                "Clasp Type:Buckle",
                "Boxes & Cases Material",
                "Gender:Couple Men & Women",
                "Style:Business",
                "Feature:Water Resistant"
            ],
            "originalQuantity":25,
            "currentQuantity":6,
            "productStatus":"ACT"
        },
        {
            "productId":"123e4567-e89b-12d3-a456-426655440002",
            "imgName":"Fossil Machine Brown IP Watch - Men's Watches in Brown | Buckle",
            "img":"https://i.pinimg.com/originals/9e/c6/0d/9ec60de715b437d14c83facd96e84787.jpg",
            "discount":"50% OFF",
            "originalPrice": 1000,
            "discountedPrice": 500,
            "description1":"The Watch Series X1 elevates your wristwear game with stacked smart technology. Not only do you experience enhanced functionality, but you also get a sleek design, creating the perfect blend of style and innovation. Layered materials in polished metallic tones add sophistication and dimension for a premium look you'll be syncing with your lifestyle again and again.",
            "description2":[
                "Brand Name:Shard Brand",
                "Item Type:Quartz Wristwatches",
                "Case Material:Alloy",
                "Dial Window Material Type:Glass",
                "Water Resistance Depth:3Bar",
                "Movement:Quartz",
                "Dial Diameter:39.5mm",
                "Clasp Type:Buckle",
                "Boxes & Cases Material",
                "Gender:Couple Men & Women",
                "Style:Business",
                "Feature:Water Resistant"
            ],
            "originalQuantity":200,
            "currentQuantity":93,
            "productStatus":"SOLD"
        },
        {
            "productId":"123e4567-e89b-12d3-a456-426655440003",
            "imgName":"FNGEEN Mechanical Luminous Automatic watch Blue",
            "img":"https://yelsewph.business/cdn/shop/products/authentic_fngeen_blue_540x.jpg?v=1547268460",
            "discount":"45% OFF",
            "originalPrice": 1499,
            "discountedPrice": 824.45,
            "description1":"The Watch Series X1 elevates your wristwear game with stacked smart technology. Not only do you experience enhanced functionality, but you also get a sleek design, creating the perfect blend of style and innovation. Layered materials in polished metallic tones add sophistication and dimension for a premium look you'll be syncing with your lifestyle again and again.",
            "description2":[
                "Brand Name:Shard Brand",
                "Item Type:Quartz Wristwatches",
                "Case Material:Alloy",
                "Dial Window Material Type:Glass",
                "Water Resistance Depth:3Bar",
                "Movement:Quartz",
                "Dial Diameter:39.5mm",
                "Clasp Type:Buckle",
                "Boxes & Cases Material",
                "Gender:Couple Men & Women",
                "Style:Business",
                "Feature:Water Resistant"
            ],
            "originalQuantity":50,
            "currentQuantity":18,
            "productStatus":"ACT"
        },
        {
            "productId":"123e4567-e89b-12d3-a456-426655440004",
            "imgName":"OPK Wrist Watch for Men With Box Water proof Original Quartz Calendar Stainless Steel Strap 8108",
            "img":"https://cf.shopee.ph/file/1ed3b1dbd5777c9453541ecd41983a5b",
            "discount":"90% OFF",
            "originalPrice": 3000,
            "discountedPrice": 300,
            "description1":"The Watch Series X1 elevates your wristwear game with stacked smart technology. Not only do you experience enhanced functionality, but you also get a sleek design, creating the perfect blend of style and innovation. Layered materials in polished metallic tones add sophistication and dimension for a premium look you'll be syncing with your lifestyle again and again.",
            "description2":[
                "Brand Name:Shard Brand",
                "Item Type:Quartz Wristwatches",
                "Case Material:Alloy",
                "Dial Window Material Type:Glass",
                "Water Resistance Depth:3Bar",
                "Movement:Quartz",
                "Dial Diameter:39.5mm",
                "Clasp Type:Buckle",
                "Boxes & Cases Material",
                "Gender:Couple Men & Women",
                "Style:Business",
                "Feature:Water Resistant"
            ],
            "originalQuantity":150,
            "currentQuantity":66,
            "productStatus":"ACT"
        },
        {
            "productId":"123e4567-e89b-12d3-a456-426655440005",
            "imgName":"Casio EFR-539SG-7AVU Edifice Series Men's Watch",
            "img":"https://th.bing.com/th/id/R.719fa89633e9e013d378c3737dcd5833?rik=5yVt7sdOPo7gxQ&riu=http%3a%2f%2fwatchcentre.pk%2fwp-content%2fuploads%2f2016%2f11%2fCasio-Edifice-EFR-539SG-7AV.jpg&ehk=%2fu4CWbTFvr0hGxPJ0peS4DWiosAWJddV0QwwzTbGI%2fg%3d&risl=&pid=ImgRaw&r=0",
            "discount":"35% OFF",
            "originalPrice": 1750,
            "discountedPrice": 1137.5,
            "description1":"The Watch Series X1 elevates your wristwear game with stacked smart technology. Not only do you experience enhanced functionality, but you also get a sleek design, creating the perfect blend of style and innovation. Layered materials in polished metallic tones add sophistication and dimension for a premium look you'll be syncing with your lifestyle again and again.",
            "description2":[
                "Brand Name:Shard Brand",
                "Item Type:Quartz Wristwatches",
                "Case Material:Alloy",
                "Dial Window Material Type:Glass",
                "Water Resistance Depth:3Bar",
                "Movement:Quartz",
                "Dial Diameter:39.5mm",
                "Clasp Type:Buckle",
                "Boxes & Cases Material",
                "Gender:Couple Men & Women",
                "Style:Business",
                "Feature:Water Resistant"
            ],
            "originalQuantity":50,
            "currentQuantity":25,
            "productStatus":"SOLD"
        },
        {
            "productId":"123e4567-e89b-12d3-a456-426655440006",
            "imgName":"TAG HEUER FORMULA 1 CHRONOGRAPH QUARTZ 43MM",
            "img":"https://sunlab.com.mt/wp-content/uploads/2021/03/CAZ1011.BA0843.jpg",
            "discount":"25% OFF",
            "originalPrice": 2550,
            "discountedPrice": 1912.5,
            "description1":"The Watch Series X1 elevates your wristwear game with stacked smart technology. Not only do you experience enhanced functionality, but you also get a sleek design, creating the perfect blend of style and innovation. Layered materials in polished metallic tones add sophistication and dimension for a premium look you'll be syncing with your lifestyle again and again.",
            "description2":[
                "Brand Name:Shard Brand",
                "Item Type:Quartz Wristwatches",
                "Case Material:Alloy",
                "Dial Window Material Type:Glass",
                "Water Resistance Depth:3Bar",
                "Movement:Quartz",
                "Dial Diameter:39.5mm",
                "Clasp Type:Buckle",
                "Boxes & Cases Material",
                "Gender:Couple Men & Women",
                "Style:Business",
                "Feature:Water Resistant"
            ],
            "originalQuantity":100,
            "currentQuantity":10,
            "productStatus":"SOLD"
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
                        <div className='grid 2xl:grid-cols-5 lg:grid-cols-4 gap-6 max-sm:grid-cols-1'>
                        {techStackData.map((product, key) => {
                            // Filter reviews based on the current productId
                            const productReviews = productReview.filter(review => review.productId === product.productId);
                            return (
                                <div key={key}>
                                    <ProductPage
                                        productId={product.productId}
                                        imgName={product.imgName}
                                        img={product.img}
                                        discount={product.discount}
                                        originalPrice={product.originalPrice}
                                        discountedPrice={product.discountedPrice}
                                        description1={product.description1}
                                        description2={product.description2}
                                        originalQuantity={product.originalQuantity}
                                        currentQuantity={product.currentQuantity}
                                        productReviews={productReviews}
                                        productStatus={product.productStatus}
                                    />
                                </div>
                            );
                        })}
                        </div>
                    </div>
                    <Outlet />
                </main>
                <div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}
