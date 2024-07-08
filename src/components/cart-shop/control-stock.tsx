interface Props {
  handleCouterIncre: () => void
  handleCouterDecre: () => void
  handleBlur: () => void
  handleOnChange: (e:React.ChangeEvent<HTMLInputElement>) => void
  count: number
}

export default function ControlStock({handleCouterIncre,handleCouterDecre,handleBlur,handleOnChange,count=1}: Props) {
  return (
    <>
      <div className="input-group rounded control-stock border border-black">
        <span className="cp " onClick={handleCouterDecre}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-dash h-100"
            viewBox="0 0 16 16"
          >
            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
          </svg>
        </span>
        <input
          type="number"
          className="form-control text-center px-1 border-0 "
          aria-label="Text input with 2 dropdown buttons"
          min={1}
          onChange={(e)=>handleOnChange(e)}
          onBlur={handleBlur}
          value={count}
        />
        <span className="cp" onClick={handleCouterIncre}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-plus h-100"
            viewBox="0 0 16 16"
          >
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
          </svg>
        </span>
      </div>
    </>
  );
}
