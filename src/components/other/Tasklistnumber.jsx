import React from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const Tasklistnumber = ({ data }) => {
  useGSAP(() => {
    // gsap code here...
    gsap.from('.box1', { 
      opacity: 0,
      y: -30,
      duration:1,
      stagger:0.7

     }); // <-- automatically reverted
},)
 

  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-screen-2xl  m-auto  ">
      {/* Active Task */}
      <div className="box1 py-6 px-9 bg-red-400 rounded-xl text-center shadow-lg">
        <h2 className="text-3xl font-extrabold text-white">{data.taskCount.active}</h2>
        <h3 className="text-xl font-medium text-white">Active</h3>
      </div>

      {/* New Task */}
      <div className=" box1 py-6 px-9 bg-green-500 rounded-xl text-center shadow-lg">
        <h2 className="text-3xl font-extrabold text-white">{data.taskCount.newTask}</h2>
        <h3 className="text-xl font-medium text-white">New Task</h3>
      </div>

      {/* Completed Task */}
      <div className=" box1 py-6 px-9 bg-blue-500 rounded-xl text-center shadow-lg">
        <h2 className="text-3xl font-extrabold text-white">{data.taskCount.completed}</h2>
        <h3 className="text-xl font-medium text-white">Completed</h3>
      </div>

      {/* Failed Task */}
      <div className=" box1 py-6 px-9 bg-yellow-400 rounded-xl text-center shadow-lg">
        <h2 className="text-3xl font-extrabold text-white">{data.taskCount.failed}</h2>
        <h3 className="text-xl font-medium text-white">Failed</h3>
      </div>
    </div>
  );
};

export default Tasklistnumber;
