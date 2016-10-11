(function() {
'use strict';

angular.module('app').controller('bookCtrl', function(dataServiceBooks, $location, $routeParams) {
	
	var vm = this;
	
	if ($location.$$path === '/all_books.html') {
		dataServiceBooks.getAllBooks(function(res) {
			
			var books = res.data;
			var loans = res.data;
			for (var i = 0; i < books.length; i++) {
				loans[i].book = books[i];
			}
			vm.loans = loans;
			vm.title = 'Books';
		});
	}
	
	if ($location.$$path === '/overdue_books.html') {
		dataServiceBooks.getOverdueBooks(function(res) {
			vm.loans = res.data;
			vm.title = 'Overdue Books';
		});
	}
	
	if ($location.$$path === '/checked_books.html') {
		dataServiceBooks.getCheckedBooks(function(res) {
			vm.loans = res.data;
			vm.title = 'Checked Out Books';
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
		vm.book = {};
		dataServiceBooks.getBookDetail(vm.id, function(res) {
			vm.book = res.data[0];
		});
	}
	  
	vm.putBookDetail = function() {
		dataServiceBooks.putBookDetail(vm.id, vm.book, function(res) {
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