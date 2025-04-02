import React from "react";

const Aboutme = () => {
  return (
    <div id="aboutme" className="bg-gradient-to-r from-blue-500 to-purple-600 p-10 md:p-10 flex justify-center">
      <div className="flex flex-col justify-center items-center bg-white p-6 md:p-10 rounded-xl shadow-lg w-full">
        <div className="mb-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold border-b-4 border-yellow-400 pb-2">
            About Me
          </h1>
        </div>

        <div className="max-w-3xl text-center space-y-6">
          <p className="text-xl md:text-2xl font-semibold">
            I am <span className="text-yellow-500">C.B. Chenna Keshava Reddy</span>, a passionate
            <span className="text-yellow-500"> Computer Science and Engineering student</span> with a strong interest in
            <span className="font-bold"> MERN stack development and problem-solving.</span>
          </p>

          <p className="text-lg leading-relaxed">
            I enjoy building <span className="font-semibold text-yellow-500">innovative web applications</span>,
            designing <span className="font-bold">interactive user interfaces</span>, and solving
            <span className="font-bold"> real-world tech problems</span>. I have experience working with
            <span className="font-bold"> JavaScript, React, Node.js, Express, MongoDB, and Tailwind CSS</span>.
          </p>

          <p className="text-lg leading-relaxed">
            Apart from coding, I love <span className="font-bold">exploring new technologies, participating in hackathons,
            and contributing to open-source projects</span>. My goal is to build
            <span className="font-bold"> scalable, user-friendly applications</span> that make an impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;