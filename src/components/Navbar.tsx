import React from 'react';

export default function Navbar() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 border-b transition-colors bg-white/90 dark:bg-[#0c1017]/90 backdrop-blur-md border-slate-200 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <a 
          href="#" 
          className="text-base font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-blue-600 inline-block"></span>
          <span>DevPulse</span>
        </a>

        {/* Minimal Nav */}
        <nav className="flex items-center gap-6 text-sm text-slate-600 dark:text-slate-400">
          <button 
            onClick={() => scrollTo('calculator')} 
            className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            Predictor
          </button>
          <button 
            onClick={() => scrollTo('how-it-works')} 
            className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            How it Works
          </button>
          <button 
            onClick={() => scrollTo('about')} 
            className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            About
          </button>
        </nav>
      </div>
    </header>
  );
}
