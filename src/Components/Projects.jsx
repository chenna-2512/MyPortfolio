import React, { useState } from 'react';
import Netflix from './Netflix';
import Game from './Game';
import Todo from './Todo';
import Movies from './Movies';
import LyricGenerator from './LyricGenerator';
import FlipkartClone from './FlipkartClone';
import { Menu, X } from 'lucide-react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const projectList = [
    { name: 'Netflix Signup', component: <Netflix /> },
    { name: 'Rock-Paper-Scissor', component: <Game /> },
    { name: 'ToDo', component: <Todo /> },
    { name: 'Movies', component: <Movies /> },
    { name: 'Lyric Generator', component: <LyricGenerator /> },
    { name: 'Flipkart Clone', component: <FlipkartClone /> }
  ];

  return (
    <div id="projects" className="bg-gradient-to-r from-blue-500 to-purple-600 p-10">
      <div className="flex flex-col justify-center items-center bg-white p-6 rounded-xl shadow-lg w-full mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold border-b-4 border-yellow-400 pb-2">My Projects</h1>
        
        <div className="sm:hidden flex justify-center mt-4">
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 rounded-md bg-yellow-400 text-black font-semibold flex items-center">
            {menuOpen ? <X size={24} /> : <Menu size={24} />} Projects
          </button>
        </div>

        <div className={`mt-4 sm:flex flex-wrap justify-center gap-3 border-2 border-gray-500 p-2 font-semibold rounded-lg ${menuOpen ? 'flex flex-col items-center' : 'hidden sm:flex'}`}>
          {projectList.map((project, index) => (
            <h3
              key={index}
              onClick={() => {
                setActiveProject(project.component);
                setMenuOpen(false);
              }}
              className={`p-2 px-4 rounded-lg cursor-pointer transition duration-300 ${activeProject === project.component ? 'bg-black text-white' : 'bg-yellow-400 text-black'}`}
            >
              {project.name}
            </h3>
          ))}
        </div>
        
        <div className="mt-6 w-full sm:w-[80%]">
          {activeProject}
        </div>
      </div>
    </div>
  );
};

export default Projects;