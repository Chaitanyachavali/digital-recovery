var express = require('express');
var app = express();
var mongoose = require('mongoose');

var bodyParser = require('body-parser');
var cors = require('cors');
var port = 4200;

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/ropa_db')
		.then(() => {
			console.log('connected to database...');
		})
		.catch(err => {
			console.error('App starting error:', err.stack);
			process.exit(1);
			console.log('check your database connection');
		});

//including the routes
var ropaRouter = require('./src/routes/ropaRouter');

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function (req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
next();
});

app.use('/person', ropaRouter);

app.listen(port, function() {
	console.log('Server is running on port: ',port);
});