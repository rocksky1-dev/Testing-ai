import { Code2, Globe, ShieldCheck, Zap } from "lucide-react";

const features = [
  { icon: <Code2 />, title: "Master Coder", desc: "Full, optimized code without placeholders." },
  { icon: <Globe />, title: "Multi-Language", desc: "Detects and responds in any language automatically." },
  { icon: <ShieldCheck />, title: "Secure & Private", desc: "Enterprise-grade security with latest patches." },
  { icon: <Zap />, title: "Ultra Fast", desc: "Optimized for instant responses and build speed." },
];

const Features = () => {
  return (
    <section className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-8 rounded-2xl border border-white/5 bg-slate-950 hover:border-indigo-500/50 transition">
              <div className="text-indigo-500 mb-4">{f.icon}</div>
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-slate-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;