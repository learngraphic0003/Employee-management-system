import React from 'react'

const Create = () => {
  return (
    <>  
    <div className="p-5  mt-7 rounded">
    <form className="flex flex-wrap justify-between items-start ">
      <div className="w-1/2">
        <div>
          {" "}
          <h3 className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"> task title</h3>
          <input
            type="text"
            placeholder="make ui design"
            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
          />{" "}
        </div>
        <div>
          <h3> Date</h3>
          <input type="date" className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" />
        </div>
        <div>
          {" "}
          <h3> asign to </h3>
          <input
            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            type="text"
            placeholder="employee name"
          />
        </div>
        <div>
          <h3 className=" text-sm text-gray-300 mb-0.5"> Categrory</h3>
          <input
            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            type="text"
            placeholder="design, dev , etc"
          />
        </div>
      </div>

      <div className="w-2/5 flex flex-col items-start"> 
        {" "}
        <h3 className="text-sm text-gray-300 mb-0.5"> description</h3>
        <textarea
          className="text-sm py-1 px-2  rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 h-[27vh] w-[34vw]"
          name=""
          id=" "
          cols="10"
        ></textarea>
         <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full"> create task</button>
      </div>

     
    </form>
  </div>
  </>
  )
}

export default Create
