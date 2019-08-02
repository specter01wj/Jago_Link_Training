(function() {
    
    var app = angular.module('customersApp', ['ngRoute']);
    
    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'CustomersController',
                templateUrl: 'customers.html'
            })
			.when('/orders/:customerId', {
                controller: 'OrdersController',
                templateUrl: 'orders.html'
            })
            .otherwise( { redirectTo: '/' } );
    });
    
}());