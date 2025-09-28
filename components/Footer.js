import React from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary-color-dark text-gray-500 py-10 text-center">
      <div className="container mx-auto px-5">
        <div className="flex justify-center gap-6 mb-5">
          <a href="#" className="hover:text-primary-color transition-colors"><FaTwitter size={24} /></a>
          <a href="#" className="hover:text-primary-color transition-colors"><FaFacebookF size={24} /></a>
          <a href="#" className="hover:text-primary-color transition-colors"><FaLinkedinIn size={24} /></a>
          <a href="#" className="hover:text-primary-color transition-colors"><FaInstagram size={24} /></a>
        </div>
        <p>&copy; 2025 IEEE Computer Society. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
