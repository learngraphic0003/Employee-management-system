import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Alltask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="bg-black p-5 rounded mt-5 ">
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="w-1/5  text-xl font-medium"> Employee Name</h2>
        <h2 className="w-1/5  text-xl font-medium"> New Task</h2>
        <h2 className="w-1/5  text-xl font-medium"> Active Task</h2>
        <h2 className="w-1/5  text-xl font-medium"> completed</h2>
        <h2 className="w-1/5  text-xl font-medium"> failed</h2>
      </div>

      <div className="">
        {userData.map((e,idx) => {
          return (
            <div className="bg-green-400 mb-2 py-2 px-4  flex justify-between rounded ">
              <h2 key={idx} className="w-1/5 bg-red-400 text-xl font-medium">
                {" "}
                {e.firstName}{" "}
              </h2>
              <h3   key={idx} className="w-1/5 bg-red-400 text-xl font-medium">
                {" "}
                {e.taskCount.newTask}
              </h3>
              <h5 key={idx} className="w-1/5 bg-red-400 text-xl font-medium">
                {e.taskCount.active}{" "}
              </h5>
              <h5  key={idx} className="w-1/5 bg-red-400 text-xl font-medium">
                {" "}
                {e.taskCount.completed}{" "}
              </h5>
              <h5 key={idx}className="w-1/5 bg-red-400 text-xl font-medium">
                {" "}
                {e.taskCount.failed}{" "}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Alltask;
