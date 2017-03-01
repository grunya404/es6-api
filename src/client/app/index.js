import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
require('./components/shared/styles/common.scss');

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(<App />, document.getElementById('app'));
