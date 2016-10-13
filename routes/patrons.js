(function() {
'use strict';

var express = require('express');
var router  = express.Router();

var books   = require('../models').books;
var loans   = require('../models').loans;
var patrons = require('../models').patrons;

/** Get all patrons */
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

/** Post/creat new patron */
router.post('/newPatron', function(req, res, next) {
	patrons.create(req.body)
	.then(function (patron) {
		res.json(patron);
	})
	.catch(function(error){
		res.status(500).send(error);
	});
});

/** get patron detail */
router.get('/patronDetail/:id', function(req, res, next) {
	patrons.findAll({ 
		include: [{ model: loans, include: [{ model: books }] }], 
		where: { id: req.params.id }
	})
	.then(function(patron){
		res.json(patron);
	})
	.catch(function(error){
		res.status(500).send(error);
	});
});

/** put/update patron detail */
router.put('/patronDetail/:id', function(req, res, next) {
	patrons.findById(req.params.id)
	.then(function(patron){
		return patron.update(req.body);
	})
	.then(function (patron) {
		res.json(patron);
	})
	.catch(function(error){
		res.status(500).send(error);
	});
});

module.exports = router;

})();