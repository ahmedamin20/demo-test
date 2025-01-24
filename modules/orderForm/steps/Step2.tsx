"use client";
import React, { useEffect } from "react";
import CompanyInputs from "../InputsContainer/CompanyInputs";
import { handleUserType } from "@/modules/constants/FormSeleteMenuData";
import { TFormDefaulProps } from "../types/formStepProps";
import Selectmenu from "@/components/form/Selectmenu";
import userTypesArray from "@/constants/userTypesArray";
import InputField from "@/components/form/InputField";
import useSetQueryParams from "@/lib/useQueryParams";
import { industryArray } from "@/constants/industryArray";

interface TStep2Props extends TFormDefaulProps {
  seletedUserType: number | null;
  handleUserTypeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Step2 = ({
  seletedUserType,
  errors,
  register,
  handleUserTypeChange,
}: TStep2Props) => {
  const USER_TYPE_OBJECT = handleUserType(seletedUserType || 0);

  const setQueryParams = useSetQueryParams();

  // Sync selected user type to query params
  useEffect(() => {
    setQueryParams({ userType: seletedUserType });
  }, [seletedUserType]);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-[#FFE90B] mb-4">
        Step 2: Contact Information
      </h2>

      {/* User Type Selection */}
      <Selectmenu
        onChange={handleUserTypeChange}
        id="userType"
        label="Select Type"
        name="userType"
        options={userTypesArray}
        register={register}
        error={errors?.userType?.message}
      />

      {/* Individual Inputs */}
      {!USER_TYPE_OBJECT.isCompany && (
        <>
          <InputField
            label="Name"
            id="name"
            type="text"
            register={register}
            error={errors.name?.message}
            placeholder="Enter your name"
          />
          <InputField
            label="Phone"
            id="phone"
            type="tel"
            register={register}
            error={errors.phone?.message}
            placeholder="Enter your phone number"
          />
        </>
      )}

      {/* Student-Specific Inputs */}
      {USER_TYPE_OBJECT.isStudent && (
        <>
          <InputField
            label="University Name"
            id="universityName"
            type="text"
            register={register}
            error={errors.universityName?.message}
            placeholder="Enter your university name"
          />
          <InputField
            label="Faculty"
            id="faculty"
            type="text"
            register={register}
            error={errors.faculty?.message}
            placeholder="Enter your faculty"
          />
        </>
      )}

      {/* Individual-Specific Input */}
      {USER_TYPE_OBJECT.isIndividual && (
        <InputField
          label="Profession"
          id="profession"
          type="text"
          register={register}
          error={errors.profession?.message}
          placeholder="Enter your profession"
        />
      )}

      {/* Company-Specific Inputs */}
      {USER_TYPE_OBJECT.isCompany && (
        <>
          <InputField
            label="Company Name"
            id="companyName"
            type="text"
            register={register}
            error={errors.companyName?.message}
            placeholder="Enter the company name"
          />
          <Selectmenu
            id="industry"
            label="Company Industry"
            name="industry"
            options={industryArray}
            register={register}
            error={errors.industry?.message}
          />
          <InputField
            label="Representative Name"
            id="representativeName"
            type="text"
            register={register}
            error={errors.representativeName?.message}
            placeholder="Enter representative's name"
          />
          <InputField
            label="Representative Position"
            id="representativePosition"
            type="text"
            register={register}
            error={errors.representativePosition?.message}
            placeholder="Enter representative's position"
          />
          <InputField
            label="Representative Phone"
            id="representativePhone"
            type="tel"
            register={register}
            error={errors.representativePhone?.message}
            placeholder="Enter representative's phone"
          />
          <InputField
            label="Country"
            id="country"
            type="text"
            register={register}
            error={errors.country?.message}
            placeholder="Enter your country"
          />
          {/* <Selectmenu
            id="industry"
            label="Company Industry"
            name="industry"
            options={industryArray}
            register={register}
            error={errors.industry?.message}
          /> */}
          {/* {USER_TYPE_OBJECT.isInEgypt && (
            <InputField
              label="Government"
              id="government"
              type="text"
              register={register}
              error={errors.government?.message}
              placeholder="Enter the government"
            />
          )} */}
        </>
      )}
    </div>
  );
};

export default Step2;
