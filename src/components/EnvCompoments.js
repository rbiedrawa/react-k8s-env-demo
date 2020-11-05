import React from 'react';
import Config from "../config/config";


const EnvComponent = () => (
  <header>
    <p>{Config.message}</p>
  </header>
);

export default EnvComponent;