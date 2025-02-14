import { TProjectType } from "@/modules/constants/FormSeleteMenuData";
import { useSearchParams } from "next/navigation";
import { z } from "zod";
import threeDPrintingSchema from "./3dPrintingSchema";
import prototypingSchema from "./prototypingSchema";

export const step3Schema = () => {
  const searchParams = useSearchParams();
  const serviceType = searchParams.get("serviceType");

  // Make sure threeDPrintingSchema and prototypingSchema are plain Zod schemas
  const schema = (() => {
    switch (Number(serviceType)) {
      case TProjectType["3D-Printing"]:
        return threeDPrintingSchema;
      case TProjectType["prototyping"]:
        return prototypingSchema;
      default:
        return threeDPrintingSchema;
    }
  })();

  return schema;
};
