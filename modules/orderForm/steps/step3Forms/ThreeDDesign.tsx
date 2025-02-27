import React from "react";
import { TStep3Props } from "../Step3";
import Selectmenu from "@/components/form/Selectmenu";
import TextArea from "@/components/form/TextArea";
import InputField from "@/components/form/InputField";
import FileUpload from "@/components/form/FileUpload";
interface ThreeDDesignPropType extends TStep3Props {}
const ThreeDDesign = ({ errors, register, setValue }: ThreeDDesignPropType) => {
  const categoriesOptions = [
    { id: "Furniture", name: "Furniture" },
    {
      id: " Product and Industrial Design",
      name: " Product and Industrial Design",
    },
    { id: "Architecture", name: "Architecture" },
    { id: "Interior Design", name: "Interior Design" },
  ];

  const programs = [
    { id: "3ds Max", name: "3ds Max" },
    {
      id: "SolidWorks",
      name: "SolidWorks",
    },
    { id: "Revit", name: "Revit" },
    { id: "Other", name: "Other" },
  ];
  const AdditionalServices = [
    { id: "Catalog", name: "Catalog" },
    {
      id: "Brochure",
      name: "Brochure",
    },
    { id: "Banner", name: "Banner" },
    { id: "Presentation", name: "Presentation" },
    { id: "Other", name: "Other" },
  ];

  return (
    <div className="flex flex-col gap-[20px] mb-2">
      <Selectmenu
        id="category"
        options={categoriesOptions}
        register={register}
        label="Select Category"
        name="category"
        error={errors?.category?.message}
      />
      
      <TextArea
        label="Project Description"
        placeholder="Provide a brief overview of the prototype and its purpose."
        required
        register={register}
        id="projectDescription"
      />
      <Selectmenu
        id="program"
        options={programs}
        register={register}
        label="Select program"
        name="program"
        error={errors?.program?.message}
      />
      <InputField
        label="Project Deadline"
        register={register}
        error={errors}
        id="deadline"
        type="date"
      />
      <FileUpload
        label="Upload any images, sketches, or videos related to your project."
        // register={register}
        // id='threeDFile'
        multiple={false}
        onChange={(e) => console.log(e)}
      />
      <Selectmenu
        id="program"
        options={AdditionalServices}
        register={register}
        label="Select Additional Services"
        name="additionalService"
        error={errors?.additionalService?.message}
      />
    </div>
  );
};

export default ThreeDDesign;
