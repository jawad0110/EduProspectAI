import React from 'react';
import { GraduationCap } from 'lucide-react';

const navItems = ['About', 'Solution', 'Contact'];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <GraduationCap className="h-8 w-8 text-blue-500" />
            <span className="ml-2 text-xl font-bold text-white">EduProspectAI</span>
          </div>
          <div className="flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          © {new Date().getFullYear()} EduProspectAI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
