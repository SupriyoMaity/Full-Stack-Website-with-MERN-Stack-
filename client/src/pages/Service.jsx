
import React,{useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Service = () => {
  const navigate=useNavigate();
 
  const callAboutPage=async()=>{
    try {
      const  res= await axios.get('http://localhost:3000/service',{
        withCredentials:true
      });
     
      console.log("res")
     
      console.log(res)
      
    } catch (error) {
      console.log(error);
      navigate("/login")
    }
  }
  useEffect(()=>{
 
    callAboutPage();
  },[])
  return (
    <div>
    <h1>hii i am service</h1>
    </div>
  )
}

export default Service
