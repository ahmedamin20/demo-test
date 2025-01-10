'use client'

import { useEffect, useRef } from 'react';

const VisionMission = () => {
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
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-[#02112A] to-[#0C222F]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-[#FFE90B] mb-4">Our Vision</h2>
            <p className="text-white">
              To revolutionize product development through cutting-edge prototyping and 3D printing technologies, empowering innovators to bring their ideas to life faster and more efficiently than ever before.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-3xl font-bold text-[#FFE90B] mb-4">Our Mission</h2>
            <p className="text-white">
              We are committed to providing top-quality prototyping and 3D printing services, fostering innovation, and supporting our clients throughout their product development journey. Our goal is to accelerate the path from concept to reality, helping businesses and individuals turn their visions into tangible success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;

