import React, { useState } from 'react';
import { MobileHeader, Board } from './Components';
import './Home.css';

const MobileHome = ({ history }) => {
  const [tickets, setTicket] = useState([]);

  return (
    <div className="wrapper">
      <MobileHeader history={history} tickets={tickets} setTicket={setTicket} />
      <main className="container-mobile">
        <div className="boardContainer">
          <Board history={history} />
        </div>

        {tickets.length > 0 && tickets.map((ticket, ix) => (
          <div className="ticket">
            <h3>Cartela #{ix + 1}</h3>
            <div className="boardContainer" key={ix.toString()}>
              <Board history={history} numbers={ticket} />
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default MobileHome;
