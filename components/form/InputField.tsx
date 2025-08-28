import React from "react"
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form"

interface InputFieldProps {
  label: string
  id: string
  type: string
  register: any
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
  placeholder?: string
  wrapperClassName?: string // NEW: control layout from parent grid
  [key: string]: any
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  type,
  register,
  error,
  placeholder,
  wrapperClassName,
  ...rest
}) => {
  return (
    <div className={`space-y-2 min-w-0 ${wrapperClassName ?? ""}`}>
      <label htmlFor={id} className="block text-white/90 text-sm font-medium">
        {label}
      </label>
      <input
        type={type}
        id={id}
        {...register(id)}
        placeholder={placeholder}
        aria-invalid={!!error}
        className="w-full px-3 py-2.5 bg-[#02112A] text-white rounded-lg
                   placeholder:text-white/50
                   focus:outline-none focus:ring-2 focus:ring-[#FFE90B]
                   text-sm sm:text-base"
        {...rest}
      />
      {error && (
        <p className="text-red-500 text-xs sm:text-sm">
          {typeof error === "string" ? error : (error as FieldError).message}
        </p>
      )}
    </div>
  )
}

export default InputField
