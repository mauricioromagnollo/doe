import React from 'react';

import './styles.css';

interface Props {
  textInside: string;
}

const BloodDrop: React.FC<Props> = (props) => {
  return (
    <div className="blood">{props.textInside}</div>
  );
}

export default BloodDrop;
