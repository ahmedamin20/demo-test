// components/partners/PartnersFormView.tsx
import InputField from "@/components/form/InputField";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import submit from "../logic/submit";
import PartnersSchema, { PartnerFormData } from "../schema";

const PartnersFormView = ({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<PartnerFormData>({
    defaultValues: {
      SocialLink1: "",
      SocialLink2: "",
      Name: "",
      Email: "",
      Phone: "",
      CompanyName: "",
      Positions: "",
      About: "",
      Notes: "",
      CompanySpecialization: "",
    },
    resolver: zodResolver(PartnersSchema()),
    mode: "onChange",
  });

  const onSubmit = async (data: PartnerFormData) => {
    // handle your submit here
    try {
      const response = await submit({ data });
      if (response.code == 201) {
        reset();
        setIsOpen(false);
      }
    } catch (err) {
      throw new Error("Failed to submit partner form");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex justify-center items-center w-full gap-6 flex-wrap"
    >
      <InputField
        type="text"
        id="Name"
        label="Name"
        register={register}
        error={errors.Name}
      />
      <InputField
        type="email"
        id="Email"
        label="Email"
        register={register}
        error={errors.Email}
      />
      <InputField
        type="tel"
        id="Phone"
        label="Phone"
        register={register}
        error={errors.Phone}
      />

      <InputField
        type="text"
        id="CompanyName"
        label="Company Name"
        register={register}
        error={errors.CompanyName}
      />

      <InputField
        type="text"
        id="Positions"
        label="Job Title"
        register={register}
        error={errors.Positions}
      />

      <InputField
        type="text"
        id="About"
        label="About"
        register={register}
        error={errors.About}
      />

      <InputField
        type="text"
        id={`SocialLink1`}
        label={`Social Links`}
        register={register}
        error={errors?.SocialLink1}
      />
      <InputField
        type="text"
        id={`SocialLink2`}
        label={`Social Links`}
        register={register}
        error={errors?.SocialLink2}
      />
      <InputField
        type="text"
        id="CompanySpecialization"
        label="Company Specialization"
        register={register}
        error={errors.CompanySpecialization}
      />
      <InputField
        type="text"
        id="Notes"
        label="Notes"
        register={register}
        error={errors.Notes}
      />
      <Button
        type="submit"
        disabled={isSubmitting}
        className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full"
      >
        submit
      </Button>
    </form>
  );
};

export default PartnersFormView;
