//Dependencies
let mongoose = require('mongoose');

//clip
let clipSchema = mongoose.Schema({
	date: {type: Date, default: Date.now()},
	name: String  
});

module.exports = {
	clipSchema
}