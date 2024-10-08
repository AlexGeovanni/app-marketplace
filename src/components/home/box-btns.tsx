import { Link } from "react-router-dom";

export default function BoxButtons() {
  return (
    <>
      <div className="btns d-flex gap-2 justify-content-center align-items-center">
        <Link
          to={"/ropa/hombre"}
          className="btn-shop  text-decoration-none text-decoration-underline "
        >
          Comprar ahora
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            className="bi bi-arrow-up-right-circle ms-1"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z"
            />
          </svg>
        </Link>
        <Link
          to={"/auth"}
          className="btn border btn-register text-decoration-none  "
        >
          Registrate ahora
        </Link>
      </div>
    </>
  );
}
