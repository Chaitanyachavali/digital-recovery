import axios from 'axios';

export default class AxiosService {

	sendData(data) {
		axios.post('http://localhost:4200/person/add/new', {
			item: data
		})
		.then(function (response) {
			console.log(response);
			console.log('hi');
		})
		.catch(function (error) {
			console.log(error);
		});
	}
}