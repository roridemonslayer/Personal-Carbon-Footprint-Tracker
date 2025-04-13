import React from 'react';
import { ChevronDownIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const HeroSection = () => {
  const navigate = useNavigate();
  
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  const navigateToSignup = () => {
    navigate('/signup');
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden" id="home">
      {/* Background with gradient fallback in case image fails to load */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-800 to-blue-800 bg-cover bg-center bg-no-repeat"
            style={{
             backgroundImage: "url('/api/placeholder/1920/1080')",
           }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-blue-900/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
          <span className="block">Track Your Carbon Footprint</span>
          <span className="block mt-2 text-emerald-300">With Sustainify</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto">
          Empowering individuals and businesses to monitor, reduce, and offset
          their CO2 emissions for a sustainable future.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={navigateToSignup} 
            className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-md font-medium transition-colors text-lg"
          >
            Get Started
          </button>
          <button 
            onClick={scrollToAbout}
            className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-md font-medium backdrop-blur-sm transition-colors text-lg"
          >
            Learn More
          </button>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <button
           onClick={scrollToAbout}
           className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
           aria-label="Scroll down"
        >
          <ChevronDownIcon size={24} className="text-white" />
        </button>
      </div>
    </section>
  );
};