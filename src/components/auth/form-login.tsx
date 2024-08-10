import { useNavigate } from "react-router-dom";
import { login } from "../../redux/features/authuUserSlice";
import { useAppDispatch } from "../../redux/hooks";
import { PropsAut } from "../../Types";
import { LoginSchema, TLoginSchema } from "../../validations/UserSchema";
import InputBox from "../box-input-float/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function FormLogin({ changeForm }: PropsAut) {
  const Dispatch = useAppDispatch();
  const navegate = useNavigate();

  const userStatic = {
    id: 1,
    name: "Dom torreto",
    role: "Administrador",
    email: "admin@locamarket.com",
    password: "admin123",
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TLoginSchema>({
    resolver: zodResolver(LoginSchema),
  });

  const OnSubmit = async (data: TLoginSchema) => {
    // Validación
    if (
      userStatic.email == data.email &&
      userStatic.password == data.password
    ) {
      toast.success("Te has logeado correctamente!!",{
        description:userStatic.name
      })
      setTimeout(() => {
        Dispatch(login(userStatic));
        navegate("/profile");
      }, 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit(OnSubmit)}>
      <div className="form-floating mb-3">
        <InputBox
          name="emailLogin"
          placeholder="EmailLogin"
          value="Correo electronico"
          register={register("email")}
          error={errors?.email}
        />
      </div>
      <div className="form-floating">
        <div className="form-floating mb-3">
          <InputBox
            name="passwordLogin"
            placeholder="PasswordLogin"
            value="Contraseña"
            register={register("password")}
            error={errors?.password}
          />
        </div>
      </div>
      <div className="form__btn">
        <button
          onClick={() => {
            errors && toast.error("No se pudo logear",{
              description:"Ingrese los datos correctamente"
            });
          }}
          disabled={isSubmitting}
          type="submit"
          className="btn btn-primary w-100 "
        >
          ENTRAR
        </button>
      </div>
      <p className="py-2">
        ¿No tienes cuenta aun? 
        <a onClick={changeForm} className=" ms-1 fw-semibold">
          Crear cuenta
        </a>
      </p>
    </form>
  );
}
