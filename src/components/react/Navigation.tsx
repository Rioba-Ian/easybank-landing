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
    {!isOpen && (
     <button
      id="hamburger-icon"
      className={isOpen ? "open" : "close"}
      onClick={() => setIsOpen(!isOpen)}
     >
      <img src="/images/icon-hamburger.svg" alt="hamburger icon" />
     </button>
    )}

    {isOpen && (
     <button
      onClick={() => setIsOpen(!isOpen)}
      id="close-icon"
      className={isOpen ? "open" : "close"}
     >
      <img src="/images/icon-close.svg" alt="close menu" />
     </button>
    )}
   </div>
  </nav>
 );
}
