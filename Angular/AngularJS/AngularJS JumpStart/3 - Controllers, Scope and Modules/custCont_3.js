(function(){
	angular.module('customerApp', []);
}());

(function() {
	
    var customerController = function (b){

    b.sortBy = 'name';
    b.reverse = false;
	
	b.customers = [ {joined:'2000-12-02', name:'Joe', city:'Austin', orderTotal:9.995}, 
	{joined:'2003-11-12', name:'Lebron', city:'Clevland', orderTotal:29.898}, 
	{joined:'2010-06-09', name:'Allen', city:'Chicago', orderTotal:18.887}, 
	{joined:'2008-11-20', name:'James', city:'Dartmouth', orderTotal:288.894} ];
	
    b.doSort = function(propName){
        b.sortBy = propName;
    	b.reverse = !b.reverse;
      };
    }
	customerController.$inject = ['$scope'];
	
	angular.module('customerApp').controller('customerController', customerController);
	

}());