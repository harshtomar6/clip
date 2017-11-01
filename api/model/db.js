//Depenedencies
let mongoose = require('mongoose');
let schema = require('./schema');

//Models
let Clip = mongoose.model('Clip', schema.clipSchema);

//Add Functions
//Insert data into database
let saveData = (data, callback) => {
	var clip = new Clip(data);

	clip.save((err, doc) => {
		callback(err, doc);
	})
}

//Get Functions
//Get data from database
let getData = (callback) => {
	Clip.find({}, (err, clips) => {
		callback(err, clips);
	})
}

module.exports = {
	saveData,
	getData
}