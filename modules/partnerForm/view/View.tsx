import InputField from "@/components/form/InputField"
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import React from "react"
import { useForm } from "react-hook-form"
import submit from "../logic/submit"
import PartnersSchema, { PartnerFormData } from "../schema"

const PartnersFormView = ({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
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
  })

  const onSubmit = async (data: PartnerFormData) => {
    try {
      const response = await submit({ data })
      if (response.code === 201) {
        reset()
        setIsOpen(false)
      }
    } catch {
      throw new Error("Failed to submit partner form")
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="
        w-full
        grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6
        text-left
      "
    >
      <InputField
        type="text"
        id="Name"
        label="Name"
        register={register}
        error={errors.Name}
        autoComplete="name"
        wrapperClassName=""
      />
      <InputField
        type="email"
        id="Email"
        label="Email"
        register={register}
        error={errors.Email}
        autoComplete="email"
        wrapperClassName=""
      />
      <InputField
        type="tel"
        id="Phone"
        label="Phone"
        register={register}
        error={errors.Phone}
        inputMode="tel"
        autoComplete="tel"
        wrapperClassName=""
      />

      <InputField
        type="text"
        id="CompanyName"
        label="Company Name"
        register={register}
        error={errors.CompanyName}
        autoComplete="organization"
        wrapperClassName=""
      />

      <InputField
        type="text"
        id="Positions"
        label="Job Title"
        register={register}
        error={errors.Positions}
        autoComplete="organization-title"
        wrapperClassName=""
      />

      <InputField
        type="text"
        id="About"
        label="About"
        register={register}
        error={errors.About}
        placeholder="Tell us a bit about you"
        wrapperClassName="sm:col-span-2"
      />

      <InputField
        type="text"
        id="SocialLink1"
        label="Social Links"
        register={register}
        error={errors?.SocialLink1}
        placeholder="https://…"
        wrapperClassName=""
      />
      <InputField
        type="text"
        id="SocialLink2"
        label="Social Links"
        register={register}
        error={errors?.SocialLink2}
        placeholder="https://…"
        wrapperClassName=""
      />

      <InputField
        type="text"
        id="CompanySpecialization"
        label="Company Specialization"
        register={register}
        error={errors.CompanySpecialization}
        wrapperClassName="sm:col-span-2"
      />

      <InputField
        type="text"
        id="Notes"
        label="Notes"
        register={register}
        error={errors.Notes}
        placeholder="Anything else?"
        wrapperClassName="sm:col-span-2"
      />

      <div className="sm:col-span-2 flex">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="
            bg-yellow-400 hover:bg-yellow-500 text-black font-semibold
            px-6 py-3 rounded-full w-full sm:w-auto
          "
        >
          {isSubmitting ? "Submitting…" : "Submit"}
        </Button>
      </div>
    </form>
  )
}

export default PartnersFormView
