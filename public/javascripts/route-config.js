
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
         controller: '',
         controllerAs: '',
         templateUrl: 'views/all_books.html'
       })
       .when('/all_patrons.html', {
         controller: '',
         controllerAs: '',
         templateUrl: 'views/all_patrons.html'
       })
       .when('/all_loans.html', {
         controller: '',
         controllerAs: '',
         templateUrl: 'views/all_loans.html'
       })
       .otherwise({
         redirectTo: '/'
       });
   }
})();
