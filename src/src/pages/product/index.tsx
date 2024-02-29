import StarRatings from 'react-star-ratings'

interface ProductProps {
    key: number;
    img: string,
    imgName: string;
    discount: string;
    rating: number;
    originalPrice: number;
    discountedPrice: number;
}

export const ProductPage: React.FC<ProductProps> = ({ key, img, imgName, discount, rating, originalPrice, discountedPrice }) => {

    return (
        <div key={key} className='relative p-6 flex flex-col justify-center items-center text-center gap-2 max-sm:pl-10 max-sm:pr-10 border rounded-md shadow-black shadow-sm'>
            <div className='w-full h-full'>
                <span className='absolute top-0 right-0 bg-[#8b7575] text-white font-bold text-md flex justify-center items-center text-center p-2 rounded-tr-md rounded-bl-md'>
                    {discount}
                </span>
                <img className='pb-12' src={img} alt={imgName}/>
                <span className=''>{imgName}</span>
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
                    <div className='mt-4 ml-1 flex justify-start items-start text-xl font-bold'>
                        <div className='flex flex-1 justify-start items-start text-[#A1133A] line-through'>
                            ₱ {originalPrice}
                        </div>
                        <div className='flex flex-1 justify-end items-end text-[#DB1461]'>
                            ₱ {discountedPrice}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}