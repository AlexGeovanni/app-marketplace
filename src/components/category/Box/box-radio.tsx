import { UnknownAction } from "@reduxjs/toolkit";

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  value: string;
  selectedCheckbox: string;
  handleCheckboxChange: (value: string, DispatchOrder:()=> UnknownAction) => void;
  label: string;
  dispatch:()=>UnknownAction
}

export default function BoxRadio({
  selectedCheckbox,
  handleCheckboxChange,
  value,
  id,
  label,
  dispatch
}: Props) {
  return (
    <li className="list-group-item border-0 ">
      <input
        className="form-check-input me-1 border-secondary"
        type="radio"
        name={`listGroupRadio${id}`}
        value={value}
        id={`firstRadio${id}${value}`}
        checked={selectedCheckbox == value}
        onChange={(e) => handleCheckboxChange(e.target.value, dispatch)}
      />
      <label className="form-check-label" htmlFor={`firstRadio${id}${value}`}>
        {label}
      </label>
    </li>
  );
}
