(function() {
'use strict';

angular.module('app').controller('patronCtrl', function(dataServicePatrons, $location, $routeParams) {
	
	var vm = this;
	
	if ($location.$$path === '/all_patrons.html') {
		dataServicePatrons.getAllPatrons(function(res) {
			vm.patrons = res.data;
		});
	}
	
    vm.id = $routeParams.id;
	if ($location.$$path === ('/patron_detail.html/' + vm.id)) {
		vm.patron = {};
		dataServicePatrons.getPatronDetail(vm.id, function(res) {
			vm.patrons = res.data[0];
		});
	}
	  
	vm.putPatronDetail = function() {
		dataServicePatrons.putPatronDetail(vm.id, vm.patrons, function(res) {
			vm.success = true;
			vm.failure = false;
		}, function(error) {
			vm.success = false;
			vm.failure = true;
			vm.errorMessages = error.data.errors
		});
	};

	vm.patron = {};
	vm.postNewPatron = function() {
		console.log('reached patronCtrl');
		dataServicePatrons.postNewPatron(vm.patron, function(res) {
			vm.success = true;
			vm.failure = false;
		}, function(error) {
			vm.success = false;
			vm.failure = true;
			vm.errorMessages = error.data.errors;
		});
	};
	 	
});

})();