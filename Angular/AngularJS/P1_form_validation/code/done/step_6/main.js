var app = angular.module('minmax', ['jcs-autoValidate', 'angular-ladda']);

app.run(function(defaultErrorMessageResolver){
	defaultErrorMessageResolver.getErrorMessages().then(function(errorMess){
		errorMess['badUserName'] = "Username only contain number and letters";
		errorMess['tooYoung'] = "must be {0} years old";
		errorMess['tooOld'] = "must be max {0} years to use";
	});
});

app.controller('MinMaxCtrl', function ($scope, $http) {
	$scope.formModel = {};
	$scope.subtmitting = false;
	$scope.submitted = false;
	$scope.has_error = false;


	$scope.onSubmit = function () {
		$scope.subtmitting = true;

		$http.post('https://minmax-server.herokuapp.com/register/', $scope.formModel).
			success(function (data) {
				console.log(":)");
				$scope.subtmitting = false;
				$scope.submitted = true;
				$scope.has_error = false;
			}).error(function(data) {
				console.log(":(");
				$scope.subtmitting = false;
				$scope.submitted = false;
				$scope.has_error = true;
			});

	};
});


