import React, { useState, useEffect } from 'react';
import { RefreshCw, Calendar, Clock } from 'lucide-react';
import { fetchHistory } from '../api/cron';
import type { HistoryEntry } from '../types';

interface HistoryProps {
  refreshTrigger: number;
}

const History: React.FC<HistoryProps> = ({ refreshTrigger }) => {
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const loadHistory = async () => {
    try {
      setIsLoading(true);
      setError('');
      const data = await fetchHistory();
      setHistory(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load history');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadHistory();
  }, [refreshTrigger]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 h-fit">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900 flex items-center space-x-2">
          <Calendar className="h-5 w-5 text-gray-600" />
          <span>History</span>
        </h2>
        <button
          onClick={loadHistory}
          disabled={isLoading}
          className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          title="Refresh history"
        >
          <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
        </button>
      </div>

      {isLoading && history.length === 0 ? (
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
        </div>
      ) : error ? (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      ) : history.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <Clock className="h-12 w-12 mx-auto mb-3 text-gray-300" />
          <p>No history yet</p>
          <p className="text-sm mt-1">Your cron expressions will appear here</p>
        </div>
      ) : (
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {history.map((entry) => (
            <div
              key={entry.id}
              className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between">
                  <p className="text-sm font-medium text-gray-900 flex-1">
                    {entry.input}
                  </p>
                  <span className="text-xs text-gray-500 whitespace-nowrap ml-2">
                    {formatDate(entry.createdAt)}
                  </span>
                </div>
                
                {entry.cron && (
                  <code className="block text-xs bg-gray-100 px-2 py-1 rounded font-mono text-gray-700">
                    {entry.cron}
                  </code>
                )}
                
                <p className="text-xs text-gray-600 leading-relaxed">
                  {entry.explanation}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default History;