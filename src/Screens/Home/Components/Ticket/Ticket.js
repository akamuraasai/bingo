import React, { useState } from 'react';
import { Board } from "../Board";
import './Ticket.css';

const checkMarked = (history, ticket) => (
  ticket.filter((item) => history.indexOf(item) !== -1).length
);

const pad = (id) => id.toString().padStart(5, '0');

const Ticket = ({ history, ticket: { id, numbers } }) => {
  const [selected, setSelected] = useState([]);
  const markedQuantity = checkMarked(history, numbers);
  if (markedQuantity === 24) {
    alert(`Você fez bingo na cartela #${pad(id)}!`);
  }

  return (
    <div className="ticket" key={id}>
      <h3>Cartela #{pad(id)} ({markedQuantity}/24)</h3>
      <div className="boardContainer">
        <Board history={selected} setSelected={setSelected} numbers={numbers} />
      </div>
    </div>
  );
};

export default Ticket;
