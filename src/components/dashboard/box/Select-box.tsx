import { useFormContext } from "react-hook-form";
import { mapCategories, TDefault,  } from "../../../validations/ProductSchema";
import { useEffect } from "react";

interface Props {
  setSCategory: (category: string) => void;
}

export default function SelectBox({setSCategory}:Props) {

  const {register,watch}= useFormContext<TDefault>()

  const type = watch('category')

  useEffect(()=>{
    setSCategory(type)
  },[type,setSCategory])

const Optins = Object.keys(mapCategories).map((key, i)=>(
  <option key={i} value={key}>{key}</option>
))

  return (
    <div className="col-12 mb-3 ">
      <label htmlFor="inputDefaultCategory6" className="form-label">
        Categoria{" "}
        <span className="text-danger" style={{ fontSize: "13px" }}>
          {"("} *Debes elegir una categoria para continuar{")"}
        </span>
      </label>
      <select id="inputDefaultCategory6" className="form-select py-2"
      {...register('category')}
      >
        <option hidden>Selecionar categoria</option>
        {
          Optins
        }
      </select>
    </div>
  );
}
