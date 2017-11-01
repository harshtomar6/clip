//Depenedencies
let express = require('express');
let router = express.Router();

//main route for homepage
router.get('/', (req, res) => {
    res.send('WELCOME TO CLIP');
})

module.exports = router;