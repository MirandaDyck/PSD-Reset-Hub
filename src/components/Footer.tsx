import React from 'react';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              ReactApp
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
              A modern React application built with TypeScript, Tailwind CSS, and the latest web technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Documentation', 'Examples', 'GitHub', 'Support'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              {['Blog', 'Tutorials', 'Community', 'Changelog'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            © 2025 ReactApp. All rights reserved.
          </p>
          <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm mt-4 sm:mt-0">
            Made with <Heart className="mx-1 text-red-500" size={16} /> using React & Tailwind
          </div>
        </div>
      </div>
    </footer>
  );
}