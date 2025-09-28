import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Link } from 'react-scroll';
import Image from 'next/image';
import particlesConfig from '../config/particlesConfig';

const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <section id="hero" className="h-screen flex items-center justify-center text-center relative overflow-hidden bg-gradient-to-br from-surface-color to-background-color">
      <Particles id="tsparticles" init={particlesInit} options={particlesConfig} className="absolute top-0 left-0 w-full h-full z-0" />
      <div className="relative z-10 max-w-3xl px-5">
        <p className="text-primary-color font-bold text-lg mb-4" data-aos="fade-up">BMSCE IEEE Computer Society presents</p>
        <div className="mb-4" data-aos="fade-up" data-aos-delay="200">
          <Image src="/images/title_logo.png" alt="Tech For Good Summit Logo" width={720} height={150} className="mx-auto" />
        </div>
        <p className="text-lg mb-8 max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="400">
          Innovating for a better world. Join visionaries, developers, and leaders dedicated to leveraging technology for humanity's greatest challenges.
        </p>
        <Link 
          to="register" 
          spy={true} 
          smooth={true} 
          duration={500}
          className="btn inline-block bg-primary-color text-white py-3 px-8 rounded-full font-bold uppercase tracking-wider hover:bg-opacity-80 transition-all transform hover:-translate-y-1 shadow-lg" 
          data-aos="fade-up" 
          data-aos-delay="600"
        >
          Register Now
        </Link>
      </div>
    </section>
  );
};

export default Hero;
