function customerController($scope){
	//var app = angular.module('customersApp', []);
    $scope.sortBy = 'name';
    $scope.reverse = false;
	
	$scope.customers = [ {joined:'2000-12-02', name:'Joe', city:'Austin', orderTotal:9.995}, 
	{joined:'2003-11-12', name:'Lebron', city:'Clevland', orderTotal:29.898}, 
	{joined:'2010-06-09', name:'Allen', city:'Chicago', orderTotal:18.887}, 
	{joined:'2008-11-20', name:'James', city:'Dartmouth', orderTotal:288.894} ];
	
    $scope.doSort = function(propName){
        $scope.sortBy = propName;
    	$scope.reverse = !$scope.reverse;
    };
}