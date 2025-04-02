import React from 'react';
import img from "../assets/Chenna Keshava.png";
import Socialmedia from './Socialmedia';
import CV from './CV';

const Intro = () => {
  return (
    <div className="flex flex-col h-auto min-h-[90vh] md:flex-row items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 md:p-10 gap-12 mt-16">
      <div className="w-full md:w-[60%] text-center md:text-left space-y-4 px-4 md:px-0">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Hello, My Self <br />
          <span className="text-yellow-500">C.B.Chenna Keshava Reddy</span>
        </h1>
        <p className="text-xl md:text-2xl font-semibold">
          I am a <span className="text-yellow-400 font-semibold">Computer Science and Engineering Student.</span>
        </p>
        <Socialmedia/>  
        <CV/>
      </div>

      <div className="flex justify-center w-full md:w-[40%]">
        <img
          src={img}
          alt="Chenna Keshava"
          className="w-[80%] sm:w-[60%] md:w-[50%] lg:w-[50%] rounded-xl shadow-lg border-4 border-white transition-transform duration-500 hover:scale-110"
        />
      </div>
    </div>
  );
};

export default Intro;