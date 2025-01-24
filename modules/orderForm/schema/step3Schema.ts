// import { UserTypesEnum } from "@/modules/constants/FormSeleteMenuData";
import { z } from "zod";

export const step3Schema = z
  .object({
    scale: z.string().nonempty("User type is required"),
    name: z.string().min(2, "Name must be at least 2 characters"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    universityName: z.string().optional(),
    faculty: z.string().optional(),
    profession: z.string().optional(),
    companyName: z.string().optional(),
    industry: z.string().optional(),
    representativeName: z.string().optional(),
    representativePosition: z.string().optional(),
    representativePhone: z.string().optional(),
    country: z.string().optional(),
    government: z.string().optional(),
  })
//   .superRefine((data, ctx) => {
//     if (data.userType === String(UserTypesEnum.Student)) {
//       if (!data.universityName) {
//         ctx.addIssue({
//           code: z.ZodIssueCode.custom,
//           path: ["universityName"],
//           message: "University name is required for students",
//         });
//       }
//       if (!data.faculty) {
//         ctx.addIssue({
//           code: z.ZodIssueCode.custom,
//           path: ["faculty"],
//           message: "Faculty is required for students",
//         });
//       }
//     }

//     if (data.userType === String(UserTypesEnum.Individual)) {
//       if (!data.profession) {
//         ctx.addIssue({
//           code: z.ZodIssueCode.custom,
//           path: ["profession"],
//           message: "Profession is required for individuals",
//         });
//       }
//     }

//     if (data.userType === String(UserTypesEnum.Company)) {
//       if (!data.companyName) {
//         ctx.addIssue({
//           code: z.ZodIssueCode.custom,
//           path: ["companyName"],
//           message: "Company name is required for companies",
//         });
//       }
//       if (!data.industry) {
//         ctx.addIssue({
//           code: z.ZodIssueCode.custom,
//           path: ["industry"],
//           message: "Industry is required for companies",
//         });
//       }
//       if (!data.representativeName) {
//         ctx.addIssue({
//           code: z.ZodIssueCode.custom,
//           path: ["representativeName"],
//           message: "Representative name is required for companies",
//         });
//       }
//       if (!data.representativePosition) {
//         ctx.addIssue({
//           code: z.ZodIssueCode.custom,
//           path: ["representativePosition"],
//           message: "Representative position is required for companies",
//         });
//       }
//       if (!data.representativePhone) {
//         ctx.addIssue({
//           code: z.ZodIssueCode.custom,
//           path: ["representativePhone"],
//           message: "Representative phone is required for companies",
//         });
//       }
//       if (!data.country) {
//         ctx.addIssue({
//           code: z.ZodIssueCode.custom,
//           path: ["country"],
//           message: "Country is required for companies",
//         });
//       }
//       if (data.country?.toLowerCase() === "egypt" && !data.government) {
//         ctx.addIssue({
//           code: z.ZodIssueCode.custom,
//           path: ["government"],
//           message: "Government is required for companies in Egypt",
//         });
//       }
//     }
//   });
