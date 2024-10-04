import "./Incomplete.css";
import { TaskList } from "./TaskList";
export const Incomplete = ({ tasks, handleComplete, darkToggle }) => {
  return (
    <div className="incomplete-wrapper mx-auto w-full max-w-2xl p-4">
      <ul className="flex flex-col gap-4">
        {tasks.map(({ id, task, completed }) => (
          <li
            className={`flex justify-between items-center block p-6 border rounded-lg shadow hover:bg-gray-200 
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
              handleComplete={handleComplete}
              darkToggle={darkToggle}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
