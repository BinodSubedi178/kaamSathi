const Tabs = ({ toggleValue, setToggleValue, tasks, completeTrack, darkToggle }) => {
  return (
    <>
      <ul
        className={`text-sm font-medium text-center rounded-lg shadow sm:flex ${
          darkToggle ? "dark:divide-gray-700 dark:text-gray-400" : "divide-gray-200 text-gray-700"
        } toggle-ul`}>
        <li className="w-full focus-within:z-10">
          <button
            className={`inline-block relative w-full p-4 sm:border-r 
              ${
                toggleValue
                  ? "bg-indigo-600 text-white"
                  : darkToggle
                  ? "bg-gray-700 text-white hover:bg-gray-600"
                  : "bg-white text-gray-800 hover:bg-gray-100"
              } 
              focus:ring-4 focus:ring-indigo-300 focus:outline-none`}
            onClick={() => {
              setToggleValue(true);
            }}>
            Incomplete
            <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-semibold text-indigo-800 bg-indigo-200 rounded-full">
              {tasks.length}
            </span>
          </button>
          <button
            className={`inline-block relative w-full p-4 sm:border-l 
              ${
                !toggleValue
                  ? "bg-indigo-600 text-white"
                  : darkToggle
                  ? "bg-gray-700 text-white hover:bg-gray-600"
                  : "bg-white text-gray-800 hover:bg-gray-100"
              } 
              focus:ring-4 focus:ring-indigo-300 focus:outline-none`}
            onClick={() => {
              setToggleValue(false);
            }}>
            Completed
            <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-semibold text-indigo-800 bg-indigo-200 rounded-full">
              {completeTrack.length}
            </span>
          </button>
        </li>
      </ul>
    </>
  );
};

export default Tabs;
