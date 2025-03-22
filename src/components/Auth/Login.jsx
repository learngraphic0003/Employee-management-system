import React, { useState } from "react";

const Login = ({ handlelogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    handlelogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-200 to-blue-300">
      <div className="flex  bg-white rounded-lg shadow-lg overflow-hidden w-[800px]">
        {/* Login Form Section */}
        <div className="w-3/5 p-10">
        <img 
            src="https://dcassetcdn.com/design_img/2911119/603629/603629_16003069_2911119_6200246e_image.png"
            alt="error"
            className="w-[20%] h-[20%] mb-0.5"
            
          />
          <p> welcome on this website</p>
          <h2 className="text-2xl font-semibold mb-6 text-black">Log In</h2>
          <form  onSubmit={(e) => {
              submit(e);
            }}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="example@gmail.com"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="text-right text-sm mb-4">
              <a href="#" className="text-indigo-600 hover:underline">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md text-lg font-medium"
            >
              LOGIN
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className="w-2/5 flex items-center justify-center bg-gradient-to-b from-blue-300 to-blue-200 p-6 rounded-md ">
          <img 
            src="https://cs13.pikabu.ru/projects/skidki_deal/large/2023-04_1/1680529944139515475.png"
            alt="error"
            className="rounded-lg w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
