
import { Toaster } from "sonner";
import Container from "../cart-shop/container";


export default function CartShop(){
 /**
  * mejorar en la parte de item especialmente en la de quitar producto
  * 
  */
    return (
      <>
        <section className=" mt-5">
          <div className="sec m-auto p-2 p-md-3 py-2 px-lg-4 ">
            <div className="mb-2 title-box__cart">
              <h2 className="m-0">Mi carrito de compra</h2>
            </div>
            <Container />
          </div>
        </section>
        <Toaster visibleToasts={2}
          duration={2000}
          richColors
          />
          
      </>
    );
  }