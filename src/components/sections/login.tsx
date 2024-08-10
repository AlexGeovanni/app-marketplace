import { Toaster } from "sonner";
import { PropsAut } from "../../Types";
import FormLogin from "../auth/form-login";


export default function Login({changeForm}:PropsAut) {
  return (
    <>
    <section className="container-w p-3 px-lg-4">
      <div className="auth-account d-flex align-items-center justify-content-center ">
        <div className=" p-2 ">
            <div className="title__auth-account mb-2 mb-lg-3 border-bottom border-2 pb-2">
                <h1 className="text-center" >Iniciar sesión</h1>
            </div>
            <FormLogin changeForm={changeForm} />
        </div>
      </div>
    </section>
    <Toaster 
    visibleToasts={1} duration={2000} richColors
    position="top-center"
    />
    </>
  );
}
