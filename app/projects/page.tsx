import HttpClient from "@/lib/fetch";
import { ProjectResponse } from "@/types/projects";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const ProjectsPage = dynamic(() => import("@/components/ProjectsPage"), {
  ssr: false,
});

export default async function Page() {
  const http = new HttpClient();
  const projectsData = await http.get<ProjectResponse[]>("/api/Projects");
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ProjectsPage data={projectsData.data} />
    </Suspense>
  );
}
