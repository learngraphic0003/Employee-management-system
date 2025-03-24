import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';



const Alltask = () => {


  const [userData] = useContext(AuthContext);
  useGSAP(() => {
  
    gsap.from('.box', { 
      opacity:0,
      y:-100,
      delay:1.4,
      duration:1,
     
      

    }); 
    gsap.from('h1', { 
      opacity:0,
      y:-100,
      delay:3,
      duration:1,
      stagger:0.3,
     
     
      

    }); 
},)
  
 

  return (
    <div className=" p-5 rounded-lg mt-5 text-white max-w-screen-2xl m-auto">
      <div className="bg-red-500 mb-4 py-3 px-6 flex justify-between rounded-lg text-center font-semibold text-lg">
        <h2 className="w-1/5 box">Employee Name</h2>
        <h2 className="w-1/5 box">New Task</h2>
        <h2 className="w-1/5 box">Active Task</h2>
        <h2 className="w-1/5 box">Completed</h2>
        <h2 className="w-1/5 box">Failed</h2>
      </div>

      <div className="space-y-3">
        {userData.map((e, idx) => (
          <div
            key={idx}
            className= " box2 bg-green-500 py-3 px-6 flex justify-between rounded-lg text-center text-white shadow-lg hover:shadow-xl transition-all "
          >
            <h1 className="w-1/5 font-medium">{e.firstName}</h1>
            <h1 className="w-1/5 font-medium">{e.taskCount.newTask}</h1>
            <h1 className="w-1/5 font-medium">{e.taskCount.active}</h1>
            <h1 className="w-1/5 font-medium">{e.taskCount.completed}</h1>
            <h1 className="w-1/5 font-medium text-red-900">{e.taskCount.failed}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alltask;
