import React from 'react';
import { Check, X, Info } from 'lucide-react';

export default function ComparativeStudy() {
  const comparisonRows = [
    {
      feature: 'Active Time Tracking',
      basic: 'Manual Start/Stop Timer',
      ide: 'Automated IDE Heartbeats',
      devpulse: 'Automated Session Dwell',
      highlight: false
    },
    {
      feature: 'Language & File Context',
      basic: 'Coarse project tag',
      ide: 'Per-file telemetry',
      devpulse: 'Repository & stack context',
      highlight: false
    },
    {
      feature: 'Defect Volume Forecasting',
      basic: 'No',
      ide: 'No',
      devpulse: 'Yes (OLS y = mx + c)',
      highlight: true
    },
    {
      feature: 'Cognitive Fatigue Modeling',
      basic: 'None',
      ide: 'Passive time only',
      devpulse: 'Fatigue score weighting',
      highlight: true
    },
    {
      feature: 'Machine Learning Algorithm',
      basic: 'None',
      ide: 'None (Aggregated sums)',
      devpulse: 'Scikit-learn OLS Regression',
      highlight: true
    },
    {
      feature: 'Proactive Sprint Advisory',
      basic: 'None (Pure retrospective)',
      ide: 'None (Retrospective reports)',
      devpulse: 'Pre-session burnout warnings',
      highlight: true
    },
    {
      feature: 'Infrastructure & Licensing Cost',
      basic: '$10–$20 / dev / month',
      ide: 'Freemium / $9 / month',
      devpulse: '100% Free Open-Source Stack',
      highlight: true
    },
    {
      feature: 'Extensibility for Multi-Variate ML',
      basic: 'Closed SaaS database',
      ide: 'Restricted REST exports',
      devpulse: 'Open Python / Pandas scripts',
      highlight: false
    }
  ];

  return (
    <section id="benchmarks" className="py-20 border-b transition-colors bg-slate-50/50 dark:bg-[#0c1017] border-slate-200 dark:border-[#212836]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            Chapter 6 · Benchmarks & Comparative Study
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 [text-wrap:balance]">
            Benchmarking Against Existing Developer Tools
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-[#8b949e] leading-relaxed">
            Directly mapped from Tables 3 & 4 of the research report. Traditional tools record what happened yesterday; DevPulse forecasts defect exposure before writing code.
          </p>
        </div>

        {/* Matrix Table */}
        <div className="rounded-lg border overflow-hidden shadow-xs transition-colors bg-white dark:bg-[#161b22] border-slate-200 dark:border-[#30363d]">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b font-mono text-xs bg-slate-100 dark:bg-[#0d1117] border-slate-200 dark:border-[#30363d]">
                  <th className="py-3.5 px-5 font-semibold text-slate-700 dark:text-[#8b949e] w-1/3">
                    Evaluation Dimension
                  </th>
                  <th className="py-3.5 px-5 font-semibold text-slate-500 dark:text-[#8b949e] w-1/5">
                    Basic Time Trackers
                  </th>
                  <th className="py-3.5 px-5 font-semibold text-slate-500 dark:text-[#8b949e] w-1/5">
                    IDE Activity Loggers
                  </th>
                  <th className="py-3.5 px-5 font-semibold text-blue-600 dark:text-blue-400 w-1/4 bg-blue-50/50 dark:bg-[#161f2c] border-l border-blue-200 dark:border-blue-900/50">
                    DevPulse Dashboard
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-[#212836] font-mono text-xs">
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="hover:bg-slate-50 dark:hover:bg-[#161f2c]/50 transition-colors">
                    <td className="py-3.5 px-5 font-sans text-sm font-medium text-slate-900 dark:text-white">
                      {row.feature}
                    </td>
                    <td className="py-3.5 px-5 text-slate-600 dark:text-[#8b949e]">
                      {row.basic}
                    </td>
                    <td className="py-3.5 px-5 text-slate-600 dark:text-[#8b949e]">
                      {row.ide}
                    </td>
                    <td className="py-3.5 px-5 bg-blue-50/30 dark:bg-[#161f2c]/70 border-l border-blue-200 dark:border-blue-900/50 font-semibold text-slate-900 dark:text-white">
                      <div className="flex items-center gap-2">
                        {row.highlight && (
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0" />
                        )}
                        <span>{row.devpulse}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Research Caveats / Footnote (Chapter 3.4) */}
          <div className="p-4 bg-slate-50 dark:bg-[#0d1117] border-t border-slate-200 dark:border-[#30363d] flex items-start gap-2.5 text-xs text-slate-500 dark:text-[#8b949e]">
            <Info className="w-4 h-4 shrink-0 text-slate-400 dark:text-[#7d8590] mt-0.5" />
            <p className="leading-relaxed">
              <strong>Academic Note on Research Limitations (Section 3.4):</strong> The prototype applies univariate Ordinary Least Squares regression as a lightweight baseline. Future iterations will incorporate multiple linear regression using AST complexity, cyclomatic code metrics, and PostgreSQL storage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
