import React from 'react';
import { render } from 'react-dom';
import { HeaderWrapper } from './components';

const rootElement = document.createElement('div');
rootElement.setAttribute('id', 'root');
const scriptElement = document.getElementById('header');

if (scriptElement !== null && scriptElement.parentNode !== null) {
  scriptElement.parentNode.insertBefore(rootElement, scriptElement.nextSibling);
}

render(
  <div className="myTarget-header">
    <HeaderWrapper />
  </div>,
  document.getElementById('root'),
);
