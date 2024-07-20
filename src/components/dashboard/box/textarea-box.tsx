import { useFormContext } from "react-hook-form"
import { TDefault } from "../../../validations/ProductSchema"


export default function TextareaBox(){

  const {register}= useFormContext<TDefault>()

    return(
        <div className="col-12 mb-3">
        <label
          htmlFor="TextareaDefault"
          className="form-label"
        >
          Descripcion
        </label>
        <textarea
          className="form-control"
          id="TextareaDefault"
          rows={3}
          placeholder="Describe tu producto aquí..."
          style={{ resize: "none" }}
          {...register('description')}
        ></textarea>
      </div>
    )
}