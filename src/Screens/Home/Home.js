import React from 'react';
import './Home.css';
import { Header, LeftMenu, Board, Button } from './Components';

const Home = () => (
  <div className="wrapper">
    <Header />
    <main className="container">
      <LeftMenu lastNumbers={[13, 7, 69]} actualNumber={42} />
      <div className="boardContainer">
        <Board />
      </div>
    </main>
    <div className="buttons">
      <Button text="Novo Número" />
      <Button text="Repetir Número" />
      <Button text="Linha" />
      <Button text="BINGO!" isBingo />
    </div>
  </div>
);

export default Home;
