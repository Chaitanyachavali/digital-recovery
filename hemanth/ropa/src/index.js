import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import Form from './components/Form';
import PersonIndex from './components/PersonIndex';
import EditDetails from './components/EditDetails';

ReactDOM.render(
	<Router>
	<div>
	<Route exact path = '/' component={App} />
	<Route path = '/add-person' component={Form} />
	<Route path = '/persons' component={PersonIndex} />
	<Route exact path='/EditDetails' component={EditDetails} />
	</div>
	</Router>,
	document.getElementById('root')
	);
