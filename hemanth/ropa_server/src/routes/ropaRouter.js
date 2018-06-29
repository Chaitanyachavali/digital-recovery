var express = require('express');
var app = express();
var ropaRouter = express.Router();

// assingning model to Person
var Person = require('../models/Person');

ropaRouter.route('/add/new').post((req, res) => {
	var person = new Person(req.body.person);
		person.save()
	.then(person => {
		res.status(200).json('Person Data added successfully');
	})
	.catch(err => {
		res.status(400).send("unable to save in Database");
	});
});
ropaRouter.route('/').get((req,res) => {
	Person.find( (err, itms) => {
		if(err){
			console.log(err);
		}
		else { 
			res.json(itms);
		}
	});
});

ropaRouter.route('/delete/:id').get((req, res) => {
	Person.findByIdAndRemove({_id: req.params.id},
		(err, persondetails) => {
			if(err) res.json(err);
			else res.json('successfully removed');
		});
});

module.exports = ropaRouter;


// ropaRouter.route('/add/new').post(function (req, res) {
// 	var person = new Person(req.body);
// 		person.save()
// 	.then(person => {
// 		console.log(person);
// 		res.status(200).json({Person: 'Person Data added successfully'});
// 	})
// 	.catch(err => {
// 		res.status(400).send("unable to save in Database");
// 	});
// });

