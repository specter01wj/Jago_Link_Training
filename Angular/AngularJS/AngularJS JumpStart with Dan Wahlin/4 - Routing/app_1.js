(function(){
	var app = angular.module('customerApp', ['ngRoute']);
	app.config(function ($routeProvider) {
		$routeProvider
		    .when('/',
			{
				controller: 'customerController',
				templateUrl: 'customers.html',
	        })
	/*		.when('/orders',
			{
				controller: 'orderController',
				templateUrl: 'orders.html',
	        })*/
			.otherwise({redirectTo: '/' });
	});
}());
