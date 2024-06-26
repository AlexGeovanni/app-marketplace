import { useState } from "react";
import { Link } from "react-router-dom";
import { Toaster, toast } from "sonner";

import img from "../../assets/imgs/man-clothes.jpeg"

export default function Detail(){
    const [option, setOption] = useState("");

    const cantidad= 5;

  return (
    <>
      <section className=" details  ">
        <div className="sec m-auto p-3 p-md-3 py-2 px-lg-4 ">
        <div className=" row m-0">
          <div className="col-12 col-lg-8 row  m-0 p-0">
            <div className="col-12  p-0 col-lg-7">
              <div className="rounded  overflow-hidden">
              <img className="w-100" src={img} alt="" />
              </div>
            </div>
            <div className="info__details  p-0 px-lg-2 col-12 col-lg-5 ">
              <h3 className="fw-semibold lh-1 my-3 mt-lg-0">{"name"}</h3>
              <p className="fw-semibold m-0">$MXN{200}</p>

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
          </div>
          <div className="col-12 col-lg-4 mt-4 mt-lg-0 p-0 px-lg-2  ">
            <div className="bg-dark bg-opacity-10 rounded p-3 mb-5">
              <p>Puntos de entregas</p>
              <span className="fw-light">
                Margaritas, plaza sendero, macroplaza, centro
              </span>
            </div>

            <button
              className="w-100 btn btn-primary -0 p-0"
              
            >
              <Link
                to="/cartmarket"
                className="text-decoration-none  text-white btn w-100 py-2 "
              >
                Comprar ahora
              </Link>
            </button>

            <button
              className="btn rounded  btn-primary w-100 mt-3 py-2 "
              onClick={()=>{
                toast("Producto agregado ",{
                    
                });
              }}
            >
              Agregar a mi bolsa
            </button>
          </div>
        </div>
        <div className="mt-3">
          <h3 className="">Detalles</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam illum
            eos voluptas! Voluptate fugiat voluptatibus molestias architecto
            quidem quae praesentium eum. Mollitia, cupiditate. Laborum
            consectetur magnam cumque. Suscipit, obcaecati asperiores.
          </p>
        </div>
        </div>
      </section>
     <Toaster
        visibleToasts={2}
        duration={1000}
     />
    </>
  );
}