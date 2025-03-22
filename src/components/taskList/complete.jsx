import React from 'react'

const Complete = ({data}) => {
  return (
    <>
    
    <div className="h-full w-[300px] bg-yellow-400 rounded-xl flex-shrink-0 p-10">
    <div className="flex justify-between  items-center">
      <h3 className="bg-red-600 px-3 py-1 rounded">{data.category}</h3>
      <h4 className="text-base">  {data.taskDate} </h4>
    </div>
    <h2 className="mt-5 text-2xl font-semibold">{ data.taskTitle}</h2>
    <p> {data.taskDescription}</p>
    <div className='mt-2'>
        <button className='w-full'> complete </button>
    </div>
  </div>
 

  </>
  )
}

export default Complete
