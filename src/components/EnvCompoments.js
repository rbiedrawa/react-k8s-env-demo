import React from 'react';

const { REACT_APP_MESSAGE } = process.env;


export default () => (
  <header>
    <p>{REACT_APP_MESSAGE}</p>
  </header>
);
