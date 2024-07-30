import { Link } from "react-router-dom";
import SubItem from "../header/sub-item";
import { useEffect, useState } from "react";
import BodyCanvas from "../header/body-canvas";
import BurgerIcon from "../icons/burgerIcon";
import CartIcon from "../icons/cartIcon";
import UserIcon from "../icons/userIcon";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    scrollTop > 0 ? setIsScrolled(true) : setIsScrolled(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-dak  sticky-top p-0   ${
          isScrolled ? "bg-scroll-down shadow" : ""
        } `}
      >
        <div className="w-100 d-flex justify-content-between align-items-center">
          <a className="navbar-brand fw-bold  " href="#">
            Markert
          </a>
          <BurgerIcon />

          <div
            className="offcanvas offcanvas-start"
            tabIndex={-1}
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <BodyCanvas />
          </div>

          <div
            className="d-lg-none offcanvas-lg offcanvas-start"
            tabIndex={-1}
            id="offcanvasResponsive"
            aria-labelledby="offcanvasResponsiveLabel"
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                data-bs-target="#offcanvasResponsive"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body p-0 body-canvas">
              <div className="">
                <SubItem />
              </div>
            </div>
          </div>

          <div className=" px-2 d-flex m-0 ms-lg-3 gap-3 align-items-center justify-content-center">
            <div>
              <Link to={"/cart"} className="text-decoration-none text-black">
                <CartIcon />
              </Link>
            </div>
            <div>
              <Link to={"/auth"} className="text-decoration-none text-black">
                <UserIcon />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
