import {  FieldError, UseFormRegisterReturn } from "react-hook-form";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
 register:UseFormRegisterReturn
 name: string
 error?: FieldError 
}



export default function InputBox({name,placeholder,value,register,error}:Props) {
  return (
    <>
      <input
        type="text"
        className={`form-control ${error? "is-invalid" : ""}`}
        id={`floating${name}`}
        placeholder={placeholder || "ingrese el texto"}
        {...register}
        autoComplete="off"
      />
      <label htmlFor={`floating${name}`}>{value}</label>
    </>
  );
}
