import React, { useState } from 'react';
import { Database, Binary, Server, Layout, Copy, Check, Terminal, ExternalLink } from 'lucide-react';

export default function ArchitectureSection() {
  const [activeTab, setActiveTab] = useState<'pipeline' | 'model' | 'flask' | 'jinja'>('model');
  const [copied, setCopied] = useState(false);

  const codeFiles = {
    pipeline: {
      filename: 'data_ingestion.py',
      language: 'Python · Pandas',
      description: 'Ingests raw developer session logs, cleans null values, and separates feature matrix X (active coding duration) from target vector y (software defects).',
      code: `import pandas as pd
import numpy as np

def load_and_preprocess(filepath: str):
    """
    Ingest structured developer logs from CSV and generate
    features matrix X and defect targets y.
    """
    df = pd.read_csv(filepath)
    
    # Drop corrupted sessions with missing duration or defect logs
    df = df.dropna(subset=['active_hours', 'bugs_recorded'])
    
    # Feature matrix X (active coding hours)
    X = df[['active_hours']].to_numpy()
    
    # Target vector y (recorded defects)
    y = df['bugs_recorded'].to_numpy()
    
    return df, X, y`
    },
    model: {
      filename: 'model_engine.py',
      language: 'Python · Scikit-learn',
      description: 'Fits an Ordinary Least Squares (OLS) linear regression model that calculates optimal slope m and intercept c by minimizing residual sum of squares.',
      code: `from sklearn.linear_model import LinearRegression
from sklearn.metrics import r2_score
import numpy as np

def train_ols_regressor(X, y):
    """
    Fit Ordinary Least Squares model: y = mx + c
    """
    regressor = LinearRegression()
    regressor.fit(X, y)
    
    m_slope = regressor.coef_[0]
    c_intercept = regressor.intercept_
    
    # Goodness of fit evaluation
    y_pred = regressor.predict(X)
    r2 = r2_score(y, y_pred)
    
    print(f"Fitted Equation: y = {m_slope:.2f}x + {c_intercept:.2f} (R2={r2:.2f})")
    return regressor`
    },
    flask: {
      filename: 'app.py',
      language: 'Python · Flask 3.x',
      description: 'Flask micro-service endpoint receiving planned session parameters via HTTP query parameters and rendering dynamic predictions.',
      code: `from flask import Flask, request, render_template
import numpy as np

app = Flask(__name__)

@app.route('/predict', methods=['GET'])
def predict_defect_risk():
    # Read planned coding hours from query string
    hours = float(request.args.get('hours', 6.0))
    fatigue = float(request.args.get('fatigue', 5.0))
    
    # Calculate predicted bugs via OLS model
    predicted_bugs = float(ols_model.predict([[hours]])[0])
    
    return render_template(
        'dashboard.html',
        hours=hours,
        fatigue=fatigue,
        expected_bugs=round(predicted_bugs, 1)
    )`
    },
    jinja: {
      filename: 'templates/dashboard.html',
      language: 'HTML · Jinja2 Template',
      description: 'Dynamic server-side Jinja2 template rendering the dark-mode developer dashboard and proactive burnout alerts.',
      code: `{% extends "base.html" %}
{% block content %}
<div class="dashboard-container">
  <h2>Sprint Defect Forecast</h2>
  <div class="metric-card">
    <span class="label">Planned Duration:</span>
    <span class="value">{{ hours }} hours</span>
    <span class="label">Expected Bugs:</span>
    <span class="value text-danger">{{ expected_bugs }} defects</span>
  </div>

  {% if expected_bugs > 10.0 %}
    <div class="burnout-alert">
      <strong>High Defect Risk:</strong> Planned coding session exceeds 
      cognitive fatigue threshold. Consider scheduling a 30m break.
    </div>
  {% endif %}
</div>
{% endblock %}`
    }
  };

  const currentFile = codeFiles[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentFile.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="pipeline" className="py-20 border-b transition-colors bg-white dark:bg-[#0c1017] border-slate-200 dark:border-[#212836]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            System Design · Chapter 3 & 5
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 [text-wrap:balance]">
            The Full-Stack Analytics Pipeline
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-[#8b949e] leading-relaxed">
            The project connects developer telemetry with statistical learning through a lightweight Python workflow. No expensive infrastructure or specialized hardware is needed.
          </p>
        </div>

        {/* Architectural Visual Flow Diagram */}
        <div className="mb-12 p-6 rounded-lg border transition-colors bg-slate-50 dark:bg-[#161b22] border-slate-200 dark:border-[#30363d]">
          <div className="text-xs font-mono text-slate-500 dark:text-[#8b949e] mb-4">
            System Architecture (Fig. 1 & Fig. 2 in Research Report)
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-md border bg-white dark:bg-[#0d1117] border-slate-200 dark:border-[#212836]">
              <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-[#8b949e] mb-2">
                <span>01. Ingestion</span>
                <span className="text-blue-600 dark:text-blue-400">Pandas</span>
              </div>
              <div className="font-bold text-sm text-slate-900 dark:text-white mb-1">Activity Log Parsing</div>
              <p className="text-xs text-slate-600 dark:text-[#8b949e] leading-relaxed">
                Loads active duration, editor dwell intervals, and fatigue scores from structured CSV logs.
              </p>
            </div>

            <div className="p-4 rounded-md border bg-white dark:bg-[#0d1117] border-slate-200 dark:border-[#212836]">
              <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-[#8b949e] mb-2">
                <span>02. Analytics</span>
                <span className="text-blue-600 dark:text-blue-400">Scikit-learn</span>
              </div>
              <div className="font-bold text-sm text-slate-900 dark:text-white mb-1">OLS Regression</div>
              <p className="text-xs text-slate-600 dark:text-[#8b949e] leading-relaxed">
                Fits mathematical relationship <span className="font-mono">y = mx + c</span> minimizing least squares residual error.
              </p>
            </div>

            <div className="p-4 rounded-md border bg-white dark:bg-[#0d1117] border-slate-200 dark:border-[#212836]">
              <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-[#8b949e] mb-2">
                <span>03. Web Server</span>
                <span className="text-blue-600 dark:text-blue-400">Flask 3.x</span>
              </div>
              <div className="font-bold text-sm text-slate-900 dark:text-white mb-1">HTTP Parameter Parsing</div>
              <p className="text-xs text-slate-600 dark:text-[#8b949e] leading-relaxed">
                Accepts request arguments via <span className="font-mono">request.args.get()</span> and executes sub-millisecond inference.
              </p>
            </div>

            <div className="p-4 rounded-md border bg-white dark:bg-[#0d1117] border-slate-200 dark:border-[#212836]">
              <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-[#8b949e] mb-2">
                <span>04. Presentation</span>
                <span className="text-blue-600 dark:text-blue-400">Jinja2</span>
              </div>
              <div className="font-bold text-sm text-slate-900 dark:text-white mb-1">Dark Developer UI</div>
              <p className="text-xs text-slate-600 dark:text-[#8b949e] leading-relaxed">
                Dynamically renders predicted defect volumes, fatigue alerts, and proactive sprint recommendations.
              </p>
            </div>
          </div>
        </div>

        {/* Code Tabs Inspector */}
        <div className="rounded-lg border overflow-hidden transition-colors bg-white dark:bg-[#161b22] border-slate-200 dark:border-[#30363d]">
          {/* File Tab Strip */}
          <div className="flex flex-wrap items-center justify-between border-b px-4 bg-slate-100 dark:bg-[#0d1117] border-slate-200 dark:border-[#30363d]">
            <div className="flex items-center gap-1 overflow-x-auto py-2">
              <button
                onClick={() => setActiveTab('model')}
                className={`px-3 py-1.5 text-xs font-mono rounded transition-colors cursor-pointer whitespace-nowrap ${
                  activeTab === 'model'
                    ? 'bg-white dark:bg-[#161b22] text-slate-900 dark:text-white font-semibold border border-slate-300 dark:border-[#30363d]'
                    : 'text-slate-600 dark:text-[#8b949e] hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                model_engine.py
              </button>
              <button
                onClick={() => setActiveTab('pipeline')}
                className={`px-3 py-1.5 text-xs font-mono rounded transition-colors cursor-pointer whitespace-nowrap ${
                  activeTab === 'pipeline'
                    ? 'bg-white dark:bg-[#161b22] text-slate-900 dark:text-white font-semibold border border-slate-300 dark:border-[#30363d]'
                    : 'text-slate-600 dark:text-[#8b949e] hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                data_ingestion.py
              </button>
              <button
                onClick={() => setActiveTab('flask')}
                className={`px-3 py-1.5 text-xs font-mono rounded transition-colors cursor-pointer whitespace-nowrap ${
                  activeTab === 'flask'
                    ? 'bg-white dark:bg-[#161b22] text-slate-900 dark:text-white font-semibold border border-slate-300 dark:border-[#30363d]'
                    : 'text-slate-600 dark:text-[#8b949e] hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                app.py
              </button>
              <button
                onClick={() => setActiveTab('jinja')}
                className={`px-3 py-1.5 text-xs font-mono rounded transition-colors cursor-pointer whitespace-nowrap ${
                  activeTab === 'jinja'
                    ? 'bg-white dark:bg-[#161b22] text-slate-900 dark:text-white font-semibold border border-slate-300 dark:border-[#30363d]'
                    : 'text-slate-600 dark:text-[#8b949e] hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                dashboard.html
              </button>
            </div>

            <button
              onClick={handleCopy}
              className="py-1 px-2.5 my-2 text-xs font-mono rounded border flex items-center gap-1.5 text-slate-700 dark:text-[#c9d1d9] bg-white dark:bg-[#161f2c] border-slate-300 dark:border-[#30363d] hover:border-slate-400 dark:hover:border-[#484f58] transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-emerald-600 dark:text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy File</span>
                </>
              )}
            </button>
          </div>

          {/* Description & Code Display */}
          <div className="p-4 sm:p-6">
            <div className="text-xs text-slate-600 dark:text-[#8b949e] mb-4 pb-3 border-b border-slate-100 dark:border-[#212836]">
              <span className="font-semibold text-slate-900 dark:text-white">{currentFile.language}: </span>
              {currentFile.description}
            </div>

            <pre className="text-xs font-mono p-4 rounded-md overflow-x-auto leading-relaxed bg-slate-50 dark:bg-[#0d1117] text-slate-800 dark:text-[#c9d1d9] border border-slate-200/80 dark:border-[#212836]">
              <code>{currentFile.code}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
