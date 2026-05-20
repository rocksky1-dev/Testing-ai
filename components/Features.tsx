import React from 'react';
import { Cpu, Zap, Shield, Globe } from 'lucide-react';

const features = [
  { title: 'Ultra Fast', desc: 'Process massive datasets in milliseconds.', icon: <Zap className="text-brand-primary" /> },
  { title: 'Neural Engine', desc: 'Advanced reasoning capabilities.', icon: <Cpu className="text-brand-secondary" /> },
  { title: 'Secure by Default', desc: 'Enterprise grade encryption.', icon: <Shield className="text-brand-accent" /> },
  { title: 'Global Edge', desc: 'Deploy anywhere with low latency.', icon: <Globe className="text-blue-400" /> },
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Engineered for Excellence</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="glass p-8 rounded-2xl hover:border-brand-primary/50 transition group">
              <div className="mb-4 p-3 w-fit rounded-lg bg-white/5 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;