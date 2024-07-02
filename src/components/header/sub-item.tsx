import { Link } from "react-router-dom";

export default function SubItem() {
  return (
    <>
        <ul className="list-group  rounded-0 p-0 ">
          <li className="list-group-item p-0 border-0">
            <a className="dropdown-item " href="#">
              Electronicos
            </a>
          </li>
        </ul>
        <ul className="list-group w-100 rounded-0 p-0 ">
          <li className="list-group-item p-0 border-0">
            <a
              className="dropdown-item title__list-group  fw-semibold"
              href="#"
            >
              Ropa
            </a>
          </li>
          <Link to={"/ropa/hombre"} className="list-group-item p-0 border-0">
            <span className="dropdown-item ">
              Hombre
            </span>
          </Link>
          <Link to={"/ropa/mujer"} className="list-group-item p-0 border-0">
            <span className="dropdown-item ">
              Mujer
            </span>
          </Link>
          <Link to={"/ropa/kids"} className="list-group-item p-0 border-0">
            <span className="dropdown-item " >
              Kids
            </span>
          </Link>
        </ul>
    </>
  );
}
