import { Modal } from '../../../../../components/modal';
import { IoIosClose } from 'react-icons/io';
import { ProductName } from './product-name-price';
import { ProductImages } from './product-images';
import { ProductDescription } from './product-description';
import { ProductFreebies } from './product-freebies';
import Stepper from '../../../../../components/stepper';
import { Form } from '../../../../../components/ui/form';
// import { toast } from 'react-toastify';
// import { useQueryClient } from 'react-query';
import { SaveProductRequest, saveProductRequest } from '../../../../../service/product-service/schema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

interface Xprox {
    isVisible: boolean;
    handleClose: () => void;
}

export const ModalView = (props: Xprox) => {

    // const queryClient = useQueryClient();
    // const notify = () => toast.success("Successfully added!");

    const productForm = useForm<SaveProductRequest>({
        defaultValues: {
            imgName: '',
            img: [],
            discount: 0.0,
            supplierPrice: 0.0,
            originalPrice: 0.0,
            discountedPrice: 0.0,
            description1: '',
            description2: '',
            originalQuantity: 0,
            currentQuantity: 0,
            productSold: 0,
            productFreebies: ''
        },
        mode: 'onChange',
        resolver: zodResolver(saveProductRequest),
    });

    return (
      <Modal open={props.isVisible} onClose={props.handleClose}>
        <div className='flex flex-col justify-start w-[66rem] h-[36rem] bg-white p-8 overflow-auto'>
              <button onClick={props.handleClose} className='flex justify-end items-end w-full'>
                <IoIosClose  className='w-6 h-6 text-[#808080] cursor-pointer' />
              </button>
              <div className='mt-6 w-full h-full'>
              <Form {...productForm}>
                <form className='mt-2 w-full h-full'>
              <Stepper
                    strokeColor='#17253975'
                    fillStroke='#172539'
                    activeColor='#172539'
                    activeProgressBorder='2px solid #17253975'
                    submitBtn={<button className={`stepperBtn`}>Submit</button>}
                    continueBtn={<button type='button' className={`stepperBtn ${ 
                      (productForm.getValues('imgName') === '') || 
                      (Number(productForm.getValues('productSold')) === 0) ||
                      (Number(productForm.getValues('supplierPrice')) === 0) ||
                      (Number(productForm.getValues('originalPrice')) === 0) ||
                      (Number(productForm.getValues('discount')) === 0) ||
                      (Number(productForm.getValues('originalQuantity')) === 0)
                      ? 'opacity-55' : null}`} 
                      >Next</button>}
                    backBtn={<button type='button' className='stepperBtn'>Back</button>}
                    >
                    <div className='stepperSubDiv'>
                        <ProductName />
                    </div>
                    <div className='stepperSubDiv'>
                        <ProductImages />
                    </div>
                    <div className='stepperSubDiv'>
                        <ProductDescription />
                    </div>
                    <div className='stepperSubDiv'>
                        <ProductFreebies />
                    </div>
                    </Stepper>
                    </form>
              </Form>
              </div>
        </div>
      </Modal>
    )
}
