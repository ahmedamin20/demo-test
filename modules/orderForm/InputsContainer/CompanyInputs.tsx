import InputField from "@/components/form/InputField";
import Selectmenu from "@/components/form/Selectmenu";
import { industryArray } from "@/constants/industryArray";
import React from "react";

const CompanyInputs = ({
  register,
  errors,
}: {
  register: any;
  errors: any;
}) => {
  return (
    <>
      <InputField
        label="Company Name"
        id="name"
        type="text"
        register={register}
        error={errors.name?.message}
        placeholder="Enter your name"
      />
      <Selectmenu
      options={industryArray}
        label="Industry"
        id="industry"
        type="text"
        register={register}
        error={errors.industry?.message}
        placeholder="Enter Company Industry"
      />

      <InputField
        label="Reprasintave Phone"
        id="phone"
        type="tel"
        register={register}
        error={errors.phone?.message}
        placeholder="Enter your phone number"
      />
      <InputField
        label="Reprasintave Postion"
        id="reprasintavePostion"
        type="text"
        register={register}
        error={errors.reprasintavePostion?.message}
        placeholder="Enter Reprasintave Postion"
      />
    </>
  );
};

export default CompanyInputs;
