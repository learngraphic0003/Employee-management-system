import React from 'react'

const NewTask = ({data}) => {
  return (
 <>

<div className="h-full w-[300px] bg-yellow-400 rounded-xl flex-shrink-0 p-10">
        <div className="flex justify-between  items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded">{data.category}</h3>
          <h4 className="text-base">{ data.taskDate} </h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
        <p>{ data.taskDescription }  </p>
        <div className='flex justify-between mt-4'>
     <button className='bg-green-300 py-1 px-2 text-sm'> Accept task</button>
  
     </div>
      </div>
 </>
  )
}

export default NewTask
