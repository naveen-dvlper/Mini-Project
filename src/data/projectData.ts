import { SessionLog, ModelProfile, PaperSection } from '../types';

export const SAMPLE_ACTIVITY_DATA: SessionLog[] = [
  { id: 'LOG-01', developer: 'Alex M.', activeHours: 2.8, fatigueScore: 2.0, bugsRecorded: 2, language: 'Python', task: 'REST API routing & auth middleware', date: 'Mar 1, 2026' },
  { id: 'LOG-02', developer: 'Sarah T.', activeHours: 3.5, fatigueScore: 3.0, bugsRecorded: 3, language: 'TypeScript', task: 'React query cache revalidation', date: 'Mar 2, 2026' },
  { id: 'LOG-03', developer: 'Rohan K.', activeHours: 4.8, fatigueScore: 4.5, bugsRecorded: 5, language: 'Go', task: 'gRPC stream buffer handler', date: 'Mar 2, 2026' },
  { id: 'LOG-04', developer: 'Devin L.', activeHours: 5.5, fatigueScore: 5.5, bugsRecorded: 7, language: 'Rust', task: 'Async executor pool optimization', date: 'Mar 3, 2026' },
  { id: 'LOG-05', developer: 'Alex M.', activeHours: 6.2, fatigueScore: 6.0, bugsRecorded: 8, language: 'Python', task: 'Pandas data ingestion pipeline', date: 'Mar 3, 2026' },
  { id: 'LOG-06', developer: 'Elena V.', activeHours: 7.0, fatigueScore: 7.0, bugsRecorded: 10, language: 'Java', task: 'Spring transaction isolation', date: 'Mar 4, 2026' },
  { id: 'LOG-07', developer: 'Sarah T.', activeHours: 8.2, fatigueScore: 8.0, bugsRecorded: 12, language: 'TypeScript', task: 'Complex form multi-step reducer', date: 'Mar 4, 2026' },
  { id: 'LOG-08', developer: 'Rohan K.', activeHours: 9.5, fatigueScore: 8.8, bugsRecorded: 14, language: 'Python', task: 'Scikit-learn model evaluation script', date: 'Mar 5, 2026' },
  { id: 'LOG-09', developer: 'Devin L.', activeHours: 10.8, fatigueScore: 9.5, bugsRecorded: 17, language: 'C++', task: 'Memory arena allocator refactor', date: 'Mar 5, 2026' },
  { id: 'LOG-10', developer: 'Elena V.', activeHours: 4.0, fatigueScore: 3.5, bugsRecorded: 4, language: 'Python', task: 'Unit test harness setup', date: 'Mar 6, 2026' },
  { id: 'LOG-11', developer: 'Alex M.', activeHours: 7.8, fatigueScore: 7.5, bugsRecorded: 11, language: 'Go', task: 'Database connection retry loop', date: 'Mar 6, 2026' },
  { id: 'LOG-12', developer: 'Sarah T.', activeHours: 6.0, fatigueScore: 5.0, bugsRecorded: 7, language: 'TypeScript', task: 'Tailwind UI component library', date: 'Mar 7, 2026' }
];

export const PRESET_PROFILES: ModelProfile[] = [
  {
    id: 'standard-ols',
    name: 'Standard Sprint (Baseline)',
    tagline: 'y = 1.34x + 0.62',
    slope: 1.34,
    intercept: 0.62,
    rSquared: 0.94,
    description: 'Empirical OLS model trained across 12 diverse software development sessions recorded in the GNIOT experiment.'
  },
  {
    id: 'crunch-fatigue',
    name: 'High-Fatigue / Crunch Mode',
    tagline: 'y = 1.68x + 1.10',
    slope: 1.68,
    intercept: 1.10,
    rSquared: 0.91,
    description: 'Models aggressive deadline pressure where cognitive exhaustion compounds defect generation at accelerated rates.'
  },
  {
    id: 'modular-tdd',
    name: 'TDD / High Test Coverage',
    tagline: 'y = 0.85x + 0.40',
    slope: 0.85,
    intercept: 0.40,
    rSquared: 0.89,
    description: 'Simulates disciplined test-driven sessions where automated assertions and modular design buffer against fatigue defects.'
  }
];

export const PAPER_SECTIONS: PaperSection[] = [
  {
    id: 'abstract',
    chapter: 'Abstract',
    title: 'Data-Driven Coding Habit & Productivity Analytics Dashboard',
    summary: 'Connecting developer activity data with predictive analytics using Ordinary Least Squares regression.',
    content: [
      'Modern software development requires developers to work with high velocity and maintain consistent software quality. However, prolonged active coding can contribute to cognitive fatigue and burnout, which may increase the possibility of errors and software defects.',
      'The system tracks active coding hours and uses structured developer activity logs containing parameters such as active hours and fatigue scores. Pandas is used for data ingestion and processing, while Scikit-learn is used to implement an Ordinary Least Squares linear regression model. The model estimates expected bug volume from planned coding hours using the relationship y = mx + c.',
      'A Flask backend receives request parameters and dynamically renders predictions using Jinja2 templates. The interface is designed as a custom dark-mode developer dashboard to provide proactive session planning.'
    ]
  },
  {
    id: 'problem',
    chapter: 'Chapter 1 & 3',
    title: 'Problem Formulation & Proposed Work',
    summary: 'The critical blind spot of descriptive tracking tools.',
    content: [
      'Existing coding-time and productivity tools commonly record activity but provide limited analytical context. They may show how long a developer worked without estimating how prolonged coding could affect software quality.',
      'Traditional time trackers are mainly descriptive and focus on recording time. IDE activity loggers measure raw editor activity but do not connect it with defect generation.',
      'A lightweight predictive dashboard bridges empirical time tracking with statistical machine learning, allowing developers to plan sessions before cognitive exhaustion occurs.'
    ]
  },
  {
    id: 'methodology',
    chapter: 'Chapter 5',
    title: 'Methodology & Implementation Flow',
    summary: 'From telemetry logs to Scikit-learn regression and Flask integration.',
    content: [
      'Data Ingestion: Structured developer activity logs containing active coding hours and fatigue scores are read and processed using Pandas and NumPy.',
      'Analytics Engine: An Ordinary Least Squares (OLS) linear regression model is fitted using Scikit-learn, yielding y = mx + c.',
      'Web Integration: A Flask backend receives HTTP request parameters through request.args.get() and Jinja2 templates dynamically render predictions.',
      'Overall Flow: Developer Activity Data → Pandas Preprocessing → Regression Model → Predicted Bugs → Flask/Jinja2 Dashboard.'
    ]
  },
  {
    id: 'feasibility',
    chapter: 'Chapter 4',
    title: 'Feasibility Study & System Specifications',
    summary: 'Hardware requirements and zero-cost open-source infrastructure.',
    content: [
      'Processor: Dual-Core Intel Core i3 / AMD Ryzen 3 or higher, 2.0 GHz+',
      'RAM: 4 GB minimum; 8 GB recommended',
      'Storage: 250 MB free space',
      'Software Stack: Python 3.9+, Pandas, NumPy, Scikit-learn, Flask 3.x, Jinja2, HTML5/CSS3',
      'Economic Viability: The project primarily uses Python and open-source libraries. No specialized hardware or proprietary cloud licenses are required.'
    ]
  },
  {
    id: 'future',
    chapter: 'Chapter 8',
    title: 'Future Scope & Limitations',
    summary: 'Multi-variate regression, code complexity metrics, and PostgreSQL migration.',
    content: [
      'Transition from simple linear regression to multiple linear regression using code complexity and syntax metrics (Cyclomatic Complexity, Halstead metrics).',
      'Integrate dynamic historical charts for daily coding trends and automated burnout alert thresholds.',
      'Migrate backend data storage to PostgreSQL for multi-user enterprise scalability.',
      'Current limitation: Simple linear regression assumes a linear relationship; real-world fatigue may exhibit non-linear thresholds.'
    ]
  }
];
