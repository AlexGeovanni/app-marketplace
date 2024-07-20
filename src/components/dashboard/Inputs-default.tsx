import { useFormContext } from "react-hook-form";
import InputBox from "./box/input-box"
import { TDefault } from "../../validations/ProductSchema";

export default function InputsDefault() {

  const {register}= useFormContext<TDefault>()

  return (
    <>
      <div className="col-6 mb-3">
        <InputBox register={register('name')} id="inputDefaultName1" text="Titulo del producto"  placeholder="Ingrese el nombre del producto" />
        <InputBox register={register('price')} id="inputDefaultPrice2" text="Precio"  placeholder="Ingrese el precio del producto" />
        <InputBox register={register('brand')} id="inputDefaultBrand3" text="Marca"  placeholder="Ingrese la marca del producto" />
        <InputBox register={register('color')} id="inputDefaultColor4" text="Color"  placeholder="Ingrese con una palabra el color del producto" />
        <InputBox register={register('discount')} id="inputDefaultOff5" text="Descuento (%)"  placeholder="Ingrese el porcentaje de descuento de 1 - 99" />
      </div>
    </>
  );
}
