import { Link } from "react-router-dom";

export default function NavItem() {
  return (
    <ul className="navbar-nav  justify-content-start  flex-grow-1 ">
      <Link to={"/"} className="nav-item fw-semibold m-0 mx-lg-2 text-decoration-none">
        <span className="nav-link px-3 px-lg-2" aria-current="page">
          Inicio
        </span>
      </Link>
      <li className="nav-item fw-semibold  m-0 mx-lg-2 dropdown">
        <span
          className="nav-link px-3 px-lg-0 dropdown-toggle"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Categorias
        </span>
        <div className="dropdown-menu rounded-0 mt-0 p-0">
          <ul className="list-group  rounded-0 p-0 ">
            <li className="list-group-item p-0 border-0">
              <a className="dropdown-item " href="#">
                Electronicos
              </a>
            </li>
          </ul>
          <ul className="list-group rounded-0 p-0 ">
            <li className="list-group-item p-0 border-0">
              <a className="dropdown-item title__list-group  fw-semibold" href="#">
                Ropa
              </a>
            </li>
            <li className="list-group-item p-0 border-0">
              <a className="dropdown-item " href="#">
                Hombre
              </a>
            </li>
            <li className="list-group-item p-0 border-0">
              <a className="dropdown-item " href="#">
                Mujer
              </a>
            </li>
            <li className="list-group-item p-0 border-0">
              <a className="dropdown-item " href="#">
                Kids
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li className="nav-item fw-semibold  m-0 mx-lg-2">
        <a className="nav-link px-3 px-lg-0" href="#">
          Ayuda
        </a>
      </li>
      <Link
        to={"/dashboard"}
        className="nav-item fw-semibold m-0 mx-lg-2 text-decoration-none"
      >
        <span className="nav-link px-3 px-lg-0">Dashboard</span>
      </Link>
    </ul>
  );
}
