import { TProjectType } from "@/modules/constants/FormSeleteMenuData";

export interface ProjectResponse {
  id: number;
  guid: string;
  title: string;
  description: string;
  images: string[]
  category: TProjectType;        
  firstImageUrl: string;
  createdAtUtc: string;
  updatedAtUtc: string;
}
