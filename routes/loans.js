(function() {
'use strict';

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

/** Get overdue loans */
router.get('/overdueLoans', function(req, res, next) {
	loans.findAll({
		include: [{ model: books }, { model: patrons }],
		where: { return_by: { $lt: new Date() }, returned_on: null },
		order: [[{model: books}, "title", "ASC"]]
	})
	.then( function(loans) {
		res.json(loans);
	})
	.catch(function(error) {
		res.status(500).send(error);
	});
});

/** Get checked loans */
router.get('/checkedLoans', function(req, res, next) {
	loans.findAll({
		include: [{ model: books }, { model: patrons }],
		where: { returned_on: null },
		order: [[{model: books}, "title", "ASC"]]
	})
	.then( function(loans) {
		res.json(loans);
	})
	.catch(function(error) {
		res.status(500).send(error);
	});
});

/** Post/create new loan */
router.post('/newLoan', function(req, res, next) {
	loans.create(req.body)
	.then(function (loan) {
		res.json(loan);
	})
	.catch(function(error){
		res.status(500).send(error);
	});
});

/** Get loan based on loan id */
router.get('/returnBook/:id', function(req, res, next) {
	loans.findAll({
		include: [{ model: books }, { model: patrons }],
		where: { id: req.params.id }
	})
	.then(function(loans) {
		res.json(loans);
	})
	.catch(function(error){
		res.status(500).send(error);
   });
});

/** put/update loan based on loan id*/
router.put('/returnBook/:id', function(req, res, next) {
	loans.findById(req.params.id)
	.then(function(loan){
		return loan.update(req.body);
	})
	.then(function (loan) {
		res.json(loan);
	})
	.catch(function(error){
		res.status(500).send(error);
	});
});

module.exports = router;

})();