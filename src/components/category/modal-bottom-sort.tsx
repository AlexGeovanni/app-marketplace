import CustomFilterCheckbox from "../../hooks/custom-filter-check";


export default function ModalBottomSort() {
  const { selectedCheckbox, handleCheckboxChange } = CustomFilterCheckbox();
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
          <ul className="list-group gap-1">
            <li className="list-group-item border-0">
              <input
                className="form-check-input me-1 border-secondary"
                type="radio"
                name="listGroupRadioxd"
                value=""
                id={`firstRadio1`}
                defaultChecked={selectedCheckbox === 1}
            onChange={() => handleCheckboxChange(1)}
              />
              <label className="form-check-label" htmlFor={`firstRadio1`}>
                Todos
              </label>
            </li>
            <li className="list-group-item border-0 ">
              <input
                className="form-check-input me-1 border-secondary"
                type="radio"
                name="listGroupRadioxd"
                value=""
                id={`secondRadio2`}
                defaultChecked={selectedCheckbox === 2}
            onChange={() => handleCheckboxChange(2)}
              />
              <label className="form-check-label" htmlFor={`secondRadio2`}>
                Precio: Menor a Mayor
              </label>
            </li>
            <li className="list-group-item border-0 ">
              <input
                className="form-check-input me-1 border-secondary"
                type="radio"
                name="listGroupRadioxd"
                value=""
                id={`thirdRadio3`}
                defaultChecked={selectedCheckbox === 3}
            onChange={() => handleCheckboxChange(3)}
              />
              <label className="form-check-label" htmlFor={`thirdRadio3`}>
                A - Z
              </label>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
