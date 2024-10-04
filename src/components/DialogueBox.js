import { IoMdSunny } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";

export const Confirmation = ({ darkToggle }) => {
  return (
    <div className="dialogue-box">
      <div
        className={`max-w-xs p-4 text-green-700 border border-green-300 rounded-lg ${
          darkToggle ? "bg-gray-800 border-green-800 text-green-400" : "bg-green-50"
        }`}
        role="alert">
        <div className="flex items-center justify-between">
          <span className="sr-only">Confirmation Box</span>
          <h3 className="font-medium">Task Added Successfully.</h3>
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 12"></svg>
        </div>
      </div>
    </div>
  );
};

export const Congratutlations = ({ darkToggle }) => {
  return (
    <div className="dialogue-box">
      <div
        className={`max-w-xs p-4 text-green-700 border border-green-300 rounded-lg ${
          darkToggle ? "bg-gray-800 border-green-800 text-green-400" : "bg-green-50"
        }`}
        role="alert">
        <div className="flex items-center justify-between">
          <span className="sr-only">Confirmation Box</span>
          <h3 className="font-medium">Congratulations!</h3>
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 12"></svg>
        </div>
      </div>
    </div>
  );
};

export const Delete = ({ darkToggle }) => {
  return (
    <div className="dialogue-box">
      <div
        className={`max-w-xs p-4 text-red-700 border border-red-300 rounded-lg ${
          darkToggle ? "bg-gray-800 border-red-800 text-red-400" : "bg-red-50"
        }`}
        role="alert">
        <div className="flex items-center justify-between">
          <span className="sr-only">Confirmation Box</span>
          <h3 className="font-medium">Task Deleted.</h3>
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 12"></svg>
        </div>
      </div>
    </div>
  );
};

export const Empty = ({ darkToggle }) => {
  return (
    <div className="dialogue-box">
      <div
        className={`max-w-xs p-4 text-red-700 border border-red-300 rounded-lg ${
          darkToggle ? "bg-gray-800 border-red-800 text-red-400" : "bg-red-50"
        }`}
        role="alert">
        <div className="flex items-center justify-between">
          <span className="sr-only">Confirmation Box</span>
          <h3 className="font-medium">Task Cannot be Empty.</h3>
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 12"></svg>
        </div>
      </div>
    </div>
  );
};

export const DarkToggle = ({ handleDarkToggle, darkToggle }) => {
  return (
    <div onClick={handleDarkToggle} className={`dark-toggle ${darkToggle ? "dark" : "light"}`}>
      {darkToggle ? <MdDarkMode /> : <IoMdSunny />}
    </div>
  );
};
