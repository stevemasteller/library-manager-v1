(function() {
'use strict';

angular.module('app').service('dataServiceBooks', function($http) {
	
	var vm = this;
	vm.getAllBooks = function(callback) {
		$http.get('/api/books/allBooks').then(callback);
	};
	
	vm.getOverdueBooks = function(callback) {
		$http.get('/api/books/overdueBooks').then(callback);
	};
	
	vm.getCheckedBooks = function(callback) {
		$http.get('/api/books/checkedBooks').then(callback);
	};
	
	vm.postNewBook = function(book, callback, err) {
		$http.post('/api/books/newBook', book).then(callback, err);
	};

	vm.getBookDetail = function(id, callback) {
		$http.get('/api/books/bookDetail/' + id).then(callback);
	};
	 
	vm.putBookDetail = function(id, data, callback, err) {
		$http.put('/api/books/bookDetail/' + id, data).then(callback, err);
     };
});

})();