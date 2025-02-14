import { z } from "zod";

const prototypingSchema = z.object({
    isScaled: z.string({ message: "Required" }),
    fromRatio: z.number().optional(),
    toRatio: z.number().optional(),
    filamentColors: z.array(z.string()),
    projectDescribtion: z.string().optional(),
    moreDetails: z.string().optional(),
    instructions: z.string().optional(),
    measurementsDescreption: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.isScaled) {
        return data.fromRatio !== undefined && data.toRatio !== undefined;
      }
      return true;
    },
    {
      message: "fromRatio and toRatio are required when isScaled is true",
      path: ["fromRatio", "toRatio"],
    }
  );

export default prototypingSchema