import React from "react";
import Create from "../other/Create";
import Alltask from "../other/Alltask";
import Header2 from "../other/Hearder2";
import Footer from "../other/Footer"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const AdminDashboard = ( props) => {
  useGSAP(() => {
    // gsap code here...
    gsap.from('.box1', { 
      scale: 0,
      delay:2,
      duration:1.5,
      


     }); 
    gsap.from('.box8', { 
      scale: 0,
      delay:1,
      duration:1,
      scrollTrigger:{
        trigger:".box8",
        scroller: "body",
        markers: true,
        start: "top 80%",
        scrub:2
      }


     }); 
     gsap.from('.header', { 
      opacity:0,
      y:-100,
      delay:0.4,
      duration:1,
     

     });
})


  return (
    <>
      <div className="h-screen w-full bg-black">

       <div className="header"> <Header2   changeUser = {props.changeUser}  /> </div> 
        <div className="box8"><Create />  </div> 
       <div className="box1"> <Alltask  /></div> 
        <Footer  />
        
      </div>
    </>
  );
};

export default AdminDashboard;
