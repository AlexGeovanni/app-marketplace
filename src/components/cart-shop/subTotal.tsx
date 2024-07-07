
type Props ={
    cantidad:number
}

export default function SubTotal ({cantidad}:Props) {
    return(
        <>
        <div className="col-12 col-lg-5 pb-2   ">
            <div className="cart__subtotal position-sticky shadow-lg   mt-5 mt-lg-0  border  rounded p-3 py-2">
                <div className="bg-white">
                    <div className="d-flex justify-content-between">
                        <p className="m-0">Subtotal( producto):</p>
                        <p className="m-0">${0}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="m-0">Descuento:</p>
                        <p className="m-0">${0}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="m-0">Cupones: </p>
                        <p className="m-0">0</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="m-0">Costo de envío:</p>
                        <p className="m-0">Gratis</p>
                    </div>
                    <div className="d-flex justify-content-between border-top mt-3 pt-3">
                        <h3 className="fs-6 m-0">Total (IVA Incluido):</h3>
                        <p className="m-0 text-danger">${cantidad}</p>
                    </div>
                </div>
                    <p className="m-0 my-2 opacity-75">*Los precios aplican de acuerdo a forma de pago</p>
                <div className="">
                        <button className="btn btn-primary  w-100 py-2 ">COMPRAR</button>
                </div>
            </div>
        </div>
        </>
    )
}