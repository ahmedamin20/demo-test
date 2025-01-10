'use client'

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

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
];

const ProjectCard = ({ project }: { project: Project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [project.images.length]);

  return (
    <div className="bg-[#02112A] rounded-lg shadow-xl overflow-hidden">
      <div className="relative h-64">
        {project.images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`${project.title} - Image ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className={`transition-opacity duration-500 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#FFE90B] mb-2">{project.title}</h3>
        <p className="text-white mb-4">{project.description}</p>
        <span className="inline-block bg-[#376683] text-white text-sm px-3 py-1 rounded-full">
          {project.type}
        </span>
      </div>
    </div>
  );
};

const RecentWork = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-[#03284C] to-[#376683]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#FFE90B] mb-8 text-center">Our Recent Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWork;

