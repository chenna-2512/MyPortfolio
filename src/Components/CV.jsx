import React from 'react'

const CV = () => {
  return (
    <div>
      <div className='pt-4'>
        <a
            href="/CV.pdf"
            download="CV.pdf"
            className="bg-black text-white p-3 rounded-lg text-lg font-semibold transition duration-300 hover:bg-white hover:text-black"
        >
            Download CV
        </a>
      </div>
    </div>
  )
}

export default CV
