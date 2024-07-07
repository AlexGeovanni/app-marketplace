import CustomFilterCheckbox from "../../../hooks/custom-filter-check";
import { ArraysTypes } from "../accordion-modal";
import BoxCheck from "./box-check";

interface Props{
  array:ArraysTypes[]  // Array con los tamaños de la caja de selección (Ej: ["Small", "Medium", "Large"])  // Array con los tamaños de la caja de selección (Ej: ["Small", "Medium", "Large"])  // Array con los tamaños de la caja de selección (Ej: ["Small", "Medium", "Large"])  // Array con los tamaños de la caja de selección (Ej: ["Small", "Medium", "Large"])  // Array con los tamaños de la caja de selección (Ej: ["Small", "Medium", "Large"])  // Array con los tamaños de la caja de selección (Ej: ["Small", "Medium", "Large"])  // Array con los tamaños de la caja de selección (Ej: ["
  name: string
}

export default function AccordionBody({array,name}:Props) {

  const {selectedCheckbox,handleCheckboxChange}=CustomFilterCheckbox()

  return (
    <div className="accordion-body">
      {
        array.map((size, index) => (
          <BoxCheck
            key={index}
            selectedCheckbox={selectedCheckbox}
            handleCheckboxChange={handleCheckboxChange}
            numberOfCheck={index + 1}
            id={`${name}${index + 1}`}
            name={name}
            text={size.title}
          />
        ))
      }
    </div>
  );
}
