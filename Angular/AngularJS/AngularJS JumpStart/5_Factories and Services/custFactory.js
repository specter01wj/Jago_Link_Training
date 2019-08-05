(function(){
	var customerFactory = function(){
		var customers = [ {id: 1, joined:'2000-12-02', name:'Joe', city:'Austin', orderTotal:9.995, orders: [
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
		
		var factory = {};
		factory.getCustomers = function(){
			return customers;
		};
		factory.getCustID = function(customerID){
			 for (var i=0,len=customers.length;i<len;i++) {
               if (customers[i].id === parseInt(customerID)) {
                   return customers[i];
               }
            }
			return {};
		}
		
		return factory;
		
	};
	angular.module("customerApp").factory("customerFactory", customerFactory);
}());