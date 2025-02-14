import type React from "react"
import type { FieldErrors, UseFormRegister } from "react-hook-form"

interface TextAreaProps {
  id: string
  label: string
  register: UseFormRegister<any>
  required?: boolean
  errors?: FieldErrors
  placeholder?: string
  rows?: number
}

const TextArea: React.FC<TextAreaProps> = ({
  id,
  label,
  register,
  required = false,
  errors,
  placeholder = "",
  rows = 4,
}) => {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-[#FFE90B] font-medium">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <textarea
        id={id}
        // name={id}
        {...register(id, { required: required ? `${label} is required` : false })}
        placeholder={placeholder}
        rows={rows}
        className="w-full px-3 py-2 bg-[#02112A] text-white border border-[#376683] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFE90B] focus:border-transparent transition duration-200 ease-in-out"
      />
      {errors?.[id] && <p className="text-red-500 text-sm mt-1">{errors?.[id]?.message?.toString()}</p>}
    </div>
  )
}

export default TextArea

