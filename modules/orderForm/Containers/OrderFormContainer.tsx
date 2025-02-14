"use client";
import Layout from "@/app/components/Layout";
import showToast from "@/modules/toast/constainer/ToastContainer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { handleSelectMenuChange } from "../helpers/handleSelectMenuChange";
import FormLayout from "../layouts/FormLayout";
import { step1Schema } from "../schema/Step1Schema";
import { OrderFormData } from "../schema/combinedSchema";
import { step2Schema } from "../schema/step2Schema";
import Step1 from "../steps/Step1";
import Step2 from "../steps/Step2";
import Step3 from "../steps/Step3";
import { step3Schema } from "../schema/step3Schema";

const OrderFormContainer = () => {
  const [step, setStep] = useState(1);
  const [type, setType] = useState<string | null>(null);
  const [userType, setUserType] = useState<string | number | null>(null);
  const schemas = [step1Schema, step2Schema, step3Schema()];
  const currentSchema = schemas[step - 1]; // Select schema based on current step
  const stepsCount = 3;
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    getValues,
    watch,
    formState: { errors },
  } = useForm<OrderFormData>({
    resolver: zodResolver(currentSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<OrderFormData> = (data) => {
    console.log(data);
    console.log(getValues(), "get values");
    console.log(errors, "errors");
    alert("Order submitted successfully!");
  };

  const nextStep = async () => {
    console.log(errors, "errors");
    console.log(getValues(), "values");
    const isStepValid = await trigger();
    if (!isStepValid) {
      showToast({
        title: "Error",
        message: "Please fill all the required fields.",
        backgroundColor: "bg-red-500/25",
        titleColor: "text-red-500",
        color: "text-white",
      });

      return;
    }

    if (step === 1 && type) {
      setValue("serviceType", type);
    }
    setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  return (
    <Layout>
      <div className="py-20 bg-gradient-to-b from-[#02112A] to-[#0C222F] min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-demo-yellow mb-8 text-center">
            Place Your Order
          </h1>
          <div className="max-w-md mx-auto bg-[#03284C] rounded-lg shadow-xl p-8">
            <FormLayout
              stepsCount={stepsCount}
              nextStep={nextStep}
              prevStep={prevStep}
              currentStep={step}
            >
              <form onSubmit={handleSubmit(onSubmit)}>
                {step === 1 && (
                  <Step1
                    setValue={setValue}
                    inputName="serviceType"
                    type={type}
                    setType={setType}
                    errors={errors}
                    register={register}
                  />
                )}

                {step === 2 && (
                  <Step2
                    errors={errors}
                    handleUserTypeChange={(e) =>
                      handleSelectMenuChange({
                        e,
                        setValue,
                        setState: setUserType,
                        inputName: "userType",
                        isNumebr: true,
                      })
                    }
                    register={register}
                    seletedUserType={Number(userType)}
                  />
                )}

                {step === 3 && (
                  <Step3
                    trigger={trigger}
                    setValue={setValue}
                    errors={errors}
                    register={register}
                    watch={watch}
                  />
                )}
                <div className="flex mt-2 flex-row w-full gap-[20px] justify-between">
                  {step === stepsCount && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="w-1/2 bg-[#376683] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#FFE90B] hover:text-[#010A18] transition-colors duration-300"
                    >
                      Previous
                    </button>
                  )}
                  {step === stepsCount && (
                    <button
                      type="submit"
                      className="w-full bg-green-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors duration-300"
                    >
                      Submit
                    </button>
                  )}
                </div>
              </form>
            </FormLayout>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderFormContainer;
