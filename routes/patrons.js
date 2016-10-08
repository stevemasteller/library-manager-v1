var express = require('express');
var router  = express.Router();

var books   = require('../models').books;
var loans   = require('../models').loans;
var patrons = require('../models').patrons;

/** Get all books */
router.get('/allPatrons', function(req, res, next) {
	patrons.findAll({
		order: [["last_name", "ASC"], ["first_name", "ASC"]]
	})
	.then( function(patrons) {
		res.json(patrons);
	})
	.catch(function(error) {
		res.status(500).send(error);
	});
});

module.exports = router;
