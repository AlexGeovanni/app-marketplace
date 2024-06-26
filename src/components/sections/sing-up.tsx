import { PropsAut } from "../../Types";
import CustomCheck from "../../hooks/custom-check";
import CheckForm from "../auth/check-form";
import FormSingupBusiness from "../auth/form-singup-business";
import FormSingupUser from "../auth/form-singup-user";

export default function SingUp({ changeForm }: PropsAut) {
  
  const {check,ChangeCheck} =CustomCheck();

  return (
    <section className="sec ">
      <div className="auth-account d-flex align-items-center justify-content-center ">
        <div className=" p-2 py-4 ">
          <div className=" mb-2 mb-lg-3 border-bottom border-2 pb-2">
            <h2 className="fw-bold text-center">Registrate</h2>
          </div>
          <CheckForm check={check} ChangeCheck={ChangeCheck} />
          {
            check? (
              <FormSingupUser changeForm={changeForm} />
            ) : (
              <FormSingupBusiness changeForm={changeForm} />
            )
          }
        </div>
      </div>
    </section>
  );
}
