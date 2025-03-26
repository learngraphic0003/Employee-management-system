import React, { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Login = ({ handlelogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useGSAP(() => {
    gsap.from(".box", { opacity: 0, y: -400, delay: 0.5 });
    gsap.from(".box2", { opacity: 0, x: 400, delay: 1 });
    gsap.from(".box3", { opacity: 0, scale: 0, duration: 1, delay: 1.5 });
    gsap.from(".box4", { opacity: 0, duration: 1, x: -400, delay: 2 });
  });

  const submit = (e) => {
    e.preventDefault();
    handlelogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-200 to-blue-300 p-4">
      <div className="box flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-3xl">
        {/* Login Form Section */}
        <div className=" md:w-3/5 p-6 sm:p-10 m-3.5">
          <img
            src="https://dcassetcdn.com/design_img/2911119/603629/603629_16003069_2911119_6200246e_image.png"
            alt="logo"
            className="w-16 h-16 mb-3 box3"
          />
          <p className="text-gray-600 text-sm sm:text-base">Welcome to our website!</p>
          <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-black">Log In</h2>
          
          <form onSubmit={submit}>
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
              className="box4 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md text-sm sm:text-lg font-medium flex items-center justify-center gap-2"
            >
              LOGIN <MdKeyboardDoubleArrowRight className="text-xl" />
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className=" hidden  sm:block md:flex w-full md:w-2/5 items-center justify-center bg-gradient-to-b from-blue-300 to-blue-200 p-6 rounded-md ">
          <img
            src="https://cs13.pikabu.ru/projects/skidki_deal/large/2023-04_1/1680529944139515475.png"
            alt="illustration"
            className="rounded-lg w-full max-w-xs box2"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
