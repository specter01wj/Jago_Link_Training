(function(){
	var app = angular.module('customerApp', ['ngRoute']);
	app.config(function ($routeProvider) {
		$routeProvider
		    .when('/',
			{
				controller: 'customerController',
				templateUrl: 'customers.html',
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
    
    var customerController = function ($scope, customerService) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
		$scope.customers = [];
		
		function init(){
			$scope.customers = customerService.getCustomers();
		}
		
		init();
        
        $scope.doSort = function(propName) {
           $scope.sortBy = propName;
           $scope.reverse = !$scope.reverse;
        };
        
    };
    
    customerController.$inject = ['$scope', 'customerService'];

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