"use client";

import { useState } from "react";
import Image from "next/image";
import { TProjectType } from "@/modules/constants/FormSeleteMenuData";
import { ProjectResponse } from "@/types/projects";


const ProjectCard = ({ project }: { project: ProjectResponse }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const nextImage = () =>
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % project.images.length
    );
  const prevImage = () =>
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + project.images.length) % project.images.length
    );

  return (
    <>
      <div
        className="bg-[#02112A] rounded-lg shadow-xl overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
        onClick={openPopup}
      >
        <div className="relative h-64">
          <Image
            src={project.images[0]}
            alt={project.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-demo-yellow mb-2">
            {project.title}
          </h3>
          <p className="text-white mb-4 line-clamp-2">{project.description}</p>
          <span className="inline-block bg-[#376683] text-white text-sm px-3 py-1 rounded-full">
            {Object.keys(TProjectType).find(
              (key: string) =>
                TProjectType[key as keyof typeof TProjectType] === project.category
            )}
          </span>
        </div>
      </div>

      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-[#02112A] rounded-lg p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-demo-yellow mb-4">
                {project.title}
              </h2>
              <span
                onClick={closePopup}
                className="bg-demo-yellow cursor-pointer text-red-500 font-bold border px-2 hover:bg-transparent border-demo-yellow transition-all duration-[0.5s] rounded-md"
              >
                X
              </span>
            </div>
            <div className="relative h-96 mb-4">
              <Image
                src={project.images[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <button
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-demotext-demo-yellow text-[#010A18] px-3 py-1 rounded-full"
                onClick={prevImage}
              >
                &#8592;
              </button>
              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-demotext-demo-yellow text-[#010A18] px-3 py-1 rounded-full"
                onClick={nextImage}
              >
                &#8594;
              </button>
            </div>
            <p className="text-white mb-4">{project.description}</p>
            <span className="inline-block bg-[#376683] text-white text-sm px-3 py-1 rounded-full mb-4">
              {Object.keys(TProjectType).find(
                (key: string) =>
                  TProjectType[key as keyof typeof TProjectType] ===
                  project.category
              )}
            </span>
            {/* <br/> */}
            {/* <button
              className="bg-demo-yellow text-[#010A18] px-4 py-2 rounded-full font-semibold hover:bg-[#376683] hover:text-white transition-colors duration-300"
              onClick={closePopup}
            >
              Close
            </button> */}
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
