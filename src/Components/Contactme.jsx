import React, { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.css';

const Contactme = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_tth3vuk',    
        'template_lleka8d',   
        form.current,
        'KHeqyA1SqaXHSe7vT'     
      )
      .then(
        (result) => {
          toast.success("Message sent successfully 🚀");
          form.current.reset();
        },
        (error) => {
          toast.error("Oops! Something went wrong 😓");
        }
      );
  };

  return (
    <>
      <ToastContainer />
      <div id="contact-me" className="bg-gradient-to-r from-blue-500 to-purple-600 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-full mx-auto bg-white p-8 sm:p-10 rounded-2xl shadow-2xl">
          <h1 className="text-4xl font-bold text-center text-gray-800 border-b-4 border-yellow-400 pb-4 mb-8">
            Contact Me
          </h1>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col justify-center items-center gap-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-[70%] p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-[70%] p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-[70%] p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-[70%] p-4 rounded-xl border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-xl font-semibold transition duration-300"
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
