import React, { useState } from 'react';
import { Clock, Cpu, Brain, CheckCircle2, XCircle, AlertCircle } from 'lucide-react';

export default function ProblemSection() {
  const [selectedHour, setSelectedHour] = useState<number>(6);

  const timelinePhases = [
    {
      hour: 2,
      phase: 'Flow State & Syntax Precision',
      workingMemory: '95%',
      defectRate: '0.4 bugs/hr',
      description: 'High cognitive retention. Abstractions remain clean, test cases are thorough, and mental model of the codebase is sharp.',
      risk: 'Optimal'
    },
    {
      hour: 4,
      phase: 'Linear Productivity Plateau',
      workingMemory: '80%',
      defectRate: '1.0 bugs/hr',
      description: 'Steady implementation pace. Minor syntax slips caught by linter, but overall logic flow remains stable.',
      risk: 'Normal'
    },
    {
      hour: 6,
      phase: 'Attention Decay & Cognitive Drag',
      workingMemory: '60%',
      defectRate: '1.8 bugs/hr',
      description: 'Working memory begins to degrade. Developers rely on hasty assumptions rather than verifying edge conditions and null checks.',
      risk: 'Caution'
    },
    {
      hour: 8,
      phase: 'Fatigue Threshold & Compounding Bugs',
      workingMemory: '40%',
      defectRate: '2.6 bugs/hr',
      description: 'Severe cognitive fatigue. Complex multithreaded logic or refactors undertaken now yield high regression rates.',
      risk: 'High Risk'
    },
    {
      hour: 10,
      phase: 'Critical Exhaustion & Regressive Commits',
      workingMemory: '25%',
      defectRate: '3.8+ bugs/hr',
      description: 'Severe exhaustion. Keystroke count remains high, but code review rejections and rollbacks spike by over 200%.',
      risk: 'Critical'
    }
  ];

  const currentPhase = timelinePhases.find(p => p.hour >= selectedHour) || timelinePhases[timelinePhases.length - 1];

  return (
    <section id="problem" className="py-20 border-b transition-colors bg-white dark:bg-[#0c1017] border-slate-200 dark:border-[#212836]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            The Problem · Why Traditional Metrics Fail
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 [text-wrap:balance]">
            The illusion of the 10-hour coding sprint.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-[#8b949e] leading-relaxed">
            Existing developer tools measure time spent, not the cognitive cost of prolonged sessions. When working memory decays, raw lines of code stay high, but defect rates compound rapidly.
          </p>
        </div>

        {/* Interactive Attention Decay Timeline */}
        <div className="mb-16 p-6 rounded-lg border transition-colors bg-slate-50 dark:bg-[#161b22] border-slate-200 dark:border-[#30363d]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200 dark:border-[#30363d]">
            <div>
              <div className="text-xs font-mono text-slate-500 dark:text-[#8b949e]">Interactive Timeline</div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                How Continuous Session Hours Corrode Working Memory
              </h3>
            </div>
            <div className="text-xs font-mono text-slate-500 dark:text-[#8b949e]">
              Click a sprint milestone below to inspect cognitive decay
            </div>
          </div>

          {/* Stepper Buttons */}
          <div className="grid grid-cols-5 gap-2 sm:gap-3 mb-6">
            {timelinePhases.map((phase) => (
              <button
                key={phase.hour}
                onClick={() => setSelectedHour(phase.hour)}
                className={`p-3 rounded-md border text-center transition-all cursor-pointer ${
                  selectedHour === phase.hour
                    ? 'bg-white dark:bg-[#0d1117] border-blue-600 dark:border-blue-500 shadow-xs'
                    : 'bg-white/60 dark:bg-[#0d1117]/60 border-slate-200 dark:border-[#212836] hover:border-slate-300 dark:hover:border-[#30363d]'
                }`}
              >
                <div className="text-xs font-mono text-slate-500 dark:text-[#8b949e]">Sprint</div>
                <div className="text-base font-bold font-mono text-slate-900 dark:text-white">{phase.hour}h</div>
                <div className={`text-[10px] font-mono mt-1 ${
                  phase.risk === 'Optimal' ? 'text-emerald-600 dark:text-emerald-400' :
                  phase.risk === 'Normal' ? 'text-blue-600 dark:text-blue-400' :
                  phase.risk === 'Caution' ? 'text-amber-600 dark:text-amber-400' :
                  'text-rose-600 dark:text-rose-400'
                }`}>
                  {phase.risk}
                </div>
              </button>
            ))}
          </div>

          {/* Milestone Details Card */}
          <div className="p-4 sm:p-5 rounded-md border bg-white dark:bg-[#0d1117] border-slate-200 dark:border-[#30363d]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-8">
                <div className="text-xs font-mono text-blue-600 dark:text-blue-400 mb-1">
                  Sprint Milestone: {currentPhase.hour} Hours Continuous Active Coding
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {currentPhase.phase}
                </h4>
                <p className="text-sm text-slate-600 dark:text-[#8b949e] leading-relaxed">
                  {currentPhase.description}
                </p>
              </div>

              <div className="md:col-span-4 grid grid-cols-2 gap-3 font-mono text-xs">
                <div className="p-3 rounded bg-slate-50 dark:bg-[#161b22] border border-slate-200 dark:border-[#212836]">
                  <div className="text-slate-500 dark:text-[#8b949e] mb-1">Working Memory</div>
                  <div className="text-xl font-bold text-slate-900 dark:text-white">{currentPhase.workingMemory}</div>
                </div>
                <div className="p-3 rounded bg-slate-50 dark:bg-[#161b22] border border-slate-200 dark:border-[#212836]">
                  <div className="text-slate-500 dark:text-[#8b949e] mb-1">Defect Velocity</div>
                  <div className="text-xl font-bold text-slate-900 dark:text-white">{currentPhase.defectRate}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Tooling Approaches Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg border transition-colors bg-white dark:bg-[#161b22] border-slate-200 dark:border-[#30363d]">
            <div className="w-8 h-8 rounded bg-slate-100 dark:bg-[#212836] flex items-center justify-center text-slate-600 dark:text-[#8b949e] mb-4">
              <Clock className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
              Descriptive Trackers
            </h3>
            <p className="text-xs text-slate-600 dark:text-[#8b949e] leading-relaxed mb-4">
              Toggl and Clockify log timesheets for billing. They tell your client you coded for 9 hours, but give zero warning that hour 8 introduced three regression bugs.
            </p>
            <div className="text-xs font-mono text-rose-600 dark:text-rose-400 flex items-center gap-1.5 pt-3 border-t border-slate-100 dark:border-[#212836]">
              <XCircle className="w-3.5 h-3.5 shrink-0" />
              <span>Zero quality foresight</span>
            </div>
          </div>

          <div className="p-6 rounded-lg border transition-colors bg-white dark:bg-[#161b22] border-slate-200 dark:border-[#30363d]">
            <div className="w-8 h-8 rounded bg-slate-100 dark:bg-[#212836] flex items-center justify-center text-slate-600 dark:text-[#8b949e] mb-4">
              <Cpu className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
              IDE Telemetry Loggers
            </h3>
            <p className="text-xs text-slate-600 dark:text-[#8b949e] leading-relaxed mb-4">
              WakaTime tracks active editor focus and language splits. While granular, editor heartbeats stay strictly siloed from issue trackers and defect reporting.
            </p>
            <div className="text-xs font-mono text-rose-600 dark:text-rose-400 flex items-center gap-1.5 pt-3 border-t border-slate-100 dark:border-[#212836]">
              <XCircle className="w-3.5 h-3.5 shrink-0" />
              <span>Disconnected from bugs</span>
            </div>
          </div>

          <div className="p-6 rounded-lg border transition-colors bg-blue-50/50 dark:bg-[#161f2c] border-blue-200 dark:border-blue-900/50">
            <div className="w-8 h-8 rounded bg-blue-600/10 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
              <Brain className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
              DevPulse Predictive Analytics
            </h3>
            <p className="text-xs text-slate-600 dark:text-[#8b949e] leading-relaxed mb-4">
              Combines structured activity logs with Scikit-learn OLS linear regression (<span className="font-mono">y = mx + c</span>) to forecast bug volume prior to starting crunch sessions.
            </p>
            <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-3 border-t border-blue-200/60 dark:border-blue-900/40">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span>Proactive defect prevention</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
