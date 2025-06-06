import React from 'react'
import { FaGithub } from 'react-icons/fa'

const Blood = () => {
  return (
    <div>
      <div className='bg-black p-4 text-white rounded-xl'>
        <h1 className='text-center text-2xl text-yellow-400 font-bold'>National Blood Donation Management System for a Self-Reliant India - React JS,Tailwind CSS,Node JS,Express JS,Mongo DB</h1>
       <p className='p-2'>
        <span className='font-semibold text-xl'>
            Developed a National Blood Donation Management System 🩸 using MERN Stack (MongoDB, Express.js, React.js, Node.js), aimed at creating a self-reliant India 🇮🇳 by simplifying the connection between blood donors and recipients.
        </span><br/>
        
        <span className='p-2 text-lg font-bold'>Key Highlights:</span><br/>
        <ul className='list-disc pl-8 text-lg'>
            <li>Secure Login & Signup Verification</li>
            <li>Informative Blood Donation Facts</li>
            <li>Blood Request System for Recipients</li>
            <li>Donor Blocking Mechanism Post-Donation</li>
            <li>Food Recommendations for Donors</li>
            <li>Blood Group Based Sorting</li>
            <li>History Tracking for Donors & Requestors</li>
            <li>Platelets Request Feature</li>
        </ul>

        <span className='p-2 text-lg font-bold'>Tech Stack:</span><br/>
        <ul className='list-disc pl-8 text-lg'>
            <li>Frontend: React.js</li>
            <li>Backend: Node.js, Express.js</li>
            <li>Styling: Tailwind CSS</li>
            <li>Database: MongoDB</li>
            <li>Email Notifications: EmailJS</li>
        </ul>

        <p className='mt-2 text-lg'>
            This platform was designed with an emphasis on transparency, traceability, and emergency prioritization. It significantly boosted my skills in full-stack development, backend logic, database integration, and user experience design.
        </p>

        <span className='p-2 text-lg font-bold'>Future Enhancements:</span><br/>
        <ul className='list-disc pl-8 text-lg'>
            <li>Automated Email Notifications for Donors</li>
            <li>Temporary Donor Blocking for 3–6 Months Post-Donation</li>
        </ul>
        </p>
          <div className='flex justify-between items-center rounded-full p-3'>
            <a
              href="https://national-blood-donation-management.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl transition-transform duration-300 hover:scale-110 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
            </a>
            <a
              href="https://github.com/chenna-2512/National-Blood-Donation-Management-System-"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl transition-transform duration-300 hover:scale-110 hover:text-white"
            ><FaGithub /></a>
          </div>
      </div>
    </div>
  )
}

export default Blood