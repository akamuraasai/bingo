import React from 'react';
import {
  Header,
  LeftMenu,
  Board,
  Button,
} from './Components';
import {
  bingo,
  line,
  newNumber,
  repeatNumber,
} from './Common/functions';
import './Home.css';

const DesktopHome = ({ history, setHistory, newBingo }) => (
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
      <Button text="Repetir Número" onPress={repeatNumber(history)} />
      <Button text="Linha" onPress={line} />
      <Button text="BINGO!" isBingo onPress={bingo(newBingo)} />
    </div>
  </div>
);

export default DesktopHome;
