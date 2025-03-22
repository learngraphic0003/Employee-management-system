import React from 'react'
import Header from "../other/Header"
import Tasklistnumber from '../other/Tasklistnumber'
import Tasklist from '../taskList/Tasklist'

const EmployeeDashboard = ( props) => {
  


  return (
   <>

<div className='p-20'>
  
   <Header changeUser = {props.changeUser} data = {props.data}/> 
    <Tasklistnumber  data = {props.data}/>
    <Tasklist  data = {props.data}/>
 </div>

   
   </>
  )
}

export default EmployeeDashboard
