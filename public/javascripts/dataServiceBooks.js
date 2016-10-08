(function() {
'use strict';

angular.module('app').service('dataServiceBooks', function($http) {
	
	var vm = this;
	vm.getAllBooks = function(callback) {
		$http.get('/api/books/allBooks').then(callback);
	}
	
	vm.getOverdueBooks = function(callback) {
		$http.get('/api/books/overdueBooks').then(callback);
	}
	
	vm.getCheckedBooks = function(callback) {
		$http.get('/api/books/checkedBooks').then(callback);
	}
	
});

})();