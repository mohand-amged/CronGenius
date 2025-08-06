import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import CronTool from '../components/CronTool';
import History from '../components/History';

const HomePage: React.FC = () => {
  const [refreshHistoryTrigger, setRefreshHistoryTrigger] = useState(0);

  const handleNewEntry = () => {
    // Increment to trigger history refresh
    setRefreshHistoryTrigger(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Generate and explain cron expressions with ease</p>
        </div>
        
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Left Section - Cron Tool */}
          <div className="xl:col-span-2">
            <CronTool onNewEntry={handleNewEntry} />
          </div>
          
          {/* Right Section - History */}
          <div className="xl:col-span-1">
            <History refreshTrigger={refreshHistoryTrigger} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;