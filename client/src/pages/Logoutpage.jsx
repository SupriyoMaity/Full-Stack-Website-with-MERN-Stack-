import React, { useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';


function Logoutpage() {
  const navigate=useNavigate();
  const logout=async()=>{
    try {
      const  res= await axios.get('http://localhost:3000/logout',{
        withCredentials:true
      });
    console.log(res)
      if(res.status){
        toast.success("successfully  logged out");
        navigate("/login")
      }
      else{
        toast.error("something is wrong")
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
