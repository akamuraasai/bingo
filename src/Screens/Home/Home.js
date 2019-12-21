import React, { useState } from 'react';
import './Home.css';
import {
  Header,
  LeftMenu,
  Board,
  Button,
} from './Components';
import { bingo, newNumber } from './Common/functions';

const Home = () => {
  const [history, setHistory] = useState([]);

  return (
    <div className="wrapper">
      <Header />
      <main className="container">
        <LeftMenu history={history} />
        <div className="boardContainer">
          <Board history={history} />
        </div>
      </main>
      <div className="buttons">
        <Button text="Novo Número" onPress={newNumber(setHistory, history)} />
        <Button text="Repetir Número" />
        <Button text="Linha" />
        <Button text="BINGO!" isBingo onPress={bingo(setHistory)} />
      </div>
    </div>
  );
};

export default Home;
