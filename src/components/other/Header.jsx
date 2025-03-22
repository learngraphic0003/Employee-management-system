import React, { useState } from 'react'

const Header = ( props) => {
//  console.log(props.data.firstName|| "admin")


const logout = ()=> {
  localStorage.setItem('loggedInUser'," ")
  // window.location.reload()
  props.changeUser( '')
}
 
  
  return (
    <div className='flex items-end justify-between'>
      <h1>  Hello 👀 </h1>
      <button onClick={logout}> Log Out </button>
    </div>
  )
}

export default Header
