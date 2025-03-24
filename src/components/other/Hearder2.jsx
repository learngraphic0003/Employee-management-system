import React from 'react';


const Header2 = (props) => {

  
  
  const logout = () => {
    localStorage.setItem('loggedInUser', ' ');
    // window.location.reload();
    props.changeUser('');
  };

  return (
    <div className="flex items-center justify-between p-4 bg-black text-white shadow-md rounded-md max-w-screen-2xl  m-auto mt-1.5">
      <div className=" text-2xl font-semibold flex items-center">
        <span className='text-red-400 font-bold'>H</span>ello, Admin <span className="font-extrabold text-yellow-400"> <img src="https://steamuserimages-a.akamaihd.net/ugc/395550145285361080/7407352D633D9E23EB8EC682D972008591D76932/?imw=5000&amp;imh=5000&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=false" alt="" className='w-[50%]'/></span>
      </div>
      <button
       
        onClick={logout}
        className=" px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded-lg transition duration-300 ease-in-out"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header2;
