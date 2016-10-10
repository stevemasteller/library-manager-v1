(function() {
'use strict';

angular.module('app').controller('bookCtrl', function(dataServiceBooks, $location, $routeParams) {
	
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
	
	vm.newBook = {};
	vm.postNewBook = function() {
		dataServiceBooks.postNewBook(vm.newBook, function(res) {
			vm.success = true;
			vm.failure = false;
		}, function(error) {
			vm.success = false;
			vm.failure = true;
			vm.errorMessages = error.data.errors;
		});
	};
	 	
    vm.id = $routeParams.id;
	if ($location.$$path === ('/book_detail.html/' + vm.id)) {
		dataServiceBooks.getBookDetail(vm.id, function(res) {
			vm.book = res.data[0];
		});
	}
	  
	vm.putBookDetail = function() {
		dataServiceBooks.putBookDetail(vm.id, vm.book, function(response) {
			vm.success = true;
			vm.failure = false;
		}, function(error) {
			vm.success = false;
			vm.failure = true;
			vm.errorMessages = error.data.errors
		});
	};

});

})();