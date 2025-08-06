import React from 'react';
import { Clock, Zap, Shield, History, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PublicNavbar from '../components/PublicNavbar';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <PublicNavbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-white to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-indigo-600 p-4 rounded-2xl inline-block mb-8">
              <Clock className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-indigo-600">Cron</span>Genius
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Generate and explain cron expressions with ease. Transform natural language into precise scheduling commands, 
              or decode complex cron patterns into human-readable explanations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/login"
                className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl border-2 border-gray-200 hover:border-gray-300 transition-colors duration-200"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              See CronGenius in Action
            </h2>
            <p className="text-lg text-gray-600">
              Try our cron expression tools with these examples
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Generate from Natural Language
                </h3>
                <div className="space-y-3">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-2">Input:</p>
                    <p className="font-mono text-sm">"Every Monday at 8am"</p>
                  </div>
                  <div className="p-4 bg-indigo-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-2">Output:</p>
                    <p className="font-mono text-sm text-indigo-700">0 8 * * 1</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Explain Cron Expressions
                </h3>
                <div className="space-y-3">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-2">Input:</p>
                    <p className="font-mono text-sm">0 */6 * * *</p>
                  </div>
                  <div className="p-4 bg-emerald-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-2">Explanation:</p>
                    <p className="text-sm text-emerald-700">Runs every 6 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose CronGenius?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to make cron expression management effortless
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-indigo-100 p-4 rounded-2xl inline-block mb-6">
                <Zap className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Instant Generation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Convert natural language descriptions into precise cron expressions instantly. 
                No more guessing or manual calculation.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-emerald-100 p-4 rounded-2xl inline-block mb-6">
                <Shield className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Smart Explanations
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Decode complex cron expressions into clear, human-readable explanations. 
                Perfect for documentation and team collaboration.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-purple-100 p-4 rounded-2xl inline-block mb-6">
                <History className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                History Tracking
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Keep track of all your cron expressions and explanations. 
                Access your history anytime for reference and reuse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Master Cron Expressions?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join thousands of developers who trust CronGenius for their scheduling needs.
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors duration-200 shadow-lg"
          >
            Start Free Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">CronGenius</span>
            </div>
            <p className="text-gray-400 text-sm">
              © 2025 CronGenius. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;