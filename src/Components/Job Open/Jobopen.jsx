import React from 'react'
import './jobopen.css';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


const Jobopen = () => {
    return (
      <div className="container-row">
        <div className="container-small">
          <IoIosArrowBack size={26} style={{marginTop:'65px',color:'black'}}/>
        </div>   
        <div className="space"></div>
        <div className="container1">
          <p className="small-text">New Employee</p>
          <p className="big-text">18</p>
          <div className="circle-container">
            <p className="small-text">Last Month</p>
            <div className="circle1">10%</div>
          </div>
        </div>
        <div className="space"></div> {/* Add space between containers */}
        <div className="container1">
          <p className="small-text">Total Employee</p>
          <p className="big-text">15</p>
          <div className="circle-container">
            <p className="small-text">Last Month</p>
            <div className="circle1">10%</div>
          </div>
        </div>
        <div className="space"></div> {/* Add space between containers */}
        <div className="container1">
          <p className="small-text">Average Salary</p>
          <p className="big-text">10</p>
          <div className="circle-container">
            <p className="small-text">Last Month</p>
            <div className="circle1">10%</div>
          </div>
        </div>
        <div className="space"></div>
        <div className="container-small">
          <IoIosArrowForward size={26} style={{marginTop:'65px',color:'black'}}/>
        </div>
      </div>
    );
  };
  
  
  
export default Jobopen