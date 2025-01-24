import React from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

interface InputFieldProps {
  label: string;
  id: string;
  type: string;
  register: any;
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  placeholder?: string;
  [key: string]: any;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  type,
  register,
  error,
  placeholder,
  ...rest
}) => {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-white font-medium">
        {label}
      </label>
      <input
        type={type}
        id={id}
        {...register(id)}
        placeholder={placeholder}
        className="w-full px-3 py-2 bg-[#02112A] text-white rounded focus:outline-none focus:ring-2 focus:ring-[#FFE90B]"
        {...rest}
      />
      {error && <p className="text-red-500 text-sm">{typeof error === 'string' ? error : (error as FieldError).message}</p>}
    </div>
  );
};

export default InputField;
