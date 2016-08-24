var db = require('./_db');
var Place = require('./place');
var Sequelize = require('Sequelize');

var Activity = db.define('activity', {
	name: {
		type: Sequelize.STRING
	},
	age_range: {
		type: Sequelize.STRING
	}
});



module.exports = Activity;