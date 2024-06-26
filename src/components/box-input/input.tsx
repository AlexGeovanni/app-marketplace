
type Props ={
    type: string
    placeholder: string
    value: string
}

export default function InputBox({type,placeholder,value}:Props) {
  return (
    <>
      <input
        type={type}
        className="form-control"
        id={`floating${type}`}
        placeholder={placeholder}
      />
      <label htmlFor={`floating${type}`}>{value}</label>
    </>
  );
}
