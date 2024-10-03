export const Confirmation = () => {
  return (
    <div className="dialogue-box">
      <div
        className="max-w-xs p-4 text-green-700 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:border-green-800 dark:text-green-400"
        role="alert">
        <div className="flex items-center justify-between">
          <span className="sr-only">Confirnation Box</span>
          <h3 className="font-medium">Task Added Succesfully.</h3>
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

export const Congratutlations = () => {
  return (
    <div className="dialogue-box">
      <div
        className="max-w-xs p-4 text-green-700 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:border-green-800 dark:text-green-400"
        role="alert">
        <div className="flex items-center justify-between">
          <span className="sr-only">Confirnation Box</span>
          <h3 className="font-medium">Congratutlations!</h3>
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

export const Delete = () => {
  return (
    <div className="dialogue-box">
      <div
        className="max-w-xs p-4 text-red-700 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:border-green-800 dark:text-red-400"
        role="alert">
        <div className="flex items-center justify-between">
          <span className="sr-only">Confirnation Box</span>
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

export const Empty = () => {
  return (
    <div className="dialogue-box">
      <div
        className="max-w-xs p-4 text-red-700 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:border-green-800 dark:text-red-400"
        role="alert">
        <div className="flex items-center justify-between">
          <span className="sr-only">Confirnation Box</span>
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
