import React from 'react';

const Header2 = (props) => {
  const logout = () => {
    localStorage.setItem('loggedInUser', ' ');
    // window.location.reload();
    props.changeUser('');
  };

  return (
    <div className="flex items-center justify-between p-4 bg-blue-600 text-white shadow-md rounded-md max-w-screen-2xl  m-auto mt-1.5">
      <h1 className="text-2xl font-semibold">
        Hello, Admin <span className="font-extrabold text-yellow-400">👀</span>
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

export default Header2;
