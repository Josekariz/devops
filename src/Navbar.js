import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  // Add a class to the header when mobile navigation is open
  const headerClassName = toggle
    ? "flex justify-between px-5 py-2 bg-primary text-white fixed w-full z-20 transition-all duration-300"
    : "flex justify-between px-5 py-5 bg-primary text-white fixed w-full z-10 transition-all duration-300";

  return (
    <header className={headerClassName}>
      <a href="/" className="logo text-2xl font-bold text-accent">
        Lilian Kariuki
      </a>

      {/* Desktop Nav */}

      
      {/* Note: The # before the links is to point to the div as this is an spa but when it is linked to another page just delete the # and create a route in react using router to that page */}
      <nav className="hidden md:block">
        <ul className="flex">
          <li>
            <a
              href="/"
              className={`font-semibold text-lg ${
                window.location.hash === "#about" ? "text-accent" : ""
              }`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/#about-me"
              className={`font-semibold text-lg ${
                window.location.hash === "#about-me" ? "text-accent" : ""
              }`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/#skills"
              className={`font-semibold text-lg ${
                window.location.hash === "#skills" ? "text-accent" : ""
              }`}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="/#experience"
              className={`font-semibold text-lg ${
                window.location.hash === "#experience" ? "text-accent" : ""
              }`}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="/#contact-me"
              className={`font-semibold text-lg ${
                window.location.hash === "#contact-me" ? "text-accent" : ""
              }`}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav className={`mobile-nav ${toggle ? "left-0" : "left-[100%] "}`}>
        <ul className={`flex flex-col items-center justify-center h-full`}>
          <li className="my-4">
            <a
              href="/#about"
              className={`font-semibold text-lg ${
                toggle && window.location.hash === "#about" ? "text-accent" : ""
              }`}
              onClick={handleToggle}
            >
              Home
            </a>
          </li>
          <li className="my-4">
            <a
              href="/#about-me"
              className={`font-semibold text-lg ${
                toggle && window.location.hash === "#about-me"
                  ? "text-accent"
                  : ""
              }`}
              onClick={handleToggle}
            >
              About
            </a>
          </li>
          <li className="my-4">
            <a
              href="/#skills"
              className={`font-semibold text-lg ${
                toggle && window.location.hash === "#skills"
                  ? "text-accent"
                  : ""
              }`}
              onClick={handleToggle}
            >
              Skills
            </a>
          </li>
          <li className="my-4">
            <a
              href="/#experience"
              className={`font-semibold text-lg ${
                toggle && window.location.hash === "#experience"
                  ? "text-accent"
                  : ""
              }`}
              onClick={handleToggle}
            >
              Experience
            </a>
          </li>
          <li className="my-4">
            <a
              href="/#contact-me"
              className={`font-semibold text-lg ${
                toggle && window.location.hash === "#contact-me"
                  ? "text-accent"
                  : ""
              }`}
              onClick={handleToggle}
            >
              experience
            </a>
          </li>
        </ul>
      </nav>

      {/* Toggle button */}
      <button onClick={handleToggle} className="block md:hidden">
        {toggle ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </button>
    </header>
  );
};

export default Header;
