import { useSetAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';
import StarRatings from 'react-star-ratings'
import { productDetailsAtom } from '../../atom/productDetailsAtom';

interface ProductProps {
    productId: number;
    img: string,
    imgName: string;
    discount: string;
    rating: number;
    originalPrice: number;
    discountedPrice: number;
    description: unknown;
    originalQuantity: number;
    currentQuantity: number;
}

export const ProductPage: React.FC<ProductProps> = ({ productId, img, imgName, discount, rating, originalPrice, discountedPrice, description, originalQuantity, currentQuantity }) => {

    const navigate = useNavigate();
    const setProductDetailsData = useSetAtom(productDetailsAtom)

    const redirectToProductDetails = () => {
        setProductDetailsData({
            productId: productId,
            img: img,
            imgName: imgName, 
            discount: discount,
            rating: rating,
            originalPrice: originalPrice,
            discountedPrice: discountedPrice,
            description: description,
            originalQuantity: originalQuantity,
            currentQuantity: currentQuantity
        })
        navigate(`/product-details/${productId}`);
    }

    return (
        <button onClick={redirectToProductDetails} className='relative p-6 flex flex-col justify-center items-center text-center gap-2 max-sm:pl-10 max-sm:pr-10 border rounded-md shadow-black shadow-sm'>
            <div className='w-full h-full'>
                <span className='absolute top-0 right-0 bg-[#8b7575] text-white font-bold text-md flex justify-center items-center text-center p-2 rounded-tr-md rounded-bl-md'>
                    {discount}
                </span>
                <div className='pb-12 flex justify-center items-center '>
                    <img className='w-52 h-52' src={img} alt={imgName}/>
                </div>
                <span className='line-clamp-2'>{imgName}</span>
                <div className='mt-6 w-full h-full flex flex-col'>
                    <div className='flex justify-start items-start max-sm:justify-center max-sm:items-center'>
                        <StarRatings
                            rating={rating}
                            starRatedColor="#FCD53F"
                            numberOfStars={5}
                            name='rating'
                            starDimension='24px'
                        />
                    </div>
                    <div className='mt-4 ml-1 flex justify-start items-start text-xl font-bold lg:text-lg'>
                        <div className='flex flex-1 justify-start items-start text-[#A1133A] line-through'>
                            ₱ {originalPrice}
                        </div>
                        <div className='flex flex-1 justify-end items-end text-[#DB1461]'>
                            ₱ {discountedPrice}
                        </div>
                    </div>
                </div>
            </div>
        </button>
    )
}