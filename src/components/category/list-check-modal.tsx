import { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { UnknownAction } from "@reduxjs/toolkit";
import BoxRadio from "./Box/box-radio";
import { PriceMayor,PriceMenor,OrderAZ } from "../../redux/features/dataSlice";
//import CustomFilterCheckbox from "../../hooks/custom-filter-check";

interface Props extends React.HTMLAttributes<HTMLInputElement> {}

interface Items {
  value: string;
  label: string;
  order:()=>UnknownAction
}

export default function ListChecksModal({ id }: Props) {
  const [selectedCheckbox, setSelectedCheckbox] = useState<string >("");

  const Dispatch = useAppDispatch();

  const handleCheckboxChange = (
    index: string,
    DispatchOrder:()=> UnknownAction
  ):void => {
    setSelectedCheckbox(index);
    Dispatch(DispatchOrder());
  };
  const items: Items[] = [
    {
      value:"normal",
      label: " A-Z",
      order:OrderAZ // No action needed for this case, just a placeholder for the price prop. You can replace it with your own logic.
    },
    {
      value: "desc",
      label: " Mayor a Menor",
      order:PriceMayor
    },
    {
      value: "asc",
      label: "Menor a Mayor",
      order: PriceMenor
    },
  ];

  return (
    <>
      <ul className="list-group gap-1">
        {items.map((item, index) => (
          <BoxRadio
            selectedCheckbox={selectedCheckbox}
            handleCheckboxChange={handleCheckboxChange}
            key={index}
            value={item.value}
            label={item.label}
            id={id}
            dispatch={item.order}
          />
        ))}
      </ul>
    </>
  );
}
