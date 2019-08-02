(function(){
	var app = angular.module('customerApp', ['ngRoute']);
	app.config(function ($routeProvider, appSettings) {
		$routeProvider
		    .when('/',
			{
				controller: 'customerController',
				templateUrl: 'customers_2.html',
	        })
			.when('/orders/:customerID',
			{
				controller: 'orderController',
				templateUrl: 'orders.html',
	        })
			.otherwise({redirectTo: '/' });
	});
}());

(function() {
    
    var customerController = function ($scope, customerService, appSettings) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
		$scope.customers = [];
		$scope.appSettings = appSettings;
		
		function init(){
			$scope.customers = customerService.getCustomers();
		}
		
		init();
        
        $scope.doSort = function(propName) {
           $scope.sortBy = propName;
           $scope.reverse = !$scope.reverse;
        };
        
    };
    
    customerController.$inject = ['$scope', 'customerService', 'appSettings'];

    angular.module('customerApp')
      .controller('customerController', customerController);
    
}());
	
(function() {
    
    var orderController = function ($scope, $routeParams, customerService) {
		var customerID = $routeParams.customerID;
		$scope.customer = null;
		
		function init() {
            //Search the customers for the customerId
           $scope.customer = customerService.getCustID(customerID);
        }
        
		init();
    };
    
    orderController.$inject = ['$scope', '$routeParams', 'customerService'];

    angular.module('customerApp')
      .controller('orderController', orderController);
    
}());