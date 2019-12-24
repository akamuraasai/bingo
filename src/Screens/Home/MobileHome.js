import React, { useState } from 'react';
import { MobileHeader, Board, Ticket } from './Components';
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
          <Ticket history={history} ticket={ticket} index={(ix + 1).toString()} />
        ))}
      </main>
    </div>
  );
}

export default MobileHome;
