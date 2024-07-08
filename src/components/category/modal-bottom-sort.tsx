import CustomResize from "../../hooks/custom-resize";
import ListChecksModal from "./list-check-modal";


export default function ModalBottomSort() {
  const {width}=CustomResize()

  if (width > 768) {
    return null; // Do not render the modal on small screens.
  }

  return (
    <>
      <div
        className="offcanvas offcanvas-bottom d-block d-md-none"
        tabIndex={-1}
        id="offcanvasBottom"
        aria-labelledby="offcanvasBottomLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasBottomLabel">
            Ordenar por
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body small">
          <ListChecksModal  />
        </div>
      </div>
    </>
  );
}
