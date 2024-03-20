import "../../styles/globals.css";

import { useState } from "react";

export default function Navigation() {
 const [isOpen, setIsOpen] = useState(false);

 console.log(isOpen);

 return (
  <nav className="flex-1 flex justify-between">
   <ul className="hidden md:flex flex-col md:flex-row items-center mx-auto gap-8">
    <li>
     <a href="/">Home</a>
    </li>
    <li>
     <a href="/">About</a>
    </li>
    <li>
     <a href="/">Contact</a>
    </li>
    <li>
     <a href="/">Blog</a>
    </li>
    <li>
     <a href="/">Careers</a>
    </li>
   </ul>

   <button className="hidden md:block cta">Request Invite</button>
   <div id="mobile-buttons" className="ml-auto md:hidden">
    <button
     id="hamburger-icon"
     className={isOpen ? "hidden" : "opacity-100"}
     onClick={() => setIsOpen(!isOpen)}
    >
     <img src="/images/icon-hamburger.svg" alt="hamburger icon" />
    </button>

    <button
     onClick={() => setIsOpen(!isOpen)}
     id="close-icon"
     className={`${
      isOpen ? "block animate-slideIn" : "hidden"
     } md:block opacity-100`}
    >
     <img src="/images/icon-close.svg" alt="close menu" />
    </button>

    <div
     id="mobile-nav"
     className={`absolute left-6 top-16 bg-white ${
      isOpen
       ? "opacity-100 animate-slideIn"
       : "opacity-0 pointer-events-none animate-slideOut"
     } transition-opacity duration-300`}
    >
     <ul className="flex flex-col items-center md:hidden w-full space-y-2 text-dark-blue font-normal">
      <li>
       <a href="/">Home</a>
      </li>
      <li>
       <a href="/">About</a>
      </li>
      <li>
       <a href="/">Contact</a>
      </li>
      <li>
       <a href="/">Blog</a>
      </li>
      <li>
       <a href="/">Careers</a>
      </li>
     </ul>
    </div>
   </div>
  </nav>
 );
}
