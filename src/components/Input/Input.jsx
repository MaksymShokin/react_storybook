import React from 'react';
import classes from './input.module.css';

const Input = ({ size = 'Medium', ...rest }) => {
  return (
    <input
      type='text'
      className={`${classes.input} ${classes[size]}`}
      {...rest}
      placeholder="write here"
    />
  );
};

export default Input;
