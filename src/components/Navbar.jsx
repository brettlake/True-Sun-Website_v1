import { Instagram, Youtube } from 'lucide-react';

const Navbar = () => (
  <nav className="absolute top-0 w-full z-50 py-6 md:py-8" role="navigation" aria-label="Main navigation">
    <div className="container mx-auto px-6 flex justify-between items-center">
      <a href="/" className="text-3xl font-black tracking-tight text-white uppercase font-anton z-50" aria-label="True Sun - Home">
        True<span className="text-[#FFC400]">Sun</span>
      </a>
      <div className="flex gap-6 z-50">
        <a href="#" className="text-zinc-400 hover:text-[#FFC400] transition-colors duration-300" aria-label="YouTube">
          <Youtube size={20} />
        </a>
        <a href="#" className="text-zinc-400 hover:text-[#FFC400] transition-colors duration-300" aria-label="Instagram">
          <Instagram size={20} />
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
