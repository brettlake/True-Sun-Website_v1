import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Button from './Button';

const EmailForm = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');

    fetch("https://api.convertkit.com/v3/forms/9037652/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        api_key: "g59eWMdjwtyd-LuQZe_WwQ",
        email,
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Subscription failed");
        setStatus('success');
        if (onSuccess) onSuccess();
      })
      .catch((error) => {
        console.error("Form error:", error);
        setStatus('error');
      });
  };

  if (status === 'success') {
    return (
      <div className="w-full bg-[#FFC400]/10 border border-[#FFC400] p-8 text-center vintage-shadow animate-fade-in-up" role="status">
        <h3 className="text-2xl font-black text-white uppercase mb-0 font-anton">Thank you for signing up.</h3>
        <p className="text-zinc-400 text-xs mt-2 uppercase tracking-wide">We'll be in touch soon.</p>
      </div>
    );
  }

  return (
    <div className="w-full bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 p-2 md:p-3 rounded-none vintage-shadow transform transition-all hover:border-zinc-700">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row gap-2"
      >
        <label htmlFor="email-input" className="sr-only">Email address</label>
        <input
          id="email-input"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ENTER YOUR EMAIL ADDRESS"
          required
          disabled={status === 'loading'}
          className="flex-1 bg-[#1a1a1a] text-white placeholder-zinc-500 px-6 py-4 focus:outline-none focus:ring-1 focus:ring-[#FFC400] uppercase font-bold tracking-wider text-sm md:text-base border-none w-full disabled:opacity-50 transition-all"
        />
        <Button
          type="submit"
          variant="primary"
          disabled={status === 'loading'}
          className="w-full md:w-auto px-6 py-4 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Processing...' : (
            <>Get Updates <ArrowRight size={20} className="hidden md:block" /></>
          )}
        </Button>
      </form>
      {status === 'error' && (
        <p className="text-red-500 text-[10px] mt-2 uppercase tracking-wider text-center md:text-left pl-1" role="alert">
          Submission failed. Please try again later.
        </p>
      )}
      <p className="text-zinc-500 text-[10px] mt-2 uppercase tracking-wider text-center md:text-left pl-1">
        We respect your privacy. No spam.
      </p>
    </div>
  );
};

export default EmailForm;
