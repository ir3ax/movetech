
import { useState } from 'react';
import Footer from '../../components/appLayout/footer';
import { TopBar } from '../../components/appLayout/topbar';
import { Input } from '../../components/input';
import { places } from '../../utility/places';
import { productDetailsAtom } from '../../atom/productDetailsAtom';
import { useAtomValue } from 'jotai';
import StarRatings from 'react-star-ratings';

const CheckOut = () => {

    const [selectedRegion, setSelectedRegion] = useState<string>('');
    const [selectedProvince, setSelectedProvince] = useState<string>('');
    const [selectedCity, setSelectedCity] = useState<string>('');
    const [selectedBarangay, setSelectedBarangay] = useState<string>('');

    const productDetailsValue = useAtomValue(productDetailsAtom);
  
	return (
		<div className='w-full h-full'>
			<div className='sticky top-0 z-50 drop-shadow-md shadow-black bg-[#f3efef]'>
                <TopBar />
            </div>
			<div className='mt-12 bg-white relative pb-12'>
                <div className='flex justify-center items-center gap-8 max-sm:flex-col-reverse'>
                    <div className='flex flex-col flex-1 justify-end items-end w-full min-h-[80dvh]'>
                        <form className='flex justify-end items-end w-[50%] flex-col gap-4 max-sm:w-full max-sm:pr-12 max-sm:pl-12'>
                            <span className='text-2xl w-full flex justify-start items-start'>Contact</span>
                            <Input placeholder='Mobile #' className='w-full ' />
                            <span className='mt-4 text-2xl w-full flex justify-start items-start'>Delivery</span>
                            <div className='w-full flex justify-center items-center gap-4'>
                                <Input placeholder='First Name' className='w-full flex-1' />
                                <Input placeholder='Last Name' className='w-full flex-1' />
                            </div>
                            <Input placeholder='Email Address' className='w-full ' />
                            <Input placeholder='Landmark to locate you easily' className='w-full ' />
                            <Input placeholder='Address' className='w-full ' />
                            <Input placeholder='Apartment, suite, etc.' className='w-full ' />
                            
                            <div className='flex justify-center items-center w-full gap-3'>
                                {/* Region Dropdown */}
                                <select
                                    className='flex w-full h-[40px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-900 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                                    value={selectedRegion}
                                    onChange={(e) => {
                                    setSelectedRegion(e.target.value);
                                    setSelectedProvince('');
                                    setSelectedCity('');
                                    setSelectedBarangay('');
                                    }}
                                >
                                    <option value='' disabled>
                                    Select Region
                                    </option>
                                    {Object.entries(places).map(([regionKey, region]) => (
                                    <option key={regionKey} value={regionKey}>
                                        {region.region_name}
                                    </option>
                                    ))}
                                </select>

                                {/* Province Dropdown */}
                                <select
                                    className='flex w-full h-[40px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-900 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                                    value={selectedProvince}
                                    onChange={(e) => {
                                    setSelectedProvince(e.target.value);
                                    setSelectedCity('');
                                    setSelectedBarangay('');
                                    }}
                                    disabled={!selectedRegion}
                                >
                                    <option value='' disabled>
                                    Select Province
                                    </option>
                                    {selectedRegion &&
                                    places[selectedRegion]?.province_list &&
                                    Object.keys(places[selectedRegion]?.province_list ?? {}).map((province) => (
                                        <option key={province} value={province}>
                                        {province}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className='flex justify-center items-center w-full gap-3'>
                                {/* City/Municipality Dropdown */}
                                <select
                                    className='flex w-full h-[40px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-900 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                                    value={selectedCity}
                                    onChange={(e) => {
                                    setSelectedCity(e.target.value);
                                    setSelectedBarangay('');
                                    }}
                                    disabled={!selectedRegion || !selectedProvince}
                                >
                                    <option value='' disabled>
                                    Select City/Municipality
                                    </option>
                                    {selectedRegion &&
                                    selectedProvince &&
                                    places[selectedRegion]?.province_list?.[selectedProvince]?.municipality_list &&
                                    Object.keys(places[selectedRegion]?.province_list[selectedProvince]?.municipality_list ?? {}).map((city) => (
                                        <option key={city} value={city}>
                                        {city}
                                        </option>
                                    ))}
                                </select>

                                {/* Barangay Dropdown */}
                                <select
                                    className='flex w-full h-[40px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-900 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                                    value={selectedBarangay}
                                    onChange={(e) => setSelectedBarangay(e.target.value)}
                                    disabled={!selectedRegion || !selectedProvince || !selectedCity}
                                >
                                    <option value='' disabled>
                                    Select Barangay
                                    </option>
                                    {selectedRegion &&
                                    selectedProvince &&
                                    selectedCity &&
                                    places[selectedRegion]?.province_list?.[selectedProvince]?.municipality_list?.[selectedCity]?.barangay_list?.map(
                                        (barangay) => (
                                        <option key={barangay} value={barangay}>
                                            {barangay}
                                        </option>
                                        )
                                    )}
                                </select>
                            </div>
                        </form>
                        <div className='mt-8 flex justify-start items-start w-[50%] flex-col gap-4 max-sm:w-full max-sm:pr-12 max-sm:pl-12 max-sm:mt-12'>
                           <span className='mt-4 text-2xl w-full flex justify-start items-start max-sm:mt-1'>Shipping Fee</span>
                           <div className='mt-2 text-md w-full flex justify-start items-start border p-4 rounded-md bg-[#f0e4dd] max-sm:mt-1'>
                             <span className='w-full flex justify-start items-start'>Free Shipping</span>
                             <span className='w-full flex justify-end items-end'>Free</span>
                           </div>
                        </div>
                        <div className='mt-4 flex justify-start items-start w-[50%] flex-col gap-4 max-sm:w-full max-sm:pr-12 max-sm:pl-12 max-sm:mt-8'>
                           <span className='mt-4 text-3xl w-full flex justify-start items-start max-sm:mt-1'>Payment</span>
                           <span className='text-sm w-full flex justify-start items-start max-sm:mt-1'>All transactions are secure and encrypted.</span>
                           <div className='mt-2 text-md w-full flex justify-start items-start border p-4 rounded-md bg-[#f0e4dd] max-sm:mt-0'>
                             <span className='w-full flex justify-start items-start'>Cash On Delivery</span>
                             <span className='w-full flex justify-end items-end'>(COD)</span>
                           </div>
                        </div>
                        <div className='mt-8 flex justify-start items-start w-[50%] max-sm:w-full max-sm:pr-12 max-sm:pl-12 max-sm:mt-12'>
                            <button className='w-full text-lg font-normal text-white bg-[#615656] p-4 rounded-md pl-16 pr-16 tracking-widest hover:animate-bounce max-sm:pl-6 max-sm:pr-6 max-sm:text-lg'>COMPLETE ORDER</button>
                        </div>
                    </div>
                    <div className='flex flex-col flex-1 w-[80%] min-h-[80dvh] max-sm:border-b lg:border-l xl:border-l 2xl:border-l'>
                           <div className='flex flex-col justify-start items-start max-sm:w-full pr-12 pl-12 max-sm:pr-2 max-sm:pl-2'>
                                <div className='p-4 flex gap-12 border-b max-sm:flex-col max-sm:gap-4 max-sm:justify-center max-sm:items-center max-sm:text-center max-sm:text-sm'>
                                    <img className='w-24 h-24' src={productDetailsValue?.img} alt={productDetailsValue?.imgName} />
                                    <div className='flex flex-col gap-3'>
                                        <p>{productDetailsValue?.imgName}</p>
                                        <StarRatings
                                            rating={productDetailsValue?.rating}
                                            starRatedColor="#FCD53F"
                                            numberOfStars={5}
                                            name='rating'
                                            starDimension='18px'
                                        />
                                    </div>
                                    <div className='ml-8 flex justify-center items-center max-sm:ml-0'>
                                        <p>₱{productDetailsValue?.discountedPrice}</p>
                                    </div>
                                </div>
                                <div className='p-4 flex gap-12 border-b max-sm:flex-col max-sm:gap-4 max-sm:justify-center max-sm:items-center max-sm:text-center max-sm:text-sm'>
                                    <img className='w-24 h-24' src={productDetailsValue?.img} alt={productDetailsValue?.imgName} />
                                    <div className='flex flex-col gap-3'>
                                        <p>{productDetailsValue?.imgName}</p>
                                        <StarRatings
                                            rating={productDetailsValue?.rating}
                                            starRatedColor="#FCD53F"
                                            numberOfStars={5}
                                            name='rating'
                                            starDimension='18px'
                                        />
                                    </div>
                                    <div className='ml-8 flex justify-center items-center max-sm:ml-0'>
                                        <p>₱{productDetailsValue?.discountedPrice}</p>
                                    </div>
                                </div>
                                <div className='p-4 flex gap-12 border-b max-sm:flex-col max-sm:gap-4 max-sm:justify-center max-sm:items-center max-sm:text-center max-sm:text-sm'>
                                    <img className='w-24 h-24' src={productDetailsValue?.img} alt={productDetailsValue?.imgName} />
                                    <div className='flex flex-col gap-3'>
                                        <p>{productDetailsValue?.imgName}</p>
                                        <StarRatings
                                            rating={productDetailsValue?.rating}
                                            starRatedColor="#FCD53F"
                                            numberOfStars={5}
                                            name='rating'
                                            starDimension='18px'
                                        />
                                    </div>
                                    <div className='ml-8 flex justify-center items-center max-sm:ml-0'>
                                        <p>₱{productDetailsValue?.discountedPrice}</p>
                                    </div>
                                </div>
                           </div>
                           <div className='mt-12 flex flex-col justify-start items-start max-sm:w-full pr-12 pl-12 gap-4 text-xl max-sm:pb-12 max-sm:pr-2 max-sm:pl-2 max-sm:text-sm max-sm:justify-center max-sm:items-center'>
                                <div className='w-full flex justify-center items-center'>
                                    <p className='flex flex-1 justify-start items-start font-semibold'>Subtotal</p>
                                    <p className='flex flex-1 justify-center items-center'>₱{productDetailsValue?.discountedPrice}</p>
                                </div>
                                <div className='w-full flex justify-center items-center'>
                                    <p className='flex flex-1 justify-start items-start font-semibold'>Shipping Fee</p>
                                    <p className='flex flex-1 justify-center items-center'>FREE</p>
                                </div>
                                <div className='w-full flex justify-center items-center'>
                                    <p className='flex flex-1 justify-start items-start font-semibold'>Total</p>
                                    <p className='flex flex-1 justify-center items-center'>₱{productDetailsValue?.discountedPrice}</p>
                                </div>
                           </div>
                    </div>
                </div>
            </div>
			<div className='mt-24'>
				<Footer />
			</div>
		</div>
	);

};

export default CheckOut;

