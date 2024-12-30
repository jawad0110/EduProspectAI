import React from 'react';
import { CheckCircle } from 'lucide-react';

const features = [
  {
    title: 'Intelligent Lead Scoring',
    description: 'Automatically identify and prioritize the most promising prospects.'
  },
  {
    title: 'Automated Outreach',
    description: 'Personalized communication at scale with AI-powered messaging.'
  },
  {
    title: 'Performance Analytics',
    description: 'Comprehensive reporting and insights to optimize your campaigns.'
  }
];

export default function Solution() {
  return (
    <section id="solution" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Solution</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
              alt="AI Analytics Dashboard"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 mr-3" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}