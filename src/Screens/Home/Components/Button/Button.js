import React from 'react';
import './Button.css';

const Button = ({ text, isBingo }) => (
  <div className={`button ${isBingo ? 'bingo' : ''}`}>{text}</div>
);

export default Button;
