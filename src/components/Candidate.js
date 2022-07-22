import React from 'react';

import UserName from './UserName';
import Steps from './Steps';
import Workout from './Workout';
import Nutrition from './Nutrition';
import Bell from './Bell';
const styles = {
  container:
    'px-3 grid grid-cols-3 lg:grid-cols-10 flex items-center justify-center my-5 bg-gray-800',
};

function Candidate(props) {
  return (
    <div className={styles.container}>
      <div className="col-span-3">
        <UserName name={props.name} id={props.userId} />
      </div>
      <div className="col-span-2">
        <Steps step={props.steps} />
      </div>
      <div className="col-span-2">
        <Workout userId={props.userId} />
      </div>
      <div className="col-span-2">
        <Nutrition userId={props.userId} nutiAmount={props.nutrition} />
      </div>
      <div className="col-span-1">
        <Bell />
      </div>
    </div>
  );
}

export default Candidate;
