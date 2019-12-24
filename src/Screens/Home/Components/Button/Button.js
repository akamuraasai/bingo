import React from 'react';
import './Button.css';

const Button = ({
  text,
  fluid,
  isBingo,
  onPress,
}) => (
  <div
    className={`button ${isBingo ? 'bingo' : ''} ${fluid ? 'fluid' : ''}`}
    onClick={onPress}
  >
    {text}
  </div>
);

export default Button;
