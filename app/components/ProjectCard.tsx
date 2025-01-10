'use client'

import { useState } from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  type: '3D Printing' | 'Prototyping';
  images: string[];
}

const ProjectCard = ({ project }: { project: Project }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const nextImage = () => setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
  const prevImage = () => setCurrentImageIndex((prevIndex) => (prevIndex - 1 + project.images.length) % project.images.length);

  return (
    <>
      <div className="bg-[#02112A] rounded-lg shadow-xl overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105" onClick={openPopup}>
        <div className="relative h-64">
          <Image
            src={project.images[0]}
            alt={project.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-[#FFE90B] mb-2">{project.title}</h3>
          <p className="text-white mb-4 line-clamp-2">{project.description}</p>
          <span className="inline-block bg-[#376683] text-white text-sm px-3 py-1 rounded-full">
            {project.type}
          </span>
        </div>
      </div>

      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-[#02112A] rounded-lg p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold text-[#FFE90B] mb-4">{project.title}</h2>
            <div className="relative h-96 mb-4">
              <Image
                src={project.images[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <button
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#FFE90B] text-[#010A18] px-3 py-1 rounded-full"
                onClick={prevImage}
              >
                &#8592;
              </button>
              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#FFE90B] text-[#010A18] px-3 py-1 rounded-full"
                onClick={nextImage}
              >
                &#8594;
              </button>
            </div>
            <p className="text-white mb-4">{project.description}</p>
            <span className="inline-block bg-[#376683] text-white text-sm px-3 py-1 rounded-full mb-4">
              {project.type}
            </span>
            <button
              className="bg-[#FFE90B] text-[#010A18] px-4 py-2 rounded-full font-semibold hover:bg-[#376683] hover:text-white transition-colors duration-300"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;

