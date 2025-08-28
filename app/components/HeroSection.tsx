'use client'
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import logo from "../../assets/logo.png"
import Image from 'next/image';

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
        <div className="animate-fade-in-up flex-wrap animation-delay-300 flex w-full justify-center items-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in-up">
          Welcome to
        </h1>
        <Image src={logo} alt='logo' width={200} height={200} className=''/>
        </div>
        <Link
          href="/order"
          className="bg-demo-yellow text-[#010A18] px-8 py-3 rounded-full font-semibold hover:bg-[#376683] hover:text-white transition-colors duration-300 animate-fade-in-up animation-delay-600"
        >
          Start Your Project
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;

