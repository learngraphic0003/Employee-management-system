import React from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashbord/EmployeeDashboard'
import Tasklist from './components/taskList/Tasklist'
import AdminDashbord from './components/Dashbord/AdminDashboard'



const App = () => {
  return (
  <>

  <div className='bg-black text-white'>
  
 {/* <Login/> */}

 {/* <EmployeeDashboard/> */}

 <AdminDashbord/>


 </div>
  
  </>
  )
}

export default App
