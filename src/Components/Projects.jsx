import React, { useState } from 'react';
import { ExternalLink, Github, Play, Star, Users, GitBranch } from 'lucide-react';
import { projects as projectData } from "../models/projects"; // ✅ Fix import name

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Projects', count: projectData.length },
    { id: 'frontend', label: 'Frontend', count: projectData.filter(p => p.category === 'frontend').length },
    { id: 'fullstack', label: 'Full Stack', count: projectData.filter(p => p.category === 'fullstack').length }
  ];

  const filteredProjects = activeTab === 'all'
    ? projectData
    : projectData.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Stuff I <span className="text-yellow-400">Built</span> 🛠️
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A showcase of my latest work, featuring modern web applications built with cutting-edge technologies.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black shadow-lg shadow-yellow-400/25'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-yellow-400'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length === 0 ? (
            <p className="text-gray-400 col-span-full text-center">No projects found in this category.</p>
          ) : (
            filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700 hover:border-yellow-400/50 transition-all duration-500 transform hover:scale-105"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title || 'Project Image'}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                  
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center space-x-2 text-gray-400 text-sm">
                      <Star className="w-4 h-4" />
                      <span>{project.stats.stars}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description.length > 120 ? project.description.slice(0, 120) + '...' : project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-700 text-yellow-400 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-3">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-center py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-yellow-400/25 transition-all flex items-center justify-center"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-gray-600 text-gray-300 text-center py-2 rounded-lg font-semibold hover:border-yellow-400 hover:text-yellow-400 transition-all flex items-center justify-center"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/chenna-2512"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-transparent border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
            <ExternalLink className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
