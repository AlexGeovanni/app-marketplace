import { useForm } from "react-hook-form";
import { PropsAut } from "../../Types";

import InputBox from "../box-input-float/input";
import { zodResolver } from "@hookform/resolvers/zod";

import { Address, SingUpBusinesSchema, TSingUpBusinesSchema } from "../../validations/UserSchema";

export default function FormSingupBusiness({ changeForm }: PropsAut) {

  const {register,handleSubmit,formState:{errors,isSubmitting},reset}=useForm<TSingUpBusinesSchema>({
    resolver:zodResolver(SingUpBusinesSchema)
  })
  
  const onSubmit=(data:TSingUpBusinesSchema)=>{
    console.log(data);
    reset();
    changeForm();
  }
  console.log(errors)
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-floating mb-3">
        <InputBox
          name="textName"
          placeholder="nameSingupBusiness"
          value="Nombre del negocio"
          register={register("businessName")}
          error={errors.businessName}
        />
      </div>

      <div className="form-floating mb-3">
        <select
          className={`form-select ${errors.address && "is-invalid"}`}
          id="floatingSelect"
          aria-label="Floating label select example"
          {...register("address")}
        >
          <option  hidden>Direccion del negocio </option>
          {
           Address.map((address,i)=>{
             return (
              <option key={i} value={address}>{address}</option>
             )
           })
          }
        </select>
        <label htmlFor="floatingSelect">Seleciona la direccion</label>
      </div>

      <div className="form-floating mb-3">
        <InputBox
          name="text"
          placeholder="nameSingupBusiness"
          value="Descripcion del negocio"
          register={register("businessDescription")}
          error={errors.businessDescription}
        />
      </div>

      <div className="form-floating mb-3">
        <InputBox
          name="email"
          placeholder="EmailSingupBusiness"
          value="Correo electronico"
          register={register("email")}
          error={errors.email}
        />
      </div>
      <div className="form-floating">
        <div className="form-floating mb-3">
          <InputBox
            name="password"
            placeholder="PasswordSingupBusiness"
            value="Contraseña"
            register={register("password")}
            error={errors.password}
          />
        </div>
      </div>
      <div className=" px-2 form__btn">
        <button disabled={isSubmitting} name="submit" className="btn btn-primary w-100">
          CREAR CUENTA 
        </button>
      </div>
      <div className="p-2 mt-2 text-center">
        <span>¿Ya tienes cuenta? </span>
        <a onClick={changeForm} href="#" className="">
          Iniciar sesión
        </a>
      </div>
    </form>
  );
}
