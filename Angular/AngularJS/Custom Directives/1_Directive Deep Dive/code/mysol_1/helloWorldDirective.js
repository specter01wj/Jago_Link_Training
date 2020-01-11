(function(){

	var app = angular.module('directivesModule', []);

	app.directive('helloWorld', function() {
		return {
			template: "<h2>Hello World</h2>"
		}
	});



}());
