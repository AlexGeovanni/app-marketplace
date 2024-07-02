import { Link } from "react-router-dom";
import SubItem from "./sub-item";

export default function NavItem() {
  return (
    <ul className="navbar-nav  justify-content-start  flex-grow-1 ">
      <Link to={"/"} className="nav-item  m-0 mx-lg-2 text-decoration-none">
        <span className="nav-link px-3 px-lg-2" aria-current="page">
          Inicio
        </span>
      </Link>
      <li className="nav-item    d-none d-lg-block m-0 mx-lg-2 dropdown">
        <span className="nav-link px-3 px-lg-0 dropdown-toggle" >
          Categorias
        </span>
        <div className="dropdown-menu rounded-0 mt-0 p-0">
          <SubItem />
        </div>
      </li>
      <li
        className="navbar-toggler nav-item cp p-0 d-flex d-lg-none justify-content-between align-items-center  border-0"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasSubNavbar"
        aria-controls="offcanvasSubNavbar"
        aria-label="Toggle navigation"
      >
        <span className="nav-link px-3 px-lg-0  ">Categorias</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-right me-3"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
          />
        </svg>
      </li>

      <li className="nav-item   m-0 mx-lg-2">
        <a className="nav-link px-3 px-lg-0" href="#">
          Ayuda
        </a>
      </li>
      <Link
        to={"/dashboard"}
        className="nav-item  m-0 mx-lg-2 text-decoration-none"
      >
        <span className="nav-link px-3 px-lg-0">Dashboard</span>
      </Link>
    </ul>
  );
}
