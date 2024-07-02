import { useParams } from "react-router-dom";
import CardProduct from "../card-product/card";
import HeaderCategory from "../category/header-category";

export default function Category() {
  const { id } = useParams();

  return (
    <>
      <section className="">
        <div className="category-body">
          <div className="container-w p-3 px-lg-4">
            <h2 className="fs-4 m-0">Ropa solo para {id}</h2>
          </div>
          <HeaderCategory />
          <div className="container-w p-3 px-lg-4container__category-body ">
            <div className=" row g-2 ">
              <div className="col-6 col-md-4 col-lg-3 container-card">
                <div className="card-p ">
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
