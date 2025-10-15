import { useState } from 'react';
import { ExperimentCard } from './components/ExperimentCard';
import { ExperimentViewer } from './components/ExperimentViewer';
import { Game3D } from './components/Game3D';
import { experiments } from './data/experiments';
import { ncertExperiments } from './data/ncertExperiments';
import { Experiment } from './types/experiments';
import { Beaker, Search, Filter, Gamepad2 } from 'lucide-react';

function App() {
  const [selectedExperiment, setSelectedExperiment] = useState<Experiment | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [filterDifficulty, setFilterDifficulty] = useState<string>('All');
  const [gameMode, setGameMode] = useState(false);

  const allExperiments = [...experiments, ...ncertExperiments];

  const categories = ['All', 'Chemistry', 'Physics', 'Biology'];
  const difficulties = ['All', 'Easy', 'Medium', 'Hard'];

  const filteredExperiments = allExperiments.filter(exp => {
    const matchesSearch = exp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         exp.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === 'All' || exp.category === filterCategory;
    const matchesDifficulty = filterDifficulty === 'All' || exp.difficulty === filterDifficulty;
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  if (gameMode) {
    return (
      <div className="relative">
        <Game3D
          experiments={allExperiments}
          onSelectExperiment={(exp) => {
            setSelectedExperiment(exp);
            setGameMode(false);
          }}
        />
        <button
          onClick={() => setGameMode(false)}
          className="absolute top-8 left-8 px-6 py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 font-bold shadow-2xl"
        >
          Exit Game
        </button>
      </div>
    );
  }

  if (selectedExperiment) {
    return (
      <ExperimentViewer
        experiment={selectedExperiment}
        onBack={() => setSelectedExperiment(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-cyan-50">
      <div className="bg-white shadow-lg mb-8">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-600 p-4 rounded-2xl shadow-lg">
                <Beaker size={40} className="text-white" />
              </div>
              <div>
                <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Virtual Science Lab
                </h1>
                <p className="text-gray-600 text-lg mt-1">
                  NCERT Science Experiments (Class 6-8)
                </p>
              </div>
            </div>
            <button
              onClick={() => setGameMode(true)}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:from-green-600 hover:to-emerald-700 font-bold shadow-lg transform transition hover:scale-105"
            >
              <Gamepad2 size={24} />
              3D Game Mode
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search experiments..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
              />
            </div>

            <div className="flex gap-3">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="pl-10 pr-8 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors appearance-none bg-white cursor-pointer"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <select
                value={filterDifficulty}
                onChange={(e) => setFilterDifficulty(e.target.value)}
                className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors appearance-none bg-white cursor-pointer"
              >
                {difficulties.map(diff => (
                  <option key={diff} value={diff}>{diff}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-12">
        {filteredExperiments.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔬</div>
            <h2 className="text-2xl font-bold text-gray-700 mb-2">No experiments found</h2>
            <p className="text-gray-500">Try adjusting your filters or search query</p>
          </div>
        ) : (
          <>
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">
                {filteredExperiments.length} {filteredExperiments.length === 1 ? 'Experiment' : 'Experiments'} Available
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredExperiments.map(experiment => (
                <ExperimentCard
                  key={experiment.id}
                  experiment={experiment}
                  onSelect={() => setSelectedExperiment(experiment)}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-gray-600">
          <p className="text-sm">
            Virtual Science Lab - NCERT Experiments for Classes 6-8
          </p>
          <p className="text-xs mt-2 text-gray-500">
            Always perform real experiments under adult supervision
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
