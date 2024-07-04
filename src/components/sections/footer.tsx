import Information from "../footer/informations";


export default function Footer() {
  /**
   * Agregar los iconos de las redes sociales
   * 
   */
    return (
      <>
        <footer className="footer-container">
          <section className="container-w p-3 px-lg-4 ">
            <div className=" information__footer-container d-flex justify-content-between gap-3 flex-wrap">
            <Information />
            </div>
          </section>
          <div>
            <div className="copy__footer-container container-w p-3 px-lg-4 py-4  ">
              <p className="m-0 text-center">
                &copy; 2024 local Marketplace, Inc.
              </p>
            </div>
          </div>
        </footer>
      </>
    );
  }
  