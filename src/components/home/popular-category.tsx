import man from "../../assets/imgs/man-clothes.webp";
import phone from "../../assets/imgs/phone-electronics.webp";
import sale from "../../assets/imgs/sale.webp";

export default function PopularCategorys() {
  return (
    <>
      <section className="container-popular border-top pt-4 mb-3 mb-md-5">
        <div className="container-w p-1 px-md-3 px-lg-4 ">
          <h2 className="sub_title m-0 mb-2 text-center">Lo que te puede interesar</h2>
          <div className="row g-2 mt-1 ">
            <div className=" col- col-md-4 px-0 px-md-1 ">
              <div className="cp card-popular d-flex flex-column align-items-center  overflow-hidden position-relative">
                <img className="" src={man} alt="" />
                <p className=" m-0 ps-2 text-center fw-semibold  position-absolute bottom-0 start-0 z-1">
                  Ropa de hombre
                </p>
              </div>
            </div>
            <div className=" col- col-md-4 px-0 px-md-1 ">
              <div className="cp card-popular d-flex flex-column align-items-center  overflow-hidden position-relative">
                <img className="" src={phone} alt="" />
                <p className=" m-0 ps-2 text-center fw-semibold  position-absolute bottom-0 start-0 z-1">
                  Celular
                </p>
              </div>
            </div>
            <div className=" col- col-md-4 px-0 px-md-1 ">
              <div className="cp card-popular d-flex flex-column align-items-center  overflow-hidden position-relative">
                <img className="" src={sale} alt="" />
                <p className=" m-0 ps-2 text-center fw-semibold  position-absolute bottom-0 start-0 z-1">
                  Empezar a vender
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
