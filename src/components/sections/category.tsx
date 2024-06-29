import CardProduct from "../card-product/card";
import HeaderCategory from "../category/header-category";

export default function Category() {
  return (
    <>
      <section>
        <div className="mt-5 py-5">
          <HeaderCategory />
          
          <div className="container__category-body sec m-auto px-4 ">
            <div className=" mt-1 mt-md-2 row  g-2 ">
              <div className="col-6 col-md-4 col-lg-3">
                <div className="card rounded   border border-2">
                  <CardProduct name="Hola" />
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3">
                <div className="card rounded   border border-2">
                  <CardProduct name="Hola" />
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3">
                <div className="card rounded   border border-2">
                  <CardProduct name="Hola" />
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3">
                <div className="card rounded   border border-2">
                  <CardProduct name="Hola" />
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3">
                <div className="card rounded   border border-2">
                  <CardProduct name="Hola" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
