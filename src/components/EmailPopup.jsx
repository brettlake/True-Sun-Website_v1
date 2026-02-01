import { useState, useEffect, useRef, useCallback } from 'react';
import { X } from 'lucide-react';
import EmailForm from './EmailForm';

const STORAGE_KEY = 'truesun_popup_dismissed';
const POPUP_DELAY_MS = 10000;

const EmailPopup = () => {
  const [visible, setVisible] = useState(false);
  const closeButtonRef = useRef(null);
  const previousFocusRef = useRef(null);

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (dismissed) return;

    const timer = setTimeout(() => {
      previousFocusRef.current = document.activeElement;
      setVisible(true);
    }, POPUP_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (visible && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [visible]);

  const dismiss = useCallback(() => {
    setVisible(false);
    localStorage.setItem(STORAGE_KEY, 'true');
    if (previousFocusRef.current) {
      previousFocusRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (!visible) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') dismiss();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [visible, dismiss]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4" role="dialog" aria-modal="true" aria-label="Email signup">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
        onClick={dismiss}
        aria-hidden="true"
      />

      <div className="relative bg-[#121212] border border-[#FFC400] p-8 md:p-12 max-w-2xl w-full vintage-shadow animate-fade-in-up flex flex-col items-center text-center">
        <button
          ref={closeButtonRef}
          onClick={dismiss}
          className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors duration-200"
          aria-label="Close popup"
        >
          <X size={24} />
        </button>

        <h3 className="text-4xl font-black text-white uppercase mb-2 font-anton">Don't Miss Out</h3>
        <p className="text-zinc-400 mb-8 font-medium">Join the list to get exclusive updates and early access to the premiere.</p>

        <div className="w-full">
          <EmailForm onSuccess={dismiss} />
        </div>
      </div>
    </div>
  );
};

export default EmailPopup;
