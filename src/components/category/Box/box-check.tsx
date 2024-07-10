
interface Props extends React.HTMLAttributes<HTMLInputElement> {
  text: string;
  name: string;
  selectedCheckbox: boolean 
  handleOnchange:(text:string)=>void
}

export default function BoxCheck({
  selectedCheckbox,
  id,
  name,
  text,
  handleOnchange
}: Props) {


  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        name={name}
        value=""
        id={id}
        checked={selectedCheckbox}
        onChange={() =>handleOnchange(text)}
      />
      <label className="form-check-label" htmlFor={id}>
        {text}
      </label>
    </div>
  );
}
