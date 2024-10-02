import "./Footer.css";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import Logo from "../assets/Logo.png";
export const Footer = () => {
  return (
    <>
      <div className="bg-gray-900 text-gray-300 p-6 flex flex-col md:flex-row items-center justify-between shadow-lg">
        <div className="flex items-center w-full md:w-1/3 mb-4 md:mb-0">
          <img src={Logo} alt="Logo" className="h-28 filter invert" /> {/* Logo size */}
        </div>

        <div className="flex flex-col items-center w-full md:w-1/3 mb-4 md:mb-0">
          <label
            className="text-2xl text-gray-400 mb-2 text-center"
            htmlFor="news-letter-text-field">
            Subscribe to our Newsletter!
          </label>
          <div className="flex items-center mb-4">
            <input
              type="text"
              id="news-letter-text-field"
              className="bg-gray-800 border border-gray-600 text-white rounded-lg p-2 mr-2 outline-none shadow-inner focus:ring-2 focus:ring-blue-500 w-full max-w-xs"
              placeholder="Enter your email"
            />
            <button className="bg-transparent border border-gray-600 text-white rounded px-4 py-1 transition hover:bg-gray-700">
              Subscribe
            </button>
          </div>
          <div className="flex flex-col items-center space-y-2 mb-2">
            <div className="flex space-x-4">
              <a href="/" className="hover:text-white">
                Testimonials
              </a>
              <a href="/" className="hover:text-white">
                Privacy Policy
              </a>
            </div>
            <div className="flex space-x-4">
              <a href="/" className="hover:text-white">
                Terms of Use
              </a>
              <a href="/" className="hover:text-white">
                FAQ
              </a>
            </div>
          </div>
          <p className="text-sm text-center">2024 - KaamSathi. All rights Reserved.</p>
        </div>

        <div className="flex flex-col items-center w-full md:w-1/3">
          <span className="text-lg">Follow Us On:</span>
          <span className="flex space-x-4 mt-2">
            <FaGithub className="text-gray-400 hover:scale-110 transition-transform" />
            <FaInstagram className="text-gray-400 hover:scale-110 transition-transform" />
            <FaXTwitter className="text-gray-400 hover:scale-110 transition-transform" />
            <CiLinkedin className="text-gray-400 hover:scale-110 transition-transform" />
          </span>
        </div>
      </div>
    </>
  );
};
