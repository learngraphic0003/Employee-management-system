import React from 'react';
import Focus from '../other/Focus'

const Header2 = (props) => {
  const logout = () => {
    localStorage.setItem('loggedInUser', ' ');
    props.changeUser('');
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-black  shadow-md rounded-md max-w-screen-2xl mx-auto mt-1.5 w-full">
      {/* Admin Greeting */}
      <div className="text-xl sm:text-2xl font-semibold flex items-center  text-center sm:text-left">
        {/* <span className="text-red-400 font-bold mr-0 text-w">H</span> <span className='text-white'> ello, Admin</span>  */}
        
        

<Focus 
sentence="Hello Shubham"
manualMode={false}
blurAmount={5}
borderColor="red"
animationDuration={2}
pauseBetweenAnimations={1}
/>
        
      </div>
      
          <img 
            src="https://steamuserimages-a.akamaihd.net/ugc/395550145285361080/7407352D633D9E23EB8EC682D972008591D76932/?imw=5000&amp;imh=5000&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=false" 
            alt="Admin" 
            className="w-[30%] rounded-full border-2 "
          />
        

      {/* Logout Button */}
      <button
        onClick={logout}
        className="px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded-lg transition duration-300 ease-in-out mt-2 sm:mt-0"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header2;
