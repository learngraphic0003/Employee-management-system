import React from 'react'
import Header from '../other/header'
import Tasklistnumber from '../other/tasklistnumber'
import Tasklist from '../taskList/Tasklist'

const EmployeeDashboard = () => {
  return (
   <>

<div className='p-20'> <Header/> 
    <Tasklistnumber/>
 <Tasklist/>
 </div>

   
   </>
  )
}

export default EmployeeDashboard
