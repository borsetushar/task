import React from 'react'
import './frame.css';
import { FaCloudSun } from "react-icons/fa6";



const Frame = () => {
  return (
    <div class="weather-frame">
        <div class="header-content" style={{height:'120px'}}>
            <div class='frame'>
                <FaCloudSun size={60}/>
                <p class="small-text" style={{color:'white'}}>Partly Cloudy</p>
            </div>
            <div class="partition-line"></div>
            <div class="date-column">
                <p class="small-text" style={{color:'white'}}>April 22, 2024</p>
                <p class="big-text" style={{fontSize:'22px',color:'white'}}>Today</p>
            </div>
            <div class="present-time-column">
                <p class="small-text" style={{color:'white'}}>Present on time</p>
                <p class="small-text present-time" style={{color:'white'}}>10:11 AM</p>
            </div>
            <div class="entry-time-column">
                <p class="small-text" style={{color:'white'}}>Entry time</p>
                <p class="big-text" style={{fontSize:'22px', color:'white'}}>10:11 AM</p>
            </div>
        </div>

    </div>
  )
}

export default Frame