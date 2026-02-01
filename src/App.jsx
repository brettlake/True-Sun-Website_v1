import { useState } from 'react';
import Navbar from './components/Navbar';
import TrailerPreview from './components/TrailerPreview';
import EmailForm from './components/EmailForm';
import Countdown from './components/Countdown';
import EmailPopup from './components/EmailPopup';
import PrivacyPolicy from './components/PrivacyPolicy';
import Footer from './components/Footer';

export default function App() {
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <div className="min-h-screen bg-[#121212] text-[#f2f2f2] film-grain flex flex-col selection:bg-[#FFC400] selection:text-black">
      <Navbar />

      <main className="relative flex-grow flex flex-col items-center justify-center min-h-screen overflow-hidden pt-24 pb-12">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0 bg-black" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-[#0a0a0a] z-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-[#FFC400] rounded-full blur-[160px] opacity-5" />
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] mix-blend-overlay z-10" />
          <div
            className="absolute inset-0 z-10 pointer-events-none opacity-[0.15]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Cpath d='M10 2 L90 2 L98 10 L98 90 L90 98 L10 98 L2 90 L2 10 Z' fill='none' stroke='rgba(255,255,255,0.3)' stroke-width='1' /%3E%3Cpath d='M98 10 L100 10 L100 0 L90 0 M0 10 L2 10 M0 90 L2 90 M98 90 L100 90 L100 100 L90 100 M0 0 L10 0 M0 100 L10 100' fill='rgba(255,255,255,0.3)' stroke='none' /%3E%3Cpath d='M25 2 L25 98 M50 2 L50 98 M75 2 L75 98' stroke='rgba(255,255,255,0.15)' stroke-width='0.5' /%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)' /%3E%3C/svg%3E")`,
              backgroundSize: '100px 100px',
              maskImage: 'linear-gradient(to bottom, black 40%, transparent 95%)',
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-20 text-center px-6 w-full max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-6xl md:text-9xl font-black text-white tracking-tight mb-2 leading-[0.9] uppercase font-anton">
            True<span className="text-[#FFC400]">Sun</span>
          </h1>

          <p className="text-lg md:text-2xl text-zinc-300 max-w-xl mx-auto mb-1 font-medium leading-relaxed tracking-wide">
            Finding a better path through the light of the sun
          </p>

          <p className="text-sm md:text-lg text-zinc-500 max-w-lg mx-auto mb-10 font-medium leading-relaxed tracking-wide">
            A documentary film about the power of redemption and mentorship in Washington, DC.
          </p>

          <TrailerPreview />

          <div className="w-full max-w-2xl mx-auto">
            <EmailForm />
          </div>

          <div className="mt-8">
            <p className="text-zinc-500 text-xs font-bold uppercase tracking-[0.3em] mb-4">Premiere Countdown</p>
            <Countdown />
          </div>
        </div>
      </main>

      <EmailPopup />
      {showPrivacy && <PrivacyPolicy onClose={() => setShowPrivacy(false)} />}
      <Footer onPrivacyClick={() => setShowPrivacy(true)} />
    </div>
  );
}
