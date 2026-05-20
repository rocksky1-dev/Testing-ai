import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Infinity Ai
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="#" className="hover:text-indigo-400 transition">Home</Link>
            <Link href="#" className="hover:text-indigo-400 transition">Features</Link>
            <Link href="#" className="hover:text-indigo-400 transition">Pricing</Link>
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-700 px-5 py-2 rounded-full font-medium transition">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;