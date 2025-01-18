'use client';
import Layout from '@/app/components/Layout';
import InputField from '@/components/form/InputField';
import SelectProductType from '@/components/form/SelectProductType';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { OrderFormData, orderSchema } from '../schema/OrderSchema';
// import Layout from '../../../components/Layout';


const OrderFormContainer = () => {
  const [step, setStep] = useState(1);
  const [type, setType] = useState<string | null>(null);
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<OrderFormData>({
    resolver: zodResolver(orderSchema),
  });

  const onSubmit: SubmitHandler<OrderFormData> = (data) => {
    console.log(data);
    alert('Order submitted successfully!');
  };

  const nextStep = () => {
    if (step === 1 && !type) {
      alert('Please select a service type before proceeding.');
      return;
    }
    if (step === 1 && type) {
      setValue('serviceType', type); // Set the selected service type in the form
    }
    setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  return (
    <Layout>
      <div className="py-20 bg-gradient-to-b from-[#02112A] to-[#0C222F] min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-demo-yellow mb-8 text-center">Place Your Order</h1>
          <div className="max-w-md mx-auto bg-[#03284C] rounded-lg shadow-xl p-8">
            <form onSubmit={handleSubmit(onSubmit)}>
              {step === 1 && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-demo-yellow mb-4">Step 1: Service Type</h2>
                  <SelectProductType setType={setType} type={type} />
                  {type === null && (
                    <p className="text-red-500">Please select a service type.</p>
                  )}
                  <InputField type='email' name={"email"} id='email' register={register} label='Email' error={errors.email?.message}/>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="w-full bg-demo-yellow text-[#010A18] px-4 py-2 rounded-full font-semibold hover:bg-[#376683] hover:text-white transition-colors duration-300"
                  >
                    Next
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-[#FFE90B] mb-4">Step 2: Contact Information</h2>
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
                  <div className="flex space-x-4">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="w-1/2 bg-[#376683] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#FFE90B] hover:text-[#010A18] transition-colors duration-300"
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="w-1/2 bg-[#FFE90B] text-[#010A18] px-4 py-2 rounded-full font-semibold hover:bg-[#376683] hover:text-white transition-colors duration-300"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-[#FFE90B] mb-4">Step 3: Upload Design</h2>
                  <InputField
                    label="Upload your design file"
                    id="file"
                    type="file"
                    register={register}
                    error={errors.file?.message}
                  />
                  <div className="flex space-x-4">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="w-1/2 bg-[#376683] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#FFE90B] hover:text-[#010A18] transition-colors duration-300"
                    >
                      Previous
                    </button>
                    <button
                      type="submit"
                      className="w-1/2 bg-[#FFE90B] text-[#010A18] px-4 py-2 rounded-full font-semibold hover:bg-[#376683] hover:text-white transition-colors duration-300"
                    >
                      Submit Order
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderFormContainer;
