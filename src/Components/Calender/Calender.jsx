import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calender.css'; // Import your CSS file
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const MyCalendar = () => {
    const [date, setDate] = useState(new Date());
  
    const onChange = (newDate) => {
      setDate(newDate);
    };
  
    return (
      <div className="container1 mt-2 bg-light" style={{width:'360px', marginLeft:'60px'}}>
        <div>
          <Calendar onChange={onChange} value={date} />
        </div>
        <div className="mt-3">
          <div className="d-flex align-items-center justify-content-between mb-2">
            <h4 id="meeting" className="me-auto">Schedule</h4>
            <label htmlFor="meeting" className="ms-auto">View All (9)</label>
          </div><hr />
          <div className="d-flex align-items-center mb-2">
            <input type="checkbox" id="meeting" className="me-2" />
            <label htmlFor="meeting" className="me-auto">Meeting</label>
            <span>8:30 PM</span>
          </div>
          <p className="mb-2">This is to notify you that you will be attending...</p>
          <button className="btn btn-primary">View</button>
        </div>
        <div className="mt-3">
          <div className="d-flex align-items-center mb-2">
            <input type="checkbox" id="meeting" className="me-2" />
            <label htmlFor="meeting" className="me-auto">Meeting</label>
            <span>8:30 PM</span>
          </div>
          <p className="mb-2">This is to notify you that you will be attending...</p>
          <button className="btn btn-primary">View</button>
        </div>
        <div className="mt-3">
          <div className="d-flex align-items-center mb-2">
            <input type="checkbox" id="meeting" className="me-2" />
            <label htmlFor="meeting" className="me-auto">Meeting</label>
            <span>8:30 PM</span>
          </div>
          <p className="mb-2">This is to notify you that you will be attending...</p>
          <button className="btn btn-primary">View</button>
        </div>
      </div>
    );
  };

export default MyCalendar;
