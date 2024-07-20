import { UseFormRegisterReturn } from "react-hook-form";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  register:UseFormRegisterReturn
  text: string;
}

export default function InputBox({register, id, text, placeholder }: Props) {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label ">
        {text}
      </label>
      <input
        type="text"
        className="form-control py-2 border-2"
        id={id}
        placeholder={placeholder}
        autoComplete="off"
        {...register}
      />
    </div>
  );
}
