
interface Props extends React.HTMLAttributes<HTMLInputElement>{
  selectedCheckbox:number
  handleCheckboxChange:(index:React.ChangeEvent<HTMLInputElement>)=>void;
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
            value={1}
            id={`firstRadio${id}`}
            defaultChecked={true}
            onChange={(e) => handleCheckboxChange(e)}
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
            value={2}
            id={`secondRadio${id}`}
            checked={selectedCheckbox === 2}
            onChange={(e) => handleCheckboxChange(e)}
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
            value={3}
            id={`thirdRadio${id}`}
            checked={selectedCheckbox === 3}
            onChange={(e) => handleCheckboxChange(e)}
          />
          <label className="form-check-label" htmlFor={`thirdRadio${id}`}>
            A - Z 
          </label>
        </li>
      </ul>
    </>
  );
}
