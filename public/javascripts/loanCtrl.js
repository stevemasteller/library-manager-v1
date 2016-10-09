(function() {
'use strict';

angular.module('app').controller('loanCtrl', function(dataServiceLoans, $location) {
	
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
	
});

})();