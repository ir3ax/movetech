import { Modal } from '../../../../../components/modal';
import { IoIosClose } from 'react-icons/io';
import Stepper from '../../../../../components/stepper';
import { FreebiesModal } from './freebies';
import { AxiosError } from 'axios';
import { SaveFreebiesRequest, SaveFreebiesResponse, saveFreebiesRequest } from '../../../../../service/freebies/schema';
import { saveFreebies } from '../../../../../service/freebies';
import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '../../../../../components/ui/form';
import { toast } from 'react-toastify';

interface Xprox {
    isVisible: boolean;
    handleClose: () => void;
}

export const ModalView = (props: Xprox) => {

  const queryClient = useQueryClient();
  const notify = () => toast.success("Successfully added!");

  const freebiesForm = useForm<SaveFreebiesRequest>({
    defaultValues: {
        freebiesName: '',
        freebiesImg: '',
        freebiesStorePrice: 0.0,
        freebiesOriginalQuantity: 0.0,
        freebiesCurrentQuantity: 0.0,
    },
    mode: 'onChange',
    resolver: zodResolver(saveFreebiesRequest),
  });

  const { mutate: saveFreebiesMu } = useMutation<
    SaveFreebiesResponse,
    AxiosError,
    SaveFreebiesRequest
  >((data) => saveFreebies(data), {
    onSuccess: () => {
      queryClient.invalidateQueries('freebies-data');
      notify()
      props.handleClose()
    },
    onError: (error: unknown) => {
    console.log(error);
  },
  });

  // const [freebiesAtomValue, ] = useAtom(freebiesAtom);

  const handleSaveFreebies = async (data: SaveFreebiesRequest) => {
    const params: SaveFreebiesRequest = {
        freebiesName: data.freebiesName,
        freebiesImg: data.freebiesImg,
        freebiesStorePrice: data.freebiesStorePrice,
        freebiesOriginalQuantity: data.freebiesOriginalQuantity,
        freebiesCurrentQuantity: data.freebiesOriginalQuantity
    };
    saveFreebiesMu(params);
};


    return (
      <Modal open={props.isVisible} onClose={props.handleClose}>
        <div className='flex flex-col justify-start w-[66rem] h-[36rem] bg-white p-8 overflow-auto'>
              <button onClick={props.handleClose} className='flex justify-end items-end w-full'>
                <IoIosClose  className='w-8 h-8 text-[#808080] cursor-pointer' />
              </button>
              <Form {...freebiesForm}>
                <form onSubmit={freebiesForm.handleSubmit(handleSaveFreebies)} className='mt-2 w-full h-full'>
                <Stepper
                      strokeColor='#17253975'
                      fillStroke='#172539'
                      activeColor='#172539'
                      activeProgressBorder='2px solid #17253975'
                      submitBtn={<button className='stepperBtn'>Submit</button>}
                      continueBtn={<button className='stepperBtn'>Next</button>}
                      backBtn={<button className='stepperBtn'>Back</button>}
                      >
                      <div className='stepperSubDiv'>
                          <FreebiesModal />
                      </div>
                      </Stepper>
                </form>
              </Form>
        </div>
      </Modal>
    )
}

