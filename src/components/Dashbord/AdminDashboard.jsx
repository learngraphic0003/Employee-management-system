import React from "react";
import Create from "../other/Create";
import Alltask from "../other/Alltask";
import Header2 from "../other/Hearder2";
import Footer from "../other/Footer"

const AdminDashboard = ( props) => {


  return (
    <>
      <div className="h-screen w-full bg-black  ">
        <Header2  changeUser = {props.changeUser}  />
        <Create/>
        <Alltask/>
        <Footer/>
        
      </div>
    </>
  );
};

export default AdminDashboard;
