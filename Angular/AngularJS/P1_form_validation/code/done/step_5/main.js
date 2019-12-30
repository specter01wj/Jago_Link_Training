var app = angular.module('minmax', ['jcs-autoValidate']);

app.run(function(defaultErrorMessageResolver){
	defaultErrorMessageResolver.getErrorMessages().then(function(errorMess){
		errorMess['badUserName'] = "Username only contain number and letters";
		errorMess['tooYoung'] = "must be {0} years old";
		errorMess['tooOld'] = "must be max {0} years to use";
	});
});

app.controller('MinMaxCtrl', function ($scope, $http) {
	$scope.formModel = {};

	$scope.onSubmit = function () {

		$http.post('https://minmax-server.herokuapp.com/register/', $scope.formModel).
			success(function (data) {
				console.log(":)")
			}).error(function(data) {
				console.log(":(")
			});

	};
});


