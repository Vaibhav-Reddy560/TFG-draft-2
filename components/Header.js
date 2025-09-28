import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Speakers', 'Schedule', 'Register'];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-opacity-80 bg-background-color backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-5">
        <div className="flex justify-between items-center py-4">
          <Link to="hero" spy={true} smooth={true} duration={500} className="cursor-pointer">
            <Image src="/images/ieee_logo.png" alt="IEEE Computer Society Logo" width={120} height={40} />
          </Link>
          <nav className="hidden md:block">
            <ul className="flex gap-8">
              {navLinks.map(link => (
                <li key={link}>
                  <Link 
                    to={link.toLowerCase()} 
                    spy={true} 
                    smooth={true} 
                    offset={-70} 
                    duration={500}
                    className="nav-link text-text-color font-medium hover:text-primary-color transition-colors cursor-pointer"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
