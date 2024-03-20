import React from 'react'
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate=useNavigate();
  const handleAbout=()=>{
   navigate("/about")
  }
  const handleContact=()=>{
   navigate("/service")
  }
  return (
    <div>
      <main className='min-h-screen flex flex-grow items-center justify-center bg-gray-50 dark:bg-gray-900'>
        <div className="text-center">
          <h1 className='text-white text-4xl leading-10 font-bold mb-6'>Hello, <span className="text-blue-500">world!</span></h1>
          <h1 className='text-white text-5xl leading-10 font-bold mb-6'>I am <span className="text-blue-500">Supriyo Maity</span></h1>
          <h2 className='text-white text-3xl leading-9 font-medium mb-10'>MERN Stack Developer</h2>
          <div className="space-x-4">
            <button onClick={handleAbout} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg">About Me</button>
            <button onClick={handleContact} className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg shadow-lg">Service Page</button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
