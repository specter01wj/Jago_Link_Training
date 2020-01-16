var app = angular.module('codecraft', []);

app.controller('ParentController', function ($scope, $rootScope) {
	/*$scope.name = "Parent";
	$scope.reset = function () {
		$scope.name = "Parent";
	};*/

});

app.controller('ChildController', function ($scope, $rootScope) {
	
	$scope.reset = function () {
		$rootScope.data.name = "Reset By Child";
	};

});


