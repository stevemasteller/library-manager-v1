(function() {
'use strict';

angular.module('app').service('dataServicePatrons', function($http) {
	
	var vm = this;
	vm.getAllPatrons = function(callback) {
		$http.get('/api/patrons/allPatrons').then(callback);
	}
	
	vm.getPatronDetail = function(id, callback) {
		$http.get('/api/patrons/patronDetail/' + id).then(callback);
	}
	
	vm.putPatronDetail = function(id, data, callback, err) {
		$http.put('/api/patrons/patronDetail/' + id, data).then(callback, err);
     };
	 
	vm.postNewPatron = function(data, callback, err) {
		$http.post('/api/patrons/newPatron/', data).then(callback, err);
     };
	 
});

})();