import React from 'react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToCalculator = () => {
    const el = document.getElementById('calculator');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-20 pb-16 text-center max-w-3xl mx-auto px-6">
      <div className="inline-flex items-center gap-2 text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-3 py-1 rounded-full mb-6">
        GNIOT Department of Computer Science & Engineering
      </div>

      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight mb-5">
        Predict software bugs before fatigue sets in.
      </h1>

      <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto">
        Prolonged coding causes cognitive fatigue, which increases defects. DevPulse uses Ordinary Least Squares linear regression (<span className="font-mono text-sm font-semibold">y = mx + c</span>) to estimate expected bug volume from your planned coding hours.
      </p>

      <div className="flex items-center justify-center gap-4">
        <button
          onClick={scrollToCalculator}
          className="px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
        >
          <span>Calculate Bug Risk</span>
          <ArrowDown className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
