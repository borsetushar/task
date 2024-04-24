import React from 'react'
import IncomeOutcome from '../IncomeOutcome/IncomeOutcome';
import EmployeeComposition from '../EmployeeComposition/EmployeeComposition';
import EmployeeStatus from '../EmployeeStatus/EmployeeStatus';

const Graph = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '55%', position: 'absolute', marginTop: '24%', marginLeft: '-50%' }}>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <IncomeOutcome />
        <EmployeeComposition />
      </div>
      <EmployeeStatus />
    </div>
  );
};

export default Graph;  
