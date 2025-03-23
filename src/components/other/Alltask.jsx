import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";



const Alltask = () => {


  const [userData] = useContext(AuthContext);
  
 

  return (
    <div className="bg-gray-900 p-5 rounded-lg mt-5 text-white max-w-screen-2xl m-auto">
      <div className="bg-red-500 mb-4 py-3 px-6 flex justify-between rounded-lg text-center font-semibold text-lg">
        <h2 className="w-1/5">Employee Name</h2>
        <h2 className="w-1/5">New Task</h2>
        <h2 className="w-1/5">Active Task</h2>
        <h2 className="w-1/5">Completed</h2>
        <h2 className="w-1/5">Failed</h2>
      </div>

      <div className="space-y-3">
        {userData.map((e, idx) => (
          <div
            key={idx}
            className="bg-green-500 py-3 px-6 flex justify-between rounded-lg text-center text-white shadow-lg hover:shadow-xl transition-all "
          >
            <h2 className="w-1/5 font-medium">{e.firstName}</h2>
            <h3 className="w-1/5 font-medium">{e.taskCount.newTask}</h3>
            <h5 className="w-1/5 font-medium">{e.taskCount.active}</h5>
            <h5 className="w-1/5 font-medium">{e.taskCount.completed}</h5>
            <h5 className="w-1/5 font-medium text-red-900">{e.taskCount.failed}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alltask;
