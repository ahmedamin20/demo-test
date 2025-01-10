'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#02112A] shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-[#FFE90B] hover:text-[#376683] transition-colors duration-300">
          Demo
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/" className="text-white hover:text-[#FFE90B] transition-colors duration-300">Home</Link></li>
            <li><Link href="/projects" className="text-white hover:text-[#FFE90B] transition-colors duration-300">Projects</Link></li>
            <li><Link href="/order" className="text-white hover:text-[#FFE90B] transition-colors duration-300">Order</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

