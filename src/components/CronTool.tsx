import React, { useState } from 'react';
import { Play, HelpCircle, Loader2 } from 'lucide-react';
import { generateCron, explainCron } from '../api/cron';

interface CronToolProps {
  onNewEntry: () => void;
}

const CronTool: React.FC<CronToolProps> = ({ onNewEntry }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<{
    cron?: string;
    explanation?: string;
  }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!input.trim()) return;
    
    setIsLoading(true);
    setError('');
    
    try {
      const result = await generateCron(input.trim());
      setOutput({
        cron: result.cron,
        explanation: result.explanation,
      });
      onNewEntry();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate cron');
    } finally {
      setIsLoading(false);
    }
  };

  const handleExplain = async () => {
    if (!input.trim()) return;
    
    setIsLoading(true);
    setError('');
    
    try {
      const result = await explainCron(input.trim());
      setOutput({
        explanation: result.explanation,
      });
      onNewEntry();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to explain cron');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Generate or Explain a Cron Expression
      </h2>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="cron-input" className="block text-sm font-medium text-gray-700 mb-2">
            Enter a description or cron expression
          </label>
          <textarea
            id="cron-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="e.g., 'Every Monday at 8am' or '0 8 * * 1'"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none transition-colors duration-200"
            rows={3}
            disabled={isLoading}
          />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleGenerate}
            disabled={!input.trim() || isLoading}
            className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Play className="h-4 w-4" />
            )}
            <span>Generate</span>
          </button>
          
          <button
            onClick={handleExplain}
            disabled={!input.trim() || isLoading}
            className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <HelpCircle className="h-4 w-4" />
            )}
            <span>Explain</span>
          </button>
        </div>
        
        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}
        
        {(output.cron || output.explanation) && (
          <div className="space-y-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-medium text-gray-900">Result:</h3>
            
            {output.cron && (
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Cron Expression:
                </label>
                <code className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md font-mono text-sm">
                  {output.cron}
                </code>
              </div>
            )}
            
            {output.explanation && (
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Explanation:
                </label>
                <p className="text-sm text-gray-800 bg-white p-3 rounded-md border border-gray-300">
                  {output.explanation}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CronTool;