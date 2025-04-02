import React from 'react'
import { FaGithub } from 'react-icons/fa';

const Game = () => {
  return (
    <div>
      <div className='bg-black p-4 text-white rounded-xl'>
        <h1 className='text-center text-2xl text-yellow-400 font-bold'>Rock Paper Sciccor - HTML,CSS & Java Script</h1>
        <p className='p-2'><span className='font-semibold text-xl'>Developed an interactive Rock Paper Scissors game using HTML, CSS, and JavaScript with dynamic functionality and real-time feedback.</span><br/>
          <span className='p-2 text-lg font-bold'>Key Highlights:</span><br/>
          <ul className='list-disc pl-8 text-lg'>
            <li>
              Interactive Gameplay<br/>
            </li>
            <li>
              Real Time Feedback.<br/>
            </li>  
            <li>
              User Friendly Interface.<br/>
            </li>
          </ul>
          <p className='mt-2 text-lg'>Gained experience in JavaScript event handling and game logic development.
          </p></p>
          <div className='rounded-full p-3'>
            <a
              href="https://github.com/chenna-2512/Rock-Paper-Sciccors"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl transition-transform duration-300 hover:scale-110 hover:text-white"
            ><FaGithub /></a>
          </div>
      </div>
    </div>
  )
}

export default Game
