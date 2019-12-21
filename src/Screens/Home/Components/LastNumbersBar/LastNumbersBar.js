import React from 'react';
import { paddedNumber } from '../../Common/functions';
import './LastNumbersBar.css';

const LastNumbersBar = ({ history }) => {
  const [actualNumber, ...rest] = history;
  const lastNumbers = rest.slice(0, 3);

  return (
    <div className="lastNumbersBar">
      <div className="lastNumbersBar-container">
        <div className="lastNumbersBar-actual">{actualNumber}</div>
        {lastNumbers.map((number) => (
          <div className="lastNumbersBar-number" key={number}>{paddedNumber(number)}</div>
        ))}
      </div>
    </div>
  );
}

export default LastNumbersBar;
