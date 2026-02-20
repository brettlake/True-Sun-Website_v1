import FadeInSection from '../components/FadeInSection';

export default function FilmmakerPage() {
  return (
    <main className="relative flex-grow">
      {/* Page Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-black overflow-hidden">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-[#FFC400] rounded-full blur-[160px] opacity-[0.03]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <FadeInSection>
            <span className="text-[#FFC400] text-xs uppercase tracking-[0.3em] font-bold mb-4 block">Behind the Camera</span>
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase font-heading mb-6">
              Filmmaker
            </h1>
            <div className="flex justify-center">
              <span className="h-px w-20 bg-gradient-to-r from-transparent via-[#FFC400]/40 to-transparent" aria-hidden="true" />
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Bio */}
      <section className="py-20 md:py-28 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="md:flex md:gap-12 md:items-start">
            {/* Photo placeholder */}
            <FadeInSection className="mb-8 md:mb-0 md:flex-shrink-0">
              <div className="w-48 h-48 md:w-64 md:h-64 bg-zinc-900 border border-zinc-800 mx-auto md:mx-0 flex items-center justify-center">
                <p className="text-zinc-600 text-xs uppercase tracking-wider font-bold">Photo</p>
              </div>
            </FadeInSection>

            {/* Bio text */}
            <FadeInSection delay={200}>
              <h2 className="text-2xl md:text-4xl font-black text-white uppercase font-heading mb-6">
                Director's Bio
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                Placeholder for the filmmaker's biography. What drew you to this story?
                What made you pick up the camera and not put it down for two years?
              </p>
              <p className="text-zinc-500 text-base leading-relaxed">
                Add details about your background, previous work, and your personal
                connection to the communities in the film.
              </p>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Director's Statement */}
      <section className="py-20 md:py-28 bg-[#121212]">
        <div className="max-w-3xl mx-auto px-6">
          <FadeInSection>
            <span className="text-[#FFC400] text-xs uppercase tracking-[0.3em] font-bold mb-4 block">In Their Words</span>
            <h2 className="text-2xl md:text-4xl font-black text-white uppercase font-heading mb-8">
              Director's Statement
            </h2>
          </FadeInSection>
          <FadeInSection delay={200}>
            <blockquote className="border-l-2 border-[#FFC400]/30 pl-6 md:pl-8">
              <p className="text-zinc-400 text-lg md:text-xl leading-relaxed italic font-serif">
                "Placeholder for the director's personal statement — the vision behind the film,
                the journey of making it, and what you hope it leaves people with."
              </p>
            </blockquote>
          </FadeInSection>
        </div>
      </section>
    </main>
  );
}
