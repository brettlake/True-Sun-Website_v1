import { X } from 'lucide-react';
import { useEffect, useRef } from 'react';

const PrivacyPolicy = ({ onClose }) => {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (closeButtonRef.current) closeButtonRef.current.focus();
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4" role="dialog" aria-modal="true" aria-label="Privacy Policy">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative bg-[#121212] border border-zinc-800 p-8 md:p-12 max-w-2xl w-full max-h-[80vh] overflow-y-auto vintage-shadow animate-fade-in-up">
        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors duration-200"
          aria-label="Close privacy policy"
        >
          <X size={24} />
        </button>

        <h2 className="text-3xl font-black text-white uppercase mb-6 font-anton">Privacy Policy</h2>

        <div className="space-y-4 text-zinc-400 text-sm leading-relaxed">
          <p>
            <strong className="text-zinc-200">Last updated:</strong> January 2026
          </p>

          <h3 className="text-lg text-white font-bold uppercase tracking-wide pt-2">Information We Collect</h3>
          <p>
            When you subscribe to our mailing list, we collect your email address. We do not collect any other personal information through this website.
          </p>

          <h3 className="text-lg text-white font-bold uppercase tracking-wide pt-2">How We Use Your Information</h3>
          <p>
            Your email address is used solely to send you updates about the True Sun documentary, including premiere announcements, behind-the-scenes content, and related news.
          </p>

          <h3 className="text-lg text-white font-bold uppercase tracking-wide pt-2">Data Storage</h3>
          <p>
            Email submissions are processed and stored securely through Netlify. We do not sell, trade, or share your personal information with third parties.
          </p>

          <h3 className="text-lg text-white font-bold uppercase tracking-wide pt-2">Cookies</h3>
          <p>
            This website uses minimal local storage to remember your preferences (such as dismissing popups). We do not use tracking cookies or third-party analytics.
          </p>

          <h3 className="text-lg text-white font-bold uppercase tracking-wide pt-2">Your Rights</h3>
          <p>
            You may request removal of your email from our mailing list at any time by contacting us. We will promptly delete your information upon request.
          </p>

          <h3 className="text-lg text-white font-bold uppercase tracking-wide pt-2">Contact</h3>
          <p>
            For privacy-related inquiries, please contact Lake Media.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
