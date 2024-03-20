import React, { useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'


function Logoutpage() {
  const navigate=useNavigate();
  const logout=async()=>{
    try {
      const  res= await axios.get('http://localhost:3000/logout',{
        withCredentials:true
      });
    console.log(res)
      if(res.status){
        alert("successfully  logged out");
        navigate("/login")
      }
      else{
        alert("something is wrong")
      }
      
    } catch (error) {
      console.log(error);
    
    }
  }
  useEffect(()=>{
 
    logout();
  },[])
  return (
    <div>
    
    </div>
  )
}

export default Logoutpage
