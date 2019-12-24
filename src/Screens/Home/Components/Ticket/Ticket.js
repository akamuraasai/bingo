import React from 'react';
import { Board } from "../Board";
import './Ticket.css';

const checkMarked = (history, ticket) => (
  ticket.filter((item) => history.indexOf(item) !== -1).length
);

const Ticket = ({ history, index, ticket }) => {
  const markedQuantity = checkMarked(history, ticket);
  if (markedQuantity === 24) {
    alert(`Você fez bingo na cartela #${index}!`);
  }

  return (
    <div className="ticket" key={index}>
      <h3>Cartela #{index} ({markedQuantity}/24)</h3>
      <div className="boardContainer">
        <Board history={history} numbers={ticket} />
      </div>
    </div>
  );
};

export default Ticket;
