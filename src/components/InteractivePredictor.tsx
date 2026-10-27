import React, { useState } from 'react';

export default function InteractivePredictor() {
  const [hours, setHours] = useState<number>(6.5);
  const [fatigueLevel, setFatigueLevel] = useState<'low' | 'medium' | 'high'>('medium');

  // Linear regression coefficients: y = mx + c
  const slope = 1.34;
  const intercept = 0.62;
  const fatigueBonus = fatigueLevel === 'high' ? 1.8 : fatigueLevel === 'medium' ? 0.6 : 0;
  
  const expectedBugs = Math.max(0, slope * hours + intercept + fatigueBonus).toFixed(1);
  const bugsPerHour = (Number(expectedBugs) / hours).toFixed(1);

  // SVG chart parameters
  const chartW = 460;
  const chartH = 200;
  const pad = { left: 40, right: 20, top: 20, bottom: 35 };
  const maxHours = 12;
  const maxBugs = 20;

  const toX = (h: number) => pad.left + (h / maxHours) * (chartW - pad.left - pad.right);
  const toY = (b: number) => chartH - pad.bottom - (b / maxBugs) * (chartH - pad.top - pad.bottom);

  return (
    <section id="calculator" className="py-12 max-w-4xl mx-auto px-6">
      <div className="rounded-2xl border transition-colors bg-white dark:bg-[#121721] border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-sm">
        <div className="text-center max-w-xl mx-auto mb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
            Bug Volume Estimator
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Slide your planned coding duration to see the estimated defects based on the Ordinary Least Squares regression model (<span className="font-mono">y = mx + c</span>).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Controls */}
          <div className="md:col-span-6 space-y-6">
            {/* Planned Hours Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="duration-slider" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Planned Coding Duration
                </label>
                <span className="font-mono text-lg font-bold text-blue-600 dark:text-blue-400">
                  {hours.toFixed(1)} hrs
                </span>
              </div>
              <input
                id="duration-slider"
                type="range"
                min="1"
                max="12"
                step="0.5"
                value={hours}
                onChange={(e) => setHours(parseFloat(e.target.value))}
                className="w-full accent-blue-600 h-2 bg-slate-200 dark:bg-slate-800 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-xs text-slate-400 font-mono mt-1">
                <span>1h (Freshest)</span>
                <span>6h (Optimal)</span>
                <span>12h (Exhaustion)</span>
              </div>
            </div>

            {/* Fatigue Level */}
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Developer Fatigue State
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['low', 'medium', 'high'] as const).map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => setFatigueLevel(lvl)}
                    className={`py-2 text-xs font-medium rounded-lg border capitalize transition-colors cursor-pointer ${
                      fatigueLevel === lvl
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    {lvl === 'low' ? 'Well Rested' : lvl === 'medium' ? 'Normal' : 'Tired / Crunch'}
                  </button>
                ))}
              </div>
            </div>

            {/* Formula display */}
            <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-500 dark:text-slate-400 flex justify-between items-center">
              <span>Model Equation:</span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                y = 1.34 × {hours.toFixed(1)} + 0.62
              </span>
            </div>
          </div>

          {/* Result Card & Mini Chart */}
          <div className="md:col-span-6 flex flex-col justify-between p-6 rounded-xl bg-slate-50 dark:bg-[#0c1017] border border-slate-200 dark:border-slate-800/80">
            <div className="flex items-baseline justify-between mb-4">
              <div>
                <span className="text-xs uppercase font-semibold text-slate-500 dark:text-slate-400 tracking-wider">
                  Expected Defect Volume
                </span>
                <div className="text-4xl font-extrabold font-mono text-slate-900 dark:text-white mt-1">
                  {expectedBugs} <span className="text-base font-normal text-slate-500">bugs</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-500 dark:text-slate-400">Velocity</span>
                <div className="text-sm font-mono font-bold text-slate-800 dark:text-slate-200 mt-1">
                  {bugsPerHour} bugs/hr
                </div>
              </div>
            </div>

            {/* Clean Mini Regression Chart */}
            <div className="w-full bg-white dark:bg-[#121721] rounded-lg border border-slate-200 dark:border-slate-800 p-2 mb-4">
              <svg viewBox={`0 0 ${chartW} ${chartH}`} className="w-full h-auto select-none">
                {/* Horizontal grid */}
                {[0, 10, 20].map((v) => (
                  <g key={v}>
                    <line
                      x1={pad.left}
                      y1={toY(v)}
                      x2={chartW - pad.right}
                      y2={toY(v)}
                      stroke="currentColor"
                      className="text-slate-100 dark:text-slate-800"
                      strokeDasharray="2 3"
                    />
                    <text
                      x={pad.left - 6}
                      y={toY(v) + 4}
                      fill="currentColor"
                      className="text-slate-400"
                      fontSize="9"
                      fontFamily="monospace"
                      textAnchor="end"
                    >
                      {v}
                    </text>
                  </g>
                ))}

                {/* Vertical grid */}
                {[2, 6, 10, 12].map((h) => (
                  <g key={h}>
                    <line
                      x1={toX(h)}
                      y1={pad.top}
                      x2={toX(h)}
                      y2={chartH - pad.bottom}
                      stroke="currentColor"
                      className="text-slate-100 dark:text-slate-800"
                      strokeDasharray="2 3"
                    />
                    <text
                      x={toX(h)}
                      y={chartH - pad.bottom + 14}
                      fill="currentColor"
                      className="text-slate-400"
                      fontSize="9"
                      fontFamily="monospace"
                      textAnchor="middle"
                    >
                      {h}h
                    </text>
                  </g>
                ))}

                {/* Regression line */}
                <line
                  x1={toX(0)}
                  y1={toY(intercept)}
                  x2={toX(maxHours)}
                  y2={toY(slope * maxHours + intercept)}
                  stroke="#2563eb"
                  strokeWidth="2"
                />

                {/* Current user point */}
                <circle
                  cx={toX(hours)}
                  cy={toY(Number(expectedBugs))}
                  r="5"
                  fill="#2563eb"
                  stroke="#ffffff"
                  strokeWidth="2"
                />
              </svg>
            </div>

            {/* Practical Advice Banner */}
            <div className={`p-3 rounded-lg text-xs leading-relaxed ${
              Number(expectedBugs) > 11
                ? 'bg-rose-50 dark:bg-rose-950/20 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-900/40'
                : Number(expectedBugs) > 6
                ? 'bg-amber-50 dark:bg-amber-950/20 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-900/40'
                : 'bg-emerald-50 dark:bg-emerald-950/20 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900/40'
            }`}>
              {Number(expectedBugs) > 11
                ? '⚠️ Severe Fatigue: Defect generation spikes above 8h. Recommend pausing or splitting into two sessions.'
                : Number(expectedBugs) > 6
                ? '⚡ Moderate Caution: Pace yourself with a Pomodoro rest interval before writing core business logic.'
                : '✓ Optimal Focus: High working memory clarity. Great time for architecture and unit tests.'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
