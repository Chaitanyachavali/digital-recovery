var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PersonSchema = new Schema({
	firstName: {
		type: String
	},
	surName: {
		type: String
	},
	fatherName: {
		type: String
	},
	motherName: {
		type: String
	},
	wifeName: {
		type: String
	},
	children: {
		type: String
	},

},{
	collection: 'persons'
});

module.exports = mongoose.model('Person', PersonSchema);