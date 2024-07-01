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
    </>
  );
}
