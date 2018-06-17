import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import Form from './components/Form';

ReactDOM.render(
	<Router>
	<div>
	<Route exact path = '/' component={App} />
	<Route path = '/add-person' component={Form} />
	</div>
	</Router>,
	document.getElementById('root')
	);
