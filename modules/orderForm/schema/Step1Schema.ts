import { z } from "zod";

export const step1Schema = z.object({
  serviceType: z.union([
    z.string({message: "Service type is required."}),
    z.number({message: "Service type is required."}),
  ]).refine(value => value !== "", { message: "Service type is required." }),
  email: z.string({message: "Service type is required."}).email("Invalid email address."),
});
