import { useParams } from "react-router-dom";
import CardProduct from "../card-product/card";
import HeaderCategory from "../category/header-category";
import { useAppSelector } from "../../redux/hooks";
import { Product } from "../../redux/features/dataSlice";
import { Toaster } from "sonner";


export default function Category() {
  const { id } = useParams();

  const { BRAND,SIZES}=useAppSelector((state)=>state.filterProduct)
  const {data}=useAppSelector((state)=>state.dataSlice)

  const isAnyFilterApplied = (filterObj: { [key: string]: boolean }) =>
    Object.values(filterObj).some((value) => value);

  // const filteredProducts = data.filter((product) => 
  //   (Object.keys(BRAND).every((brand)=> !BRAND[brand]) && Object.keys(SIZES).every((size)=> !SIZES[size])) ||
  //   (Object.keys(BRAND).some((brand)=> BRAND[brand] && product.brand === brand) || Object.keys(SIZES).some((size)=> SIZES[size] && product.size === size)));
  const filteredProducts:Product[] = data.filter((product:Product)=>{
    const isSizeFiltered = !isAnyFilterApplied(SIZES) || SIZES[product.size];
    const isBrandFiltered = !isAnyFilterApplied(BRAND) || BRAND[product.brand];
    const isGenderFiltered = product.gender.toLocaleLowerCase() === id;

    return isSizeFiltered && isBrandFiltered && isGenderFiltered
  })

  return (
    <>
      <section className="">
        <div className="category-body">
          <div className="container-w p-3 px-lg-4">
            <h2 className="fs-4 ">Ropa solo para {id}</h2>
            <p className="m-0">Producto en lista {filteredProducts.length}</p>
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
      <Toaster visibleToasts={2} duration={2000}  />
    </>
  );
}
