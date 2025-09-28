import React from 'react';
import Image from 'next/image';
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const speakers = [
  {
    name: 'Dr. Alistair Finch',
    title: 'AI Ethics & Governance Expert',
    image: '/images/speaker1.jpg',
  },
  {
    name: 'Priya Sharma',
    title: 'Founder, GreenCode Initiative',
    image: '/images/speaker2.jpg',
  },
  {
    name: 'Ben Carter',
    title: 'Lead, Accessibility Engineering @ Innovate Inc.',
    image: '/images/speaker3.jpg',
  },
  {
    name: 'Elena Rodriguez',
    title: 'Data Scientist for Social Impact',
    image: '/images/speaker4.jpg',
  },
];

const Speakers = () => {
  return (
    <section id="speakers" className="py-20">
      <div className="container mx-auto px-5">
        <h2 className="section-title text-center text-4xl font-bold mb-12 relative" data-aos="fade-up">Keynote Speakers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <div key={index} className="speaker-card bg-surface-color rounded-lg p-6 text-center" data-aos="fade-up" data-aos-delay={`${100 * (index + 1)}`}>
              <div className="relative inline-block mb-4">
                <Image src={speaker.image} alt={speaker.name} width={150} height={150} className="rounded-full border-4 border-primary-color" />
                <div className="absolute inset-0 bg-primary-color bg-opacity-75 flex items-center justify-center gap-4 rounded-full opacity-0 hover:opacity-100 transition-opacity">
                  <a href="#" className="text-white"><FaTwitter size={24} /></a>
                  <a href="#" className="text-white"><FaLinkedinIn size={24} /></a>
                </div>
              </div>
              <h3 className="font-bold text-xl">{speaker.name}</h3>
              <p className="text-primary-color">{speaker.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
