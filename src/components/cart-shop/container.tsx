import EmptyCart from "./emptyCartt";
import Item from "./item";
import SubTotal from "./subTotal";


export default function Container(){
    const cantidad = 0;
    return(
        <div className="row position-relative">
              <div className="col-12  col-lg-8 d-flex flex-column gap-3">
                {cantidad > 0 ? (
                  <EmptyCart/>
                ) : (
                  <>
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                  </>
                )}
              </div>
              <SubTotal
                cantidad={5}
              />
            </div>
    )
}