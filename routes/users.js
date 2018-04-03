var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
	connection.query('SELECT * from psh_raw', function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  	
	  	} else {
  			res.send(JSON.stringify(results));
  			
	  	}
  	});
});

module.exports = router;


