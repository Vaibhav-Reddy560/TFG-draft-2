import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="bg-surface-color py-20">
      <div className="container mx-auto px-5">
        <h2 className="section-title text-center text-4xl font-bold mb-12 relative" data-aos="fade-up">
          About The Summit
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2" data-aos="fade-right" data-aos-delay="200">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <Image 
                src="/images/about.jpg" 
                alt="People collaborating on a tech project" 
                width={774} 
                height={516} 
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="md:w-1/2" data-aos="fade-left" data-aos-delay="400">
            <h3 className="text-2xl font-bold mb-4">Leveraging Technology for Social Impact</h3>
            <p className="text-lg">
              The Tech for Good Summit 2025 is a dynamic three-day event curated by the BMSCE IEEE Computer Society, focused on leveraging technology to drive positive social impact. Scheduled from 10th to 12th October, this summit brings together students, professionals, innovators, and changemakers under one roof to ideate, collaborate, and build tech-powered solutions for real-world challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
