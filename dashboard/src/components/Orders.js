import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Orders = () => {
  const[allorders,setAllorders]=useState([]);


  useEffect(()=>{
    axios.get("http://localhost:3002/neworder").then((res)=>{
      setAllorders(res.data);
    });
  },[]);
  
  const labels = allorders.map((subArray) => subArray["price"]);


  return (
    <div className="orders">
      <div className="no-orders">
        <p>You haven't placed any orders today</p>

        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Orders;
