import React,{ Component } from  'react';
import axios from 'axios';
import TableLayout from './TableLayout';

export default class PersonIndex extends Component {
	state = {
		persons: []
	};

	componentDidMount() {
		axios.get('http://localhost:4200/person')         //should keep here /person only because ropa.Router should get accessed to display the data 
		.then(response => {
			console.log(response);
			const persons = response.data;
			console.log(response.data);
			this.setState({ persons });
		})
		.catch( error => {
			console.log(error);
		})
	}

	tabRow() {
		if(this.state.persons instanceof Array) {
			return this.state.persons.map((object, key) => {
				return <TableLayout object={object} key={object._id} />;
			})
		}
	}

	render() {
		return(
			<div className="container">
				<table className="table table-stripped">
					<thead>
						<tr>
							<td>ID</td>
							<td>FIRST NAME</td>
							<td>SUR NAME</td>
							<td>FATHER NAME</td>
							<td>MOTHER NAME</td>
							<td>WIFE NAME</td>
							<td>CHLIDREN</td>
						</tr>	
					</thead>
					<tbody>
						{this.tabRow()}
					</tbody>
				</table>
			</div>

			);
	}
}
