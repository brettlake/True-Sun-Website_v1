const Footer = ({ onPrivacyClick }) => (
  <footer className="relative z-20 py-8 border-t border-zinc-900 bg-[#050505]">
    <div className="container mx-auto px-6 text-center">
      <p className="text-zinc-600 text-[10px] uppercase tracking-[0.2em]">
        &copy; 2026 Lake Media.{' '}
        <span className="mx-2 text-zinc-800">|</span>{' '}
        <button
          onClick={onPrivacyClick}
          className="hover:text-zinc-400 transition-colors duration-200 underline-offset-2 hover:underline"
        >
          Privacy Policy
        </button>
      </p>
    </div>
  </footer>
);

export default Footer;
