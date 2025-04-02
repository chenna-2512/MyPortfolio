import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="p-5 bg-black text-white shadow-lg w-full fixed top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-2xl text-yellow-400 font-mono font-bold tracking-wide">
          C.B. Chenna Keshava Reddy
        </h1>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)} className="text-white text-3xl focus:outline-none">
            ☰
          </button>
        </div>

        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-6 text-lg font-semibold transition-transform duration-300 ease-in-out md:hidden">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 text-white text-3xl"
            >
              ✖
            </button>

            {[ "Home", "About Me", "Interests", "Projects", "Contact Me" ].map((item, index) => (
              <button
                key={index}
                onClick={() => handleScroll(item.replace(" ", "").toLowerCase())}
                className="text-white cursor-pointer transition duration-300 hover:text-yellow-400 px-5 py-2 md:py-0"
              >
                {item}
              </button>
            ))}
          </div>
        )}

        <div className="hidden md:flex text-lg font-semibold space-x-8">
          {["Home", "About Me", "Interests", "Projects", "Contact Me"].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.replace(" ", "").toLowerCase())}
              className="cursor-pointer transition duration-300 hover:text-yellow-400"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
