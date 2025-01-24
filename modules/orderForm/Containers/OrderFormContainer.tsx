"use client";
import Layout from "@/app/components/Layout";
import InputField from "@/components/form/InputField";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { handleSelectMenuChange } from "../helpers/handleSelectMenuChange";
import FormLayout from "../layouts/FormLayout";
import Step1 from "../steps/Step1";
import Step2 from "../steps/Step2";
import showToast from "@/modules/toast/constainer/ToastContainer";
import { step2Schema } from "../schema/step2Schema";
import { step1Schema } from "../schema/Step1Schema";
import { OrderFormData } from "../schema/combinedSchema";
import Step3 from "../steps/Step3";

const OrderFormContainer = () => {
  const [step, setStep] = useState(1);
  const [type, setType] = useState<string | null>(null);
  const [userType, setUserType] = useState<string | number | null>(null);
  const schemas = [step1Schema, step2Schema];
  const currentSchema = schemas[step - 1]; // Select schema based on current step

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<OrderFormData>({
    resolver: zodResolver(currentSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<OrderFormData> = (data) => {
    console.log(data);
    alert("Order submitted successfully!");
  };

  const nextStep = async () => {
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
              stepsCount={3}
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
                  <Step3/>
                )}
              </form>
            </FormLayout>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderFormContainer;
