import React, { useContext, useEffect, useState } from "react";
import Login from "../src/components/Auth/Login";
import AdminDashboard from "../src/components/Dashbord/AdminDashboard";
import EmployeeDashboard from "../src/components/Dashbord/EmployeeDashboard";
import { AuthContext } from "./context/AuthProvider";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import Alltask from "./components/other/Alltask";






const App = () => {
  const [user, setUser] = useState(null);
  const [userData,setUserData] = useContext(AuthContext);
  const [loggedInUserData,setLoggedInUserData] = useState(null)

  useEffect(() => {
    setLocalStorage();
    getLocalStorage();
  });

  useEffect ( ()=> {
    if(userData) {
      const loggedInUser = localStorage.getItem("loggedInUser")
      if(loggedInUser){
       
        setUser(loggedInUser.role)
        setLoggedInUserData(userData.data)
      }
    }
  },[userData])
// useEffect (  () => {
//  const loggedInUser = localStorage.getItem('loggedInUser')
//  if(loggedInUser)
//  {
//   const userData = JSON.parse(loggedInUser)
//   setUser(userData.role)
//   setLoggedInUserData(userData.data)
//  }
// },[])


  const handlelogin = (email, password) => {
   
    if (email == "rawatsubham@gmail.com" && password == "123") {
      setUser('admin');
     
     localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData ) {
     
      const employee = userData.find((e) => email == e.email && password == e.password
      );
      
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);
       
        localStorage.setItem("loggedInUser",JSON.stringify({ role: "employee", data : employee }) );
         
       
      }

     
    } else {
      alert("invalid credentias");
    }
  };

  return (
    <>
   
      {!user ? <Login handlelogin={handlelogin} /> : '' }
      {user == "admin" ? <AdminDashboard changeUser = {setUser}  /> : ( user == "employee" ? <EmployeeDashboard  changeUser = {setUser} data = {loggedInUserData }/> : null )}  
     
    </>
  );
};

export default App;
