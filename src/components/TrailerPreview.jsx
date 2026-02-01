import { Play } from 'lucide-react';

const TrailerPreview = () => (
  <div
    className="w-full max-w-2xl aspect-video bg-zinc-900 border border-zinc-800 mb-10 relative group cursor-pointer shadow-2xl overflow-hidden rounded-sm transition-all duration-300 hover:border-zinc-700"
    role="button"
    tabIndex={0}
    aria-label="Play official trailer"
    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') e.currentTarget.click(); }}
  >
    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-all duration-300">
      <div className="w-16 h-16 md:w-20 md:h-20 bg-[#FFC400] rounded-full flex items-center justify-center pl-1 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
        <Play size={32} className="text-black fill-current" />
      </div>
    </div>
    <div className="absolute bottom-4 left-4 text-left">
      <p className="text-white font-bold uppercase tracking-wider text-sm">Official Trailer</p>
      <p className="text-zinc-400 text-xs">2:34</p>
    </div>
  </div>
);

export default TrailerPreview;
