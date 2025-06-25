import React, { useState } from 'react';
import { Monitor, Server, Smartphone, Globe, Database, Palette } from 'lucide-react';
import { interests } from '../models/education';

const Interests = () => {
  const [activeCard, setActiveCard] = useState(null);
  const interestData = Object.values(interests);

  const icons = [
    <Monitor className="w-12 h-12" />, 
    <Server className="w-12 h-12" />
  ];

  const gradients = [
    'from-blue-500 to-cyan-500',
    'from-green-500 to-emerald-500'
  ];

  const projects = [
    ['Todo App', 'Movies App', 'Netflix Signup', 'Rock Paper Scissors'],
    ['Flipkart Clone Backend', 'AI Lyric Generator','BloodConnect']
  ];

  return (
    <section id="interests" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My <span className="text-yellow-500">Interests</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Passionate about both frontend aesthetics and backend architecture, creating end-to-end solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {interestData.map((interest, index) => (
            <div 
              key={index}
              className={`group relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                activeCard === index ? 'scale-105' : ''
              }`}
              onClick={() => setActiveCard(activeCard === index ? null : index)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
              
              <div className="relative p-8">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${gradients[index]} text-white mb-6 group-hover:scale-110 transition-transform`}>
                  {icons[index]}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-yellow-500 transition-all">
                  {interest.role}
                </h3>

                <p className="text-yellow-600 font-semibold mb-4">
                  {interest.skills}
                </p>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {interest.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Projects:</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[index].map((project, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full"
                      >
                        {project}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
