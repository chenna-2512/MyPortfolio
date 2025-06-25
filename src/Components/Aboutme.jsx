import React from 'react';
import { Code2, Database, Coffee, Trophy, Users } from 'lucide-react';

const Aboutme = () => {
  const skills = [
    { name: 'JavaScript', level: 85, icon: '🟨' },
    { name: 'React', level: 82, icon: '⚛️' },
    { name: 'Node.js', level: 80, icon: '🟢' },
    { name: 'MongoDB', level: 80, icon: '🍃' },
    { name: 'Express', level: 81, icon: '🚀' },
    { name: 'Tailwind CSS', level: 78, icon: '🎨' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-yellow-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto"></div>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* About Text */}
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Code2 className="w-6 h-6 text-yellow-500 mr-3" />
                What I Do
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                I'm <span className="text-yellow-600 font-semibold">Chenna Keshava Reddy</span>, a passionate Computer Science and Engineering student with a strong interest in MERN stack development and problem-solving.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                I enjoy building <span className="font-semibold text-gray-900">modern web applications</span>, designing <span className="font-semibold text-gray-900">interactive user interfaces</span>, and solving real-world tech problems. I have experience working with JavaScript, React, Node.js, Express, MongoDB, and Tailwind CSS.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Apart from coding, I love <span className="font-semibold text-gray-900">exploring new technologies</span>, <span className="font-semibold text-gray-900">participating in hackathons</span>, and contributing to open source projects. My goal is to build scalable, user-friendly applications that make an impact.
              </p>
            </div>
          </div>

          {/* Skills & Achievements */}
          <div className="space-y-6">
            {/* Skills */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Database className="w-5 h-5 text-yellow-500 mr-2" />
                Technical Skills
              </h4>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-lg mr-2">{skill.icon}</span>
                      <span className="font-medium text-gray-900">{skill.name}</span>
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
                <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">5+</div>
                <div className="text-gray-600 text-sm">Hackathons</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
                <Users className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">90+</div>
                <div className="text-gray-600 text-sm">GitHub Commits</div>
              </div>
            </div>
          </div>
        </div>

        {/* Fun Fact */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 text-center">
          <Coffee className="w-12 h-12 text-black mx-auto mb-4" />
          <p className="text-black text-xl font-medium">
            When I’m not coding full-stack apps, I’m crafting clean UIs or geeking out on AI and web trends. 💻✨
          </p>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
