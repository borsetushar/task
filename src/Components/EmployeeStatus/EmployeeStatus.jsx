import './employeestatus.css'; // Import your CSS file
import Emp1 from '../../assets/emp1.jpg'
import Emp2 from '../../assets/emp2.jpg'
import Emp3 from '../../assets/emp3.jpg'


const EmployeeStatus = () => {
  return (
    <div className="employee-status">
      <div className="header">
        <div className="left">Employee Status</div>
        <div className="right">View All (15)</div>
      </div><hr />
      <div className="table">
        <div className="row header">
          <div className="cell">Employee</div>
          <div className="cell">Dept Name</div>
          <div className="cell">Age</div>
          <div className="cell">Active</div>
          <div className="cell">Status</div>
        </div>
        <div className="row">
        <div className="cell employee-column">
            <img src={Emp1} alt="Employee 1" className="profile-pic" style={{height:'50px', width:'50px'}}/>
            John Doe
        </div>
        <div className="cell">Marketing</div>
        <div className="cell">23</div>
        <div className="cell">+100</div>
        <div className="cell">Permanent</div>
        </div>

        <div className="row">
          <div className="cell">
            <img src={Emp2} alt="Employee 2" className="profile-pic" style={{height:'50px', width:'50px'}}/>
            Jane Smith
          </div>
          <div className="cell">UI/UX</div>
          <div className="cell">23</div>
          <div className="cell">+100</div>
          <div className="cell">Contract</div>
        </div>
        <div className="row">
          <div className="cell">
            <img src={Emp3} alt="Employee 3" className="profile-pic" style={{height:'50px', width:'50px'}} />
            Alice Johnson
          </div>
          <div className="cell">Finance</div>
          <div className="cell">23</div>
          <div className="cell">+100</div>
          <div className="cell">Permanent</div>
        </div>
        {/* Add more rows as needed */}
      </div>
    </div>
  );
};

export default EmployeeStatus;
