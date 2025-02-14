"use client";
import FilamentColorSelect from "@/components/form/FilamentSelectMenu";
import RatioInput from "@/components/form/RatioInput";
import Selectmenu from "@/components/form/Selectmenu";
import { useState } from "react";
import { TStep3Props } from "../Step3";
import TextArea from "@/components/form/TextArea";
interface T3DPrintingFormProps extends TStep3Props {
  // title: string
}
const Case3DPrintingForm = ({
  errors,
  register,
  setValue,
  watch,
}: T3DPrintingFormProps) => {
  const [scaled, setScaled] = useState("");

  return (
    <div className="text-white flex flex-col gap-[20px]">
      <Selectmenu
        id="isScaled"
        name="isScaled"
        label="Is this file scaled?"
        options={[
          { id: 1, name: "yes" },
          { id: 0, name: "no" },
        ]}
        register={register}
        error={errors["isScaled"]?.message?.toString()}
        onChange={(e) => {
          const value = e?.target.value;
          setValue("isScaled", value);
          setScaled(value);
        }}
      />
      {scaled && (
        <RatioInput
          errors={errors}
          setValue={setValue}
          register={register}
          watch={watch}
        />
      )}
      <FilamentColorSelect
        setValue={setValue}
        id="filamentColors"
        error={errors["filamentColors"]?.message?.toString()}
        name="filamentColors"
        label="Filament Colors"
        register={register}
      />
      <span className="text-demo-yellow font-bold my-4">
        {"Additional questions :"}
      </span>
      <TextArea
        id="projectDescribtion"
        label="Please describe your project"
        register={register}
        errors={errors}
        placeholder="Provide a brief overview of your project and its purpose."
      />
      <TextArea
        id="measurementsDescreption"
        label="Please provide the measurements for your model"
        register={register}
        errors={errors}
        placeholder="Measurements Descreption"
      />
      <TextArea
        id="instructions"
        label="Do you have any specific notes or special instructions?"
        register={register}
        errors={errors}
        placeholder="instructions"
      />
      <TextArea
        id="moreDetails"
        label="Add any details you’d like us to consider"
        register={register}
        errors={errors}
        placeholder="Add any details you’d like us to consider"
      />
    </div>
  );
};

export default Case3DPrintingForm;
