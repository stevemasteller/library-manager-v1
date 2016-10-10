(function() {
'use strict';

angular.module('app').service('dataServiceLoans', function($http) {
	
	var vm = this;
	vm.getAllLoans = function(callback) {
		$http.get('/api/loans/allLoans').then(callback);
	}
	
	vm.postNewLoan = function(loan, callback, err) {
		$http.post('/api/loans/newLoan', loan).then(callback, err);
	}
	
	vm.getReturnBook = function(id, callback) {
		$http.get('/api/loans/ReturnBook/' + id).then(callback);
	}
	
});

})();