
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
       .otherwise({
         redirectTo: '/'
       });
   }
})();
