"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import { TFormDefaulProps } from "../types/formStepProps";
import { TProjectType } from "@/modules/constants/FormSeleteMenuData";
import Case3DPrintingForm from "./step3Forms/Case3DPrintingForm";
import { UseFormWatch } from "react-hook-form";
import ProtoTypingForm from "./step3Forms/ProtoTypingForm";
import Finishing from "./step3Forms/Finishing";
import ThreeDDesign from "./step3Forms/ThreeDDesign";

export interface TStep3Props extends TFormDefaulProps {
  trigger: any;
  setValue: (name: string, value: number | string) => void;
  watch: UseFormWatch<any>;
}
const Step3 = ({ errors, register, watch, setValue, trigger }: TStep3Props) => {
  const searchParams = useSearchParams();
  const serviceType = searchParams.get("serviceType");

  switch (Number(serviceType)) {
    case TProjectType["3D-Printing"]:
      return (
        <Case3DPrintingForm
          trigger={trigger}
          setValue={setValue}
          errors={errors}
          watch={watch}
          register={register}
        />
      );

    case TProjectType["3D-Design"]:
      return <ThreeDDesign
      errors={errors}
        register={register}
        setValue={setValue}
        trigger={trigger}
        watch={watch}
      />
    case TProjectType.finishing:
      return (
        <Finishing
        errors={errors}
          register={register}
          setValue={setValue}
          trigger={trigger}
          watch={watch}
        />
      );
    case TProjectType.prototyping:
      return (
        <ProtoTypingForm
          errors={errors}
          register={register}
          setValue={setValue}
          trigger={trigger}
          watch={watch}
        />
      );
    default:
      return (
        <div>
          <h1>Invalid Service Type</h1>
        </div>
      );
  }
};

export default Step3;
