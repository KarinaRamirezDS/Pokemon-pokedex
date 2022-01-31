import React from 'react';

const Stats = ({item}) => {
  return( 
  <div>
    <li className="lista">
      <span className="letter"><b>{item.stat.name}: </b> </span>
      <span className="letter2">{item.base_stat}</span>
    </li>

  </div>
  );
};

export default Stats;
