(function(){
	var customerFactory = function($http){
		
		var factory = {};
		factory.getCustomers = function(){
			return $http.get('/customers');
		};
		factory.getCustID = function(customerID){
			 return $http.get('/customers/' + customerID);
		};
		
		return factory;
		
	};
	
	customerFactory.$inject = ['$http'];
	
	angular.module("customerApp").factory("customerFactory", customerFactory);
}());