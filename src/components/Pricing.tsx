const Pricing = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">Simple Pricing</h2>
        <div className="max-w-md mx-auto p-8 rounded-3xl border border-indigo-500 bg-indigo-500/5">
          <h3 className="text-2xl font-bold mb-4">Pro Plan</h3>
          <div className="text-5xl font-extrabold mb-6">$0<span className="text-lg text-slate-400 font-normal">/mo</span></div>
          <ul className="text-left space-y-4 mb-8">
            <li>✅ Unlimited Queries</li>
            <li>✅ Advanced Code Generation</li>
            <li>✅ Priority Support</li>
            <li>✅ Secure & Patched</li>
          </ul>
          <button className="w-full py-3 bg-indigo-600 rounded-xl font-bold">Get Started Now</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;