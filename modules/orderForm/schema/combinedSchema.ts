import { z } from "zod";
import { step1Schema } from "./Step1Schema";
import { step2Schema } from "./step2Schema";

const flattenedStep2Schema = step2Schema._def.schema as z.ZodObject<any>;

export const combinedSchema = step1Schema.merge(flattenedStep2Schema);

export type OrderFormData = z.infer<typeof combinedSchema>;
