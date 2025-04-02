import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Socialmedia = () => {
  return (
    <div className="flex gap-2 mt-8">
        <a
            href="https://www.linkedin.com/in/chenna2512/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-4xl transition-transform duration-300 hover:scale-110 hover:text-white"
        >
            <FaLinkedin />
        </a>
        <a
            href="https://github.com/chenna-2512"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-4xl transition-transform duration-300 hover:scale-110 hover:text-white"
        >
            <FaGithub />
        </a>
        <a
            href="https://www.instagram.com/chenna_2002/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-4xl transition-transform duration-300 hover:scale-110 hover:text-white"
        >
            <FaInstagram />
        </a>
    </div>
  )
}

export default Socialmedia
