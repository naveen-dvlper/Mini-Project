import React from 'react';
import { Cpu, Sparkles, Database, GitBranch, Bell, LineChart, ShieldCheck } from 'lucide-react';

export default function FeasibilityAndRoadmap() {
  const specs = [
    { label: 'Processor', requirement: 'Dual-Core Intel i3 / AMD Ryzen 3 or higher (2.0 GHz+)' },
    { label: 'System Memory', requirement: '4 GB RAM minimum (8 GB recommended)' },
    { label: 'Storage Footprint', requirement: '250 MB free disk space' },
    { label: 'Display Resolution', requirement: '1366×768 minimum (1080p recommended)' },
    { label: 'Operating System', requirement: 'Linux, macOS 11+, or Windows 10/11' },
    { label: 'Python Stack', requirement: 'Python 3.9+, Pandas, Scikit-learn, Flask 3.x' }
  ];

  const futureGoals = [
    {
      title: 'Multiple Linear Regression with Code Complexity',
      detail: 'Extend beyond univariate active hours to model Cyclomatic Complexity, Halstead volume metrics, and AST syntax tokens.',
      status: 'Next Academic Phase',
      icon: LineChart
    },
    {
      title: 'Automated Fatigue Alerts & Pomodoro Hooks',
      detail: 'Trigger proactive system notifications when continuous coding exceeds safe cognitive limits (e.g. 7+ hours uninterrupted).',
      status: 'Planned Feature',
      icon: Bell
    },
    {
      title: 'PostgreSQL Multi-User Database Scaling',
      detail: 'Migrate local CSV session logs into a relational PostgreSQL database schema for multi-tenant engineering teams.',
      status: 'Planned Architecture',
      icon: Database
    },
    {
      title: 'VCS & Git Repository Quality Linkage',
      detail: 'Link pull request defects, rollbacks, and bug tracker issues with corresponding developer session timestamps.',
      status: 'Future Scope',
      icon: GitBranch
    }
  ];

  return (
    <section id="feasibility" className="py-20 border-b transition-colors bg-white dark:bg-[#0c1017] border-slate-200 dark:border-[#212836]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            Chapter 4 & 8 · Feasibility & Future Scope
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 [text-wrap:balance]">
            Engineering Feasibility & Future Roadmap
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-[#8b949e] leading-relaxed">
            Engineered to operate on everyday developer laptops with zero specialized hardware, while architected for future multi-variate statistical expansion.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Hardware & Software Specs (Chapter 4, Table 1) */}
          <div className="lg:col-span-5 rounded-lg border p-6 transition-colors bg-slate-50 dark:bg-[#161b22] border-slate-200 dark:border-[#30363d]">
            <div className="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-blue-400 mb-1">
              <Cpu className="w-4 h-4" />
              <span>Chapter 4 · Table 1 Specifications</span>
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3">
              Technical & Economic Viability
            </h3>
            <p className="text-xs text-slate-600 dark:text-[#8b949e] leading-relaxed mb-6">
              Because Ordinary Least Squares computes closed-form matrix math, inference consumes less than 1% CPU utilization on any modern machine.
            </p>

            <div className="space-y-2.5 font-mono text-xs">
              {specs.map((s) => (
                <div 
                  key={s.label}
                  className="p-2.5 rounded border flex flex-col sm:flex-row sm:items-center justify-between gap-1 bg-white dark:bg-[#0d1117] border-slate-200 dark:border-[#212836]"
                >
                  <span className="text-slate-500 dark:text-[#8b949e] font-semibold">{s.label}:</span>
                  <span className="text-slate-800 dark:text-[#c9d1d9] sm:text-right">{s.requirement}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-[#212836] flex items-center justify-between text-xs font-mono">
              <span className="text-slate-500 dark:text-[#8b949e]">Licensing Cost:</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">$0.00 (100% Open Source)</span>
            </div>
          </div>

          {/* Future Scope (Chapter 8) */}
          <div className="lg:col-span-7 rounded-lg border p-6 transition-colors bg-white dark:bg-[#161b22] border-slate-200 dark:border-[#30363d]">
            <div className="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-blue-400 mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Chapter 8 · Roadmap</span>
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3">
              Planned Scientific Enhancements
            </h3>
            <p className="text-xs text-slate-600 dark:text-[#8b949e] leading-relaxed mb-6">
              Proposed extensions outlined in the research report to scale DevPulse from single-developer prototype to team-wide engineering intelligence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {futureGoals.map((g) => {
                const IconComponent = g.icon;
                return (
                  <div 
                    key={g.title}
                    className="p-4 rounded-md border flex flex-col justify-between bg-slate-50 dark:bg-[#0d1117] border-slate-200 dark:border-[#212836]"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2.5">
                        <div className="w-7 h-7 rounded bg-white dark:bg-[#161b22] border border-slate-200 dark:border-[#30363d] flex items-center justify-center text-blue-600 dark:text-blue-400">
                          <IconComponent className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-[10px] font-mono text-blue-600 dark:text-blue-400 font-medium">
                          {g.status}
                        </span>
                      </div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-1.5">{g.title}</h4>
                      <p className="text-xs text-slate-600 dark:text-[#8b949e] leading-relaxed">
                        {g.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
