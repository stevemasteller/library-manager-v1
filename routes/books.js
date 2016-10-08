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

/** Get overdue books */
router.get('/overdueBooks', function(req, res, next) {
	loans.findAll({
		include: [{ model: books }],
		where: { return_by: { $lt: new Date() }, returned_on: null },
		order: [[{model: books}, "title", "ASC"]]
	})
	.then( function(books) {
		res.json(books);
	})
	.catch(function(error) {
		res.status(500).send(error);
	});
});

/** Get checked books */
router.get('/checkedBooks', function(req, res, next) {
	loans.findAll({
		include: [{ model: books }],
		where: { returned_on: null },
		order: [[{model: books}, "title", "ASC"]]
	})
	.then( function(books) {
		res.json(books);
	})
	.catch(function(error) {
		res.status(500).send(error);
	});
});

/** Post new book */
router.post('/newBook', function(req, res, next) {
	console.log('Reached router');
	books.create(req.body)
	.then(function (book) {
		res.json(book);
	})
	.catch(function(error){
		return res.status(500).send(error);
	});
});

module.exports = router;
