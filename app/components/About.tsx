'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const About = () => {
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
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-[#0C222F] to-[#03284C]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="About Demo"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-3xl font-bold text-[#FFE90B] mb-4">About Demo</h2>
            <p className="text-white mb-4">
            Demo, founded in 2025, offers comprehensive prototyping services for manufacturers, entrepreneurs, and students in Egypt. We handle all stages of prototyping with diverse materials, helping turn ideas into reality.
            Beyond services, Demo builds a community for Egyptian prototypers, fostering innovation through workshops, events, and mentorship. Our mission is to redefine Egypt’s manufacturing and showcase its potential to the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

