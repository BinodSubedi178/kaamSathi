import { TaskList } from "./TaskList";

export const Completed = ({ completeTrack, handleDelete, darkToggle }) => {
  return (
    <div
      className={`incomplete-wrapper mx-auto w-full max-w-2xl p-4 ${
        darkToggle ? "bg-gray-900" : "bg-white"
      }`}>
      <ul className="flex flex-col gap-4">
        {completeTrack.map(({ id, task, completed }) => (
          <li
            className={`flex justify-between items-center block p-6 border rounded-lg shadow hover:bg-gray-100 
                      ${
                        darkToggle
                          ? "bg-gray-700 border-gray-600 hover:bg-gray-600"
                          : "bg-gray-50 border-gray-200 hover:bg-gray-100"
                      }`}
            key={id}>
            <TaskList
              id={id}
              task={task}
              completed={completed}
              handleDelete={handleDelete}
              darkToggle={darkToggle}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
