import { PropsAut } from "../../Types";
import FormLogin from "../auth/form-login";


export default function Login({changeForm}:PropsAut) {
  return (
    <section className="sec">
      <div className="auth-account d-flex align-items-center justify-content-center ">
        <div className=" p-2 ">
            <div className=" mb-2 mb-lg-3 border-bottom border-2 pb-2">
                <h2 className="fw-bold text-center">Iniciar sesión</h2>
            </div>
            <FormLogin changeForm={changeForm} />
        </div>
      </div>
    </section>
  );
}