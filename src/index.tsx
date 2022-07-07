import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import { App } from './components/App';

ReactDOM.render(
   <Provider store={createStore(rootReducer)}>
      <App compiler="TypeScript" framework="React" stateContainer="Redux" />
   </Provider>,
   document.getElementById('root'),
);
