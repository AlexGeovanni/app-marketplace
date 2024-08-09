import BoxButtons from "./box-btns";

export default function HomeMain() {
  return (
    <section className="home-main-seccions mb-3 mb-md-5">
      <div className="container-w p-3 px-lg-4  d-flex flex-column justify-content-center align-items-center ">
        <div className="title__seccions  ">
          <h1 className="fw-bold">
            Markertplace 
          </h1>
        </div>
        <div className="subtitle__seccions text-center text-white py-3 py-lg-4 ">
          <h3>Descubre los mejores productos</h3>
          <p>Encuentra todo lo que necesitas en un solo lugar.</p>
          <BoxButtons />
        </div>
        
      </div>
    </section>
  );
}
