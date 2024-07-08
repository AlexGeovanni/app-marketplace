import { useState } from "react";

export default function CustomFilterCheckbox() {
  const [selectedCheckbox, setSelectedCheckbox] = useState<number|null>(1);

 
  const handleCheckboxChange = (index: number) => {
    setSelectedCheckbox(index);
  };

  return{selectedCheckbox,handleCheckboxChange}
}
