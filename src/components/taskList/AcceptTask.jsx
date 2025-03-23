import React from 'react';

const AcceptTask = ({ data }) => {
  console.log(data)
  return (
    <div className="max-w-sm w-full bg-yellow-400 rounded-xl shadow-lg p-6 mx-auto mb-6 transition-transform transform hover:scale-105">
      <div className="flex justify-between items-center">
        {/* Category and Date */}
        <h3 className="bg-red-600 text-white px-3 py-1 rounded text-xs font-semibold">{data.category}</h3>
        <h4 className="text-sm text-gray-700">{data.taskDate}</h4>
      </div>
      <h2 className="mt-4 text-2xl font-semibold text-gray-800">{data.taskTitle}</h2>
      <p className="text-sm text-gray-600 mt-2">{data.taskDescription}</p>

      {/* Buttons */}
      <div className="flex justify-between mt-4 space-x-4">
        <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md text-sm transition duration-300 w-full sm:w-auto">
          Mark as Completed
        </button>
        <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md text-sm transition duration-300 w-full sm:w-auto">
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
