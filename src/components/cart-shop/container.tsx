import { useAppSelector } from "../../redux/hooks";
import EmptyCart from "./emptyCartt";
import Item from "./item";
import SubTotal from "./subTotal";

export default function Container() {
  const data = useAppSelector((state) => state.cart);

  const cantidad = data.length;
  const total_price= data.reduce((acc, item) => { return acc + item.price * item.quantity},0)
  
  // console.log(data)
  return (
    <div className="row position-relative" style={{minHeight:"70vh"}} >
      <div className="col-12  col-lg-7 ">
        {cantidad == 0 ? (
          <EmptyCart />
        ) : (
          data.map((item)=>{
            return <Item key={item.id} item={item}/>;
          })
        )}
      </div>
      {cantidad != 0 && <SubTotal cantidad={total_price} />}
    </div>
  );
}
