var express = require('express');
var router = express.Router();

/* GET Header Json. */
router.get('/', function(req, res, next) 
{
	console.log('Insider header js file');
	res.json(JSON.stringify(req.headers)); 	
});

module.exports = router;