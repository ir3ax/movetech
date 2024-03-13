import { FaGear } from "react-icons/fa6";
// import moveTechLogo from '../../../assets/topBar/moveTechLogo.png'

export const DashboardTopBar = () => {
    
    return (
        <nav className='w-full h-full top-0 z-10 pt-6 pb-6 pl-12 pr-12'>
            <div className='flex justify-center items-center'>
                <div className='w-full flex flex-1 justify-start items-start text-[#E0E3FE] font-bold text-md'>
                {/* <img className='w-[15%] max-sm:w-[70%]' src={moveTechLogo} alt='MoveTech Logo' /> */}
                    MoveTech
                </div>
                <button className='w-full flex flex-1 justify-end items-end cursor-pointer'>
                    <FaGear className='w-6 h-6 text-gray-300 hover:text-gray-700 focus:text-gray-700 active:text-gray-700' />
                </button>
            </div>
        </nav>
    )
}