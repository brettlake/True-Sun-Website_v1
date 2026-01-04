import React, { useState, useEffect } from 'react';
import { Instagram, Youtube, Play, ArrowRight, X } from 'lucide-react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "px-8 py-4 uppercase tracking-widest text-lg font-bold transition-all duration-300 transform hover:-translate-y-1 font-sans flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-[#FFC400] text-black hover:bg-[#E6B000] vintage-shadow",
    outline: "border-2 border-white text-white hover:bg-white hover:text-black",
    ghost: "text-zinc-400 hover:text-[#FFC400]"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

// Countdown Component
const Countdown = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2026-03-01") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="flex gap-3 md:gap-6 justify-center items-center mt-8">
      {Object.keys(timeLeft).map((interval) => (
        <div key={interval} className="flex flex-col items-center group">
          <div className="w-16 h-16 md:w-24 md:h-24 bg-zinc-900/80 border border-zinc-800 flex items-center justify-center relative overflow-hidden group-hover:border-[#FFC400]/50 transition-colors duration-500 backdrop-blur-sm shadow-lg shadow-black/50">
            <span className="text-2xl md:text-5xl font-black text-[#FFC400] font-anton z-10">
              {timeLeft[interval] < 10 ? `0${timeLeft[interval]}` : timeLeft[interval]}
            </span>
          </div>
          <span className="text-[10px] md:text-xs uppercase tracking-widest text-zinc-600 mt-2 font-bold group-hover:text-zinc-400 transition-colors">{interval}</span>
        </div>
      ))}
    </div>
  );
};

// Reusable Email Form Component (Netlify)
const EmailForm = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setIsSubmitted(true);
        if (onSuccess) onSuccess();
      })
      .catch((error) => console.error("Form submission error:", error));
  };

  if (isSubmitted) {
    return (
      <div className="w-full bg-[#FFC400]/10 border border-[#FFC400] p-8 text-center vintage-shadow animate-fade-in-up">
        <h3 className="text-2xl font-black text-white uppercase mb-0 font-anton">Thank you for signing up.</h3>
        <p className="text-zinc-400 text-xs mt-2 uppercase tracking-wide">We'll be in touch soon.</p>
      </div>
    );
  }

  return (
    <div className="w-full bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 p-2 md:p-3 rounded-none vintage-shadow transform transition-all hover:border-zinc-700">
      <form 
        name="subscribe" 
        method="POST" 
        data-netlify="true" 
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row gap-2"
      >
        <input type="hidden" name="form-name" value="subscribe" />
        <div hidden>
          <input name="bot-field" />
        </div>
        
        <input 
          type="email" 
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ENTER YOUR EMAIL ADDRESS" 
          required
          className="flex-1 bg-[#1a1a1a] text-white placeholder-zinc-500 px-6 py-4 focus:outline-none focus:ring-1 focus:ring-[#FFC400] uppercase font-bold tracking-wider text-sm md:text-base border-none w-full"
        />
        <Button type="submit" variant="primary" className="w-full md:w-auto px-6 py-4 whitespace-nowrap">
          Get Updates <ArrowRight size={20} className="hidden md:block" />
        </Button>
      </form>
      <p className="text-zinc-500 text-[10px] mt-2 uppercase tracking-wider text-center md:text-left pl-1">
        We respect your privacy. No spam.
      </p>
    </div>
  );
};

export default function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] text-[#f2f2f2] film-grain flex flex-col selection:bg-[#FFC400] selection:text-black">
      
      {/* Minimal Header */}
      <nav className="absolute top-0 w-full z-50 py-6 md:py-8">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-3xl font-black tracking-tight text-white uppercase font-anton z-50">
            True<span className="text-[#FFC400]">Sun</span>
          </a>
          <div className="flex gap-6 z-50">
            <a href="#" className="text-zinc-400 hover:text-[#FFC400] transition-colors"><Youtube size={20} /></a>
            <a href="#" className="text-zinc-400 hover:text-[#FFC400] transition-colors"><Instagram size={20} /></a>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="relative flex-grow flex flex-col items-center justify-center min-h-screen overflow-hidden pt-24 pb-12">
        
        {/* Background Elements */}
        <div className="absolute inset-0 z-0 bg-black">
          {/* Main Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-[#0a0a0a] z-10"></div>
          
          {/* Solar Element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-[#FFC400] rounded-full blur-[160px] opacity-5"></div>
          
          {/* Concrete Texture */}
          <div className="absolute inset-0 opacity-20 bg-[url('[https://www.transparenttextures.com/patterns/concrete-wall.png](https://www.transparenttextures.com/patterns/concrete-wall.png)')] mix-blend-overlay z-10"></div>
          
          {/* Monocrystalline Solar Pattern - SVG Background */}
          <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.15]"
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3C!-- Cell Background (The dark silicon) --%3E%3Cpath d='M10 2 L90 2 L98 10 L98 90 L90 98 L10 98 L2 90 L2 10 Z' fill='none' stroke='rgba(255,255,255,0.3)' stroke-width='1' /%3E%3C!-- The Diamond Intersections (where corners meet) --%3E%3Cpath d='M98 10 L100 10 L100 0 L90 0 M0 10 L2 10 M0 90 L2 90 M98 90 L100 90 L100 100 L90 100 M0 0 L10 0 M0 100 L10 100' fill='rgba(255,255,255,0.3)' stroke='none' /%3E%3C!-- Busbars (Vertical lines) --%3E%3Cpath d='M25 2 L25 98 M50 2 L50 98 M75 2 L75 98' stroke='rgba(255,255,255,0.15)' stroke-width='0.5' /%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)' /%3E%3C/svg%3E")`,
                 backgroundSize: '100px 100px',
                 maskImage: 'linear-gradient(to bottom, black 40%, transparent 95%)'
               }}>
          </div>
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

          {/* Trailer Section */}
          <div className="w-full max-w-2xl aspect-video bg-zinc-900 border border-zinc-800 mb-10 relative group cursor-pointer shadow-2xl overflow-hidden rounded-sm">
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-all">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-[#FFC400] rounded-full flex items-center justify-center pl-1 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                <Play size={32} className="text-black fill-current" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 text-left">
              <p className="text-white font-bold uppercase tracking-wider text-sm">Official Trailer</p>
              <p className="text-zinc-400 text-xs">2:34</p>
            </div>
          </div>

          <div className="w-full max-w-2xl mx-auto">
            <EmailForm />
          </div>
          
          <div className="mt-8">
             <p className="text-zinc-500 text-xs font-bold uppercase tracking-[0.3em] mb-4">Premiere Countdown</p>
             <Countdown />
          </div>

        </div>
      </main>

      {/* Email Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setShowPopup(false)}
          ></div>
          
          <div className="relative bg-[#121212] border border-[#FFC400] p-8 md:p-12 max-w-2xl w-full vintage-shadow animate-fade-in-up flex flex-col items-center text-center">
            <button 
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            
            <h3 className="text-4xl font-black text-white uppercase mb-2 font-anton">Don't Miss Out</h3>
            <p className="text-zinc-400 mb-8 font-medium">Join the list to get exclusive updates and early access to the premiere.</p>
            
            <div className="w-full">
              <EmailForm />
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="relative z-20 py-8 border-t border-zinc-900 bg-[#050505]">
        <div className="container mx-auto px-6 text-center">
          <p className="text-zinc-600 text-[10px] uppercase tracking-[0.2em]">
            © 2026 Lake Media. <span className="mx-2 text-zinc-800">|</span> <a href="#" className="hover:text-zinc-400">Privacy Policy</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
