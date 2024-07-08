import { useState } from "react";

export default function CustomFilterCheckbox() {
  const [selectedCheckbox, setSelectedCheckbox] = useState<string|null>("all");

 
  const handleCheckboxChange = (index: string) => {
    setSelectedCheckbox(index);
  };

  return{selectedCheckbox,handleCheckboxChange}
}
