import React from 'react';
import { paddedNumber } from '../../Common/functions';
import './Board.css';

const getAdicionalClassName = (ix) => {
  if (ix === 41) {
    return 'green';
  }

  return [12, 6, 68].indexOf(ix) === -1 ? '' : 'red';
}

const Board = () => (
  <div className="board">
    {Array.from({ length: 75 }).map((_, ix) => (
      <div className={`boardNumber ${getAdicionalClassName(ix)}`} key={ix}>
        {paddedNumber(ix + 1)}
      </div>
    ))}
  </div>
);

export default Board;
