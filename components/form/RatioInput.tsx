import type React from "react";
import type {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";

interface FormData {
  fromRatio: number;
  toRatio: number;
}

interface RatioInputProps {
  register: UseFormRegister<FormData>;
  setValue: UseFormSetValue<FormData>;
  watch: UseFormWatch<FormData>;
  errors: FieldErrors<any>;
}

const RatioInput: React.FC<RatioInputProps> = ({
  register,
  setValue,
  watch,
  errors,
}) => {
//   const fromRatio = watch("fromRatio", 1);
//   const toRatio = watch("toRatio", 1);

  const handleIncrement = (name: keyof FormData) => {
    setValue(name, Math.max(1, (watch(name) || 1) + 1));
  };

  const handleDecrement = (name: keyof FormData) => {
    setValue(name, Math.max(1, (watch(name) || 1) - 1));
  };

  return (
    <div className="flex justify-between items-center">
      <div>
        <label htmlFor="fromRatio" className="block text-demo-yellow mb-2">
          From
        </label>

        <div className="flex items-center rounded-md bg-demo-dark-blue border border-[#376683]">
          <button
            type="button"
            className="w-10 h-10 flex items-center justify-center text-demo-yellow transition hover:bg-[#03284C]"
            onClick={() => handleDecrement("fromRatio")}
          >
            &minus;
          </button>

          <input
            type="number"
            id="fromRatio"
            {...register("fromRatio", {
              required: true,
              min: 1,
              valueAsNumber: true,
            })}
            className="h-10 w-16 bg-demo-dark-blue text-demo-yellow text-center focus:outline-none focus:ring-2 focus:ring-demo-yellow"
          />

          <button
            type="button"
            className="w-10 h-10 flex items-center justify-center text-demo-yellow transition hover:bg-[#03284C]"
            onClick={() => handleIncrement("fromRatio")}
          >
            {"+"}
          </button>
        </div>
      </div>

      <span className="text-demo-yellow h-full flex justify-center items-center font-extrabold">{""}</span>

      <div>
        <label htmlFor="toRatio" className="block text-demo-yellow mb-2">
          To
        </label>

        <div className="flex items-center rounded-md bg-demo-dark-blue border border-[#376683]">
          <button
            type="button"
            className="w-10 h-10 flex items-center justify-center text-demo-yellow transition hover:bg-[#03284C]"
            onClick={() => handleDecrement("toRatio")}
          >
            &minus;
          </button>

          <input
            type="number"
            id="toRatio"
            {...register("toRatio", {
              required: true,
              min: 1,
              valueAsNumber: true,
            })}
            className="h-10 w-16 bg-demo-dark-blue text-[#FFE90B] text-center focus:outline-none focus:ring-2 focus:ring-[#FFE90B]"
          />

          <button
            type="button"
            className="w-10 h-10 flex items-center justify-center text-[#FFE90B] transition hover:bg-[#03284C]"
            onClick={() => handleIncrement("toRatio")}
          >
            {"+"}
          </button>
        </div>
      </div>
      {(errors["toRatio"] || errors["fromRatio"]) && (
        <p className="text-red-500 text-sm">
          {(errors["fromRatio"]?.message || errors["toRatio"]?.message)?.toString()}
        </p>
      )}

    </div>
  );
};

export default RatioInput;
