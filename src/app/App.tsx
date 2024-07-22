import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle';

import PageHome from "../pages/page_home";
import PageAuth from "../pages/page_auth";
import ScrollToTop from "./ScrollTop";
import PageCartShop from "../pages/page_cart-shop";
import PageDetail from "../pages/page_detail";
import PageCategory from "../pages/page_category";
import PageProfile from "../pages/page_profile";
import PageDashboard from "../pages/page_dashboard";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="*" element={<PageHome />} />
          <Route path="/" element={<PageHome />} />
          <Route path="/auth" element={<PageAuth />} />
          <Route path="/cart" element={<PageCartShop />} />
          <Route path="/detail/:id" element={<PageDetail />} />
          <Route path="/ropa/:id" element={<PageCategory />} />
          <Route path="/profile" element={<PageProfile />} />
          <Route path="/dashboard" element={<PageDashboard />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
