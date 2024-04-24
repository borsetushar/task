import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Header from '../Header/Header'
import Frame from '../Frame/Frame'
import Jobopen from '../Job Open/Jobopen'
import IncomeOutcome from '../IncomeOutcome/IncomeOutcome'
import EmployeeComposition from '../EmployeeComposition/EmployeeComposition'
import Graph from '../Graph/Graph'
import EmployeeStatus from '../EmployeeStatus/EmployeeStatus'
import Calendar from 'react-calendar'
import MyCalendar from '../Calender/Calender'

const Main = () => {
  return (
    <div>
        <Header/>
        <div style={{ display: 'flex' }}>
        <Sidebar />
        <Frame />
        <Jobopen/>
        <div style={{ display: 'flex' }}>
          <Graph/>
        </div>    
        <div style={{ display: 'flex' }}>
        <MyCalendar/>    
        </div>
      </div>
    </div>
  )
}

export default Main