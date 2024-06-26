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
      <div className="p-2 mb-2">
        <a onClick={changeForm} href="#" className="">
          Crear una cuenta
        </a>
      </div>
      <div className=" px-2 form__btn">
        <button type="submit" className="btn btn-primary w-100 ">
          Entrar
        </button>
      </div>
    </form>
  );
}
