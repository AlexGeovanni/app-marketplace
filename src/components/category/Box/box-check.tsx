
interface Props extends React.HTMLAttributes<HTMLInputElement>{
  text:string
  name:string
  selectedCheckbox:number
  handleCheckboxChange:(index:number)=>void;
  numberOfCheck:number
}


export default function BoxCheck({selectedCheckbox,handleCheckboxChange,numberOfCheck, id,name,text}:Props) {
  return (
    <div className="form-check"  >
      <input
        className="form-check-input"
        type="checkbox"
        name={name}
        value=""
        id={id}
        checked={selectedCheckbox === numberOfCheck}
        onChange={() => handleCheckboxChange(numberOfCheck)}
      />
      <label className="form-check-label" htmlFor={id}>
       {text}
      </label>
    </div>
  );
}
