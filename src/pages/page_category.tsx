import ModalFilter from "../components/category/modal-filter";
import ModalSort from "../components/category/modal-sort";
import Category from "../components/sections/category";
import Footer from "../components/sections/footer";
import Header from "../components/sections/header";


export default function PageCategory(){
    return(
        <>
        <Header />
        <Category />
        <ModalFilter />
        <ModalSort />
        <Footer />
        </>
    )
}