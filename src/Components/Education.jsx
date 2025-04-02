import React from 'react'
import Btech from './Btech';

const Education = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-10">
      <div className="flex flex-col justify-center items-center bg-white p-10 rounded-xl shadow-lg">
        <h1 className='text-4xl font-bold border-b-4 border-yellow-400 pb-2'>Educational Details</h1>
        <div className='pt-4'>
          <Btech/>
        </div>
      </div>
    </div>
  )
}

export default Education
