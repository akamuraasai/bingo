import React from 'react';
import { MobileHeader, Board } from './Components';
import './Home.css';

const MobileHome = ({ history }) => (
  <div className="wrapper">
    <MobileHeader history={history} />
    <main className="container">
      <div className="boardContainer">
        <Board history={history} />
      </div>
    </main>
  </div>
);

export default MobileHome;
