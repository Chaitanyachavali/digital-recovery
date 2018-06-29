import React,{ Component } from 'react';
import axios from 'axios';

export default class EditDetails extends Component {
	state = {
		value: []
	};

	componentDidMount() {
		// this.setState({
		// 	id: this.props.persons._id,
		// 	firstName: this.props.persons.firstName,
		// 	surName: this.props.persons.surName,
		// 	fatherName: this.props.persons.fatherName,
		// 	motherName: this.props.persons.motherName,
		// 	wifeName: this.props.persons.wifeName,
		// 	chlidren: this.props.persons.chlidren,
		// })
		axios.get(`http://localhost:4200/person/edit/${this.props.object._id}`)
		.then(response => {
			this.setState({ value: response.data })
		})
		.catch((error) => {
			console.log(error);
		})
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
		axios.post(`http://localhost:4200/person/update/${this.props.match.params._id}`)
		.then(response => {
			console.log(response);
			console.log(response.data);
			this.props.history.push('/persons');
		})
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}> 
				<label>
					Edit Details:
					<input type="text" value={this.state.value.firstName} onChange={this.handleChange} />
				</label>
				<br/>
				<input type ="submit" value="Update" className="btn btn-primary"/>
			</form>


			);
	}
}

