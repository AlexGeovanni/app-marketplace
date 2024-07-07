import CustomFilterCheckbox from "../../hooks/custom-filter-check";
import ListChecksModal from "./list-check-modal";


export default function ModalRightSort(){
  const {selectedCheckbox,handleCheckboxChange}=CustomFilterCheckbox()
  console.log(selectedCheckbox)
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
                <ListChecksModal selectedCheckbox={selectedCheckbox} handleCheckboxChange={handleCheckboxChange} id="Right"  />
              </div>
            </div>
          </>
        );
}