import React from 'react';
import { Brain, Users, BarChart } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Solutions',
    description: 'Leveraging cutting-edge AI technology to identify and engage potential students.'
  },
  {
    icon: Users,
    title: 'Education Focused',
    description: 'Specialized in helping tutoring centers and educational providers grow their business.'
  },
  {
    icon: BarChart,
    title: 'Data-Driven Results',
    description: 'Track and optimize your lead generation with detailed analytics and insights.'
  }
];

export default function AboutUs() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <Icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}