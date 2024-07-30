import { NavLink } from "react-router-dom";
import SubItem from "./sub-item";
import RightArrowIcon from "../icons/ArrowIcon";
import { useAppSelector } from "../../redux/hooks";

export default function Navbar() {
  const { isLoggedIn, user } = useAppSelector((state) => state.authUser);

  const ClassLink = " py-0 nav-link px-3 px-lg-2 ";

  return (
    <ul className="navbar-nav  justify-content-start  flex-grow-1 ">
      <li className="nav-item m-0 mx-lg-2  " data-bs-toggle="offcanvas">
        <NavLink
          to={"/"}
          className={({ isActive }: { isActive: boolean }): string =>
            (isActive ? "fw-bold " : "") + ClassLink
          }
        >
          Inicio
        </NavLink>
      </li>
      <li className="nav-item d-none d-lg-block m-0 mx-lg-2 dropdown">
        <span className="cp nav-link px-3 px-lg-0 py-0 dropdown-toggle">
          Categorias
        </span>
        <div className=" dropdown-menu rounded-0 mt-0 p-0">
          <SubItem />
        </div>
      </li>

      {/* Item que solo funciona para movil ya que abre el canva de categorria */}
      <li
        className="navbar-toggler nav-item cp p-0 d-flex d-lg-none justify-content-between align-items-center  border-0"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasResponsive"
        aria-controls="offcanvasResponsive"
        role="button"
      >
        <span className="nav-link px-3 px-lg-0  ">Categorias</span>
        <RightArrowIcon />
      </li>

      {isLoggedIn && user && (
        <li className="nav-item  m-0 mx-lg-2" data-bs-toggle="offcanvas">
          <NavLink
            to={"/dashboard"}
            className={({ isActive }: { isActive: boolean }): string =>
              (isActive ? "fw-bold" : "") + ClassLink
            }
          >
            Dashboard
          </NavLink>
        </li>
      )}
    </ul>
  );
}
