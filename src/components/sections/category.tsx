import { useParams } from "react-router-dom";
import CardProduct from "../card-product/card";
import HeaderCategory from "../category/header-category";
import { useAppSelector } from "../../redux/hooks";

interface CardProduct {
  id: number;
  name: string;
  brand: string;
  size: string;
  category: string;
  price: number;
  off: number;
}

export default function Category() {
  const { id } = useParams();

const { BRAND,SIZES}=useAppSelector((state)=>state.filterProduct)
const {data}=useAppSelector((state)=>state.dataSlice)


  const isAnyFilterApplied = (filterObj: { [key: string]: boolean }) =>
    Object.values(filterObj).some((value) => value);

  // const filteredProducts = data.filter((product) => 
  //   (Object.keys(BRAND).every((brand)=> !BRAND[brand]) && Object.keys(SIZES).every((size)=> !SIZES[size])) ||
  //   (Object.keys(BRAND).some((brand)=> BRAND[brand] && product.brand === brand) || Object.keys(SIZES).some((size)=> SIZES[size] && product.size === size)));
  const filteredProducts:CardProduct[] = data.filter((product:CardProduct)=>{
    const isSizeFiltered = !isAnyFilterApplied(SIZES) || SIZES[product.size];
    const isBrandFiltered = !isAnyFilterApplied(BRAND) || BRAND[product.brand];

    return isSizeFiltered && isBrandFiltered;
  })

  
  return (
    <>
      <section className="">
        <div className="category-body">
          <div className="container-w p-3 px-lg-4">
            <h2 className="fs-4 m-0">Ropa solo para {id}</h2>
          </div>
          <HeaderCategory />
          <div className="container-w p-3 px-lg-4container__category-body ">
            <div className=" row g-2 ">
              {filteredProducts.map((product,i) => {
                return (
                  <div key={i} className="col-6 col-md-4 col-lg-3 container-card">
                    <div className="card-p ">
                      <CardProduct  product={product} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
