"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { mission } from "@/assets";
const VisionMission = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
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
    <section ref={sectionRef} className="py-20 ">
      <section className="py-20 ">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl text-demo-yellow font-bold mb-6">
                Vision :
              </h2>
              <p className="my-5">Generation of prototypers.</p>
              <h2 className="text-3xl text-demo-yellow font-bold mb-6">
                Mission :
              </h2>
              <p className="mb-4">
                Our mission is to transform Egypt’s manufacturing landscape by
                creating a thriving ecosystem for prototypers. We aim to inspire
                and empower a community of innovators through world-class
                prototyping services, engaging events, hands-on workshops, and
                expert mentorship. By fostering collaboration and creativity, we
                aspire to showcase Egyptian innovation to the world in a unique
                and impactful way.
              </p>
            </div>
            <div>
              <Image
                src={mission}
                alt="Vision and Mission"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default VisionMission;
