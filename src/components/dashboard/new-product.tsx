import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import TextareaBox from "./box/textarea-box";
import InputsDefault from "./Inputs-default";
import { baseSchema, clothesSchema, electronicSchema, TDefault,  } from "../../validations/ProductSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import InputsClothes from "./Inputs-clothes";
import InpustElectronic from "./Inputs-electronic";
import SelectBox from "./box/Select-box";
import { useState } from "react";

export default function NewProduct() {
  const [sCategory,setSCategory]=useState<string>('default');
  const methods = useForm<TDefault>({
    resolver: zodResolver(
      sCategory === "Electronico" ? electronicSchema :
      sCategory === "Ropa" ? clothesSchema : 
      baseSchema
    ),
  });

  console.log(methods.formState.errors);

  const onSubmit:SubmitHandler<TDefault> = data => {
    const {file, ...data_send}=data
    console.log(file[0]);
    methods.setValue('url',"http://localhost")
    console.log(data_send);
  };

  return (
    <>
      <FormProvider {...methods}>
        <section>
          <div className="container-w p-3 px-lg-4">
            <h2 className="fs-4 ">Agregar nuevo producto</h2>
            <p>Ingrese los datos del producto para crearlo</p>
            <form className="row " onSubmit={methods.handleSubmit(onSubmit)}>
              <InputsDefault  />
              <div className="col-6 mb-3">
                <SelectBox setSCategory={setSCategory} />
                {sCategory === "Ropa" && <InputsClothes />}
                {sCategory === "Electronico" && <InpustElectronic />}
              </div>
              <TextareaBox />
              <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="inputGroupFile01">
                  Upload
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="inputGroupFile01"
                   accept=".webp, .jpg, .jpeg"
                   {...methods.register('file')}
                />
              </div>

              <div className="col-12  ">
                <button
                  type="submit"
                  className="btn btn-primary px-5 d-block ms-auto"
                  
                >
                  Crear
                </button>
              </div>
            </form>
          </div>
        </section>
      </FormProvider>
    </>
  );
}
