import ModalFilter from "../components/category/modal-right-filter";
import Category from "../components/sections/category";
import Footer from "../components/sections/footer";
import ModalBottomSort from "../components/category/modal-bottom-sort";
import ModalRightSort from "../components/category/modal-right-sort";


export default function PageCategory(){
    return(
        <>
        <Category />
        <ModalFilter />
        <ModalBottomSort />
        <ModalRightSort />
        <Footer />
        </>
    )
}