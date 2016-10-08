(function() {
'use strict';

angular.module('app').service('dataServicePatrons', function($http) {
	
	this.getAllPatrons = function(callback) {
		$http.get('/api/patrons/allPatrons').then(callback);
	}
	
});

})();