import { Modal } from '../../../../../components/modal';
import { IoIosClose } from 'react-icons/io';
import { ProductName } from './product-name-price';
import { ProductImages } from './product-images';
import { ProductDescription } from './product-description';
import { ProductFreebies } from './product-freebies';
import Stepper from '../../../../../components/stepper';
import { Form } from '../../../../../components/ui/form';
import { toast } from 'react-toastify';
// import { useQueryClient } from 'react-query';
import { SaveProductRequest, SaveProductResponse, saveProductRequest } from '../../../../../service/product-service/schema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAtom } from 'jotai';
import { productCurrentQuantityAtom, productDescription2Atom, productDiscountedPriceAtom, productFreebiesAtom, productImgAtom } from '../../../../../atom/productDetailsAtom';
import { useMutation } from 'react-query';
import { AxiosError } from 'axios';
import { saveProduct } from '../../../../../service/product-service';

interface Xprox {
    isVisible: boolean;
    handleClose: () => void;
}

export const ModalView = (props: Xprox) => {

    const [ selectedImages ] = useAtom(productImgAtom);
    const [ bulletDescriptions ] = useAtom(productDescription2Atom);
    const [ freebies ] = useAtom(productFreebiesAtom);
    const [ currentQuantityValue ] = useAtom(productCurrentQuantityAtom)
    const [ discountedPrice ] = useAtom(productDiscountedPriceAtom);
    // const queryClient = useQueryClient();
    const notify = () => toast.success("Successfully added!");

    const productForm = useForm<SaveProductRequest>({
        defaultValues: {
            productName: '',
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

  const { mutate: saveProductMu } = useMutation<
    SaveProductResponse,
    AxiosError,
    SaveProductRequest
  >((data) => saveProduct(data), {
    onSuccess: () => {
      // queryClient.invalidateQueries('freebies-data');
      notify()
      props.handleClose()
    },
    onError: (error: unknown) => {
    console.log(error);
  },
  });

  const handleSaveProduct = async (data: SaveProductRequest) => {

    const freebiesIds = freebies.map(freebie => freebie.freebiesId);

    const imagePromises = selectedImages.map(async (file) => {
        return new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (event) => {
                const base64String = event.target?.result as string;
                resolve(base64String);
            };
            reader.onerror = (error) => {
                reject(error);
            };
            reader.readAsDataURL(file);
        });
    });

    Promise.all(imagePromises)
        .then((imageBase64Strings) => {
            const params: SaveProductRequest = {
                productName: data.productName,
                img: imageBase64Strings,
                discount: data.discount,
                supplierPrice: data.supplierPrice,
                originalPrice: data.originalPrice,
                discountedPrice: discountedPrice,
                description1: data.description1,
                description2: bulletDescriptions,
                originalQuantity: data.originalQuantity,
                currentQuantity: currentQuantityValue,
                productSold: data.productSold,
                productFreebies: freebiesIds,
            };
            saveProductMu(params);
        })
        .catch((error) => {
            console.error("Error converting images:", error);
        });
    };


    const handleCloseAdd = () => {
      productForm.reset();
      localStorage.removeItem('currentQuantityValue');
      props.handleClose()
    }

    return (
      <Modal open={props.isVisible} onClose={props.handleClose}>
        <div className='flex flex-col justify-start w-[66rem] h-[36rem] bg-white p-8 overflow-auto'>
              <button onClick={handleCloseAdd} className='flex justify-end items-end w-full'>
                <IoIosClose  className='w-6 h-6 text-[#808080] cursor-pointer' />
              </button>
              <div className='mt-6 w-full h-full'>
              <Form {...productForm}>
                <form onSubmit={productForm.handleSubmit(handleSaveProduct)} className='mt-2 w-full h-full'>
              <Stepper
                    strokeColor='#17253975'
                    fillStroke='#172539'
                    activeColor='#172539'
                    activeProgressBorder='2px solid #17253975'
                    submitBtn={<button className={`stepperBtn`}>Submit</button>}
                    // continueBtn={<button className={`stepperBtn ${ 
                    //   (productForm.getValues('productName') === '') || 
                    //   (Number(productForm.getValues('productSold')) === 0) ||
                    //   (Number(productForm.getValues('supplierPrice')) === 0) ||
                    //   (Number(productForm.getValues('originalPrice')) === 0) ||
                    //   (Number(productForm.getValues('originalQuantity')) === 0)
                    //   ? 'opacity-55' : null}`} 
                    //   disabled={
                    //   (productForm.getValues('productName') === '') || 
                    //   (Number(productForm.getValues('productSold')) === 0) ||
                    //   (Number(productForm.getValues('supplierPrice')) === 0) ||
                    //   (Number(productForm.getValues('originalPrice')) === 0) ||
                    //   (Number(productForm.getValues('originalQuantity')) === 0)
                    //   ? true : false
                    //   }
                    //   type='button'
                    //   >Next</button>}
                    backBtn={<button type='button' className='stepperBtn'>Back</button>}
                    allowClickControl={false}
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
