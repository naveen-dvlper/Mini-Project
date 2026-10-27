import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-slate-200 dark:border-slate-800 text-center text-xs text-slate-500 dark:text-slate-400 font-mono">
      <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div>
          DevPulse · Coding Habit & Productivity Analytics
        </div>
        <div>
          GNIOT Department of Computer Science & Engineering
        </div>
      </div>
    </footer>
  );
}
