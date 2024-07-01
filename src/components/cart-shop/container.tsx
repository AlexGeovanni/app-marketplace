import EmptyCart from "./emptyCartt";
import Item from "./item";
import SubTotal from "./subTotal";

export default function Container() {
  const cantidad = 0;
  return (
    <div className="row position-relative">
      <div className="col-12  col-lg-7 ">
        {cantidad > 1 ? (
          <EmptyCart />
        ) : (
          <div className=" ">
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
        )}
      </div>
      <SubTotal cantidad={5} />
    </div>
  );
}
