var db = require('./_db');
var Sequelize = require('Sequelize');

var Place = db.define('place', {
	address: {
		type: Sequelize.TEXT
	},
	city: {
		type: Sequelize.STRING
	}, 
	state: {
		type: Sequelize.STRING
	},
	phone:{
		type: Sequelize.STRING
	},
	location: {
		type: Sequelize.ARRAY(Sequelize.FLOAT)
 	}
});

module.exports = Place;