export const TaskList = ({ id, task, handleComplete, completed, handleDelete, darkToggle }) => {
  return (
    <>
      <span className={`${darkToggle ? "text-white" : "text-gray-900"}`}>{task}</span>
      <div className="flex gap-2">
        {completed === false && (
          <button
            onClick={() => handleComplete({ id, task })}
            className={`px-2 py-1 text-sm text-white bg-green-500 rounded hover:bg-green-600 ${
              darkToggle ? "bg-green-600 hover:bg-green-700" : ""
            }`}>
            Complete
          </button>
        )}
        {completed === true && (
          <button
            onClick={() => handleDelete(id)}
            className={`px-2 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600 ${
              darkToggle ? "bg-red-600 hover:bg-red-700" : ""
            }`}>
            Delete
          </button>
        )}
      </div>
    </>
  );
};
