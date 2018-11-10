import * as React from 'react';

export const Button = (props) => (
  <button
    className={props.className}
    onClick={props.onClick}
    type={props.type}
  >
    {props.label}
  </button>
);
