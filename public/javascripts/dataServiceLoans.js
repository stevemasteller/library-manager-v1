(function() {
'use strict';

angular.module('app').service('dataServiceLoans', function($http) {
	
	var vm = this;
	vm.getAllLoans = function(callback) {
		$http.get('/api/loans/allLoans').then(callback);
	}
	
});

})();