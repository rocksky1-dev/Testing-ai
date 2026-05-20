import React from 'react';

const plans = [
  { name: 'Starter', price: '$0', features: ['50 AI Queries/mo', 'Community Support', 'Basic Analytics'] },
  { name: 'Pro', price: '$29', features: ['Unlimited Queries', 'Priority Access', 'API Access', 'Advanced Models'], popular: true },
  { name: 'Enterprise', price: 'Custom', features: ['Dedicated Server', '24/7 Support', 'Custom Training', 'SLA'] },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-16">Simple, Transparent Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((p, i) => (
            <div key={i} className={`p-8 rounded-3xl flex flex-col ${p.popular ? 'glass border-brand-primary scale-105' : 'bg-white/5 border border-white/10'}`}>
              <h3 className="text-xl font-medium mb-2">{p.name}</h3>
              <div className="text-4xl font-bold mb-6">{p.price}<span className="text-sm text-gray-500">/mo</span></div>
              <ul className="text-left space-y-4 mb-10 flex-grow">
                {p.features.map((feat, j) => (
                  <li key={j} className="text-gray-400 text-sm flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" /> {feat}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-xl font-semibold transition ${p.popular ? 'bg-brand-primary text-white' : 'bg-white/10 hover:bg-white/20'}`}>
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;