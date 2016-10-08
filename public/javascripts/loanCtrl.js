(function() {
'use strict';

angular.module('app').controller('loanCtrl', function(dataServiceLoans, $location) {
	
	var vm = this;
	if ($location.$$path === '/all_loans.html') {
		dataServiceLoans.getAllLoans(function(res) {
			vm.getAllLoans = res.data;
		});
	}
	
});

})();