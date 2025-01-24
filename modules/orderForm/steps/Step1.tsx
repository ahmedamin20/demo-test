"use client";

import InputField from "@/components/form/InputField";
import SelectProductType from "@/components/form/SelectProductType";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import { TFormDefaulProps } from "../types/formStepProps";
import useSetQueryParams from "@/lib/useQueryParams";

interface Step1Props extends TFormDefaulProps {
  setType: Dispatch<SetStateAction<string | null>>;
  type: string | null;
  inputName: string;
  setValue: any;
}

const Step1 = ({
  setType,
  type,
  register,
  errors,
  inputName,
  setValue,
}: Step1Props) => {

    const setQueryParams = useSetQueryParams();

    
  useEffect(() => {
    const handleQueryParams = () => {
      setQueryParams({ serviceType: type });
    };
    setValue(inputName, type);
    handleQueryParams();
  }, [type]);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-demo-yellow mb-4">
        Step 1: Service Type
      </h2>
      <SelectProductType setType={setType} type={type} />
      {errors && typeof errors.serviceType?.message === "string" && (
        <p className="text-red-500">{errors.serviceType.message}</p>
      )}
      <InputField
        type="email"
        name={"email"}
        id="email"
        register={register}
        label="Email"
        error={errors.email?.message}
      />
    </div>
  );
};

export default Step1;
