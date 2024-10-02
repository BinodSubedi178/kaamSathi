import Logo from "../assets/Logo.png";
import "./Header.css";

export const Header = () => {
  return (
    <>
      <header className="flex justify-between items-center px-6 md:px-10 lg:px-20 bg-gray-100 shadow">
        <img
          className="h-24 transition-transform duration-200 transform hover:scale-105"
          src={Logo}
          alt="Logo"
        />
        <nav className="flex space-x-8">
          <a
            href="/"
            className="text-gray-600 text-lg transition-colors duration-200 hover:text-gray-400 px-6">
            Home
          </a>
        </nav>
      </header>
      <hr className="bg-black bg-opacity-21 h-px border-none" />
    </>
  );
};
