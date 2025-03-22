import React, { useContext, useState } from "react";
import NewTask from "../taskList/NewTask";
import { AuthContext } from "../../context/AuthProvider";


const Create = () => {
  const [userData, setUserData] = useContext(AuthContext);

const [taskTitle, setTaskTitle] = useState('')
const [taskDescription, setTaskDescription] = useState('')
const [taskData, setTaskDate] = useState('')
const [AsignTO, setAsignTo] = useState("")
const [category, setCategory] = useState("")
const [ task ,settask] = useState({})

  const submitHandler = (e) => {
    e.preventDefault();
   
    settask({  taskTitle, taskDescription,taskData ,category , active:true, NewTask: true , failed: false, completed:false})
   
   const data = userData
  
   
   data.forEach( ( e)=> {
    if ( AsignTO == e.firstName) {
       e.tasks.push( task)
       
    }

   });

   setUserData(data)
 

    setTaskDate('')
    setAsignTo('')
    setCategory("")
    setTaskDescription("")
    setTaskTitle('')
  };

  return (
    <div className="p-5 mt-7 rounded">
      <form
        onSubmit={submitHandler}
        className="flex flex-wrap justify-between items-start"
      >
        <div className="w-1/2">
          <div>
            <h3 className="mb-1.5">Task Title</h3>
            <input
             value={taskTitle}
             onChange={ (e) => {
              setTaskTitle( e.target.value)
             }}
              type="text"
              placeholder="Make UI design"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            />
          </div>
          <div>
            <h3 className="mb-1.5">Date</h3>
            <input
             value={taskData}
             onChange={ (e) => {
              setTaskDate( e.target.value)
             }}
              type="date"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            />
          </div>
          <div>
            <h3 className="mb-1.5">Assign to</h3>
            <input
            value={ AsignTO}
            onChange={ (e) => {
             setAsignTo( e.target.value)
            }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Employee name"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-1.5">Category</h3>
            <input
            value={category}
            onChange={ (e) => {
             setCategory( e.target.value)
            }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Design, Dev, etc."
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
          value={taskDescription}
          onChange={ (e) => {
           setTaskDescription( e.target.value)
          }}
            className="text-sm py-1 px-2 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 h-[27vh] w-[34vw]"
            cols="10"
          ></textarea>
          <button
            type="submit"
            className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
