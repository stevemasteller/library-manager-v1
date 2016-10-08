(function() {
'use strict';

angular.module('app').service('dataServiceBooks', function($http) {
	
	this.getAllBooks = function(callback) {
		$http.get('/api/books/allBooks').then(callback);
	}
	
});

})();