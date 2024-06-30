import { PropsAut } from "../../Types";
import InputBox from "../box-input/input";

export default function FormSingupUser({changeForm}:PropsAut) {
  return (
    <form >
        <div className="form-floating mb-3">
        <InputBox
          type="text"
          placeholder="nameSingupUser"
          value="Nombre completo"
        />
      </div>
      <div className="form-floating mb-3">
        <InputBox
          type="email"
          placeholder="EmailSingupUser"
          value="Correo electronico"
        />
      </div>
      <div className="form-floating">
        <div className="form-floating mb-3">
          <InputBox
            type="password"
            placeholder="PasswordSingupUser"
            value="Contraseña"
          />
        </div>
      </div>
      <div className=" px-2 form__btn">
        <button type="submit" className="btn btn-primary w-100 ">
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
