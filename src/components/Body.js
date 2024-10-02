import Tabs from "./Tabs";
import { useState } from "react";
import { Incomplete } from "./Incomplete";
import { Completed } from "./Completed";
import "./Body.css";
import { DialogueBox } from "./DialogueBox";
import { NoTasks, NoCompletedTasks } from "./NoTasks";

const Body = () => {
  const [toggleValue, setToggleValue] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const [completeTrack, setCompleteTrack] = useState([]);

  const handleAddTask = () => {
    let id = tasks.length + 1;
    const newTasks = [
      {
        id: id,
        task: inputValue,
        completed: false,
      },
    ];
    setTasks([...tasks, ...newTasks]);
    setInputValue("");
  };
  const handleComplete = ({ id, task }) => {
    const newCompleteTrack = [
      {
        id: id,
        task: task,
        completed: true,
      },
    ];
    setCompleteTrack([...completeTrack, ...newCompleteTrack]);
    setTasks(tasks.filter((taskid) => id !== taskid.id));
  };

  const handleDelete = (id) => {
    setCompleteTrack(completeTrack.filter((track) => track.id !== id));
  };
  return (
    <>
      <div className="main-body-wrapper min-h-screen flex flex-col">
        <div className="input-area px-4 sm:px-6 md:px-10 lg:px-20 py-6 flex-grow">
          <div className="mb-6 flex flex-col sm:flex-row justify-center items-center">
            <input
              type="text"
              id="default-input"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full max-w-md p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your tasks here!"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
            <button
              className="mt-2 sm:mt-0 sm:ml-3 p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200"
              onClick={handleAddTask}>
              Add Task
            </button>
          </div>
          <div className="flex justify-center">
            <Tabs
              toggleValue={toggleValue}
              setToggleValue={setToggleValue}
              tasks={tasks}
              completeTrack={completeTrack}
            />
          </div>
        </div>
        {tasks.length !== 0 || completeTrack.length !== 0 ? (
          toggleValue ? (
            <Incomplete tasks={tasks} handleComplete={handleComplete} />
          ) : completeTrack.length !== 0 ? (
            <Completed completeTrack={completeTrack} handleDelete={handleDelete} />
          ) : (
            <NoCompletedTasks />
          )
        ) : (
          <NoTasks />
        )}
      </div>
    </>
  );
};

export default Body;