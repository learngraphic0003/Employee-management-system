import React from "react";
import Tasklist from "../taskList/Tasklist";

const Tasklistnumber = ({data}) => {

  
  return (
    <>
      <div className="flex mt-10 justify-between  gap-5 screen ">
        <div className=" w[45%] py-6 px-9 bg-red-400 rounded-xl">
          <h2 className="3xl font-semibold">{data.taskCount.active} </h2>
          <h3 className="text-xl font-medium"> Active</h3>
        </div>
        <div className=" w[45%] py-6 px-9 bg-green-500 rounded-xl">
          <h2 className="3xl font-semibold">{data.taskCount.newTask }</h2>
          <h3 className="text-xl font-medium"> New Task</h3>
        </div>
        <div className=" w[45%] py-6 px-9 bg-blue-500 rounded-xl">
          <h2 className="3xl font-semibold">{data.taskCount.completed} </h2>
          <h3 className="text-xl font-medium"> Completed</h3>
        </div>
        <div className=" w[45%] py-6 px-9 bg-yellow-400 rounded-xl">
          <h2 className="3xl font-semibold"> {data.taskCount.failed}</h2>
          <h3 className="text-xl font-medium"> Failed </h3>
        </div>
      </div>
    </>
  );
};

export default Tasklistnumber;
