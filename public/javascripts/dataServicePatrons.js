(function() {
'use strict';

angular.module('app').service('dataServicePatrons', function($http) {
	
	var vm = this;
	vm.getAllPatrons = function(callback) {
		$http.get('/api/patrons/allPatrons').then(callback);
	}
	
	vm.getPatronDetail = function(id, callback) {
		console.log('reached dataServicePatrons');
		$http.get('/api/patrons/patronDetail/' + id).then(callback);
	}
	
});

})();