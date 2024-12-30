import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Transform Your Education Business with AI-Powered Lead Generation
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Help your tutoring center grow with intelligent prospecting and automated lead generation
        </p>
        <a href="#contact" className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
          Get Started <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </div>
    </section>
  );
}