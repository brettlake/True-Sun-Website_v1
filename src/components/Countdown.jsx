import { useState, useEffect } from 'react';

const PREMIERE_DATE = new Date("2026-03-01");

const calculateTimeLeft = () => {
  const difference = PREMIERE_DATE - new Date();

  if (difference <= 0) return null;

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    if (!timeLeft) return;
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  if (!timeLeft) {
    return (
      <div className="mt-8 text-center">
        <p className="text-3xl md:text-5xl font-black text-[#FFC400] font-anton uppercase tracking-wide">
          Now Available
        </p>
      </div>
    );
  }

  return (
    <div className="flex gap-3 md:gap-6 justify-center items-center mt-8" role="timer" aria-label="Premiere countdown">
      {Object.entries(timeLeft).map(([interval, value]) => (
        <div key={interval} className="flex flex-col items-center group">
          <div className="w-16 h-16 md:w-24 md:h-24 bg-zinc-900/80 border border-zinc-800 flex items-center justify-center relative overflow-hidden group-hover:border-[#FFC400]/50 transition-colors duration-500 backdrop-blur-sm shadow-lg shadow-black/50">
            <span className="text-2xl md:text-5xl font-black text-[#FFC400] font-anton z-10" aria-label={`${value} ${interval}`}>
              {value < 10 ? `0${value}` : value}
            </span>
          </div>
          <span className="text-[10px] md:text-xs uppercase tracking-widest text-zinc-600 mt-2 font-bold group-hover:text-zinc-400 transition-colors" aria-hidden="true">
            {interval}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
