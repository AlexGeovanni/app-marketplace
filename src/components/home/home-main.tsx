export default function HomeMain() {
  return (
    <section className="home-main-seccions ">
      <div className="sec px-3 px-lg-4 d-flex flex-column justify-content-center  ">
        <div className="title__seccions  ">
          <h1 className="fw-bold">
            Local makertplace <span className="text-primary">store</span>
          </h1>
        </div>
        <div className="text-start text-white mt-5 ">
          <h3>Descubre los mejores productos</h3>
          <p>Encuentra todo lo que necesitas en un solo lugar.</p>
          <div className="btns d-flex gap-2 ">
            <button className="btn ">Comprar ahora </button>
            <button className="btn">Registrate ahora</button>
          </div>
        </div>
      </div>
    </section>
  );
}
