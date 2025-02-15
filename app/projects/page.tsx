import { Suspense } from "react";

export default function ProjectsPage() {


  return (
    <Suspense fallback={<p>Loading...</p>}>
    <ProjectsPage/>
    </Suspense>
  );
}

