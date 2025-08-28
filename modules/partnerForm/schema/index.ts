import { z } from 'zod'

const PartnersSchema = () => {
  return z.object({
    SocialLink2: z.string().url().optional().nullable(),
    SocialLink1: z.string().url().optional().nullable(),
    Name: z.string().min(2).max(100),
    Email: z.string().email(),
    Phone: z.string().min(10).max(15),
    CompanyName: z.string().min(2).max(100),
    Positions: z.string().min(2).max(100).optional().nullable(),
    About: z.string().min(2).max(500).optional().nullable(),
    Notes: z.string().min(2).max(500).optional().nullable(),
    CompanySpecialization: z.string().min(2).max(100).optional().nullable(),
  })
}


export default PartnersSchema


export type PartnerFormData = z.infer<ReturnType<typeof PartnersSchema>>