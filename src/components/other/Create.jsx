import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Create = () => {
  const [userData, setUserData] = useContext(AuthContext);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskData, setTaskDate] = useState('');
  const [AsignTO, setAsignTo] = useState('');
  const [category, setCategory] = useState('');
  const [task, settask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
   
    settask({ taskTitle, taskDescription, taskData, category, active: true, NewTask: true, failed: false, completed: false });

    const data = userData;

    data.forEach((e) => {
      if (AsignTO === e.firstName) {
        e.tasks.push(task);
      }
    });

    setUserData(data);

    setTaskDate('');
    setAsignTo('');
    setCategory('');
    setTaskDescription('');
    setTaskTitle('');
  };

  return (
    <div className="p-5 mt-7 rounded-md bg-transparent shadow-lg max-w-screen-2xl m-auto text-white placeholder:text-green-400">
      <form onSubmit={submitHandler} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="flex flex-col space-y-4">
          <div>
            <h3 className="mb-2 text-lg font-semibold">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              type="text"
              placeholder="Make UI design"
              className="text-sm py-2 px-3 w-full rounded-lg border-gray-400 border mb-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold">Date</h3>
            <input
              value={taskData}
              onChange={(e) => setTaskDate(e.target.value)}
              type="date"
              className="text-sm py-2 px-3 w-full rounded-lg border-gray-400 border mb-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold">Assign to</h3>
            <input
              value={AsignTO}
              onChange={(e) => setAsignTo(e.target.value)}
              className="text-sm py-2 px-3 w-full rounded-lg border-gray-400 border mb-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              type="text"
              placeholder="Employee name"
            />
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold">Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-sm py-2 px-3 w-full rounded-lg border-gray-400 border mb-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              type="text"
              placeholder="Design, Dev, etc."
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col space-y-4">
          <div>
            <h3 className="mb-2 text-lg font-semibold">Description</h3>
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              className="text-sm py-2 px-3 w-full h-48 rounded-lg border-gray-400 border mb-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Enter task description..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-emerald-500 text-white py-3 px-6 rounded-lg text-sm font-semibold hover:bg-emerald-600 transition duration-200 ease-in-out w-full"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
