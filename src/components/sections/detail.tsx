import { useState } from "react";
import { Link } from "react-router-dom";
import { Toaster, toast } from "sonner";

import img from "../../assets/imgs/man-clothes.jpeg";

export default function Detail() {
  const [option, setOption] = useState("");

  const cantidad = 5;

  return (
    <>
      <section className="details">
        <div className="container-w p-3 px-lg-4">
          <div className=" row mb-4">
            <div className="col-12 col-lg-7 ">
              <div className="">
                <img className="w-100" src={img} alt="" />
              </div>
            </div>
            <div className="col-12 col-lg-5 mt-4 mt-lg-0  ">
              <div className="info__details mb-4  ">
                <h3 className="fw-normal lh-1 my-3 mt-lg-0">
                  {"Name the product asasassas sasasas"}
                </h3>
                <div>
                  <p className=" fw-semibold m-0">
                    <span className="text-danger text-decoration-line-through fw-normal">
                      $MXN300
                    </span>
                    $MXN{200}
                  </p>
                </div>

                <div>
                  <span className="fw-light">Cantidad disponible</span>:{" "}
                  {cantidad}
                </div>
                <div>
                  <span className="fw-light">Color</span>: {"red"}
                </div>
                <div className="mt-2">
                  <p className="fw-light mb-1">Tamaño:</p>
                  <select
                    className="w-100 form-select"
                    value={option}
                    onChange={(e) => setOption(e.target.value)}
                    aria-label="Default select example"
                  >
                    <option hidden>Seleciona una opción</option>
                  </select>
                </div>
              </div>
              <div className="bg-dark bg-opacity-10 rounded p-3 mb-4">
                <p>Puntos de entregas</p>
                <span className="fw-light">
                  Margaritas, plaza sendero, macroplaza, centro
                </span>
              </div>
              <div className="btns-container">
                <button className="w-100 btn btn-primary p-0 ">
                  <Link
                    to="/cartmarket"
                    className="text-decoration-none  text-white btn w-100 py-2 "
                  >
                    COMPRAR AHORA
                  </Link>
                </button>

                <button
                  className="btn rounded  btn-primary w-100 mt-3 py-2 "
                  onClick={() => {
                    toast("Producto agregado ", {});
                  }}
                >
                  AGREGAR AL CARRITO
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <h3 className="">Descripciòn</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam illum
              eos voluptas! Voluptate fugiat voluptatibus molestias architecto
              quidem quae praesentium eum. Mollitia, cupiditate. Laborum
              consectetur magnam cumque. Suscipit, obcaecati asperiores.
            </p>
          </div>
        </div>
      </section>
      <Toaster visibleToasts={2} duration={1000} />
    </>
  );
}
