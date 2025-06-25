import React from 'react';
import { education } from '../models/education';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
  const educationData = Object.values(education);

  const icons = ['🎓', '📚', '🏫']; // Ordered matching for display
  const getDuration = (index) => {
    switch (index) {
      case 0: return '2021 - 2025';
      case 1: return '2019 - 2021';
      case 2: return '2018 - 2019';
      default: return '';
    }
  };

  return (
    <section className="py-20 bg-gray-900" id="education">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Educational <span className="text-yellow-400">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Graduated with consistent top performance across academics, building a strong foundation in computer science and engineering.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">{icons[index]}</div>
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full mx-auto flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-black">{edu.percentage}</span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-2 text-center group-hover:text-yellow-400 transition-colors">
                {edu.degree}
              </h3>

              <div className="space-y-3 text-center">
                <div className="flex items-center justify-center text-gray-300">
                  <GraduationCap className="w-4 h-4 mr-2 text-yellow-400" />
                  <span className="text-md">{edu.college || edu.school}</span>
                </div>

                {edu.branch && (
                  <div className="flex items-center justify-center text-gray-300">
                    <Award className="w-4 h-4 mr-2 text-yellow-400" />
                    <span>{edu.branch}</span>
                  </div>
                )}

                <div className="flex items-center justify-center text-gray-300">
                  <Calendar className="w-4 h-4 mr-2 text-yellow-400" />
                  <span>{getDuration(index)}</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-6">
                <div className="bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-2 rounded-full transition-all duration-1000 delay-500"
                    style={{ width: edu.percentage }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
