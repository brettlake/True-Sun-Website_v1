import { Link } from 'react-router-dom';
import { Instagram, Youtube } from 'lucide-react';
import EmailForm from './EmailForm';

const Footer = ({ onPrivacyClick }) => (
  <footer className="relative z-20 bg-[#050505] border-t border-zinc-900">
    {/* Email CTA */}
    <div className="border-b border-zinc-900">
      <div className="container mx-auto px-6 py-16 max-w-2xl text-center">
        <p className="text-white text-2xl md:text-3xl font-black uppercase font-heading mb-2">
          Stay Connected
        </p>
        <p className="text-zinc-500 text-sm uppercase tracking-[0.2em] mb-8">
          Get updates on the film, screenings, and release
        </p>
        <EmailForm />
      </div>
    </div>

    {/* Footer Nav */}
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
        {/* Logo + tagline */}
        <div>
          <Link to="/" className="text-2xl font-black tracking-tight text-white uppercase font-heading">
            True<span className="text-[#FFC400]">Sun</span>
          </Link>
          <p className="text-zinc-600 text-xs uppercase tracking-[0.2em] mt-2">A Documentary Film</p>
        </div>

        {/* Nav links */}
        <div className="flex flex-wrap gap-x-8 gap-y-3">
          {[
            { to: '/', label: 'Home' },
            { to: '/about', label: 'About the Film' },
            { to: '/filmmaker', label: 'Filmmaker' },
            { to: '/contact', label: 'Contact' },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-zinc-500 text-xs uppercase tracking-[0.2em] font-bold hover:text-white transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Social */}
        <div className="flex gap-4">
          <a href="#" className="text-zinc-600 hover:text-[#FFC400] transition-colors duration-300" aria-label="YouTube">
            <Youtube size={20} />
          </a>
          <a href="#" className="text-zinc-600 hover:text-[#FFC400] transition-colors duration-300" aria-label="Instagram">
            <Instagram size={20} />
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-900 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
        <p className="text-zinc-700 text-[10px] uppercase tracking-[0.2em]">
          &copy; 2026 Lake Media. All rights reserved.
        </p>
        <button
          onClick={onPrivacyClick}
          className="text-zinc-700 text-[10px] uppercase tracking-[0.2em] hover:text-zinc-400 transition-colors duration-200"
        >
          Privacy Policy
        </button>
      </div>
    </div>
  </footer>
);

export default Footer;
