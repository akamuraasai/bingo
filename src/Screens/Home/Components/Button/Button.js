import React from 'react';
import './Button.css';

const Button = ({ text, isBingo, onPress }) => (
  <div
    className={`button ${isBingo ? 'bingo' : ''}`}
    onClick={onPress}
  >
    {text}
  </div>
);

export default Button;
