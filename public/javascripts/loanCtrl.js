(function() {
'use strict';

angular.module('app').controller('loanCtrl', function(dataServiceLoans, dataServiceBooks, dataServicePatrons, $location) {
	
	var vm = this;
	if ($location.$$path === '/all_loans.html') {
		dataServiceLoans.getAllLoans(function(res) {
			vm.getAllLoans = res.data;
		});
	}
	
	if ($location.$$path === '/overdue_loans.html') {
		dataServiceLoans.getOverdueLoans(function(res) {
			vm.getOverdueLoans = res.data;
		});
	}
	
	if ($location.$$path === '/checked_loans.html') {
		dataServiceLoans.getCheckedLoans(function(res) {
			vm.getCheckedLoans = res.data;
		});
	}
	
	/** needed to populate dropdown menu */
	if ($location.$$path === '/new_loan.html') {
		dataServiceBooks.getAllBooks(function(res) {
			vm.getAllBooks = res.data;
		});
	}
	
	if ($location.$$path === '/new_loan.html') {
		dataServicePatrons.getAllPatrons(function(res) {
			vm.getAllPatrons = res.data;
		});
	}
	
	vm.loan = {};
	vm.loan.returned_on = null;
	
	/** calculate dates */
	function getDate() {
		var date = new  Date();
		
		var year  = date.getFullYear();
		var month = date.getMonth() + 1;
		var day   = date.getDate();
		
		return year + '-' + month + '-' + day;
	}

	function getReturnDate() {
		var date = new  Date();
		date.setDate(date.getDate() + 7);
		
		var year  = date.getFullYear();
		var month = date.getMonth() + 1;
		var day   = date.getDate();
		
		return year + '-' + month + '-' + day;
	}

	vm.date = getDate();
	vm.returnDate = getReturnDate();
	vm.loan = {};
	vm.postNewLoan = function() {
		dataServiceLoans.postNewLoan(vm.loan, function(response) {
			vm.success = true;
			vm.failure = false;
		}, function(error) {
			vm.success = false;
			vm.failure = true;
			vm.errorMessages = error.data.errors
		});
	};
	  
});

})();