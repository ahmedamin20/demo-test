import React, { useState } from "react";
import { TStep3Props } from "../Step3";
import InputField from "@/components/form/InputField";
import MultiSelect from "@/components/form/MutliSelectMenu";
import { materialOptions } from "@/constants/prototypingMaterialOptions";
import Selectmenu from "@/components/form/Selectmenu";
import projectsField from "@/constants/projectFields";
import TextArea from "@/components/form/TextArea";
import RadioGroup from "@/components/form/RadioGroup";
import FileUpload from "@/components/form/FileUpload";
import { FieldError } from "react-hook-form";
import YesNoRadio from "@/app/components/YesNoRadioButton";

interface TprotoTypingFormProps extends TStep3Props {}

const ProtoTypingForm = ({
  errors,
  register,
  setValue,
}: TprotoTypingFormProps) => {
  const [hasThreeDDesign, setHasThreeDDesign] = useState<boolean>(false);

  const serviceOptions = [
    { value: "3d_printing", label: "3D Printing" },
    { value: "prototyping", label: "Prototyping" },
    { value: "modeling", label: "3D Modeling" },
    { value: "consultation", label: "Consultation" },
  ];

  return (
    <div className="text-white flex flex-col gap-[20px]">
      {/* Deadline */}
      <InputField
        label="Project Deadline"
        register={register}
        error={errors}
        id="deadline"
        type="date"
      />

      {/* Material Options */}
      <MultiSelect
        options={materialOptions}
        id="materialOptions"
        label="Select Material Options"
        onChange={(values) => setValue("materials", values)}
      />

      {/* Project Field */}
      <Selectmenu
        id="projectField"
        label="Select Project Field"
        options={projectsField}
        register={register}
        error={errors}
      />

      {/* Project Description */}
      <TextArea
        label="Project Description"
        placeholder="Provide a brief overview of the prototype and its purpose."
        required
        register={register}
        id="projectDescription"
      />

      <div className="grid grid-cols-3 gap-4">
        <InputField
          label="Length"
          register={register}
          error={errors}
          id="length"
          type="number"
        />
        <InputField
          label="Width"
          register={register}
          error={errors}
          id="width"
          type="number"
        />
        <InputField
          label="Height"
          register={register}
          error={errors}
          id="height"
          type="number"
        />
      </div>

      <RadioGroup
        id="serviceType"
        label="Select Service Type"
        options={serviceOptions}
        register={register}
        error={errors["serviceType"] as unknown as FieldError}
      />
      
      <YesNoRadio
      onChange={(e: any) =>e.target.value == "Yes" ? setHasThreeDDesign(true) : setHasThreeDDesign(false)}
        id="hasThreeDDesign"
        register={register}
        label="Has 3D Design?"
        error={errors["hasThreeDDesign"] as unknown as FieldError}
      />

      {hasThreeDDesign && (
        <>
          <FileUpload
            label="Upload 3D File"
            // register={register}
            // id='threeDFile'
            onChange={(e) => console.log(e)}
          />

          
          <div className="w-full flex justify-between gap-2 items-center">
          <InputField
          label="Scale From"
          register={register}
          error={errors}
          id="scaleFrom"
          type="number"
        />
        <InputField
          label="Scale To"
          register={register}
          error={errors}
          id="scaleTo"
          type="number"
        />
          </div>
        </>
      )}
    </div>
  );
};

export default ProtoTypingForm;
