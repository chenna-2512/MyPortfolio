import React from 'react';
import img from "../assets/Chenna Keshava.png";
import Socialmedia from './Socialmedia';
import CV from './CV';
import { Download, ArrowRight, Code, Zap } from 'lucide-react';

const Intro = () => {
  return (
    <section 
      id="intro" 
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center relative overflow-hidden"
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <div className="inline-flex items-center bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-yellow-400 mr-2" />
              <span className="text-yellow-400 text-sm font-medium">Currently open for opportunities</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Hello, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500 inline-block animate-pulse">
                C.B. Chenna Keshava Reddy
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              A passionate <span className="text-yellow-400 font-semibold">Computer Science & Engineering</span> student & MERN stack developer who builds fast, modern, and scalable web apps.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a 
                href="https://www.linkedin.com/in/chenna2512/"
                target='_blank' 
                rel='noopener noreferrer'>
                  <button className="group bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                    <Code className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                    Let's Build Together
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
              </a>

              <a 
                  href="https://drive.google.com/file/d/1wJg_2LH-_i6gvwQRjR6Szg402FK5LnfY/view?usp=sharing" 
                  target='_blank' 
                  rel='noopener noreferrer'>
                  <button className="group border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 flex items-center justify-center">
                    <Download className="w-5 h-5 mr-2" />
                    Download Resume 
                  </button>
              </a>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-6 text-center mt-10">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-yellow-400">10+</div>
                <div className="text-gray-400 text-sm">Projects Built</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-yellow-400">1+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              {/* <div>
                <div className="text-2xl md:text-3xl font-bold text-yellow-400">100%</div>
                <div className="text-gray-400 text-sm">Client Satisfaction</div>
              </div> */}
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-white to-white p-2 ">
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                  <img 
                    src={img} 
                    alt="Chenna Keshava" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              {/* Floating Icon */}
              {/* <div className="absolute -top-4 -right-4 bg-yellow-400 text-black p-3 rounded-full animate-bounce">
                <Code className="w-6 h-6" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
