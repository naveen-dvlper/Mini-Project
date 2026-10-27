import React, { useState } from 'react';
import { School, BookOpen, Copy, Check, ExternalLink } from 'lucide-react';

export default function AcademicCitation() {
  const [copiedBib, setCopiedBib] = useState(false);
  const [copiedApa, setCopiedApa] = useState(false);

  const bibtex = `@techreport{devpulse_gniot_2026,
  title       = {Data-Driven Coding Habit & Productivity Analytics Dashboard},
  author      = {Department of Computer Science and Engineering Cohort},
  institution = {Greater Noida Institute of Technology (GNIOT)},
  address     = {Greater Noida, Uttar Pradesh, India},
  year        = {2026},
  note        = {Supervised by Dr. Daya Shankar Shrivastava and Ms. Ritu Sharma}
}`;

  const apaCitation = 'Department of CSE, GNIOT. (2026). Data-Driven Coding Habit & Productivity Analytics Dashboard. Greater Noida Institute of Technology (Supervised by Dr. Daya Shankar Shrivastava & Ms. Ritu Sharma).';

  const copyBib = () => {
    navigator.clipboard.writeText(bibtex);
    setCopiedBib(true);
    setTimeout(() => setCopiedBib(false), 2000);
  };

  const copyApa = () => {
    navigator.clipboard.writeText(apaCitation);
    setCopiedApa(true);
    setTimeout(() => setCopiedApa(false), 2000);
  };

  return (
    <section className="py-16 border-b transition-colors bg-slate-50/50 dark:bg-[#0c1017] border-slate-200 dark:border-[#212836]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-lg border p-6 sm:p-8 transition-colors bg-white dark:bg-[#161b22] border-slate-200 dark:border-[#30363d]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Institute Details */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-blue-400">
                <School className="w-4 h-4" />
                <span>Academic Project Attribution</span>
              </div>

              <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                Greater Noida Institute of Technology (GNIOT)
              </h3>

              <div className="text-xs sm:text-sm text-slate-600 dark:text-[#8b949e] leading-relaxed space-y-2">
                <p>
                  <strong className="text-slate-900 dark:text-white">Department:</strong> Computer Science and Engineering (CSE).
                </p>
                <p>
                  <strong className="text-slate-900 dark:text-white">Affiliation:</strong> Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow · Approved by AICTE, Delhi.
                </p>
                <p>
                  <strong className="text-slate-900 dark:text-white">Project Supervisors:</strong> Dr. Daya Shankar Shrivastava and Ms. Ritu Sharma.
                </p>
              </div>

              {/* Citations list */}
              <div className="pt-3 border-t border-slate-100 dark:border-[#212836]">
                <div className="text-xs font-mono text-slate-500 dark:text-[#8b949e] mb-1.5">References from Paper (Chapter 9):</div>
                <ul className="text-[11px] font-mono text-slate-500 dark:text-[#7d8590] space-y-1">
                  <li>[1] McKinney, W. — Data Structures for Statistical Computing in Python</li>
                  <li>[2] Pedregosa et al. — Scikit-learn: Machine Learning in Python (JMLR)</li>
                  <li>[3] Grus, A. — Data Science from Scratch: First Principles with Python</li>
                </ul>
              </div>
            </div>

            {/* Citation Copy Box */}
            <div className="lg:col-span-6 rounded-md border p-4 bg-slate-50 dark:bg-[#0d1117] border-slate-200 dark:border-[#212836] space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-[#212836] text-xs font-mono">
                <span className="text-slate-500 dark:text-[#8b949e] flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <span>Cite This Research</span>
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={copyApa}
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    {copiedApa ? 'APA Copied' : 'Copy APA'}
                  </button>
                  <span className="text-slate-300 dark:text-[#30363d]">|</span>
                  <button
                    onClick={copyBib}
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    {copiedBib ? 'BibTeX Copied' : 'Copy BibTeX'}
                  </button>
                </div>
              </div>

              <pre className="text-[11px] font-mono p-2.5 rounded bg-white dark:bg-[#161b22] border border-slate-200/80 dark:border-[#30363d] text-slate-700 dark:text-[#c9d1d9] overflow-x-auto leading-relaxed select-all">
                <code>{bibtex}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
