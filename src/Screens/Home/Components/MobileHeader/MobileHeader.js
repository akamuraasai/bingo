import React from 'react';
import { LastNumbersBar } from '../';
import './MobileHeader.css';

const MobileHeader = ({ history }) => (
  <header className="header-mobile">
    <h1 className="title-mobile">Bingo</h1>
    <LastNumbersBar history={history} />
  </header>
);

export default MobileHeader;
