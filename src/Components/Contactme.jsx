import React, { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.css';
import { Mail, Send, Heart, Github, Linkedin, ArrowUp } from 'lucide-react';

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
        () => {
          toast.success("Message sent successfully 🚀");
          form.current.reset();
        },
        () => {
          toast.error("Oops! Something went wrong 😓");
        }
      );
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      <ToastContainer />
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's <span className="text-yellow-400">Connect</span> Together
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto mb-4"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Reach out to collaborate, chat, or simply say hello. I'm always open to connecting with fellow creators.
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl shadow-2xl p-10 text-white">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-6"
            >
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full p-4 rounded-lg bg-gray-900 border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full p-4 rounded-lg bg-gray-900 border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="w-full p-4 rounded-lg bg-gray-900 border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  required
                  className="w-full p-4 rounded-lg bg-gray-900 border border-gray-700 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-yellow-400/25 transition-all"
                >
                  <Send className="w-5 h-5 mr-2" /> Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-2 rounded-lg font-bold text-xl inline-block mb-4">
                Chenna Keshava Reddy
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                A passionate MERN stack developer crafting digital experiences that make a difference. Always learning, always building, always innovating.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/chenna-2512" className="bg-gray-800 hover:bg-yellow-400 hover:text-black p-3 rounded-lg transition-all duration-300 group">
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://www.linkedin.com/in/chenna2512/" className="bg-gray-800 hover:bg-yellow-400 hover:text-black p-3 rounded-lg transition-all duration-300 group">
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a href="mailto:cb.chennakeshava@gmail.com" className="bg-gray-800 hover:bg-yellow-400 hover:text-black p-3 rounded-lg transition-all duration-300 group">
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4 text-yellow-400">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-yellow-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4 text-yellow-400">Technologies</h4>
              <ul className="space-y-2">
                {['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS', 'JavaScript'].map((tech) => (
                  <li key={tech}>
                    <span className="text-gray-400">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 mx-1 animate-pulse" fill="currentColor" />
              <span>by Chenna Keshava Reddy</span>
            </div>
            <div className="text-gray-400 text-sm">
              © {currentYear} All rights reserved.
            </div>
          </div>
        </div>

        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black p-3 rounded-full shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300 transform hover:scale-110 z-50"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      </footer>
    </>
  );
};

export default Contactme;
