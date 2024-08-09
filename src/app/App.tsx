import { Route, BrowserRouter as Router, Routes,Navigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle';
import "../assets/styles/css/main.css"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import PageHome from "../pages/page_home";
import PageAuth from "../pages/page_auth";
import ScrollToTop from "./ScrollTop";
import PageCartShop from "../pages/page_cart-shop";
import PageDetail from "../pages/page_detail";
import PageCategory from "../pages/page_category";
import PageProfile from "../pages/page_profile";
import PageDashboard from "../pages/page_dashboard";
import Header from "../components/sections/header";
import { useAppSelector } from "../redux/hooks";

function App() {

  const {isLoggedIn} = useAppSelector((state)=> state.authUser)



  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route  path="*" element={<PageHome />} />
          <Route  path="/" element={<PageHome />} />
          <Route  path="/auth" element={isLoggedIn? <Navigate replace to={"/"} /> :<PageAuth />} />
          <Route  path="/cart" element={<PageCartShop />} />
          <Route  path="/detail/:id" element={<PageDetail />} />
          <Route  path="/ropa/:id" element={<PageCategory />} />
          <Route  path="/profile" element={isLoggedIn? <PageProfile />: <Navigate replace to={"/auth"} />} />
          <Route  path="/dashboard" element={ isLoggedIn? <PageDashboard /> : <Navigate replace to={"/auth"} /> } />
        </Routes>
      </Router>
    </>
  )
}

export default App
