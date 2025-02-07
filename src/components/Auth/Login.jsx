import React, { useState } from 'react'

const Login = () => {
  const [email,setEmail] = useState('')
  const [password, SetPassword] = useState('')


  const submit = (e)=> {
    e.preventDefault()
    console.log("hello guyss, from submitted")
  }

  return (
   <>
   
   <div  className='flex h-screen w-screen items-center justify-center'>

    <div className='border-2 border-red-200 rounded-2xl'> 
        <form onSubmit={(e)=> {
          submit(e)

        }} className='flex flex-col item-center justify-center p-12 '>
            <input
            value={email}
             onChange={  (e)=> { setEmail(e.target.value) }} required className='border-2 border-red-200 rounded-2xl py-3 px-5 mt-3.5 placeholder:text-gray-400' type="email" placeholder='Enter your email' /> 
            <input required className='border-2 border-red-200 rounded-2xl py-3 px-5 mt-3.5 placeholder:text-gray-400' type="password" placeholder='Enter your password' />
            
            <button className=' border-red-200 rounded-full py-2 px-5 text-xl mt-3.5 bg-red-400'> Login  </button>
             </form>
            
             </div>

   </div>
   </>
  )
}

export default Login
