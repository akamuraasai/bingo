import React from 'react';
import { isMobile } from 'react-device-detect';
import { paddedNumber } from '../../Common/functions';
import './Board.css';

const getAdicionalClassName = (number, history) => {
  const [last] = history;
  if (number === last) {
    return 'green';
  }

  return history.indexOf(number) === -1 ? '' : 'red';
};

const validateClick = (setSelected, selected, number) => () => {
  if (setSelected) {
    const isNew = selected.indexOf(number) === -1;
    if (isNew) {
      if (selected.length >= 24) {
        alert('Impossivel acrescentar mais números, pois o limite da cartela é 24 de números.');
      } else {
        setSelected([number, ...selected]);
      }
    } else {
      setSelected(selected.filter((item) => item !== number));
    }
  }
};

const BoardNumber = ({ number, history, setSelected }) => (
  <div
    className={`boardNumber ${getAdicionalClassName(number, history)} ${isMobile ? 'mobile' : ''}`}
    key={number}
    onClick={validateClick(setSelected, history, number)}
  >
    {paddedNumber(number)}
  </div>
);

const getBoardNumbers = (numbers, history, setSelected) => {
  if (!numbers) {
    return Array.from({ length: 75 }).map((_, ix) => (
      <BoardNumber number={ix + 1} setSelected={setSelected} history={history} />
    ));
  }

  return numbers.map((number) => (
    <BoardNumber number={number} setSelected={setSelected} history={history} />
  ))
}

const Board = ({ history, setSelected, numbers }) => (
  <div className="board">
    {getBoardNumbers(numbers, history, setSelected)}
  </div>
);

Board.defaultProps = {
  setSelected: null,
  numbers: null,
};

export default Board;
