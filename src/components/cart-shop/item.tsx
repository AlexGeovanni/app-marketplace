import { toast } from "sonner";
import { CountItem } from "../../hooks/custom-count";
import ControlStock from "./control-stock";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { removeFromCart } from "../../redux/features/cartSlice";

export interface PropsI{
  item: {
    id: number
    name: string
    url: string
    price: number
    quantity:number
  };
}

export default function Item({item}:PropsI) {
  const {id,quantity} = item;
  const {handleCouterIncre,handleCouterDecre,handleBlur,handleOnChange,count } =CountItem(id,quantity);
  const Dispatch=useAppDispatch()
  return (
    <>
      <div className="item-card mb-1">
        <div className=" gap-1 d-flex align-items-center justify-content-between ">
          <Link to={"/detail"} className="img__item-card cp">
            <img
              src={item.url}
              alt=""
              width={100}
              height={100}
            />
          </Link>
          <div className="info__item-card me-auto mb-auto">
            <Link to={"/detail"} className="text-decoration-none text-black">
              <span className=" cp ">{item.name}</span>
            </Link>
          </div>

          <ControlStock
            handleCouterIncre={handleCouterIncre}
            handleCouterDecre={handleCouterDecre}
            handleBlur={handleBlur}
            handleOnChange={handleOnChange}
            count={count}
          />
        </div>
        <div className="p-2  pe-0 d-flex justify-content-between align-items-center">
          <p className="m-0">${ item.price * item.quantity}MXN</p>
          <div>
            <button
              className="btn-delete border-0 fw-semibold text-danger bg-transparent"
              onClick={() => {
                toast.success("Producto eliminado", {
                  description: item.name,
                  
                });
                Dispatch(removeFromCart(item))
              }}
            >
              Quitar
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-trash3 ms-1"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
