import { Link } from "react-router-dom";
import img1 from "../../assets/imgs/man-clothes.webp";
import { Product } from "../../redux/features/dataSlice";
import { toast } from "sonner";
import { useAppDispatch } from "../../redux/hooks";
import { addToCart } from "../../redux/features/cartSlice";
interface Props {
  product: Product;
}

export default function CardProduct({ product }: Props) {
  const Dispatch = useAppDispatch();

  const off = Math.round((product.price * product.off) / 100);
  const name: string = `${product.name}  ${product.brand} para ${product.gender}`;
  return (
    <>
      <Link to={`/detail/${product.id}`} className="card-img">
        <img className="" src={img1} alt="" />
      </Link>
      <div className=" p-1 py-2   information__card ">
        <Link
          to={`/detail/${product.id}`}
          className=" text-decoration-none m-0"
        >
          <div>
            <p className="title__information text-truncate m-0 ">
              {name}
            </p>
          </div>
          <p className="price fw-bold m-0 ">
            {product.off > 0 && (
              <span className="text-danger text-decoration-line-through fw-normal me-1">
                ${product.price}MXN
              </span>
            )}
            ${product.price - off}MXN
          </p>
        </Link>
      </div>
      <div className="btn-shop">
        <button
          className="btn py-1 py-lg-2 fw-"
          onClick={() => {
            toast.success(`se ha agredado  correctamente!`, {
              description: name,
            });
            Dispatch(
              addToCart({
                id: product.id,
                name,
                url: product.url,
                price: product.price - off,
                quantity: 1,
              })
            );
          }}
        >
          Comprar
        </button>
      </div>
    </>
  );
}
