(function() {
'use strict';

angular.module('app').service('dataServiceLoans', function($http) {
	
	/** dataServices for loans.html page */
	var vm = this;
	vm.getAllLoans = function(callback) {
		$http.get('/api/loans/allLoans').then(callback);
	}
	
	vm.getOverdueLoans = function(callback) {
		$http.get('/api/loans/overdueLoans').then(callback);
	};
	
	vm.getCheckedLoans = function(callback) {
		$http.get('/api/loans/checkedLoans').then(callback);
	};
	
	/** dataService for new_loan.html page */
	vm.postNewLoan = function(loan, callback, err) {
		$http.post('/api/loans/newLoan', loan).then(callback, err);
	}
	
	/** dataServices for return_book.html page */
	vm.getReturnBook = function(id, callback) {
		$http.get('/api/loans/returnBook/' + id).then(callback);
	}
	
	vm.putReturnBook = function(id, loan, callback, err) {
		$http.put('/api/loans/returnBook/' + id, loan).then(callback, err);
     };
});

})();