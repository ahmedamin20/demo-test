import { z } from "zod";

const prototypingSchema = z.object({
  deadline: z.string({ message: "Required" }),
  materialOptions: z.number().optional(),
  projectField: z.number().optional(),
  projectDescription: z.array(z.string()),
  length: z.string().optional(),
  width: z.string().optional(),
  height: z.string().optional(),
  serviceType: z.string().optional(),
  hasThreeDDesign: z.boolean().optional(),
  files: z.array(z.any()).optional(),
  scaleFrom: z.string().optional(),
  scaleTo: z.string().optional(),
  })
  // .refine(
  //   (data) => {
  //     if (data.isScaled) {
  //       return data.fromRatio !== undefined && data.toRatio !== undefined;
  //     }
  //     return true;
  //   },
  //   {
  //     message: "fromRatio and toRatio are required when isScaled is true",
  //     path: ["fromRatio", "toRatio"],
  //   }
  // );

export default prototypingSchema