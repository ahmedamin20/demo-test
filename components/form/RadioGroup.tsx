"use client"

import type React from "react"
import type { UseFormRegister, FieldError } from "react-hook-form"

interface Option {
  value: string
  label: string
}

interface RadioGroupProps {
  id: string
  label: string
  options: Option[]
  register: UseFormRegister<any>
  error?: FieldError
}

const RadioGroup: React.FC<RadioGroupProps> = ({ id, label, options, register, error }) => {
  return (
    <div className="space-y-2">
      <label className="block text-[#FFE90B] font-medium mb-2">{label}</label>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <label key={option.value} className="relative">
            <input type="radio" value={option.value} {...register(id)} className="sr-only peer" />
            <div
              className="px-4 py-2 bg-[#02112A] text-[#FFE90B] border-2 border-[#376683] rounded-md cursor-pointer transition-all duration-300 ease-in-out
                            peer-checked:bg-[#376683] peer-checked:border-[#FFE90B] peer-checked:text-[#FFE90B]
                            hover:bg-[#03284C] hover:border-[#FFE90B]
                            peer-focus:ring-2 peer-focus:ring-[#FFE90B] peer-focus:ring-offset-2 peer-focus:ring-offset-[#010A18]"
            >
              {option.label}
            </div>
          </label>
        ))}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  )
}

export default RadioGroup

