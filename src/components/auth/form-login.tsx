import { PropsAut } from "../../Types";
import InputBox from "../box-input/input";

export default function FormLogin({changeForm}:PropsAut) {
  return (
    <form >
      <div className="form-floating mb-3">
        <InputBox
          type="email"
          placeholder="EmailLogin"
          value="Correo electronico"
        />
      </div>
      <div className="form-floating">
        <div className="form-floating mb-3">
          <InputBox
            type="password"
            placeholder="PasswordLogin"
            value="Contraseña"
          />
        </div>
      </div>
      <div className=" px-2 form__btn">
        <button type="submit" className="btn btn-primary w-100 ">
          ENTRAR
        </button>
      </div>
      <div className="p-2 mt-2 text-center">
        <span>¿No tienes cuenta aun? </span>
        <a onClick={changeForm} href="#" className="">
          Crear una cuenta
        </a>
      </div>
    </form>
  );
}
