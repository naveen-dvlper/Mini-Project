import React from 'react';
import { Clock, LineChart, ShieldCheck } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Clock,
      step: '01',
      title: 'Track Active Duration',
      description: 'Collects structured session data including active editor dwell time and subjective fatigue ratings.'
    },
    {
      icon: LineChart,
      step: '02',
      title: 'OLS Machine Learning',
      description: 'Uses Scikit-learn to fit an Ordinary Least Squares regression line (y = mx + c) correlating hours with recorded defects.'
    },
    {
      icon: ShieldCheck,
      step: '03',
      title: 'Proactive Alerting',
      description: 'Flask backend dynamically renders forecasts to help developers schedule rest pauses before code quality degrades.'
    }
  ];

  return (
    <section id="how-it-works" className="py-16 max-w-4xl mx-auto px-6 border-t border-slate-200 dark:border-slate-800">
      <div className="text-center max-w-xl mx-auto mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          How It Works
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          A lightweight, three-stage pipeline connecting developer habit logs to predictive quality analytics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((s) => {
          const Icon = s.icon;
          return (
            <div 
              key={s.step} 
              className="p-6 rounded-xl border bg-white dark:bg-[#121721] border-slate-200 dark:border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-xs font-mono text-slate-400 mb-1">Step {s.step}</div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{s.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {s.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
