import React from 'react';
import { Link } from 'react-scroll';

const Register = () => {
  return (
    <section id="register" className="py-20 text-center text-white bg-cover bg-center bg-fixed" style={{backgroundImage: "url('/images/register-bg.jpg')"}}>
      <div className="container mx-auto px-5" data-aos="zoom-in">
        <h2 className="section-title text-center text-4xl font-bold mb-12 relative">Join The Movement</h2>
        <p className="max-w-xl mx-auto mb-8">
          Don't miss this opportunity to be part of the change. Secure your spot at the Tech For Good Summit and connect with the leaders building a better tomorrow.
        </p>
        <Link 
          to="register" 
          spy={true} 
          smooth={true} 
          duration={500}
          className="btn inline-block bg-primary-color text-white py-3 px-8 rounded-full font-bold uppercase tracking-wider hover:bg-opacity-80 transition-all transform hover:-translate-y-1 shadow-lg"
        >
          Get Your Ticket
        </Link>
      </div>
    </section>
  );
};

export default Register;
