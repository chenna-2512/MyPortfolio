import React from 'react'
import { interests } from '../models/education'

const Content = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6 text-white">
      {Object.values(interests).map((item, index) => (
        <div 
          key={index} 
          className="sm:w-[100%] md:w-[45%] lg:w-[30%] p-6 bg-gray-800 rounded-lg shadow-md text-center"
        >
          <h1 className="text-2xl font-bold text-yellow-400">{item.role}</h1>
          <h2 className="text-xl font-semibold mt-2">{item.skills}</h2>
          <p className="text-sm font-semibold mt-4">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Content
