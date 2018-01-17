import React from 'react';
import { render } from 'react-dom'
import { createStore } from 'redux'
import plannerApp from './reducers/plannerApp.js'
import Root from './components/Root'

import injectTapEventPlugin from 'react-tap-event-plugin';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import 'semantic-ui-css/semantic.min.js';

injectTapEventPlugin();
registerServiceWorker();

let store = createStore(plannerApp)
console.log(store.getState())
// const unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// )

render(
  <Root store={store} />,
  document.getElementById('root')
)