
type Props={
    check:boolean
    ChangeCheck:()=>void
}

export default function CheckForm({check,ChangeCheck}:Props){
    return(
        <div className="d-flex justify-content-center pb-3 gap-1">
            <input
              type="radio"
              className="btn-check"
              name="options-base"
              id="0"
              autoComplete="off"
              readOnly
              checked={check}
              onClick={ChangeCheck}
            />
            <label
              className="btn btn-outline-secondary rounded-pill "
              htmlFor="0"
            >
              Personal
            </label>

            <input
              type="radio"
              className="btn-check"
              name="options-base"
              id="1"
              autoComplete="off"
             readOnly
             checked={!check}
             onClick={ChangeCheck}
            />
            <label
              className="btn btn-outline-secondary rounded-pill "
              htmlFor="1"
            >
              Negocio
            </label>
          </div>
    )
}