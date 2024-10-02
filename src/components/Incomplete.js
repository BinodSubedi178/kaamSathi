import "./Incomplete.css";
import { TaskList } from "./TaskList";
export const Incomplete = ({ tasks, handleComplete }) => {
  return (
    <div className="incomplete-wrapper mx-auto w-full max-w-2xl p-4">
      <ul className="flex flex-col gap-4">
        {tasks.map(({ id, task, completed }) => (
          <li
            className="flex justify-between items-center block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            key={id}>
            <TaskList id={id} task={task} completed={completed} handleComplete={handleComplete} />
          </li>
        ))}
      </ul>
    </div>
  );
};
