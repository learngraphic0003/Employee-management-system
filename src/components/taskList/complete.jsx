import React from 'react';

const Complete = ({ data }) => {
  return (
    <div className="max-w-sm w-full bg-yellow-400 rounded-xl shadow-lg p-6 mx-auto mb-6 transition-transform transform hover:scale-105">
      <div className="flex justify-between items-center">
        {/* Category and Date */}
        <h3 className="bg-red-600 text-white px-3 py-1 rounded text-xs font-semibold">{data.category}</h3>
        <h4 className="text-sm text-gray-700">{data.taskDate}</h4>
      </div>
      <h2 className="mt-4 text-2xl font-semibold text-gray-800">{data.taskTitle}</h2>
      <p className="text-sm text-gray-600 mt-2">{data.taskDescription}</p>
      <div className="mt-4">
        <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-md text-sm focus:outline-none transition duration-300">
          Complete
        </button>
      </div>
    </div>
  );
};

export default Complete;
