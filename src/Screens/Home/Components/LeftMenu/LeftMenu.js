import React from 'react';
import { paddedNumber } from '../../Common/functions';
import './LeftMenu.css';

const LeftMenu = ({ history }) => {
  const [actualNumber, ...rest] = history;
  const lastNumbers = rest.slice(0, 3);

  return (
    <aside className="leftMenu">
      <div className="actualNumber">
        <h3>Último Número</h3>
        <h1>{paddedNumber(actualNumber)}</h1>
      </div>
      <div className="lastNumbers">
        {lastNumbers.map((number) => (
          <div className="number" key={number}>
            {paddedNumber(number)}
          </div>
        ))}
      </div>
    </aside>
  );
}

export default LeftMenu;
