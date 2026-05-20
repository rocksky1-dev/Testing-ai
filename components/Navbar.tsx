import React from 'react';
import { Infinity } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 glass">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Infinity className="text-brand-primary w-8 h-8" />
          <span className="text-xl font-bold tracking-tighter">INFINITY AI</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm text-gray-400">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#" className="hover:text-white transition">About</a>
        </div>
        <button className="bg-brand-primary hover:bg-brand-secondary text-white px-5 py-2 rounded-full text-sm font-medium transition">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;