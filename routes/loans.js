var express = require('express');
var router  = express.Router();

var books   = require('../models').books;
var loans   = require('../models').loans;
var patrons = require('../models').patrons;


/** Get all Loans */
router.get('/allLoans', function(req, res, next) {
	loans.findAll({
		include: [{ model: books }, { model: patrons }],
		order: [[{model: books}, "title", "ASC"]]
	})
	.then( function(loans) {
		res.json(loans);
	})
	.catch(function(error) {
		res.status(500).send(error);
	});
});

module.exports = router;
