import {createStore} from 'redux';
import RootReducer from './reducers';

import {wrapStore} from 'react-chrome-redux';

const store = createStore(RootReducer, {});

wrapStore(store, {
  portName: 'jobbify'
});
