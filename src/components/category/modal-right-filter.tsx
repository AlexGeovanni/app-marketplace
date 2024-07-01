import AccordionModal from "./accordion-modal";

export default function ModalFilter() {
  return (
    <>
      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="offcanvasRightFilter"
        aria-labelledby="offcanvasRightFilterLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightFilterLabel">
            Filtrar
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <AccordionModal />
        </div>
      </div>
    </>
  );
}
