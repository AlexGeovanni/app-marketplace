import BoxButtons from "./box-btns";


export default function HomeMain() {
  return (
    <section className="home-main-seccions mb-3 mb-md-5">
      <div className="container-w p-3 px-lg-4 d-flex flex-column justify-content-center  ">
        <div className="title__seccions  ">
          <h1 className="fw-bold">
            Local makertplace <span className="text-primary">store</span>
          </h1>
        </div>
        <div className="text-start text-white mt-5 ">
          <h3>Descubre los mejores productos</h3>
          <p>Encuentra todo lo que necesitas en un solo lugar.</p>
          <BoxButtons />
        </div>
      </div>
    </section>
  );
}
