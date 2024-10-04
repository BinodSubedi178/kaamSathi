export const NoTasks = ({ darkToggle }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center 
                     ${darkToggle ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} 
                     rounded-lg shadow md:max-w-xl p-6 mx-auto my-4`}>
      <h5
        className={`mb-2 text-xl font-semibold tracking-tight 
                     ${darkToggle ? "text-white" : "text-gray-900"} text-center`}>
        No Tasks to Display
      </h5>
      <p
        className={`mb-0 font-normal 
                     ${darkToggle ? "text-gray-400" : "text-gray-700"} text-center`}>
        "Believe you can and you're halfway there."
      </p>
      <p
        className={`mb-0 font-normal 
                     ${darkToggle ? "text-gray-400" : "text-gray-700"} text-center`}>
        "Every accomplishment starts with the decision to try."
      </p>
      <p
        className={`mb-0 font-normal 
                     ${darkToggle ? "text-gray-400" : "text-gray-700"} text-center`}>
        "Stay positive, work hard, and make it happen!"
      </p>
    </div>
  );
};

export const NoCompletedTasks = ({ darkToggle }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center 
                     ${darkToggle ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} 
                     rounded-lg shadow md:max-w-xl p-6 mx-auto my-4`}>
      <h5
        className={`mb-2 text-xl font-semibold tracking-tight 
                     ${darkToggle ? "text-white" : "text-gray-900"} text-center`}>
        No Task Completed
      </h5>
      <p
        className={`mb-0 font-normal 
                     ${darkToggle ? "text-gray-400" : "text-gray-700"} text-center`}>
        "Progress is impossible without change."
      </p>
      <p
        className={`mb-0 font-normal 
                     ${darkToggle ? "text-gray-400" : "text-gray-700"} text-center`}>
        "Every small step counts."
      </p>
      <p
        className={`mb-0 font-normal 
                     ${darkToggle ? "text-gray-400" : "text-gray-700"} text-center`}>
        "Your journey has just begun!"
      </p>
    </div>
  );
};
