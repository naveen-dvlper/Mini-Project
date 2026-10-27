import React from 'react';
import { School, Terminal } from 'lucide-react';

export default function AboutProject() {
  return (
    <section id="about" className="py-16 max-w-4xl mx-auto px-6 border-t border-slate-200 dark:border-slate-800">
      <div className="p-6 sm:p-8 rounded-xl border bg-slate-50 dark:bg-[#121721] border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-blue-400 mb-2">
          <School className="w-4 h-4" />
          <span>Academic Project Overview</span>
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
          Data-Driven Coding Habit & Productivity Analytics Dashboard
        </h3>

        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
          Developed at the Department of Computer Science & Engineering, Greater Noida Institute of Technology (GNIOT). Guided by Dr. Daya Shankar Shrivastava and Ms. Ritu Sharma, the project demonstrates that developer coding duration can serve as an effective predictor for software defect volume.
        </p>

        <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400 font-mono">
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-blue-500" />
            <span>Python · Pandas · Scikit-learn · Flask · Jinja2</span>
          </div>
          <div>
            Affiliated to Dr. A.P.J. Abdul Kalam Technical University (AKTU)
          </div>
        </div>
      </div>
    </section>
  );
}
