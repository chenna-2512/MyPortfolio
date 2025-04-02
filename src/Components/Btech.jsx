import React from 'react';
import { education } from '../models/education';

const Btech = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {Object.values(education).map((item, index) => (
        <div 
          key={index} 
          className="w-full sm:w-[90%] md:w-[45%] lg:w-[30%] p-6 bg-gray-800 rounded-lg shadow-md text-center"
        >
          <h1 className="text-2xl font-bold text-yellow-400">{item.degree}</h1>
          <h2 className="text-xl text-gray-300 mt-4">{item.college || item.school}</h2>
          <h2 className="text-lg text-gray-400">{item.branch || ""}</h2>
          <h2 className="text-lg font-bold text-green-400 mt-2">Percentage: {item.percentage}</h2>
        </div>
      ))}
    </div>
  );
};

export default Btech;