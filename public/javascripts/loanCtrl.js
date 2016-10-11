(function() {
'use strict';

angular.module('app').controller('loanCtrl', function(dataServiceLoans, dataServiceBooks, dataServicePatrons, $location, $routeParams) {
	
/**
 * Control for loans.html page.
 */
	 /** list all loans */
	var vm = this;
	if ($location.$$path === '/all_loans.html') {
		dataServiceLoans.getAllLoans(function(res) {
			vm.loans = res.data;
			vm.title = 'Loans';
		});
	}
	
	/** list overdue loans */
	if ($location.$$path === '/overdue_loans.html') {
		dataServiceLoans.getOverdueLoans(function(res) {
			vm.loans = res.data;
			vm.title = 'Overdue Loans';
		});
	}
	
	/** list checked out loans */
	if ($location.$$path === '/checked_loans.html') {
		dataServiceLoans.getCheckedLoans(function(res) {
			vm.loans = res.data;
			vm.title = 'Checked Out Loans';
		});
	}
	
/**
 * Control for new_loan.html page.
 */
	/** needed to populate book select dropdown menu */
	if ($location.$$path === '/new_loan.html') {
		dataServiceBooks.getAllBooks(function(res) {
			vm.getAllBooks = res.data;
		});
	}
	
	/** needed to populate patron select dropdown menu */
	if ($location.$$path === '/new_loan.html') {
		dataServicePatrons.getAllPatrons(function(res) {
			vm.getAllPatrons = res.data;
		});
	}
	
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

	/** create new loan */
	vm.loan = {};
	vm.loan.returned_on = null;
	
	vm.date = getDate();
	vm.returnDate = getReturnDate();
		
	vm.postNewLoan = function() {
		dataServiceLoans.postNewLoan(vm.loan, function(response) {
			$location.path('/all_loans.html');
		}, function(error) {
			vm.failure = true;
			vm.errorMessages = error.data.errors
		});
	};
	  
/**
 * Control for return_loan.html page.
 */
	/** display loan to be returned */
    vm.id = $routeParams.id;
	if ($location.$$path === '/return_book.html/' + vm.id) {
		dataServiceLoans.getReturnBook(vm.id, function(res) {
			vm.loan = res.data[0];
			vm.loan.returned_on = getDate();
		});
	}
	
	/** update loan returned */
	vm.putReturnBook = function() {
		dataServiceLoans.putReturnBook(vm.id, vm.loan, function(response) {
			$location.path('/all_loans.html');
		}, function(error) {
			vm.failure = true;
			vm.errorMessages = error.data.errors
		});
	};

});

})();