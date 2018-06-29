import React, { Component } from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import EditDetails from './EditDetails';

export default class TableLayout extends Component {

	handleSubmit=(event) => {
		event.preventDefault();
		axios.delete(`http://localhost:4200/person/delete/${this.props.object._id}`)
		.then()
		.catch(error => console.log(error))
	}

	render() {
		return (
			
				<tr>
					<td>{this.props.object._id}</td>
					<td>{this.props.object.firstName}</td>
					<td>{this.props.object.surName}</td>
					<td>{this.props.object.fatherName}</td>
					<td>{this.props.object.motherName}</td>
					<td>{this.props.object.wifeName}</td>
					<td>{this.props.object.children}</td>
					<td>
						<form onSubmit={this.handleSubmit}>
							<input type="submit" value="Delete" className="btn btn-danger" />
						</form>
					</td>
				</tr>
		);

	}
}


