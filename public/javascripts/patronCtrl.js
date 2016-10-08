(function() {
'use strict';

angular.module('app').controller('patronCtrl', function(dataServicePatrons, $location) {
	
	var vm = this;
	
	if ($location.$$path === '/all_patrons.html') {
		dataServicePatrons.getAllPatrons(function(res) {
			vm.getAllPatrons = res.data;
		});
	}
	
});

})();