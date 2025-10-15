import { useState, useEffect } from 'react';
import { Experiment, ExperimentStep } from '../types/experiments';
import { ArrowLeft, CheckCircle, AlertTriangle, Lightbulb, Package, Play, RotateCcw, Sparkles } from 'lucide-react';
import { TableView3D } from './TableView3D';

interface ExperimentViewerProps {
  experiment: Experiment;
  onBack: () => void;
}

export function ExperimentViewer({ experiment, onBack }: ExperimentViewerProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showVisual, setShowVisual] = useState(false);

  const step = experiment.steps[currentStep];
  const isLastStep = currentStep === experiment.steps.length - 1;
  const isCompleted = completedSteps.length === experiment.steps.length;

  useEffect(() => {
    setShowVisual(false);
  }, [currentStep]);

  const handlePerformAction = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    const duration = step.action?.duration || 2000;

    setTimeout(() => {
      setShowVisual(true);
      setIsAnimating(false);
      if (!completedSteps.includes(step.id)) {
        setCompletedSteps([...completedSteps, step.id]);
      }
    }, duration);
  };

  const handleNextStep = () => {
    if (currentStep < experiment.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setCompletedSteps([]);
    setIsAnimating(false);
    setShowVisual(false);
  };

  const getActionIcon = () => {
    if (!step.action) return '🔬';
    const icons = {
      mix: '🥄',
      heat: '🔥',
      cool: '❄️',
      shake: '💨',
      wait: '⏰',
      observe: '👀',
      measure: '📏'
    };
    return icons[step.action.type] || '🔬';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-cyan-50 pb-8">
      <div className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors font-medium"
          >
            <ArrowLeft size={20} />
            Back to Experiments
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-8">
            <h1 className="text-4xl font-bold mb-2">{experiment.title}</h1>
            <p className="text-blue-100 text-lg">{experiment.description}</p>
            <div className="flex gap-4 mt-4">
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">
                {experiment.category}
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">
                {experiment.difficulty}
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">
                ⏱️ {experiment.duration}
              </span>
            </div>
          </div>

          <div className="p-8">
            <div className="mb-8 bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
              <div className="flex items-center gap-2 mb-4">
                <Package className="text-blue-600" size={24} />
                <h2 className="text-xl font-bold text-gray-800">Materials Needed</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {experiment.materials.map((material, index) => (
                  <span
                    key={index}
                    className="bg-white px-4 py-2 rounded-lg shadow-sm text-gray-700 font-medium"
                  >
                    {material}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Sparkles className="text-yellow-500" size={28} />
                  <h2 className="text-3xl font-bold text-gray-800">
                    Step {currentStep + 1} of {experiment.steps.length}
                  </h2>
                </div>
                <div className="flex gap-2">
                  {experiment.steps.map((s, idx) => (
                    <div
                      key={s.id}
                      className={`w-4 h-4 rounded-full transition-all ${
                        completedSteps.includes(s.id)
                          ? 'bg-green-500 shadow-lg'
                          : idx === currentStep
                          ? 'bg-blue-500 scale-150 shadow-lg'
                          : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-6 mb-6">
                <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-4 border-2 border-slate-300 h-96">
                  <TableView3D
                    currentStep={step}
                    isAnimating={isAnimating}
                    showVisual={showVisual}
                  />
                </div>

                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border-2 border-cyan-200 flex flex-col justify-center">
                  <div className="text-7xl text-center mb-6 animate-bounce">
                    {getActionIcon()}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center leading-relaxed">
                    {step.instruction}
                  </h3>

                  {!showVisual && !isAnimating && (
                    <button
                      onClick={handlePerformAction}
                      className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-5 px-8 rounded-2xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3 text-xl"
                    >
                      <Play size={28} />
                      Perform Action
                    </button>
                  )}

                  {isAnimating && (
                    <div className="text-center">
                      <div className="inline-block animate-spin text-7xl mb-4">⚗️</div>
                      <p className="text-2xl font-bold text-gray-700 animate-pulse">
                        Experiment in progress...
                      </p>
                    </div>
                  )}

                  {showVisual && step.observation && (
                    <div className="mt-6 bg-white rounded-2xl p-6 shadow-xl border-2 border-green-300 animate-fadeIn">
                      <div className="flex items-center gap-3 mb-4">
                        <CheckCircle className="text-green-600" size={28} />
                        <h4 className="text-xl font-bold text-gray-800">Observation</h4>
                      </div>
                      <p className="text-gray-700 text-lg leading-relaxed">{step.observation}</p>
                      {step.visual && (
                        <div className="flex items-center justify-center gap-8 mt-6 text-7xl">
                          <span>{step.visual.before}</span>
                          <span className="text-3xl font-bold text-blue-600">→</span>
                          <span className="animate-pulse">{step.visual.after}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <button
                  onClick={handlePrevStep}
                  disabled={currentStep === 0}
                  className="flex-1 bg-gray-200 text-gray-800 font-bold py-4 px-6 rounded-xl hover:bg-gray-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-lg shadow-lg"
                >
                  ← Previous
                </button>
                <button
                  onClick={handleNextStep}
                  disabled={isLastStep}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold py-4 px-6 rounded-xl hover:from-blue-600 hover:to-cyan-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-lg shadow-lg"
                >
                  {isLastStep ? '✓ Complete!' : 'Next Step →'}
                </button>
              </div>
            </div>

            {isCompleted && (
              <div className="mb-8 bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-8 border-4 border-green-400 animate-fadeIn shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="text-green-600" size={36} />
                  <h3 className="text-3xl font-bold text-gray-800">Experiment Complete!</h3>
                  <span className="text-4xl">🎉</span>
                </div>
                <p className="text-gray-700 text-xl mb-6">
                  Great job! You've successfully completed the experiment and learned something new!
                </p>
                <button
                  onClick={handleReset}
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold py-4 px-8 rounded-xl hover:from-blue-600 hover:to-cyan-700 transition-all shadow-lg text-lg"
                >
                  <RotateCcw size={24} />
                  Try Again
                </button>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-yellow-50 rounded-xl p-6 border-2 border-yellow-200">
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb className="text-yellow-600" size={24} />
                  <h3 className="text-lg font-bold text-gray-800">Fun Fact</h3>
                </div>
                <p className="text-gray-700">{experiment.funFact}</p>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="text-red-600" size={24} />
                  <h3 className="text-lg font-bold text-gray-800">Safety Tips</h3>
                </div>
                <ul className="space-y-2">
                  {experiment.safetyTips.map((tip, index) => (
                    <li key={index} className="text-gray-700 flex items-start gap-2">
                      <span className="text-red-500 font-bold">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
