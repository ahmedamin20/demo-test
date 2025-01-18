import { z } from 'zod';

export const orderSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(10, 'Phone number must be at least 10 digits'),
    serviceType: z.string().nonempty('Please select a service type'),
    file: z
      .instanceof(File)
      .refine((file) => file.size <= 5000000, 'Max file size is 5MB'),
  });
  

export type OrderFormData = z.infer<typeof orderSchema>;