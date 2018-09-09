import React from 'react';
import ReactDom from 'react-dom';

import App from './frontend/src/components/app';

const container = document.createElement('div');
document.body.appendChild(container);

ReactDom.render(
  <App />, container,
);
