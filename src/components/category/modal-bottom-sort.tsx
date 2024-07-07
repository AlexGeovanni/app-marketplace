//import CustomFilterCheckbox from "../../hooks/custom-filter-check";
import { useEffect, useState } from "react";
import ListChecksModal from "./list-check-modal";

export default function ModalBottomSort() {
  const [selectedCheckbox, setSelectedCheckbox] = useState(1);
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCheckbox(parseInt(e.target.value));

    console.log(e);
  };

  useEffect(() => {
    setSelectedCheckbox(1);
  }, []);

  return (
    <>
      <div
        className="offcanvas offcanvas-top"
        tabIndex={-1}
        id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasTopLabel">
            Offcanvas top
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ListChecksModal
            selectedCheckbox={selectedCheckbox}
            handleCheckboxChange={handleCheckboxChange}
            id="Bottom"
          />
        </div>
      </div>
    </>
  );
}
