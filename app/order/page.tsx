'use client'

import { useState } from 'react';
import Layout from '../components/Layout';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const orderSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  serviceType: z.enum(['3D Printing', 'Prototyping']),
  file: z.instanceof(File).refine((file) => file.size <= 5000000, 'Max file size is 5MB'),
});

type OrderFormData = z.infer<typeof orderSchema>;

const OrderPage = () => {
  const [step, setStep] = useState(1);
  const { register, handleSubmit, formState: { errors } } = useForm<OrderFormData>({
    resolver: zodResolver(orderSchema),
  });

  const onSubmit: SubmitHandler<OrderFormData> = (data) => {
    console.log(data);
    // Here you would typically send the data to your server
    alert('Order submitted successfully!');
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <Layout>
      <div className="py-20 bg-gradient-to-b from-[#02112A] to-[#0C222F] min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#FFE90B] mb-8 text-center">Place Your Order</h1>
          <div className="max-w-md mx-auto bg-[#03284C] rounded-lg shadow-xl p-8">
            <form onSubmit={handleSubmit(onSubmit)}>
              {step === 1 && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-[#FFE90B] mb-4">Step 1: Service Type</h2>
                  <div className="flex space-x-4">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        value="3D Printing"
                        {...register('serviceType')}
                        className="form-radio text-[#FFE90B]"
                      />
                      <span className="text-white">3D Printing</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        value="Prototyping"
                        {...register('serviceType')}
                        className="form-radio text-[#FFE90B]"
                      />
                      <span className="text-white">Prototyping</span>
                    </label>
                  </div>
                  {errors.serviceType && <p className="text-red-500">{errors.serviceType.message}</p>}
                  <button
                    type="button"
                    onClick={nextStep}
                    className="w-full bg-[#FFE90B] text-[#010A18] px-4 py-2 rounded-full font-semibold hover:bg-[#376683] hover:text-white transition-colors duration-300"
                  >
                    Next
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-[#FFE90B] mb-4">Step 2: Contact Information</h2>
                  <div>
                    <label htmlFor="name" className="block text-white mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      {...register('name')}
                      className="w-full px-3 py-2 bg-[#02112A] text-white rounded"
                    />
                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      {...register('email')}
                      className="w-full px-3 py-2 bg-[#02112A] text-white rounded"
                    />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-white mb-1">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      {...register('phone')}
                      className="w-full px-3 py-2 bg-[#02112A] text-white rounded"
                    />
                    {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
                  </div>
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
                  <div>
                    <label htmlFor="file" className="block text-white mb-1">Upload your design file</label>
                    <input
                      type="file"
                      id="file"
                      {...register('file')}
                      className="w-full px-3 py-2 bg-[#02112A] text-white rounded"
                    />
                    {errors.file && <p className="text-red-500">{errors.file.message}</p>}
                  </div>
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

export default OrderPage;

