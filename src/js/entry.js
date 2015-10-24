require('../css/vendor/bootstrap.css');
require('../css/vendor/font-awesome.css');
require('../css/app.scss');

require('babel-core/polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(<App/>, document.getElementById('app'));