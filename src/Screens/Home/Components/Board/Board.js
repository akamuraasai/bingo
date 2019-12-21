import React from 'react';
import { paddedNumber } from '../../Common/functions';
import './Board.css';

const Board = () => (
  <div className="board">
    {Array.from({ length: 75 }).map((_, ix) => (
      <div className="boardNumber" key={ix}>
        {paddedNumber(ix + 1)}
      </div>
    ))}
  </div>
);

export default Board;
