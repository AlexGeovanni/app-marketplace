import { Link } from "react-router-dom";
import IconBuger from "../header/icon-buger";
import NavBar from "../header/navbar";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dak bg-white fixed-top">
        <div className="container d-flex  ">
          <a className="navbar-brand m-0 ms-lg-3" href="#">
            LOGO APP
          </a>
          <IconBuger />
          <div
            className="offcanvas offcanvas-start"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header justify-content-end">
              <div
                className="cp offcanvas-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                Cerrar
              </div>
            </div>
            <NavBar />
          </div>
          <div className="d-flex m-0 ms-lg-3 gap-3 align-items-center justify-content-center">
            <div>
              <Link to={"/cart"} className="text-decoration-none text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="27"
                  fill="currentColor"
                  className="bi bi-cart"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                </svg>
              </Link>
            </div>
            <div>
              <Link to={"/auth"} className="text-decoration-none text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  className="bi bi-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
