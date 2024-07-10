//import CustomFilterCheckbox from "../../../hooks/custom-filter-check";
import { UnknownAction } from "@reduxjs/toolkit";
import { useAppDispatch } from "../../../redux/hooks";
import { ArraysTypes } from "../accordion-modal";
import BoxCheck from "./box-check";

interface Props{
  array:ArraysTypes  // Array con los tamaños de la caja de selección (Ej: ["Small", "Medium", "Large"])  // Array con los tamaños de la caja de selección (Ej: ["Small", "Medium", "Large"])  // Array con los tamaños de la caja de selección (Ej: ["Small", "Medium", "Large"])  // Array con los tamaños de la caja de selección (Ej: ["Small", "Medium", "Large"])  // Array con los tamaños de la caja de selección (Ej: ["Small", "Medium", "Large"])  // Array con los tamaños de la caja de selección (Ej: ["Small", "Medium", "Large"])  // Array con los tamaños de la caja de selección (Ej: ["
  name: string
  handleDispatch:(text:string)=>UnknownAction
}

export default function AccordionBody({array,name,handleDispatch}:Props) {

  //const {selectedCheckbox,handleCheckboxChange}=CustomFilterCheckbox()
  const Dispatch=useAppDispatch()
  
  const handleOnchange=(text:string)=>{
    Dispatch(handleDispatch(text));
 }
  return (
    <div className="accordion-body">
      {
        Object.keys(array).map((key, i) => {
          return(
            <BoxCheck
              key={i}
              selectedCheckbox={array[key]}
              id={`${name}${i + 1}`}
              name={name}
              text={key}
              handleOnchange={handleOnchange}
            />
          )
        })
      }
    </div>
  );
}
