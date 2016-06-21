var express = require('express');
var router = express.Router();

/* GET Header Json. */
router.get('/header', function(req, res, next) 
{
	res.json(JSON.stringify(req.headers)); 	
});

module.exports = router;