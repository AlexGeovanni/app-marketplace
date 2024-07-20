import { useFormContext } from "react-hook-form";
import { Gender, Sizes, TDefault } from "../../validations/ProductSchema";


export default function InputsClothes() {

  const {register}= useFormContext<TDefault>()

  return (
    <>
      <div className="col-12 mb-3">
        <label htmlFor="inputGender" className="form-label">
          Genero
        </label>
        <select id="inputGender" className="form-select"
        {...register('gender')}
        >
          <option hidden>Selecionar genero</option>
          {
            Gender.map((gender,i) => (
              <option key={i} value={gender}>{gender}</option>
            ))
          }
        </select>
      </div>

      <div className="col-12 ">
        <label htmlFor="inputSize" className="form-label">
          Tamaño
        </label>
        <select id="inputSize" className="form-select"
        {...register('size')}
        >
          <option hidden>Selecionar tamaño</option>
          {
            Sizes.map((size,i)=>(
              <option key={i} value={size}>{size}</option>
            ))
          }
        </select>
      </div>
    </>
  );
}
