import React from 'react';
import { ToastContainer,toast } from 'react-toastify';

const Contactme = () => {
    const handlemessage = () => {
        toast("Still Under Construction.")
    }
  return (
    <>
    <ToastContainer></ToastContainer>
        <div id="contact-me" className="bg-gradient-to-r from-blue-500 to-purple-600 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-full mx-auto bg-white p-8 sm:p-10 rounded-2xl shadow-2xl">
            <h1 className="text-4xl font-bold text-center text-gray-800 border-b-4 border-yellow-400 pb-4 mb-8">
            Contact Me
            </h1>
            <form className="flex flex-col justify-center items-center gap-6">
            <input
                type="text"
                placeholder="Your Name"
                className="w-[70%] p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
                type="email"
                placeholder="Your Email"
                className="w-[70%] p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
                type="text"
                placeholder="Subject"
                className="w-[70%] p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
                rows="5"
                placeholder="Your Message"
                className="w-[70%] p-4 rounded-xl border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-xl font-semibold transition duration-300"
                onClick={handlemessage}
            >
                Send Message
            </button>
            </form>
        </div>
        </div>
    </>
  );
};

export default Contactme;
