import { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function HeroSection() {
  return (
    <header className="hero-section bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a]  py-10 flex-grow flex items-center">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold animate-fadeInUp text-[#cddfbd]">Qeirex</h1>
        <p className="mt-2 text-lg md:text-xl animate-pulse text-white">
       We are coming soon !
</p>


      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer bg-[#1a1a1a] text-[#cddfbd] py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Qeirex. All Rights Reserved.</p>
        <div className="social-icons mt-4 flex justify-center space-x-4">
          <a
            href="#"
            aria-label="Facebook"
            className="text-[#cddfbd] hover:text-[#556b2f] transition duration-300"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="text-[#cddfbd] hover:text-[#556b2f] transition duration-300"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="text-[#cddfbd] hover:text-[#556b2f] transition duration-300"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="app-container min-h-screen flex flex-col bg-[#1a1a1a] text-[#cddfbd]">
      {/* Hero Section */}
      <HeroSection />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
