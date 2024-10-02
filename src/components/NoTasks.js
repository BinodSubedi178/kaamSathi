export const NoTasks = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg shadow md:max-w-xl p-6 mx-auto my-4">
      <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">
        No Tasks to Display
      </h5>
      <p className="mb-0 font-normal text-gray-700 dark:text-gray-400 text-center">
        "Believe you can and you're halfway there."
      </p>
      <p className="mb-0 font-normal text-gray-700 dark:text-gray-400 text-center">
        "Every accomplishment starts with the decision to try."
      </p>
      <p className="mb-0 font-normal text-gray-700 dark:text-gray-400 text-center">
        "Stay positive, work hard, and make it happen!"
      </p>
    </div>
  );
};

export const NoCompletedTasks = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg shadow md:max-w-xl p-6 mx-auto my-4">
      <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">
        No Task Completed
      </h5>
      <p className="mb-0 font-normal text-gray-700 dark:text-gray-400 text-center">
        "Progress is impossible without change."
      </p>
      <p className="mb-0 font-normal text-gray-700 dark:text-gray-400 text-center">
        "Every small step counts."
      </p>
      <p className="mb-0 font-normal text-gray-700 dark:text-gray-400 text-center">
        "Your journey has just begun!"
      </p>
    </div>
  );
};
