"use client"

import { useState } from "react"
import type { FieldErrors } from "react-hook-form"
import Select, { type StylesConfig } from "react-select"

interface Option {
  value: any
  label: string
}

interface TMultiSelectProps {
  options: Option[]
  id: string
  onChange: (values: any) => void
  label: string
  errors?: FieldErrors
}

const MultiSelect = ({ id, options, onChange, label, errors }: TMultiSelectProps) => {
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([])

  const handleChange = (values: any) => {
    setSelectedOptions(values)
    onChange(values?.map((item: any) => item.value))
  }

  const customStyles: StylesConfig<Option, true> = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "#02112A",
      borderColor: "#376683",
      "&:hover": {
        borderColor: "#FFE90B",
      },
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#03284C",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#376683" : state.isFocused ? "#0C222F" : "#03284C",
      color: "#FFE90B",
      "&:active": {
        backgroundColor: "#376683",
      },
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: "#376683",
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: "#FFE90B",
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: "#FFE90B",
      "&:hover": {
        backgroundColor: "#0C222F",
        color: "#FFE90B",
      },
    }),
    input: (provided) => ({
      ...provided,
      color: "#FFE90B",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#FFE90B",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#FFE90B",
    }),
  }

  return (
    <div className="w-full">
      <label htmlFor={id} className="block text-[#FFE90B] font-medium mb-2">
        {label}
      </label>
      <Select<Option, true>
        options={options}
        id={id}
        name={id}
        isMulti
        value={selectedOptions}
        onChange={handleChange}
        styles={customStyles}
        className="react-select-container"
        classNamePrefix="react-select"
      />
      {errors?.[id] && <p className="text-red-500 text-sm mt-1">{errors?.[id]?.message?.toString()}</p>}
    </div>
  )
}

export default MultiSelect

