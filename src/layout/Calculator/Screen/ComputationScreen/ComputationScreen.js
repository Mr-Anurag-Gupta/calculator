import React from 'react';
import { tsPropertySignature } from '@babel/types';

const computationScreen = (props) => (
  <div className="computation-screen">
    {props.children}
  </div>
);

export default computationScreen;