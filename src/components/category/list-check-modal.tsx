export default function ListChecksModal() {
  return (
    <>
      <ul className="list-group gap-1">
        <li className="list-group-item border-0">
          <input
            className="form-check-input me-1 border-secondary"
            type="radio"
            name="listGroupRadio"
            value=""
            id="firstRadio"
            checked
            readOnly
          />
          <label className="form-check-label" htmlFor="firstRadio">
            Precio: Mayor a Menor
          </label>
        </li>
        <li className="list-group-item border-0 ">
          <input
            className="form-check-input me-1 border-secondary"
            type="radio"
            name="listGroupRadio"
            value=""
            id="secondRadio"
            readOnly
          />
          <label className="form-check-label" htmlFor="secondRadio">
            Precio: Menor a Mayor
          </label>
        </li>
        <li className="list-group-item border-0 ">
          <input
            className="form-check-input me-1 border-secondary"
            type="radio"
            name="listGroupRadio"
            value=""
            id="thirdRadio"
            readOnly
          />
          <label className="form-check-label" htmlFor="thirdRadio">
            A - Z 
          </label>
        </li>
      </ul>
    </>
  );
}
