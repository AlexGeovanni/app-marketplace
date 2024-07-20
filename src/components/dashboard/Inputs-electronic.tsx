import { useFormContext } from "react-hook-form";
import InputBox from "./box/input-box";
import { TDefault } from "../../validations/ProductSchema";


export default function InpustElectronic(){
    const {register}= useFormContext<TDefault>()
    return(
       <>
       <InputBox register={register('ram')} id="inputElectronicRam1" text="Ram"  placeholder="Ingrese la RAM del producto" />
       <InputBox register={register('storage')} id="inputElectronicStorage2" text="Capacidad de almacenamiento"  placeholder="Ingrese el almacenamiento del producto" />
       <InputBox register={register('screenSize')} id="inputElectronicScreenSize 2" text="Tamaño de la pantalla"  placeholder="Ejemplo: 6.7 pulgadas" />
       
       </>
    )
}