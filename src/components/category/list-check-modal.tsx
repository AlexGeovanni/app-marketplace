
interface Props extends React.HTMLAttributes<HTMLInputElement>{
  selectedCheckbox:number
  handleCheckboxChange:(index:number)=>void;
}
export default function ListChecksModal({selectedCheckbox,handleCheckboxChange,id}:Props) {

  return (
    <>
      <ul className="list-group gap-1">
        <li className="list-group-item border-0">
          <input
            className="form-check-input me-1 border-secondary"
            type="radio"
            name="listGroupRadio"
            value=""
            id={`firstRadio${id}`}
            defaultChecked={selectedCheckbox === 1}
            onChange={() => handleCheckboxChange(1)}
          />
          <label className="form-check-label" htmlFor={`firstRadio${id}`}>
            Todos
          </label>
        </li>
        <li className="list-group-item border-0 ">
          <input
            className="form-check-input me-1 border-secondary"
            type="radio"
            name="listGroupRadio"
            value=""
            id={`secondRadio${id}`}
            checked={selectedCheckbox === 2}
            onChange={() => handleCheckboxChange(2)}
          />
          <label className="form-check-label" htmlFor={`secondRadio${id}`}>
            Precio: Menor a Mayor
          </label>
        </li>
        <li className="list-group-item border-0 ">
          <input
            className="form-check-input me-1 border-secondary"
            type="radio"
            name="listGroupRadio"
            value=""
            id={`thirdRadio${id}`}
            checked={selectedCheckbox === 3}
            onChange={() => handleCheckboxChange(3)}
          />
          <label className="form-check-label" htmlFor={`thirdRadio${id}`}>
            A - Z 
          </label>
        </li>
      </ul>
    </>
  );
}
