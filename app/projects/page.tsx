'use client'

import { useState } from 'react';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';

interface Project {
  id: number;
  title: string;
  description: string;
  type: '3D Printing' | 'Prototyping';
  images: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: '3D Printed Architectural Model',
    description: 'A detailed 3D printed model of a modern skyscraper, showcasing intricate design elements.',
    type: '3D Printing',
    images: ['/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400'],
  },
  {
    id: 2,
    title: 'Rapid Prototyping for Consumer Electronics',
    description: 'A series of prototypes for a new smartphone design, demonstrating iterative improvements.',
    type: 'Prototyping',
    images: ['/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400'],
  },
  // Add more projects here
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState<'All' | '3D Printing' | 'Prototyping'>('All');

  const filteredProjects = filter === 'All' ? projects : projects.filter(project => project.type === filter);

  return (
    <Layout>
      <div className="py-20 bg-gradient-to-b from-[#02112A] to-[#0C222F]">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#FFE90B] mb-8 text-center">Our Projects</h1>
          <div className="flex justify-center mb-8">
            <button
              onClick={() => setFilter('All')}
              className={`px-4 py-2 rounded-l-full ${filter === 'All' ? 'bg-[#FFE90B] text-[#010A18]' : 'bg-[#376683] text-white'}`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('3D Printing')}
              className={`px-4 py-2 ${filter === '3D Printing' ? 'bg-[#FFE90B] text-[#010A18]' : 'bg-[#376683] text-white'}`}
            >
              3D Printing
            </button>
            <button
              onClick={() => setFilter('Prototyping')}
              className={`px-4 py-2 rounded-r-full ${filter === 'Prototyping' ? 'bg-[#FFE90B] text-[#010A18]' : 'bg-[#376683] text-white'}`}
            >
              Prototyping
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
  );
}

