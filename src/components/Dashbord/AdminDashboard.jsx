import React from "react";
import Header from "../other/Header";
import Create from "../other/Create";
import Alltask from "../other/Alltask";

const AdminDashboard = ( props) => {
  // console.log(props.changeUser)
  return (
    <>
      <div className="h-screen w-full p-10  ">
        <Header changeUser = {props.changeUser}  />
        <Create/>
        <Alltask/>
        
      </div>
    </>
  );
};

export default AdminDashboard;
