const Tabs = ({ toggleValue, setToggleValue, tasks, completeTrack }) => {
  return (
    <>
      <ul className="text-sm font-medium text-center text-gray-500 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400 toggle-ul">
        <li className="w-full focus-within:z-10">
          <button
            className={`inline-block relative w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 ${
              toggleValue ? "button-toggle" : ""
            }`}
            onClick={() => {
              setToggleValue(true);
            }}>
            Incomplete
            <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
              {tasks.length}
            </span>
          </button>
          <button
            className={`inline-block relative w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 ${
              toggleValue ? "" : "button-toggle"
            }`}
            onClick={() => {
              setToggleValue(false);
            }}>
            Completed
            <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
              {completeTrack.length}
            </span>
          </button>
        </li>
      </ul>
    </>
  );
};

export default Tabs;
