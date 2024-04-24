import React from 'react'
import './incomeoutcome.css';

const IncomeOutcome = () => {
  return (
    <div>
    <div className="graph">
      <div className="y-axis">
        <div className="label" style={{ marginBottom: '25px' }}>100</div>
        <div className="label" style={{ marginBottom: '25px' }}>75</div>
        <div className="label" style={{ marginBottom: '25px' }}>50</div>
        <div className="label" style={{ marginBottom: '25px' }}>25</div>
        <div className="label" style={{ marginBottom: '25px' }}>0</div>
      </div>
  
      <div className="bars">
          <div className="bar" style={{ backgroundColor: 'blue', width: '40px', height: '110px' }}>40%</div>
          <div className="bar" style={{ backgroundColor: 'orange', width: '40px', height: '200px' }}>90%</div>
          <div className="bar" style={{ backgroundColor: 'violet', width: '40px', height: '150px' }}>60%</div>
          <div className="bar" style={{ backgroundColor: 'darkviolet', width: '40px', height: '180px' }}>75%</div>
          <div className="bar" style={{ backgroundColor: 'skyblue', width: '40px', height: '130px' }}>50%</div>
      </div>
    </div>
    <div className="x-axis">
        <div className="label">Marketing</div>
        <div className="label">UI/UX</div>
        <div className="label">Finance</div>
        <div className="label">Frontend</div>
        <div className="label">Backend</div>
      </div>
  </div>
  



  )
}

export default IncomeOutcome