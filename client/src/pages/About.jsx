import React from 'react'
import img from '../assets/aboutme.jpg'
const About = () => {
  return (
    <main className='min-h-screen  bg-gray-50 dark:bg-gray-900'>
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold mb-6 text-center text-white">About Me</h1>
        <div className="flex  md:flex-row items-center justify-center">
          <div className="max-w-lg mx-auto mb-6">
            <img src={img} alt="Profile" className=" h-48 w-48 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2 text-center text-white">Supriyo Maity</h2>
            <p className="text-lg text-white text-center">MERN Stack Developer</p>
          </div>
          <div className="max-w-lg mx-auto">
            <p className="text-lg leading-7  text-white">
            Hi my name is Supriyo Maity, a Full Stack Developer based out of New Delhi, with a passion for crafting innovative solutions. I thrive in creating seamless and user-friendly applications that make a meaningful impact.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About
