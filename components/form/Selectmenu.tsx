import React from 'react';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

interface Option {
  id: string | number;
  name: string;
}

interface SelectmenuProps {
  id: string;
  label: string;
  register: any;
  options: Option[];
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  [key: string]: any;
}

const Selectmenu: React.FC<SelectmenuProps> = ({ id, label, register, options, error, onChange, ...rest }) => {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-white font-medium">
        {label}
      </label>
      <select
        id={id}
        {...register(id)}
        onChange={onChange}
        className="w-full px-3 py-2 bg-[#02112A] text-white rounded focus:outline-none focus:ring-2 focus:ring-demo-yellow"
        {...rest}
      >
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
      {error && typeof error === 'string' && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default Selectmenu;
