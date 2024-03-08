
import { useState } from 'react';
import Footer from '../../components/appLayout/footer';
import { TopBar } from '../../components/appLayout/topbar';
import { Input } from '../../components/input';
import { places } from '../../utility/places';
import { SetStateAction, useAtom } from 'jotai';
import StarRatings from 'react-star-ratings';
import { checkOutAtom, completeCheckOut } from '../../atom/checkOutAtom';
import { CompleteCheckOut, CompleteProductInfo } from '../../service/checkout/schema';
import { useNavigate } from 'react-router-dom';

const CheckOut = () => {

    const [selectedRegion, setSelectedRegion] = useState<string>('');
    const [selectedProvince, setSelectedProvince] = useState<string>('');
    const [selectedCity, setSelectedCity] = useState<string>('');
    const [selectedBarangay, setSelectedBarangay] = useState<string>('');
    const [checkOutAtomValue, ] = useAtom(checkOutAtom);
    const [, setCompleteCheckOutAtomValue] = useAtom(completeCheckOut);
    const navigate = useNavigate();

    //Testing useState for address.
    const [mobileNumber, setMobileNumber] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [landmark, setLandmark] = useState('');
    const [address, setAddress] = useState('');
    const [apartment, setApartment] = useState('');

    const handleMobileNumberChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setMobileNumber(e.target.value);
    };

    const handleFirstNameChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setLastName(e.target.value);
    };

    const handleEmailAddressChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setEmailAddress(e.target.value);
    };

    const handleLandmarkChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setLandmark(e.target.value);
    };

    const handleAddressChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setAddress(e.target.value);
    };

    const handleApartmentChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setApartment(e.target.value);
    };

    const total = checkOutAtomValue.reduce((acc, product) => acc + (product.total || 0), 0);

    const handleCompleteOrder = () => {
        // Assuming checkOutAtomValue is an array of products with productId and quantity
        const productsInfo: CompleteProductInfo[] = checkOutAtomValue.map((product) => ({
            productId: product.productId,
            productName: product.productName,
            quantity: product.quantity,
        }));
    
        const newCompleteCheckOut: CompleteCheckOut = {
            product: productsInfo,
            total: total,
            contactNumber: mobileNumber,
            firstName: firstName,
            lastName: lastName,
            emailAddress: emailAddress,
            completeAddress: [
                {
                    landmark: landmark,
                    address: address,
                    houseNumber: apartment,
                    region: selectedRegion,
                    province: selectedProvince,
                    city: selectedCity,
                    barangay: selectedBarangay,
                },
            ],
        };
    
        // Update the completeCheckOut atom
        setCompleteCheckOutAtomValue((prevCompleteCheckOut) => [...prevCompleteCheckOut, newCompleteCheckOut]);
    
        navigate('/success');
        localStorage.clear();
    };
    
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
                            <Input onChange={handleMobileNumberChange} value={mobileNumber} placeholder='Mobile #' className='w-full ' />
                            <span className='mt-4 text-2xl w-full flex justify-start items-start'>Delivery</span>
                            <div className='w-full flex justify-center items-center gap-4'>
                                <Input onChange={handleFirstNameChange} value={firstName} placeholder='First Name' className='w-full flex-1' />
                                <Input onChange={handleLastNameChange} value={lastName} placeholder='Last Name' className='w-full flex-1' />
                            </div>
                            <Input onChange={handleEmailAddressChange} value={emailAddress} placeholder='Email Address' className='w-full ' />
                            <Input onChange={handleLandmarkChange} value={landmark} placeholder='Landmark to locate you easily' className='w-full ' />
                            <Input onChange={handleAddressChange} value={address} placeholder='Address' className='w-full ' />
                            <Input onChange={handleApartmentChange} value={apartment} placeholder='Apartment, suite, etc.' className='w-full ' />
                            
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
                            <button onClick={handleCompleteOrder} className='w-full text-lg font-normal text-white bg-[#615656] p-4 rounded-md pl-16 pr-16 tracking-widest hover:animate-bounce max-sm:pl-6 max-sm:pr-6 max-sm:text-lg'>COMPLETE ORDER</button>
                        </div>
                    </div>
                    <div className='flex flex-col flex-1 w-[80%] min-h-[80dvh] max-sm:border-b lg:border-l xl:border-l 2xl:border-l'>
                           <div className='flex flex-col justify-start items-start max-sm:w-full pr-12 pl-12 max-sm:pr-2 max-sm:pl-2'>
                                {
                                    checkOutAtomValue.map((index, key) => (
                                    <div key={key} className='relative p-4 flex gap-12 border-b max-sm:flex-col max-sm:gap-4 max-sm:justify-center max-sm:items-center max-sm:text-center max-sm:text-sm'>
                                        <img className='w-24 h-24' src={index.productImg} alt={index.productName}></img>
                                        <span className='absolute w-5 h-5 rounded-full bg-[#F36000] text-sm flex justify-center items-center top-2 text-white p-1 max-sm:left-4'>{(index.quantity)}</span>
                                        <div className='flex flex-col gap-3'>
                                            <p>{index?.productName}</p>
                                            <div className='flex justify-start items-start w-full h-full gap-2'>
                                                <StarRatings
                                                    rating={index.rating}
                                                    starRatedColor="#FCD53F"
                                                    numberOfStars={1}
                                                    name='rating'
                                                    starDimension='16px'
                                                />
                                                <div className='text-gray-400 text-sm mt-1'>{index.rating} ratings |</div>
                                                <div className='text-gray-400 text-sm mt-1'>{index.productSold} sold</div>
                                            </div>
                                        </div>
                                        <div className='ml-8 flex justify-center items-center max-sm:ml-0'>
                                            <p className='text-[#F36000]'>₱{index.quantity && index.price ? (index.quantity * index.price).toFixed(2) : 0}</p>
                                        </div>
                                    </div>
                                    ))
                                }
                           </div>
                           <div className='mt-12 flex flex-col justify-start items-start max-sm:w-full pr-12 pl-12 gap-4 text-xl max-sm:pb-12 max-sm:pr-2 max-sm:pl-2 max-sm:text-sm max-sm:justify-center max-sm:items-center'>
                                <div className='w-full flex justify-center items-center'>
                                    <p className='flex flex-1 justify-start items-start font-semibold'>Subtotal</p>
                                    <p className='flex flex-1 justify-center items-center '>₱{total.toFixed(2)}</p>
                                </div>
                                <div className='w-full flex justify-center items-center'>
                                    <p className='flex flex-1 justify-start items-start font-semibold'>Shipping Fee</p>
                                    <p className='flex flex-1 justify-center items-center'>FREE</p>
                                </div>
                                <div className='w-full flex justify-center items-center text-3xl mt-4 max-sm:text-[20px]'>
                                    <p className='flex flex-1 justify-start items-start font-semibold '>Total</p>
                                    <p className='flex flex-1 justify-center items-center font-semibold max-sm:font-normal'>₱{total.toFixed(2)}</p>
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

