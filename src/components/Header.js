import Logo from "../assets/Logo.png";

import { Profile } from "./Profile";
import "./Header.css";

export const Header = ({ darkToggle }) => {
  return (
    <>
      <header
        className={`flex justify-between items-center px-6 md:px-10 lg:px-20 ${
          darkToggle ? "bg-gray-800" : "bg-gray-100"
        } shadow`}>
        <img
          className={`logo h-24 transition-transform duration-200 transform hover:scale-105 ${
            darkToggle ? "filter invert" : ""
          }`}
          src={Logo}
          alt="Logo"
        />
        <nav className="flex space-x-8">
          <Profile darkToggle={darkToggle} />
        </nav>
      </header>
      <hr className={`h-px border-0 ${darkToggle ? "bg-gray-600" : "bg-gray-300"}`} />
    </>
  );
};
