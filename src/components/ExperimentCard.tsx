import { Experiment } from '../types/experiments';
import { Beaker, Clock, Zap } from 'lucide-react';

interface ExperimentCardProps {
  experiment: Experiment;
  onSelect: () => void;
}

export function ExperimentCard({ experiment, onSelect }: ExperimentCardProps) {
  const difficultyColors = {
    Easy: 'bg-green-100 text-green-800',
    Medium: 'bg-yellow-100 text-yellow-800',
    Hard: 'bg-red-100 text-red-800'
  };

  const categoryColors = {
    Chemistry: 'bg-purple-500',
    Physics: 'bg-blue-500',
    Biology: 'bg-green-500'
  };

  return (
    <div
      onClick={onSelect}
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 overflow-hidden group"
    >
      <div className={`h-3 ${categoryColors[experiment.category as keyof typeof categoryColors] || 'bg-gray-500'}`}></div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
            {experiment.title}
          </h3>
          <Beaker className="text-gray-400 group-hover:text-blue-500 transition-colors" size={24} />
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2">
          {experiment.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${difficultyColors[experiment.difficulty]}`}>
            {experiment.difficulty}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
            {experiment.category}
          </span>
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{experiment.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Zap size={16} />
            <span>{experiment.steps.length} steps</span>
          </div>
        </div>

        <button className="mt-4 w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform group-hover:scale-105">
          Start Experiment
        </button>
      </div>
    </div>
  );
}
