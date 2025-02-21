"use client";

import type React from "react";
import type { UseFormRegister, FieldError } from "react-hook-form";

interface YesNoRadioProps {
  id: string;
  label: string;
  register: UseFormRegister<any>;
  error?: FieldError;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const YesNoRadio: React.FC<YesNoRadioProps> = ({
  id,
  label,
  register,
  error,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    register(id).onChange(e); // Call the register's onChange
    if (onChange) {
      onChange(e); // Call the custom onChange if provided
    }
  };

  return (
    <div className="space-y-2">
      <label className="block text-demo-yellow font-medium mb-2">{label}</label>
      <div className="flex space-x-4">
        {["Yes", "No"].map((option) => (
          <label key={option} className="relative flex items-center">
            <input
              type="radio"
              value={option}
              {...register(id)} // Register the input
              onChange={handleChange} // Use the combined onChange handler
              className="sr-only peer"
            />
            <div
              className="w-16 h-10 flex items-center justify-center bg-demo-blue border-2 border-demo-sky-blue rounded-md cursor-pointer transition-all duration-300 ease-in-out
                            peer-checked:bg-demo-sky-blue peer-checked:border-demo-yellow
                            hover:bg-demo-teal hover:border-demo-yellow
                            peer-focus:ring-2 peer-focus:ring-demo-yellow peer-focus:ring-offset-2 peer-focus:ring-offset-demo-dark-blue"
            >
              <span className="text-demo-yellow font-medium">{option}</span>
            </div>
          </label>
        ))}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default YesNoRadio;