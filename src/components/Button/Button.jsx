import React from 'react';
import classes from './button.module.css';

const Button = ({ variant = 'Primary', children, ...rest }) => {
  return (
    <button className={`${classes.button} ${classes[variant]}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
