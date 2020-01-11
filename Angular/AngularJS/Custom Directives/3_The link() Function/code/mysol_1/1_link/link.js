(function() {

  var app = angular.module('directivesModule', []);

  app.directive('linkDemo', function () {
      return {
      	restrict: 'EA',
      	link: function(scope, element, attrs) {
      		element.on('click', function() {
      			element.html("Clicked!");
      		});
      		element.on('mouseenter', function() {
      			element.css('background-color', 'green');
      		});
      		element.on('mouseleave', function() {
      			element.css('background-color', 'red');
      		});
      	}
      };
  });

}());

