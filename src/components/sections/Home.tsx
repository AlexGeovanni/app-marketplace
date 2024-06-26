import HomeMain from "../home/home-main";
import OffProduct from "../home/off-product";
import PopularCategorys from "../home/popular-category";
import Header from "./header";

export default function Home() {
  return (
    <>
    <Header />
    <HomeMain />
    <PopularCategorys />
    <OffProduct />
    </>
  );
}
