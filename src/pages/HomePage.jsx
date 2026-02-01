import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ChevronRight } from 'lucide-react';
import TrailerPreview from '../components/TrailerPreview';
import EmailForm from '../components/EmailForm';
import FadeInSection from '../components/FadeInSection';

function useParallax() {
  const [offset, setOffset] = useState(0);
  const handleScroll = useCallback(() => {
    setOffset(window.scrollY);
  }, []);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);
  return offset;
}

const SectionDivider = () => (
  <div className="flex justify-center" aria-hidden="true">
    <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-[#FFC400]/25 to-transparent" />
  </div>
);

const PullQuote = ({ quote, name, role }) => (
  <section className="relative py-20 md:py-32 bg-[#0a0a0a]">
    <div className="max-w-4xl mx-auto px-6">
      <FadeInSection>
        <blockquote className="text-center relative">
          {/* Decorative quote mark */}
          <span
            className="absolute -top-8 left-1/2 -translate-x-1/2 text-[8rem] md:text-[12rem] leading-none font-heading font-black text-[#FFC400]/[0.07] select-none pointer-events-none"
            aria-hidden="true"
          >
            &ldquo;
          </span>
          <p className="text-2xl md:text-4xl lg:text-5xl font-light text-white leading-snug md:leading-tight tracking-tight relative z-10">
            &ldquo;{quote}&rdquo;
          </p>
          <footer className="mt-8 flex items-center justify-center gap-3 relative z-10">
            <span className="h-px w-8 bg-[#FFC400]/40" aria-hidden="true" />
            <div>
              <cite className="not-italic text-sm text-[#FFC400] uppercase tracking-[0.2em] font-bold">
                {name}
              </cite>
              <p className="text-zinc-600 text-xs uppercase tracking-wider">{role}</p>
            </div>
            <span className="h-px w-8 bg-[#FFC400]/40" aria-hidden="true" />
          </footer>
        </blockquote>
      </FadeInSection>
    </div>
  </section>
);

const subjects = [
  {
    name: "Name TBD",
    role: "Program Participant",
    description: "A young man navigating life after incarceration, searching for a second chance in a city that rarely offers one. His story is the backbone of the film — raw, unflinching, and ultimately hopeful.",
  },
  {
    name: "Name TBD",
    role: "Community Mentor",
    description: "A lifelong DC resident who spent decades on the wrong side before dedicating his life to pulling young people back from the edge. He's proof that the past doesn't have to be a prison.",
  },
];

export default function HomePage() {
  const scrollY = useParallax();

  return (
    <main className="relative flex-grow flex flex-col">
      {/* ── Hero Section ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background with parallax */}
        <div className="absolute inset-0 z-0 bg-black" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-[#0a0a0a] z-10" />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-[#FFC400] rounded-full blur-[160px] opacity-5 will-change-transform"
            style={{ transform: `translate(-50%, -50%) translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0003})` }}
          />
          <div
            className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] mix-blend-overlay z-10 will-change-transform"
            style={{ transform: `translateY(${scrollY * 0.15}px)` }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-6 w-full max-w-5xl mx-auto flex flex-col items-center">
          <h1 className="text-7xl md:text-[10rem] font-black text-white tracking-tight leading-[0.85] uppercase font-heading mb-4">
            True<span className="text-[#FFC400]">Sun</span>
          </h1>

          <div className="flex items-center justify-center gap-4 mb-10">
            <span className="h-px w-10 md:w-16 bg-gradient-to-r from-transparent to-[#FFC400]/50" aria-hidden="true" />
            <p className="text-sm md:text-base text-zinc-400 uppercase tracking-[0.3em] font-medium">
              A Documentary Film — Coming 2026
            </p>
            <span className="h-px w-10 md:w-16 bg-gradient-to-l from-transparent to-[#FFC400]/50" aria-hidden="true" />
          </div>

          <TrailerPreview />

          <div className="w-full max-w-2xl">
            <p className="text-zinc-400 text-sm uppercase tracking-[0.2em] font-bold mb-4">
              Be the First to See It
            </p>
            <EmailForm />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 z-20 animate-bounce">
          <ArrowDown size={20} className="text-zinc-600" />
        </div>
      </section>

      <SectionDivider />

      {/* ── Synopsis ── */}
      <section className="relative py-24 md:py-36 bg-black">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeInSection>
            <span className="text-[#FFC400] text-xs uppercase tracking-[0.3em] font-bold mb-6 block">The Story</span>
            <p className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-snug tracking-tight uppercase font-heading">
              In Wards 7 and 8 of Washington, DC, a grassroots mentorship program is rewriting the
              story for young men caught between the streets and a second chance.
            </p>
            <p className="text-zinc-500 text-base md:text-lg mt-8 max-w-2xl mx-auto leading-relaxed uppercase tracking-wide font-heading font-bold">
              True Sun follows their journey — the setbacks, the breakthroughs, and the quiet
              moments of transformation that never make the news.
            </p>
          </FadeInSection>
        </div>
      </section>

      <SectionDivider />

      {/* ── Pull Quote 1 ── */}
      <PullQuote
        quote="I was lost. Completely lost. Then somebody saw something in me I couldn't see in myself."
        name="Subject Name"
        role="Program Participant"
      />

      <SectionDivider />

      {/* ── The People ── */}
      <section className="relative py-24 md:py-36 bg-black">
        <div className="max-w-5xl mx-auto px-6">
          <FadeInSection>
            <span className="text-[#FFC400] text-xs uppercase tracking-[0.3em] font-bold mb-4 block">
              The People
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase font-heading mb-4">
              Who's in the Film
            </h2>
            <p className="text-zinc-500 text-base md:text-lg mb-16 max-w-xl">
              No actors. No scripts. Just real lives unfolding.
            </p>
          </FadeInSection>

          <div className="space-y-16 md:space-y-24">
            {subjects.map((person, i) => (
              <FadeInSection key={i} delay={i * 150}>
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                  {/* Vertical portrait placeholder */}
                  <div className="w-full md:w-72 flex-shrink-0">
                    <div className="aspect-[3/4] bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                      <p className="text-zinc-600 text-xs uppercase tracking-wider font-bold">Photo</p>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 md:pt-4">
                    <span className="text-zinc-700 text-xs font-bold mb-4 block">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="text-2xl md:text-3xl font-black text-white uppercase font-heading mb-2">
                      {person.name}
                    </h3>
                    <p className="text-[#FFC400] text-xs uppercase tracking-[0.2em] font-bold mb-6">
                      {person.role}
                    </p>
                    <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                      {person.description}
                    </p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Pull Quote 2 ── */}
      <PullQuote
        quote="You can't save everyone. But you show up anyway. Every single day, you show up."
        name="Mentor Name"
        role="Community Mentor"
      />

      <SectionDivider />

      {/* ── The Setting ── */}
      <section className="relative py-24 md:py-36 bg-[#121212] overflow-hidden">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vw] max-w-[1000px] max-h-[500px] bg-[#FFC400] rounded-full blur-[200px] opacity-[0.03]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <FadeInSection>
            <span className="text-[#FFC400] text-xs uppercase tracking-[0.3em] font-bold mb-4 block">The Setting</span>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase font-heading mb-8">
              East of the River
            </h2>
          </FadeInSection>

          <FadeInSection delay={200}>
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-6">
              Wards 7 and 8 sit east of the Anacostia River — just miles from the Capitol, but a
              world apart. These are DC's most underserved neighborhoods: highest poverty rates,
              fewest resources, and the deepest community bonds you'll find anywhere in the city.
            </p>
            <p className="text-zinc-500 text-base leading-relaxed mb-6">
              It's where corner stores double as community centers. Where grandmothers raise
              grandchildren and mentors meet young men on the blocks where they grew up. The
              national news tells one story about these wards. True Sun tells another.
            </p>
            <p className="text-zinc-500 text-base leading-relaxed">
              This is where the film lives — not in the DC of marble monuments and motorcades, but
              in the DC that fights for itself every single day.
            </p>
          </FadeInSection>

          <FadeInSection delay={400}>
            <div className="mt-12">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-[#FFC400] uppercase tracking-[0.2em] text-sm font-bold hover:gap-3 transition-all duration-300 group"
              >
                More About the Film
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>
    </main>
  );
}
