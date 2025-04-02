import React from 'react'
import { FaGithub } from 'react-icons/fa';

const Netflix = () => {
  return (
    <div>
      <div className='bg-black p-4 text-white rounded-xl'>
        <h1 className='text-center text-2xl text-yellow-400 font-bold'>Netflix Signup Clone - HTML & CSS</h1>
        <p className='p-2'><span className='font-semibold text-xl'>Designed and developed a responsive web interface inspired by Netflix’s clean and modern design using HTML & CSS.</span><br/>
          <span className='p-2 text-lg font-bold'>Key Highlights:</span><br/>
          <ul className='list-disc pl-8 text-lg'>
            <li>
              Replicated the platform's layout, maintaining visual aesthetics and attention to detail.<br/>
            </li>
            <li>
              Ensured a seamless and engaging user experience by making the interface fully responsive across devices.<br/>
            </li>  
            <li>
              Focused on enhancing UI/UX while adhering to web design principles.<br/>
            </li>
          </ul>
          <p className='mt-2 text-lg'>This project allowed me to strengthen my web development skills and deepen my understanding of responsive design.
          </p></p>
          <div className='rounded-full p-3'>
            <a
              href="https://github.com/chenna-2512/Netflix_Clone"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl transition-transform duration-300 hover:scale-110 hover:text-white"
            ><FaGithub /></a>
          </div>
      </div>
    </div>
  )
}

export default Netflix
