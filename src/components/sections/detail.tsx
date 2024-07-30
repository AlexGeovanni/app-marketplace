//import { useState } from "react";
import { Toaster, toast } from "sonner";
import { useNavigate } from "react-router-dom";

import img from "../../assets/imgs/man-clothes.jpeg";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useParams } from "react-router-dom";
import { Product } from "../../redux/features/dataSlice";
import { addToCart } from "../../redux/features/cartSlice";

export default function Detail() {
  const {data}=useAppSelector((state)=>state.dataSlice)
  const Dispatch= useAppDispatch();
  const {id}= useParams()
  const redirect = useNavigate()

  //const [option, setOption] = useState("");
  const cantidad = 1;
  const product:Product = data.find((p: { id: string | undefined; })=> p.id == id)

  const off = Math.round((product.price * product.off) / 100);
  const name = `${product.name} ${product.brand} de ${product.gender} color ${product.color}`
  return (
    <>
      <section className="details">
        <div className="container-w p-3 px-lg-4">
          <div className=" row mb-4">
            <div className="col-12 col-lg-6 ">
              <div className="">
                <img className="w-100" src={img} alt="" />
              </div>
            </div>
            <div className="col-12 col-lg-6 mt-4 mt-lg-0 ps-lg-5  ">
              <div className="info__details mb-4  ">
                <h3 className="fw-normal lh-1 my-3 mt-lg-0">
                  {product.name + " "+ product.brand}
                </h3>
                <div>
                  <p className=" fw-semibold m-0">
                    <span className="text-danger text-decoration-line-through fw-normal">
                      $MXN{product.price}
                    </span>
                    $MXN{product.price - off}
                  </p>
                </div>

                <div>
                  <span className="fw-light">Cantidad disponible</span>:{" "}
                  {cantidad}
                </div>
                <div>
                  <span className="fw-light">Color</span>: {product.color}
                </div>
                <div className="mt-2">
                  <p className="fw-light mb-1">Tamaño: {product.size}</p>
                  {/* <select
                    className="w-100 form-select"
                    value={option}
                    onChange={(e) => setOption(e.target.value)}
                    aria-label="Default select example"
                  >
                    <option hidden>Seleciona una opción</option>
                  </select> */}
                </div>
              </div>
              <div className="bg-dark bg-opacity-10 rounded p-3 mb-4">
                <p>Puntos de entregas</p>
                <span className="fw-light">
                  Margaritas, plaza sendero, macroplaza, centro
                </span>
              </div>
              <div className="btns-container">
                <button
                  className="btn rounded  btn-primary w-100 mt-3 py-2 "
                  onClick={() => {
                    toast.success("Producto agregado!!",{
                      description:name,
                      action:{
                        label:"ver carrito",
                        onClick: () => {
                          redirect("/cart");
                        }
                      }
                    });
                    Dispatch(addToCart({id,name,url:product.url,price:(product.price - off),quantity:1}))
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
      <Toaster visibleToasts={2} duration={1000} richColors />
    </>
  );
}
