(function() {
'use strict';

angular.module('app').controller('patronCtrl', function(dataServicePatrons, $location, $routeParams) {
	
	var vm = this;
	
/**
 * Control for all_patrons.html page.
 */
	 /** list all patrons */
	if ($location.$$path === '/all_patrons.html') {
		dataServicePatrons.getAllPatrons(function(res) {
			vm.patrons = res.data;
		});
	}
	
/**
 * Control for new_patron.html page.
 */
	/** create new patron */
	vm.patron = {};
	vm.postNewPatron = function() {
		dataServicePatrons.postNewPatron(vm.patron, function(res) {
			$location.path('/all_patrons.html');
		}, function(error) {
			vm.failure = true;
			vm.errorMessages = error.data.errors;
		});
	};
	 	
/**
 * Control for patron_detail.html page.
 */
	/** display patron details */
    vm.id = $routeParams.id;
	if ($location.$$path === ('/patron_detail.html/' + vm.id)) {
		vm.patron = {};
		dataServicePatrons.getPatronDetail(vm.id, function(res) {
			vm.patrons = res.data[0];
		});
	}
	  
	/** update patron details */
	vm.putPatronDetail = function() {
		dataServicePatrons.putPatronDetail(vm.id, vm.patrons, function(res) {
			$location.path('/all_patrons.html');
		}, function(error) {
			vm.failure = true;
			vm.errorMessages = error.data.errors
		});
	};

});

})();