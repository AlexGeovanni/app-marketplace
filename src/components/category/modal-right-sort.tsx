import { useState } from "react";
//import CustomFilterCheckbox from "../../hooks/custom-filter-check";
import ListChecksModal from "./list-check-modal";


export default function ModalRightSort(){

  const [selectedCheckbox,setSelectedCheckbox]= useState(1);

  const handleCheckboxChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
    setSelectedCheckbox(parseInt(e.target.value))
    e.target.checked = true
    console.log(e.target)
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
                <ListChecksModal selectedCheckbox={selectedCheckbox} handleCheckboxChange={handleCheckboxChange} id="Right"  />
              </div>
            </div>
          </>
        );
}