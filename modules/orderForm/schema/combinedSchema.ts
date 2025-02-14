import { z } from "zod";
import { step1Schema } from "./Step1Schema";
import { step2Schema } from "./step2Schema";
import { step3Schema } from "./step3Schema";

const flattenedStep2Schema = step2Schema._def.schema as z.ZodObject<any>;
const flattenedStep3Schema = step3Schema()._def.schema as z.ZodObject<any>;

// Merge all schemas
export const combinedSchema = step1Schema
  .merge(flattenedStep2Schema)
  .merge(flattenedStep3Schema);

export type OrderFormData = z.infer<typeof combinedSchema>;
