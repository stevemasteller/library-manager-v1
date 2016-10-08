(function() {
'use strict';

angular.module('app').controller('bookCtrl', function(dataServiceBooks, $location) {
	
	var vm = this;
	
	if ($location.$$path === '/all_books.html') {
		dataServiceBooks.getAllBooks(function(res) {
			vm.getAllBooks = res.data;
		});
	}
	
});

})();