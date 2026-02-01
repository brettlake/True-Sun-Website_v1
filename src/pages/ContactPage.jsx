import { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import Button from '../components/Button';
import FadeInSection from '../components/FadeInSection';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('success');
  };

  return (
    <main className="relative flex-grow">
      {/* Page Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-black overflow-hidden">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-[#FFC400] rounded-full blur-[160px] opacity-[0.03]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <FadeInSection>
            <span className="text-[#FFC400] text-xs uppercase tracking-[0.3em] font-bold mb-4 block">Get in Touch</span>
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase font-heading mb-6">
              Contact
            </h1>
            <div className="flex justify-center">
              <span className="h-px w-20 bg-gradient-to-r from-transparent via-[#FFC400]/40 to-transparent" aria-hidden="true" />
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 md:py-28 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="md:grid md:grid-cols-5 md:gap-16">
            {/* Info */}
            <div className="md:col-span-2 mb-12 md:mb-0">
              <FadeInSection>
                <h2 className="text-xl font-black text-white uppercase font-heading mb-6">
                  Reach Out
                </h2>
                <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                  For press inquiries, screening requests, or general questions about the film.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail size={16} className="text-[#FFC400]" />
                    <span className="text-zinc-400 text-sm">contact@truesunfilm.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={16} className="text-[#FFC400]" />
                    <span className="text-zinc-400 text-sm">Washington, DC</span>
                  </div>
                </div>
              </FadeInSection>
            </div>

            {/* Form */}
            <div className="md:col-span-3">
              <FadeInSection delay={200}>
                {status === 'success' ? (
                  <div className="bg-[#FFC400]/10 border border-[#FFC400] p-8 text-center" role="status">
                    <h3 className="text-2xl font-black text-white uppercase font-heading mb-2">Message Sent</h3>
                    <p className="text-zinc-400 text-sm">We'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="contact-name" className="sr-only">Name</label>
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="YOUR NAME"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#1a1a1a] text-white placeholder-zinc-500 px-6 py-4 focus:outline-none focus:ring-1 focus:ring-[#FFC400] uppercase font-bold tracking-wider text-sm border border-zinc-800"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="sr-only">Email</label>
                      <input
                        id="contact-email"
                        type="email"
                        placeholder="YOUR EMAIL"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#1a1a1a] text-white placeholder-zinc-500 px-6 py-4 focus:outline-none focus:ring-1 focus:ring-[#FFC400] uppercase font-bold tracking-wider text-sm border border-zinc-800"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-message" className="sr-only">Message</label>
                      <textarea
                        id="contact-message"
                        placeholder="YOUR MESSAGE"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-[#1a1a1a] text-white placeholder-zinc-500 px-6 py-4 focus:outline-none focus:ring-1 focus:ring-[#FFC400] uppercase font-bold tracking-wider text-sm border border-zinc-800 resize-none"
                      />
                    </div>
                    <Button type="submit" variant="primary" className="w-full md:w-auto">
                      Send Message <Send size={16} />
                    </Button>
                  </form>
                )}
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
