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
    
    var customerController = function ($scope) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        
        $scope.doSort = function(propName) {
           $scope.sortBy = propName;
           $scope.reverse = !$scope.reverse;
        };
        
        $scope.customers= [ {id: 1, joined:'2000-12-02', name:'Joe', city:'Austin', orderTotal:9.995, orders: [
                    {
                        id: 1,
                        product: 'Shoes',
                        total: 9.9956
                    }
                ]}, 
	{id: 2, joined:'2003-11-12', name:'Lebron', city:'Clevland', orderTotal:29.898, orders: [
                    {
                        id: 2,
                        product: 'Baseball',
                        total: 9.995
                    },
                    {
                        id: 3,
                        product: 'Bat',
                        total: 9.995
                    }
                ]}, 
	{id: 3, joined:'2010-06-09', name:'Allen', city:'Chicago', orderTotal:18.887, orders: [
                    {
                        id: 4,
                        product: 'Headphones',
                        total: 44.99
                    }
                ]}, 
	{id: 4, joined:'2008-11-20', name:'James', city:'Dartmouth', orderTotal:288.894, orders: [
                    {
                        id: 5,
                        product: 'Kindle',
                        total: 101.50
                    }
                ]} 
		];
    };
    
    customerController.$inject = ['$scope'];

    angular.module('customerApp')
      .controller('customerController', customerController);
    
}());
	
(function() {
    
    var orderController = function ($scope, $routeParams) {
		var customerID = $routeParams.customerID;
		$scope.orders = null;
		
		function init() {
            //Search the customers for the customerId
            for (var i=0,len=$scope.customers.length;i<len;i++) {
               if ($scope.customers[i].id === parseInt(customerID)) {
                   $scope.orders = $scope.customers[i].orders;
                   break;
               }
            }
        }
        
        $scope.customers= [ {id: 1, joined:'2000-12-02', name:'Joe', city:'Austin', orderTotal:9.995, orders: [
                    {
                        id: 1,
                        product: 'Shoes',
                        total: 9.9956
                    }
                ]}, 
	{id: 2, joined:'2003-11-12', name:'Lebron', city:'Clevland', orderTotal:29.898, orders: [
                    {
                        id: 2,
                        product: 'Baseball',
                        total: 9.995
                    },
                    {
                        id: 3,
                        product: 'Bat',
                        total: 9.995
                    }
                ]}, 
	{id: 3, joined:'2010-06-09', name:'Allen', city:'Chicago', orderTotal:18.887, orders: [
                    {
                        id: 4,
                        product: 'Headphones',
                        total: 44.99
                    }
                ]}, 
	{id: 4, joined:'2008-11-20', name:'James', city:'Dartmouth', orderTotal:288.894, orders: [
                    {
                        id: 5,
                        product: 'Kindle',
                        total: 101.50
                    }
                ]} 
		];
		init();
    };
    
    orderController.$inject = ['$scope', '$routeParams'];

    angular.module('customerApp')
      .controller('orderController', orderController);
    
}());