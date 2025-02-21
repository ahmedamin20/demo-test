import dynamic from "next/dynamic";
import { Suspense } from "react";

const ProjectsPage = dynamic(() => import("@/components/ProjectsPage"), {
  ssr: false,
});

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ProjectsPage />
    </Suspense>
  );
}
