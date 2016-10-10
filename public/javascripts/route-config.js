
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
         templateUrl: 'views/all_books.html'
       })
       .when('/overdue_books.html', {
         controller: 'bookCtrl',
         controllerAs: 'vm',
         templateUrl: 'views/overdue_books.html'
       })
       .when('/checked_books.html', {
         controller: 'bookCtrl',
         controllerAs: 'vm',
         templateUrl: 'views/checked_books.html'
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
       .when('/all_patrons.html', {
         controller: 'patronCtrl',
         controllerAs: 'vm',
         templateUrl: 'views/all_patrons.html'
       })
       .when('/all_loans.html', {
         controller: 'loanCtrl',
         controllerAs: 'vm',
         templateUrl: 'views/all_loans.html'
       })
       .when('/overdue_loans.html', {
         controller: 'loanCtrl',
         controllerAs: 'vm',
         templateUrl: 'views/overdue_loans.html'
       })
       .when('/checked_loans.html', {
         controller: 'loanCtrl',
         controllerAs: 'vm',
         templateUrl: 'views/checked_loans.html'
       })
       .when('/new_loan.html', {
         controller: 'loanCtrl',
         controllerAs: 'vm',
         templateUrl: 'views/new_loan.html'
       })
       .otherwise({
         redirectTo: '/'
       });
   }
})();
