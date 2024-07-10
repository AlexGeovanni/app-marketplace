import { useState } from "react";
//import CustomFilterCheckbox from "../../hooks/custom-filter-check";

interface Props extends React.HTMLAttributes<HTMLInputElement>{
  
}

interface Items{
  value:string;
  label:string;
}

export default function ListChecksModal({id}:Props) {
  
  const [selectedCheckbox, setSelectedCheckbox] = useState<string|null>("all");

 
  const handleCheckboxChange = (index: string) => {
    setSelectedCheckbox(index);
  };
  const items:Items[]=[
    {
      value:"all",
      label: "Todos"
    },
    {
      value:"desc",
      label: "Precio: Mayor a Menor"
    },
    {
      value:"asc",
      label: "Precio: Menor a Mayor"
    }
  ]
  
  return (
    <>
      <ul className="list-group gap-1">
        {
          items.map((item, index) => (
            <li key={index} className="list-group-item border-0 ">
              <input
                className="form-check-input me-1 border-secondary"
                type="radio"
                name={`listGroupRadio${id}`}	
                value={item.value}
                id={`firstRadio${id}${index}`}
                checked={selectedCheckbox == item.value}
                onChange={(e) => handleCheckboxChange(e.target.value)}
              />
              <label className="form-check-label" htmlFor={`firstRadio${id}${index}`}>
                {item.label}
              </label>
            </li>
          ))
        }
      </ul>
    </>
  );
}
