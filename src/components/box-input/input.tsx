
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
}



export default function InputBox(props:Props) {
  return (
    <>
      <input
        type={props.type || "text"}
        className="form-control"
        id={`floating${props.type}}`}
        placeholder={props.placeholder || "ingrese el texto"}
      />
      <label htmlFor={`floating${props.type}`}>{props.value}</label>
    </>
  );
}
