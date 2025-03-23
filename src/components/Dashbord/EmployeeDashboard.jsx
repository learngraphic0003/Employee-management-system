import React from 'react'
import Header from "../other/Header"
import Tasklistnumber from '../other/Tasklistnumber'
import Tasklist from '../taskList/Tasklist'
import Footer from '../other/Footer'
import Video from '../other/Video'

const EmployeeDashboard = ( props) => {
  


  return (
   <>

<div className='p-[20px,20px , 0px,20px'>
  
   <Header changeUser = {props.changeUser} data = {props.data}/> 
    <Tasklistnumber  data = {props.data}/>
    <Tasklist  data = {props.data}/>
    <Video/>
    <Footer/>

   
 </div>
 


   
   </>
  )
}

export default EmployeeDashboard
