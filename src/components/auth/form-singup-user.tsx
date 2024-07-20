import { useForm } from "react-hook-form";
import { PropsAut } from "../../Types";
import InputBox from "../box-input-float/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { SingUpUserSchema, TSingUpUserSchema } from "../../validations/UserSchema";

export default function FormSingupUser({changeForm}:PropsAut) {

  const {register,handleSubmit, formState: {errors,isSubmitting }}=useForm<TSingUpUserSchema>({
    resolver:zodResolver(SingUpUserSchema)
  })
  const onSubmit = async(data: TSingUpUserSchema) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} >
        <div className="form-floating mb-3">
        <InputBox
          name="fullNameSingUp"
          placeholder="nameSingupUser"
          value="Nombre completo"
          register={register("fullName")}
          error={errors.fullName}
        />
      </div>
      <div className="form-floating mb-3">
        <InputBox
          name="phoneSingUp"
          placeholder="phoneSingupUser"
          value="Telefono"
          register={register("phone")}
          error={errors.phone}
        />
      </div>
      <div className="form-floating mb-3">
        <InputBox
          name="emailSingUp"
          placeholder="EmailSingupUser"
          value="Correo electronico"
          register={register("email")}
          error={errors.email}
        />
      </div>
      <div className="form-floating">
        <div className="form-floating mb-3">
          <InputBox
            name="passwordSingUp"
            placeholder="PasswordSingupUser"
            value="Contraseña"
            register={register("password")}
            error={errors.password}
          />
        </div>
      </div>
      <div className=" px-2 form__btn">
        <button disabled={isSubmitting} type="submit" className="btn btn-primary w-100 ">
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
