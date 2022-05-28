import React from 'react';
import Navbar from '../components/Navbar'
import img1 from '../assets/img1.jpg'
import '../assets/index.css'

export default function Home(){
  return(

    <div className="home_page">
      {/* <div className="title">
        <h1 className="font-luckyOne text-[4rem] p-5 m-4">Event Wala</h1>
      </div> */}

      <div className="nav">
        <Navbar />
      </div>

      <div className="hero_section flex flex-row ">
      <div className="welcome p-5 ml-10">
        <h1 className="font-luckyOne text-[3rem] m-5 p-5"> Welcome to Event Wala !</h1>
      </div>
      
      <div className="shadow-xl absolute right-0 m-10 rounded-xl">
        <img src={img1} className="" />
      </div>
      </div>
    
    </div>
  )
}
