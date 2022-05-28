import React from 'react';

import Navbar from '../components/Navbar'

export default function Home(){
  return(

    <div className="home_page">
      <div className="title">
        <h1>Event Wala</h1>
      </div>

      <div className="nav">
        <Navbar />
      </div>
    </div>
  )
}
