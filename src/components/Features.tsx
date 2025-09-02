import React from 'react';
import { Zap, Shield, Smartphone, Code2, Palette, Rocket } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Built with Vite for instant hot module replacement and blazing fast builds.',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: Shield,
    title: 'Type Safe',
    description: 'Full TypeScript support with strict type checking for reliable code.',
    color: 'from-blue-400 to-indigo-500'
  },
  {
    icon: Smartphone,
    title: 'Mobile First',
    description: 'Responsive design that works perfectly on all devices and screen sizes.',
    color: 'from-green-400 to-emerald-500'
  },
  {
    icon: Code2,
    title: 'Modern Stack',
    description: 'Latest React 18 features with hooks, context, and modern development patterns.',
    color: 'from-purple-400 to-pink-500'
  },
  {
    icon: Palette,
    title: 'Beautiful UI',
    description: 'Tailwind CSS with custom design system and thoughtful animations.',
    color: 'from-cyan-400 to-blue-500'
  },
  {
    icon: Rocket,
    title: 'Production Ready',
    description: 'Optimized build process with tree shaking and code splitting.',
    color: 'from-red-400 to-pink-500'
  }
];

export function Features() {
  return (
    <section id="features" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Everything you need to build
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive foundation with modern tools and best practices built right in.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.color} mb-6 transform group-hover:scale-110 transition-transform duration-200`}>
                  <Icon className="text-white" size={24} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center space-x-2 text-indigo-600 dark:text-indigo-400 font-medium">
            <span>Ready to start building?</span>
            <ArrowRight className="animate-pulse" size={20} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowRight({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14m-7-7 7 7-7 7" />
    </svg>
  );
}