(function() {

	var app = angular.module('directivesModule', []);

	app.directive('helloWorld', function() {

		return {
			template: '<div>Hello World</div>'
		};

	});


}());



