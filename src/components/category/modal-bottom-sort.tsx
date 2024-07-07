
//import CustomFilterCheckbox from "../../hooks/custom-filter-check";
import { useState } from "react";
import ListChecksModal from "./list-check-modal";

export default function ModalBottomSort() {
  const [selectedCheckbox,setSelectedCheckbox]= useState(1);
  const handleCheckboxChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
    setSelectedCheckbox(parseInt(e.target.value))
  
    console.log(e)
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
            <ListChecksModal selectedCheckbox={selectedCheckbox} handleCheckboxChange={handleCheckboxChange}  id="Bottom" />
        </div>
      </div>
    </>
  );
}
