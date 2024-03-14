import { Modal } from "../../../../../components/modal";
import { IoIosClose } from "react-icons/io";
import { ProductName } from "./product-name-price";
import { ProductImages } from "./product-images";
import { ProductDescription } from "./product-description";
import { ProductFreebies } from "./product-freebies";
import Stepper from "../../../../../components/stepper";

interface Xprox {
    isVisible: boolean;
    handleClose: () => void;
}

export const ModalView = (props: Xprox) => {

    return (
      <Modal open={props.isVisible} onClose={props.handleClose}>
        <div className='flex flex-col justify-start w-[66rem] h-[36rem] bg-white p-8 overflow-auto'>
              <button onClick={props.handleClose} className='flex justify-end items-end w-full'>
                <IoIosClose  className='w-6 h-6 text-[#808080] cursor-pointer' />
              </button>
              <div className='mt-6 w-full h-full'>
              <Stepper
                    strokeColor="#17253975"
                    fillStroke="#172539"
                    activeColor="#172539"
                    activeProgressBorder="2px solid #17253975"
                    submitBtn={<button className="stepperBtn">Submit</button>}
                    continueBtn={<button className="stepperBtn">Next</button>}
                    backBtn={<button className="stepperBtn">Back</button>}
                    onSubmit={
                        (step) => alert(`Thank you!!! Final Step -> ${step}`)
                    }
                    >
                    <div className="stepperSubDiv">
                        <ProductName />
                    </div>
                    <div className="stepperSubDiv">
                        <ProductImages />
                    </div>
                    <div className="stepperSubDiv">
                        <ProductDescription />
                    </div>
                    <div className="stepperSubDiv">
                        <ProductFreebies />
                    </div>
                    </Stepper>
              </div>
        </div>
      </Modal>
    )
}
