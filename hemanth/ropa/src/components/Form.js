import React from 'react';
//import Axios_request_to_server from './Axios_request_to_server';
import axios from 'axios';

export default class Form extends React.Component {

	state = {
		firstName: "",
		surName: "",
		fatherName: "",
		motherName: "",
		wifeName: "",
		children: ""
	};
	
	change = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		
		const person = {
			firstName: this.state.firstName,
			surName: this.state.surName,
			fatherName: this.state.fatherName,
			motherName: this.state.motherName,
			wifeName: this.state.wifeName,
			children: this.state.children
		};

		axios.post('http://localhost:4200/person/add/new', { person })
			.then(response => {
				console.log(person);
				console.log(response);
				console.log(response.data);
		})
			.catch(error => {
				console.log(error.response)
			})
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit} >
				<input 
				name = "firstName"
				placeholder = "Name" 
				value={this.state.firstName} 
				onChange={e => this.change(e)}
				/>
				<br />
				<input 
				name = "surName"
				placeholder = "Sur Name" 
				value={this.state.surName} 
				onChange={e => this.change(e)}
				/>
				<br />
				<input 
				name = "fatherName"
				placeholder = "Father Name" 
				value={this.state.fatherName} 
				onChange={e => this.change(e)}
				/>
				<br />
				<input 
				name = "motherName"
				placeholder = "Mother Name" 
				value={this.state.motherName} 
				onChange={e => this.change(e)}
				/>
				<br />
				<input 
				name = "wifeName"
				placeholder = "Wife Name" 
				value={this.state.wifeName} 
				onChange={e => this.change(e)}
				/>
				<br />
				<input 
				name = "children"
				placeholder = "children" 
				value={this.state.children} 
				onChange={e => this.change(e)}
				/>
				<br />
				<button type="submit"> Submit </button>

			</form>
		);
	}


}

//<button onSubmit={e => this.onSubmit(e)}> Submit </button>