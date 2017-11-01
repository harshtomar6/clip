//Dependencies
let express = require('express');
let router = express.Router();
let db = require('./../model/db');

//Default route for /api
router.get('/', (req, res) => {
  res.send("API is Working");
})

//Add new data route
router.post('/add', (req, res) => {

	db.saveData(req.body, (err, success) => {
		if(err)
			res.send({err: err, success: null});
		else
			res.send({err: null, success: 'Saved Successfully'});
	})
})

//View Data route
router.get('/view', (req, res) => {
	
	db.getData((err, clips) => {
		if(err)
			res.send(err);
		else
			res.send(clips);
	})
})

module.exports = router;