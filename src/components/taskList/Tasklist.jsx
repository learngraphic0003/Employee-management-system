import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import Complete from "./complete";
import FailedTask from "./FailedTask";


const Tasklist = ({data}) => {
  // console.log(data)
  return (

    <>  
    <div
      id="tasklist"
      className="w-full h-[55%] flex items-center justify-between  py-5  flex-nowrap gap-1 overflow-x-auto  "
    >
      {data.tasks.map( (e,idx)=>{
        
        if(e.active) {
            return <AcceptTask key={idx} data = {e}/>
        }
        if (e.newTask) {
          return <NewTask key={idx}  data = {e}/>
          
        } 
        if (e.completed) {
          return <Complete key={idx} data = {e}/>
          
        } 
         
        if(e.failed) {
          return <FailedTask key={idx}  data = {e}/>
        }
        
        


      })}

    </div>
      
    </>
    
  );
};

export default Tasklist;
