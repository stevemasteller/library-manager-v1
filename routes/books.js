var express = require('express');
var router  = express.Router();

var books   = require('../models').books;
var loans   = require('../models').loans;
var patrons = require('../models').patrons;

/** Get all books */
router.get('/allBooks', function(req, res, next) {
	books.findAll({
		order: [["title", "ASC"]]
	})
	.then( function(books) {
		res.json(books);
	})
	.catch(function(error) {
		res.status(500).send(error);
	});
});

module.exports = router;
