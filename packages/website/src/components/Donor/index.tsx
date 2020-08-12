import React from 'react';

import './styles.css';

import BloodDrop from '../BloodDrop';

interface Props {
  bloodType: string;
  name: string;
}

const Donor: React.FC<Props> = (props) => {
  return (
    <div className="donor">
      <BloodDrop textInside={props.bloodType} />
      <p>{props.name}</p>
    </div>
  );
}

export default Donor;
