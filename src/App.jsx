import './App.css';
import Calendar from './Components/Calender/Calender';
import EmployeeComposition from './Components/EmployeeComposition/EmployeeComposition';
import EmployeeStatus from './Components/EmployeeStatus/EmployeeStatus';
import Frame from './Components/Frame/Frame';
import Graph from './Components/Graph/Graph';
import Header from './Components/Header/Header';
import IncomeOutcome from './Components/IncomeOutcome/IncomeOutcome';
import Jobopen from './Components/Job Open/Jobopen';
import Main from './Components/Main/Main';
import Sidebar from './Components/Sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">     
      <Routes>
        <Route exact path='/' element={<Main/>}></Route>
      </Routes> 
    </div>
  );
}

export default App;
