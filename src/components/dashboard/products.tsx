import TableProduct from "./table";

interface Props{
  handleClick:(e:string)=>void;
}

export default function Products({handleClick}:Props){
    return(
        <section className="">
        <div className="container-w p-3 px-lg-4 mb-4">
          <div className=" ">
            <h1 className="fs-3">Mis productos</h1>
            <div className="row g-2">
              <div className="col-3 ">
                <div className="rounded h-100 d-flex flex-column justify-content-between   border border-2  p-3 ">
                  <h3 className="fs-5">Agrega nuevo producto</h3>
                  <p>Ingrese los datos del producto para crearlo.</p>
                  <button type="button" className="btn btn-primary w-100"
                onClick={()=>handleClick("newProduct")}
                  >
                    Crear
                  </button>
                </div>
              </div>
              <div className="col-3 ">
                <div className="rounded h-100 d-flex flex-column justify-content-between  border border-2  p-3 ">
                  <h3 className="fs-5">Producto activos</h3>
                  <p className="fs-1 m-0 text-center">50</p>
                  <button type="button" className="btn btn-primary w-100">
                    Listar
                  </button>
                </div>
              </div>
              <div className="col-3">
                <div className="rounded d-flex flex-column justify-content-between h-100 border border-2  p-3 ">
                  <h3 className="fs-5">Producto inactivos</h3>
                  <p className="fs-1 m-0 text-center">50</p>
                  <button type="button" className="btn btn-primary w-100">
                    Listar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <TableProduct />
      </section>
    )
}