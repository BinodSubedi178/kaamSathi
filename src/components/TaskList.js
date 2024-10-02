export const TaskList = ({ id, task, handleComplete, completed, handleDelete }) => {
  return (
    <>
      <span>{task}</span>
      <div className="flex gap-2">
        {completed === false ? (
          <button
            onClick={() => handleComplete({ id, task })}
            className="px-2 py-1 text-sm text-white bg-green-500 rounded hover:bg-green-600">
            Complete
          </button>
        ) : (
          ""
        )}
        {completed === true ? (
          <button
            onClick={() => handleDelete(id)}
            className="px-2 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600">
            Delete
          </button>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
