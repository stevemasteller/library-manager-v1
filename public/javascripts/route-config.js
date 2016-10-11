
(function() {
  'use strict';

  // The Angular $routeProvider is used to configure routes for the application.
  
   angular
     .module('app')
     .config(config);

   function config($routeProvider) {
     $routeProvider
       .when('/', {
         controller: '',
         controllerAs: '',
         templateUrl: 'views/home.html'
       })
       .when('/all_books.html', {
         controller: 'bookCtrl',
         controllerAs: 'vm',
         templateUrl: 'views/books.html'
       })
       .when('/overdue_books.html', {
         controller: 'bookCtrl',
         controllerAs: 'vm',
         templateUrl: 'views/books.html'
       })
       .when('/checked_books.html', {
         controller: 'bookCtrl',
         controllerAs: 'vm',
         templateUrl: 'views/books.html'
       })
       .when('/new_book.html', {
         controller: 'bookCtrl',
         controllerAs: 'vm',
         templateUrl: 'views/new_book.html'
       })
       .when('/book_detail.html/:id', {
         controller: 'bookCtrl',
         controllerAs: 'vm',
         templateUrl: 'views/book_detail.html'
       })
       .when('/all_loans.html', {
         controller: 'loanCtrl',
         controllerAs: 'vm',
         templateUrl: 'views/loans.html'
       })
       .when('/overdue_loans.html', {
         controller: 'loanCtrl',
         controllerAs: 'vm',
         templateUrl: 'views/loans.html'
       })
       .when('/checked_loans.html', {
         controller: 'loanCtrl',
         controllerAs: 'vm',
         templateUrl: 'views/loans.html'
       })
       .when('/new_loan.html', {
         controller: 'loanCtrl',
         controllerAs: 'vm',
         templateUrl: 'views/new_loan.html'
       })
       .when('/return_book.html/:id', {
         controller: 'loanCtrl',
         controllerAs: 'vm',
         templateUrl: 'views/return_book.html'
       })
       .when('/all_patrons.html', {
         controller: 'patronCtrl',
         controllerAs: 'vm',
         templateUrl: 'views/all_patrons.html'
       })
       .when('/patron_detail.html/:id', {
         controller: 'patronCtrl',
         controllerAs: 'vm',
         templateUrl: 'views/patron_detail.html'
       })
       .when('/new_patron.html', {
         controller: 'patronCtrl',
         controllerAs: 'vm',
         templateUrl: 'views/new_patron.html'
       })
       .otherwise({
         redirectTo: '/'
       });
   }
})();
