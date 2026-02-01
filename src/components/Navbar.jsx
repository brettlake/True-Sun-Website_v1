import { useState, useEffect, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { Instagram, Youtube, Menu, X } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About the Film' },
  { to: '/filmmaker', label: 'Filmmaker' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentY = window.scrollY;
    // Only hide after scrolling past the navbar height, and only when not at top
    if (currentY > 80 && currentY > lastScrollY) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setLastScrollY(currentY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-zinc-900/50 transition-transform duration-300 ${
        hidden && !menuOpen ? '-translate-y-full' : 'translate-y-0'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-6 flex justify-between items-center h-16 md:h-20">
        {/* Logo */}
        <NavLink to="/" className="text-2xl md:text-3xl font-black tracking-tight text-white uppercase font-heading z-50" aria-label="True Sun - Home" onClick={() => setMenuOpen(false)}>
          True<span className="text-[#FFC400]">Sun</span>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `text-xs uppercase tracking-[0.2em] font-bold transition-colors duration-300 ${
                  isActive ? 'text-[#FFC400]' : 'text-zinc-400 hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          <div className="flex gap-4 ml-4 pl-4 border-l border-zinc-800">
            <a href="#" className="text-zinc-500 hover:text-[#FFC400] transition-colors duration-300" aria-label="YouTube">
              <Youtube size={18} />
            </a>
            <a href="#" className="text-zinc-500 hover:text-[#FFC400] transition-colors duration-300" aria-label="Instagram">
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50 text-zinc-400 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-black/95 backdrop-blur-md z-40 flex flex-col items-center justify-center gap-8 animate-fade-in-up">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-2xl uppercase tracking-[0.2em] font-black font-heading transition-colors duration-300 ${
                  isActive ? 'text-[#FFC400]' : 'text-zinc-400 hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          <div className="flex gap-6 mt-4 pt-4 border-t border-zinc-800">
            <a href="#" className="text-zinc-500 hover:text-[#FFC400] transition-colors duration-300" aria-label="YouTube">
              <Youtube size={22} />
            </a>
            <a href="#" className="text-zinc-500 hover:text-[#FFC400] transition-colors duration-300" aria-label="Instagram">
              <Instagram size={22} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
