import { Link } from "react-router-dom";
import img1 from "../../assets/imgs/man-clothes.jpeg";
import { Product } from "../../redux/features/dataSlice";
interface Props  {
  product:Product
}

export default function CardProduct({ product }: Props) {


  const off = Math.round((product.price * product.off) / 100);

  return (
    <>
      <Link to={`/detail/${product.id}`} className="card-img">
        <img className="" src={img1} alt="" />
      </Link>
      <div className=" p-1 py-2   information__card ">
        <Link to={`/detail/${product.id}`} className=" text-decoration-none m-0">
          <div>
            <p className="title__information text-truncate m-0 fw-light">
              {product.name +" " + product.brand +" para " + product.gender} 
            </p>
          </div>
          <p className="price fw-bold m-0 ">
            {
              product.off > 0? (<span className="text-danger text-decoration-line-through fw-normal me-1">
                ${product.price}MXN
              </span>): ""
            }
            ${product.price - off}MXN
          </p>
        </Link>
      </div>
      <div className="btn-shop">
        <button className="btn w-100  fw-light">
          Comprar ahora
        </button>
      </div>
    </>
  );
}
