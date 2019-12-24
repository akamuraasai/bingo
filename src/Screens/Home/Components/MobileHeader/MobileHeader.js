import React, { useState } from 'react';
import { LastNumbersBar } from '../';
import { Modal } from '../';
import './MobileHeader.css';

const MobileHeader = ({ history, tickets, setTicket }) => {
  const [visible, setVisible] = useState(false);

  return (
    <header className="header-mobile">
      <h1 className="title-mobile">
        Bingo
        <span
          className="plus-button"
          onClick={() => setVisible(true)}
        >
          +
        </span>
      </h1>
      <LastNumbersBar history={history} />
      <Modal
        visible={visible}
        dismiss={() => setVisible(false)}
        addTicket={(ticket) => setTicket([ticket, ...tickets])}
      />
    </header>
  );
}

export default MobileHeader;
