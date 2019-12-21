import React from 'react';
import { paddedNumber } from '../../Common/functions';
import './Board.css';

const getAdicionalClassName = (ix, history) => {
  const [last] = history;
  if (ix + 1 === last) {
    return 'green';
  }

  return history.indexOf(ix + 1) === -1 ? '' : 'red';
}

const Board = ({ history }) => (
  <div className="board">
    {Array.from({ length: 75 }).map((_, ix) => (
      <div className={`boardNumber ${getAdicionalClassName(ix, history)}`} key={ix}>
        {paddedNumber(ix + 1)}
      </div>
    ))}
  </div>
);

export default Board;
