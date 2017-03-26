import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Store} from 'react-chrome-redux';
import App from './components/app/app';

import AppContainer from './components/app/app_container';

const proxyStore = new Store({
  portName: 'jobbify'
});

const anchor = document.createElement('div');
anchor.id = 'jobbify-content-anchor';

document.body.insertBefore(anchor, document.body.childNodes[0]);

console.log(proxyStore);

render(
  <Provider store={proxyStore}>
    <App/>
  </Provider>
  , document.getElementById('jobbify-content-anchor'));







//
