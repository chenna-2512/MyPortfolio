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
  };

  return (
    <nav className="p-5 bg-black text-white shadow-lg w-full fixed top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-2xl text-yellow-400 font-mono font-bold tracking-wide">
          C.B. Chenna Keshava Reddy
        </h1>
        
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
        
        <div
          className={`absolute md:static bg-black md:bg-transparent w-full left-0 md:w-auto md:flex text-lg font-semibold md:items-center md:space-x-8 transition-all duration-300 ease-in-out ${isOpen ? "block" : "hidden"}`}
        >
          {[
            "Home",
            "About Me",
            "Interests",
            "Projects",
            "Contact Me",
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => {
                handleScroll(item.replace(" ", "").toLowerCase());
                setIsOpen(false);
              }}
              className="block md:inline cursor-pointer transition duration-300 hover:text-yellow-400 px-5 py-2 md:py-0 after:block after:content-[''] after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
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
