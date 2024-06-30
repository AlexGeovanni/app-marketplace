import { Link } from "react-router-dom";

export default function HomeMain() {
  return (
    <section className="home-main-seccions mb-3 mb-md-5">
      <div className="sec px-3 px-lg-4 d-flex flex-column justify-content-center  ">
        <div className="title__seccions  ">
          <h1 className="fw-bold">
            Local makertplace <span className="text-primary">store</span>
          </h1>
        </div>
        <div className="text-start text-white mt-5 ">
          <h3>Descubre los mejores productos</h3>
          <p>Encuentra todo lo que necesitas en un solo lugar.</p>
          <div className="btns d-flex gap-2 align-items-center">
            <Link to={"/products"} className=" text-decoration-none text-decoration-underline text-white">
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
                  fill-rule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z"
                />
              </svg>
            </Link>
            <button className="btn">Registrate ahora</button>
          </div>
        </div>
      </div>
    </section>
  );
}
