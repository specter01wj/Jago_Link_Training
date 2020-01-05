var app = angular.module('minmax', []);


app.controller('MinMaxCtrl', function ($scope, $http) {
	$scope.formModel = {};

	$scope.onSubmit = function () {

		$http.post('formValid/', $scope.formModel).
			success(function (data) {
				console.log("Submitted!")
			}).error(function(data) {
				console.log("Error!")
			});
	};
});


