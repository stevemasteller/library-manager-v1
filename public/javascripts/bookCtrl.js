(function() {
'use strict';

angular.module('app').controller('bookCtrl', function(dataServiceBooks, $location) {
	
	var vm = this;
	
	if ($location.$$path === '/all_books.html') {
		dataServiceBooks.getAllBooks(function(res) {
			vm.getAllBooks = res.data;
		});
	}
	
	if ($location.$$path === '/overdue_books.html') {
		dataServiceBooks.getOverdueBooks(function(res) {
			vm.getOverdueBooks = res.data;
		});
	}
	
	if ($location.$$path === '/checked_books.html') {
		dataServiceBooks.getCheckedBooks(function(res) {
			vm.getCheckedBooks = res.data;
		});
	}
	
});

})();