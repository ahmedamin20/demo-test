'use client'

import { Suspense, useState } from 'react';
import { TProjectType } from '@/modules/constants/FormSeleteMenuData';
import Layout from '@/app/components/Layout';
import ProjectCard from '@/app/components/ProjectCard';
import { ProjectResponse } from '@/types/projects';

// export type TProjectTypes = '3D Printing' | 'Prototyping' | '3D Design' | 'Finishing'
interface Project {
  id: number;
  title: string;
  description: string;
  type: TProjectType ;
  images: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: '3D Printed Architectural Model',
    description: 'A detailed 3D printed model of a modern skyscraper, showcasing intricate design elements.',
    type: TProjectType['3D-Printing'],
    images: ['/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400'],
  },
  {
    id: 2,
    title: 'Rapid Prototyping for Consumer Electronics',
    description: 'A series of prototypes for a new smartphone design, demonstrating iterative improvements.',
    type: TProjectType.prototyping,
    images: ['/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400'],
  },
  {
    id: 3,
    title: 'Rapid Prototyping for Consumer Electronics',
    description: 'A series of prototypes for a new smartphone design, demonstrating iterative improvements.',
    type: TProjectType.finishing,
    images: ['/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400'],
  },
  {
    id: 4,
    title: 'Rapid Prototyping for Consumer Electronics',
    description: 'A series of prototypes for a new smartphone design, demonstrating iterative improvements.',
    type: TProjectType['3D-Design'],
    images: ['/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400'],
  },
  // Add more projects here
];

export default function ProjectsPage({data}:{data: ProjectResponse[]}) {
  const [filter, setFilter] = useState<'All' | TProjectType>('All');

  const filteredProjects = filter === 'All' ? data : data.filter(project => project.category === filter);

  return (
    <Suspense fallback={<p>Loading...</p>}>
    <Layout>
      <div className="py-20 bg-gradient-to-b from-[#02112A] to-[#0C222F]">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-demo-yellow mb-8 text-center">Our Projects</h1>
          <div className="flex justify-center mb-8">
            <button
              onClick={() => setFilter('All')}
              className={`px-4 py-2 rounded-l-full ${filter === 'All' ? 'bg-demo-yellow text-[#010A18]' : 'bg-[#376683] text-white'}`}
            >
              All
            </button>
            <button
              onClick={() => setFilter(TProjectType.prototyping)}
              className={`px-4 py-2 ${filter === TProjectType.prototyping ? 'bg-demo-yellow text-[#010A18]' : 'bg-[#376683] text-white'}`}
            >
              Prototyping
            </button>
            <button
              onClick={() => setFilter(TProjectType['3D-Printing'])}
              className={`px-4 py-2 ${filter === TProjectType['3D-Printing'] ? 'bg-demo-yellow text-[#010A18]' : 'bg-[#376683] text-white'}`}
            >
              3D Printing
            </button>
            <button
              onClick={() => setFilter(TProjectType['3D-Design'])}
              className={`px-4 py-2 ${filter === TProjectType['3D-Design'] ? 'bg-demo-yellow text-[#010A18]' : 'bg-[#376683] text-white'}`}
            >
              3D Design
            </button>
            <button
              onClick={() => setFilter(TProjectType.finishing)}
              className={`px-4 py-2 rounded-r-full ${filter === TProjectType.finishing ? 'bg-demo-yellow text-[#010A18]' : 'bg-[#376683] text-white'}`}
            >
              Finishing
            </button>
            
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
    </Suspense>
  );
}

