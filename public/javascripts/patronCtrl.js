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
	  
});

})();