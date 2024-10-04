import { CgProfile } from "react-icons/cg";
import { useState } from "react";

export const Profile = ({ darkToggle }) => {
  const [dropDown, setDropDown] = useState(false);

  const dropDownHandler = () => {
    setDropDown(!dropDown);
  };
  return (
    <>
      <button
        id="dropdownInformationButton"
        onClick={dropDownHandler}
        className={`flex items-center justify-center w-10 h-10 rounded-lg text-sm font-medium inline-flex ${
          darkToggle
            ? "text-white dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            : "text-blue-700 hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
        } bg-transparent`}
        type="button">
        <CgProfile className="w-6 h-6" />
      </button>

      {dropDown && (
        <div
          id="dropdownInformation"
          className={`z-10 rounded-lg shadow w-44 ${
            darkToggle ? "bg-gray-700 divide-gray-600" : "bg-white divide-gray-100"
          } divide-y`}>
          <div className={`px-4 py-3 text-sm ${darkToggle ? "text-white" : "text-gray-900"}`}>
            <div>Binod Subedi</div>
          </div>

          <div className="py-2">
            <a
              href="#"
              className={`block px-4 py-2 text-sm ${
                darkToggle
                  ? "text-gray-200 hover:bg-gray-600 dark:hover:text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}>
              Profile
            </a>
            <a
              href="#"
              className={`block px-4 py-2 text-sm ${
                darkToggle
                  ? "text-gray-200 hover:bg-gray-600 dark:hover:text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}>
              Sign out
            </a>
          </div>
        </div>
      )}
    </>
  );
};
