import { NavLink } from "react-router-dom";

export default function SubItem() {
  const ClassLink = " dropdown-item";

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
          <a className="dropdown-item pb-0  fw-semibold" href="#">
            ROPA
          </a>
        </li>
        <li className="list-group-item p-0 border-0">
          <NavLink
            to={"/ropa/hombre"}
            className={({ isActive }: { isActive: boolean }): string =>
              (isActive ? "fw-semibold " : "") + ClassLink
            }
          >
            Hombre
          </NavLink>
        </li>
        <li className="list-group-item p-0 border-0">
          <NavLink
            to={"/ropa/mujer"}
            className={({ isActive }: { isActive: boolean }): string =>
              (isActive ? "fw-semibold " : "") + ClassLink
            }
          >
            Mujer
          </NavLink>
        </li>
        <li className="list-group-item p-0 border-0">
          <NavLink
            to={"/ropa/kids"}
            className={({ isActive }: { isActive: boolean }): string =>
              (isActive ? "fw-semibold " : "") + ClassLink
            }
          >
            Kids
          </NavLink>
        </li>
      </ul>
    </>
  );
}
