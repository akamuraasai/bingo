import React, { useState } from 'react';
import { Board, Button } from '../';
import './Modal.css';

const Modal = ({ visible, dismiss, addTicket }) => {
  const [selected, setSelected] = useState([]);
  if (!visible) {
    return null;
  }

  return (
    <div className="modal">
      <h1 className="modal-title">
        Selecione os Números
      </h1>
      <span className="plus-button close-button" onClick={dismiss}>X</span>
      <Board history={selected} setSelected={setSelected} />
      <div className="modal-buttons">
        <Button
          text="Criar Cartela"
          fluid
          onPress={() => {
            if (selected.length < 24) {
              alert('A cartela precisa ter 24 números selecionados.');
            } else {
              const reversed = [...selected].reverse();
              const firstHalf = reversed.slice(0, 12);
              const secondHalf = reversed.slice(12);
              const ticket = [...firstHalf, 0, ...secondHalf];
              addTicket(ticket);
              setSelected([]);
              dismiss();
            }
          }}
        />
      </div>
    </div>
  )
};

export default Modal;
