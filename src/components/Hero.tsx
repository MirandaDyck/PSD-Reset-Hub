import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 text-sm font-medium mb-8 animate-pulse">
            <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
            New features available
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Build something
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent block sm:inline sm:ml-3">
              amazing today
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Create beautiful, responsive web applications with modern React, TypeScript, and Tailwind CSS. 
            Start building your next great idea with our production-ready foundation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg flex items-center">
              Get Started
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
            </button>
            
            <button className="group bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-white/20 dark:hover:bg-gray-700/50 flex items-center">
              <Play className="mr-2 group-hover:scale-110 transition-transform duration-200" size={20} />
              Watch Demo
            </button>
          </div>

          {/* Hero Image/Visual */}
          <div className="mt-16 relative">
            <div className="relative mx-auto max-w-4xl">
              <div className="rounded-xl shadow-2xl bg-white dark:bg-gray-800 p-8 transform hover:scale-105 transition-transform duration-300">
                <div className="aspect-video bg-gradient-to-br from-indigo-500 via-purple-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Play size={32} />
                    </div>
                    <p className="text-lg font-semibold">Your App Preview</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-full opacity-60 animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-pink-400 to-red-500 rounded-full opacity-60 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}