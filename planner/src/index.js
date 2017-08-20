import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'semantic-ui-css/semanticUpdate.min.css';
import 'semantic-ui-css/semantic.min.js';

import './css/Planner.css';
import './css/sitewide.css';
import './css/Navbar.css'

injectTapEventPlugin();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();