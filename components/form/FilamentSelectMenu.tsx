import filamentColors from "@/constants/3dPrintingColors";
import chroma from "chroma-js";
import { UseFormRegister } from "react-hook-form";
import Select, { StylesConfig } from "react-select";

export const colourStyles: StylesConfig<typeof filamentColors[number], true> = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "#02112A",
    borderColor: "#376683",
    "&:hover": {
      borderColor: "#FFE90B",
    },
  }),
  menu: (styles) => ({
    ...styles,
    backgroundColor: "#03284C",
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? "#376683"
        : isFocused
        ? color.alpha(0.1).css()
        : undefined,
      color: isDisabled
        ? "#ccc"
        : isSelected
        ? chroma.contrast(color, "white") > 2
          ? "white"
          : "black"
        : data.color,
      cursor: isDisabled ? "not-allowed" : "default",
      ":active": {
        ...styles[":active"],
        backgroundColor: !isDisabled
          ? isSelected
            ? "#376683"
            : color.alpha(0.3).css()
          : undefined,
      },
    };
  },
  multiValue: (styles, { data }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ":hover": {
      backgroundColor: data.color,
      color: "white",
    },
  }),
  input: (styles) => ({
    ...styles,
    color: "#FFE90B",
  }),
  placeholder: (styles) => ({
    ...styles,
    color: "#FFE90B",
  }),
  singleValue: (styles) => ({
    ...styles,
    color: "#FFE90B",
  }),
};

interface TFilamentColorSelectProps{
  id: string;
  label: string;
  name: string;
  register: UseFormRegister<any>;
  setValue: any;
  error: string | undefined
}
export default function FilamentColorSelect({id, label, name, register, setValue, error} : TFilamentColorSelectProps) {
  return (
    <div className="w-full flex flex-col">
      <label htmlFor={id} className="block text-white font-medium">
        {label}
      </label>
      <Select
      closeMenuOnSelect={false}
      isMulti
      name={name}
      {...register}
      onChange={e=>{
        console.log(e)
        setValue(name, e?.map(item=>item.value))
      }}
      id={id}
      options={filamentColors}
      styles={colourStyles}
      className="filament-color-select"
      classNamePrefix="filament-select"
    />
          {error && typeof error === 'string' && <p className="text-red-500 text-sm">{error}</p>}

    </div>
  );
}
