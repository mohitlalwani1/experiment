export interface Experiment {
  id: string;
  title: string;
  category: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  duration: string;
  materials: string[];
  steps: ExperimentStep[];
  funFact: string;
  safetyTips: string[];
}

export interface ExperimentStep {
  id: number;
  instruction: string;
  action?: {
    type: 'mix' | 'heat' | 'cool' | 'shake' | 'wait' | 'observe' | 'measure';
    duration?: number;
  };
  observation?: string;
  visual?: {
    before: string;
    after: string;
  };
}
