import React from "react";
import Header from "../other/header";
import Create from "../other/Create";
import Alltask from "../other/Alltask";

const AdminDashboard = () => {
  return (
    <>
      <div className="h-screen w-full p-10 bg-black ">
        <Header />
        <Create/>
        <Alltask/>
        
      </div>
    </>
  );
};

export default AdminDashboard;
