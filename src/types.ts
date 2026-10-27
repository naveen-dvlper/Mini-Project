export interface SessionLog {
  id: string;
  developer: string;
  activeHours: number;
  fatigueScore: number; // 1 to 10
  bugsRecorded: number;
  language: string;
  task: string;
  date: string;
}

export interface ModelProfile {
  id: string;
  name: string;
  tagline: string;
  slope: number;       // m
  intercept: number;   // c
  rSquared: number;
  description: string;
}

export interface PaperSection {
  id: string;
  title: string;
  chapter: string;
  summary: string;
  content: string[];
}
