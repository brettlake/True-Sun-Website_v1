import FadeInSection from '../components/FadeInSection';

export default function AboutPage() {
  return (
    <main className="relative flex-grow">
      {/* Page Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-black overflow-hidden">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-[#FFC400] rounded-full blur-[160px] opacity-[0.03]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <FadeInSection>
            <span className="text-[#FFC400] text-xs uppercase tracking-[0.3em] font-bold mb-4 block">About</span>
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase font-heading mb-6">
              The Film
            </h1>
            <div className="flex justify-center">
              <span className="h-px w-20 bg-gradient-to-r from-transparent via-[#FFC400]/40 to-transparent" aria-hidden="true" />
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Synopsis */}
      <section className="py-20 md:py-28 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto px-6">
          <FadeInSection>
            <h2 className="text-2xl md:text-4xl font-black text-white uppercase font-heading mb-8">
              Synopsis
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              True Sun takes you inside a grassroots mentorship program in Washington, DC — where
              former gang members become guides, ex-offenders become leaders, and a community
              rewrites its own story.
            </p>
            <p className="text-zinc-500 text-base leading-relaxed">
              Shot over the course of two years, the film captures the raw, unscripted moments of
              transformation: the setbacks, the breakthroughs, and the quiet acts of courage that
              never make the news. This is DC beyond the monuments. Beyond the politics. This is
              the city that builds itself back up, block by block.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Themes */}
      <section className="py-20 md:py-28 bg-[#121212]">
        <div className="max-w-3xl mx-auto px-6">
          <FadeInSection>
            <h2 className="text-2xl md:text-4xl font-black text-white uppercase font-heading mb-12">
              Themes
            </h2>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Redemption',
                description: 'Second chances aren\'t given. They\'re earned — day by day, decision by decision.',
              },
              {
                title: 'Mentorship',
                description: 'One person who believes in you can change everything. This film proves it.',
              },
              {
                title: 'Resilience',
                description: 'Survival isn\'t enough. These are stories of people who chose to live.',
              },
            ].map((theme, i) => (
              <FadeInSection key={theme.title} delay={i * 150}>
                <div className="border-t border-[#FFC400]/20 pt-6">
                  <h3 className="text-lg font-black text-white uppercase font-heading mb-3">{theme.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{theme.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Setting */}
      <section className="py-20 md:py-28 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto px-6">
          <FadeInSection>
            <span className="text-[#FFC400] text-xs uppercase tracking-[0.3em] font-bold mb-4 block">Setting</span>
            <h2 className="text-2xl md:text-4xl font-black text-white uppercase font-heading mb-8">
              Washington, DC
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Everyone knows the DC of marble and power. True Sun shows you the other one — the
              neighborhoods east of the river, the corners where young men gather, the community
              centers that keep the lights on. A city fighting for itself, one mentor at a time.
            </p>
          </FadeInSection>
        </div>
      </section>
    </main>
  );
}
