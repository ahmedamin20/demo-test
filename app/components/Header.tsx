'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import logo from "../../assets/logo.png"
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
        <Link href="/" className="">
        <Image src={logo} alt='demo-logo' width={100} height={100} objectFit='' />
          {/* Demo */}
        </Link>
        <nav>
          <ul className="flex space-x-6 ">
            <li><Link href="/" className="text-white hover:text-demo-yellow transition-colors duration-300">Home</Link></li>
            <li><Link href="/projects" className="text-white hover:text-demo-yellow transition-colors duration-300">Projects</Link></li>
            <li><Link href="/order" className="text-white hover:text-demo-yellow transition-colors duration-300">Order</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

