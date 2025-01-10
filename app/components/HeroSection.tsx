'use client'
import { useEffect, useRef } from 'react';
import Link from 'next/link';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;
        heroRef.current.style.opacity = `${1 - scrollY / 700}`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        ref={heroRef}
        className="absolute inset-0 bg-gradient-to-r from-[#010A18] to-[#03284C]"
      ></div>
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in-up">
          Welcome to Demo
        </h1>
        <p className="text-xl md:text-2xl text-[#FFE90B] mb-8 animate-fade-in-up animation-delay-300">
          Innovating through prototyping and 3D printing
        </p>
        <Link
          href="/order"
          className="bg-[#FFE90B] text-[#010A18] px-8 py-3 rounded-full font-semibold hover:bg-[#376683] hover:text-white transition-colors duration-300 animate-fade-in-up animation-delay-600"
        >
          Start Your Project
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;

