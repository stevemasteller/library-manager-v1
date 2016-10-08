(function() {
'use strict';

angular.module('app').service('dataServicePatrons', function($http) {
	
	var vm = this;
	vm.getAllPatrons = function(callback) {
		$http.get('/api/patrons/allPatrons').then(callback);
	}
	
});

})();