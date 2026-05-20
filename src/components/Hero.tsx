import { Rocket } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8">
          <Rocket className="w-4 h-4 text-indigo-400" />
          <span className="text-sm font-medium text-indigo-300">New: V2 Update is Live!</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
          Intelligence Without <br />
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Boundaries
          </span>
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
          Experience the next generation of AI. Created by SHIVAM KUMAR, Infinity Ai is designed to assist, create, and innovate alongside you.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-4 bg-indigo-600 rounded-xl font-bold text-lg hover:scale-105 transition-transform">
            Start Building Free
          </button>
          <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-bold text-lg hover:bg-white/10 transition">
            View Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;