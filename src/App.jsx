import { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function App() {
  return (
    <div className="app-container min-h-screen flex flex-col bg-[#1a1a1a] text-[#cddfbd]">
      {/* Hero Section */}
      <header className="hero-section bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] text-[#cddfbd] py-10 flex-grow flex items-center">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold animate-fadeInUp">Qeirex</h1>
          <p className="mt-4 text-lg md:text-xl animate-pulse">Coming Soon !</p>
     
        </div>
      </header>

 
      {/* Footer Section */}
      <footer className="footer bg-[#1a1a1a] text-[#cddfbd] py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Qeirex. All Rights Reserved.</p>
          <div className="social-icons mt-4 flex justify-center space-x-4">
            <a href="#" className="text-[#cddfbd] hover:text-[#556b2f]"><FaFacebook size={24} /></a>
            <a href="#" className="text-[#cddfbd] hover:text-[#556b2f]"><FaTwitter size={24} /></a>
            <a href="#" className="text-[#cddfbd] hover:text-[#556b2f]"><FaInstagram size={24} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;