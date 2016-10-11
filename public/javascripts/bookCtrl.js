(function() {
'use strict';

angular.module('app').controller('bookCtrl', function(dataServiceBooks, $location, $routeParams) {
	
	var vm = this;
	
/**
 * Control for book.html page.
 */
	 /** list all books */
	if ($location.$$path === '/all_books.html') {
		dataServiceBooks.getAllBooks(function(res) {
			
			/** this loop is to make the res.data fit the 
			 *  vm.loans.book format used on the book.html page.
			 */
			var books = res.data;
			var loans = res.data;
			for (var i = 0; i < books.length; i++) {
				loans[i].book = books[i];
			}
			vm.loans = loans;
			vm.title = 'Books';
		});
	}
	
	/** list overdue books */
	if ($location.$$path === '/overdue_books.html') {
		dataServiceBooks.getOverdueBooks(function(res) {
			vm.loans = res.data;
			vm.title = 'Overdue Books';
		});
	}
	
	/** list checked out books */
	if ($location.$$path === '/checked_books.html') {
		dataServiceBooks.getCheckedBooks(function(res) {
			vm.loans = res.data;
			vm.title = 'Checked Out Books';
		});
	}
	
/**
 * Control for new_book.html page.
 */
	/** create new book */
	vm.newBook = {};
	vm.postNewBook = function() {
		dataServiceBooks.postNewBook(vm.newBook, function(res) {
			$location.path('/all_books.html');
		}, function(error) {
			vm.failure = true;
			vm.errorMessages = error.data.errors;
		});
	};
	 	
/**
 * Control for book_detail.html page.
 */
	/** display book details */
    vm.id = $routeParams.id;
	if ($location.$$path === ('/book_detail.html/' + vm.id)) {
		vm.book = {};
		dataServiceBooks.getBookDetail(vm.id, function(res) {
			vm.book = res.data[0];
		});
	}
	
	/** update book details */
	vm.putBookDetail = function() {
		dataServiceBooks.putBookDetail(vm.id, vm.book, function(res) {
			$location.path('/all_books.html');
		}, function(error) {
			vm.failure = true;
			vm.errorMessages = error.data.errors
		});
	};

});

})();