import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Header = (props) => {

  useGSAP( ()=> {
    gsap.from( '.box', {
     
      opacity:0,
      x: -300,
      delay:0.7,
      duration:1



    })
   
  })

  const logout = () => {
    localStorage.setItem('loggedInUser', ' ');
    // window.location.reload();
    props.changeUser('');
  };

  return (
    <div className=" box flex items-center justify-between p-4 bg-blue-600 text-white shadow-md rounded-md max-w-screen-2xl  m-auto mt-3.5">
      <h1 className="text-2xl font-semibold ">
        Hello, {props.data.firstName} <span className="font-extrabold text-yellow-400">👀 </span>
      </h1>
      <button
        onClick={logout}
        className="px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded-lg transition duration-300 ease-in-out"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
