import CustomResize from "../../hooks/custom-resize";
import ListChecksModal from "./list-check-modal";


export default function ModalRightSort(){
  
  const {width}=CustomResize()
  if(width<768){
    return null;  // If the width is less than 768px, don't render the modal.
  }

        return (
          <>
            <div
              className="offcanvas offcanvas-end d-none d-md-block"
              tabIndex={-1}
              id="offcanvasRightOrder"
              aria-labelledby="offcanvasRightOrderLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasRightOrderLabel">
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
                <ListChecksModal   />
              </div>
            </div>
          </>
        );
}