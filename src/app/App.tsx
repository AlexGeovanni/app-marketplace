import { Route, Routes, Navigate } from "react-router-dom";


import "bootstrap/dist/js/bootstrap.bundle";
import "../assets/styles/css/main.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import PageHome from "../pages/page_home";
import ScrollToTop from "./ScrollTop";
import { useAppSelector } from "../redux/hooks";
import { lazy, Suspense } from "react";

function App() {
  const { isLoggedIn } = useAppSelector((state) => state.authUser);

  const Authentication = lazy(() => import("../pages/page_auth"));
  const CartShop = lazy(() => import("../pages/page_cart-shop"));
  const Category = lazy(() => import("../pages/page_category"));
  const Profile = lazy(() => import("../pages/page_profile"));
  const Dashboard = lazy(() => import("../pages/page_dashboard"));
  const Detail = lazy(() => import("../pages/page_detail"));
  return (
    <>
      <Suspense fallback={<Loading />} >
        <ScrollToTop />
        <Routes>
          <Route path="*" element={<PageHome />} />
          <Route path="/" element={<PageHome />} />
          <Route path="/cart" element={<CartShop />} />
          <Route path="/ropa/:id" element={<Category />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route
            path="/auth"
            element={isLoggedIn ? <Navigate replace to={"/"} /> : <Authentication />}
          />
          <Route
            path="/profile"
            element={isLoggedIn ? <Profile /> : <Navigate replace to={"/auth"} />}
          />
          <Route
            path="/dashboard"
            element={isLoggedIn ? <Dashboard /> : <Navigate replace to={"/auth"} />}
          />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;


function Loading(){
  return <div className="d-flex justify-content-center align-items-center h-100vh">Loading...</div>
}
