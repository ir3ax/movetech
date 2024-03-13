import { useAtomValue } from "jotai"
import { contentAtom } from "../../../atom/contentAtom"
import { DashboardContent } from "./dashboard-content";
import { ProductContent } from "./product-content";
import { ReviewsContent } from "./reviews-content";
import { OrderContent } from "./order-content";


export const MainContent = () => {

    const contentAtomValue = useAtomValue(contentAtom);
    
    return (
        <div className='w-full h-full bg-[#f9fbfc]'>
            {
                contentAtomValue === 'Dashboard' ?
                <DashboardContent />
                :
                contentAtomValue === 'Product' ?
                <ProductContent />
                :
                contentAtomValue === 'Reviews' ?
                <ReviewsContent />
                :
                <OrderContent />
            }       
        </div>
    )
}