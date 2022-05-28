import React from 'react';
import Navbar from '../components/Navbar'
import img1 from '../assets/img1.jpg'
import '../assets/index.css'

export default function Home(){
  return(

    <div className="home_page">
      <div className="title">
        <h1 className="font-luckyOne text-[4rem] p-5 m-4">Event Wala</h1>
      </div>

      <div className="nav">
        <Navbar />
      </div>
      
      <div className="hero_section float-right m-20 shadow-xl rounded-xl">
        <img src={img1} className="img1" />
      </div>
    </div>
  )
}
