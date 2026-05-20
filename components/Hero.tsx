import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-primary/20 blur-[120px] rounded-full -z-10" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full glass text-xs font-medium text-brand-primary mb-6">
          <Sparkles size={14} />
          <span>New: AI Agent v2.0 is here</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
          Unlock Infinite <br /> Intelligence.
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Automate your complex workflows with the world's most advanced neural network. Designed for creators, engineers, and dreamers.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-white text-black px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-gray-200 transition">
            Start Building Free <ArrowRight size={18} />
          </button>
          <button className="glass px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition">
            Watch Demo
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;