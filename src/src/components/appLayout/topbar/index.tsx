import { useNavigate } from 'react-router-dom'
import moveTechLogo from '../../../assets/topBar/moveTechLogo.png'
import basket from '../../../assets/topBar/shopping-cart.png'

export const TopBar = () => {
    
    const navigate = useNavigate();
    
    return (
        <nav className='w-full h-full top-0 z-10 pt-4 pb-4 pl-36 pr-36 max-sm:pr-6 max-sm:pl-6'>
            <div className='flex justify-center items-center'>
                <div className='flex flex-1 justify-start items-start'>
                    <button onClick={() => navigate('/')}>
                        <img className='w-[28%] max-sm:w-[70%]' src={moveTechLogo} alt='MoveTech Logo' />
                    </button>
                </div>
                <div className='flex flex-1 justify-end items-end cursor-pointer relative'>
                    <span className='absolute w-5 h-5 rounded-full bg-red-600 text-sm flex justify-center items-center -top-2 -right-4 text-white p-1'>1</span>
                    <img className='w-8 h-8 max-sm:w-6 max-sm:h-6' src={basket} alt='basket' />
                </div>
            </div>
        </nav>
    )
}