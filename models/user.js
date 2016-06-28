var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	name: {
		type: String,
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	role: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('User', userSchema);