import { PropsAut } from "../../Types";
import InputBox from "../box-input/input";

export default function FormSingupBusiness({ changeForm }: PropsAut) {
  return (
    <form>
      <div className="form-floating mb-3">
        <InputBox
          type="text"
          placeholder="nameSingupBusiness"
          value="Nombre del negocio"
        />
      </div>

      <div className="form-floating mb-3">
        <select
          className="form-select"
          id="floatingSelect"
          aria-label="Floating label select example"
        >
          <option selected hidden>Direccion del negocio </option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <label htmlFor="floatingSelect">Seleciona la direccion</label>
      </div>

      <div className="form-floating mb-3">
        <InputBox
          type="text"
          placeholder="nameSingupBusiness"
          value="Descripcion del negocio"
        />
      </div>

      <div className="form-floating mb-3">
        <InputBox
          type="email"
          placeholder="EmailSingupBusiness"
          value="Correo electronico"
        />
      </div>
      <div className="form-floating">
        <div className="form-floating mb-3">
          <InputBox
            type="password"
            placeholder="PasswordSingupBusiness"
            value="Contraseña"
          />
        </div>
      </div>
      <div className=" px-2 form__btn">
        <button type="submit" className="btn btn-primary w-100 ">
          Crear cuenta 
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
