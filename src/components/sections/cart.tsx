import { Toaster } from "sonner";
import Container from "../cart-shop/container";

export default function CartShop() {
  /**
   * mejorar en la parte de item especialmente en la de quitar producto
   *
   */
  return (
    <>
      <section className="">
        <div className="container-w p-3 px-lg-4 mb-2 title-box__cart">
          <h2 className="fs-4 m-0">Mi carrito de compra</h2>
        </div>
        <div className="container-w p-3 px-lg-4 ">
          <Container />
        </div>
      </section>
      <Toaster visibleToasts={2} duration={2000} richColors />
    </>
  );
}
