import React from 'react';
import { MobileHeader, Board, Ticket } from './Components';
import './Home.css';

const MobileHome = ({ history, tickets, bingoId }) => (
  <div className="wrapper">
    <MobileHeader history={history} bingoId={bingoId} hasTicket={tickets.length} />
    <main className="container-mobile">
      <div className="boardContainer">
        <Board history={history} />
      </div>

      {tickets.length > 0 && tickets.map((ticket) => (
        <Ticket history={history} ticket={ticket} />
      ))}
    </main>
  </div>
);

export default MobileHome;
