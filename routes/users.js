var express = require('express');
var router = express.Router();


// Example AJAX POST to get the name of a user in your database
router.post('/getUserName', function(req, res){

	var db = req.db;

	db.collection('myCollectionOfUsers').find({userID: req.body.userID}).toArray(function(err, userObj){

		if (err){

			res.send('Error finding the user specified...');
		}
		else {

			var userName = userObj[0].name;

			var returnObj = {

				name: userName
			};

			res.json(returnObj);
		}

	});

});


// add more custom AJAX calls here (GET, POST, etc)


module.exports = router;








