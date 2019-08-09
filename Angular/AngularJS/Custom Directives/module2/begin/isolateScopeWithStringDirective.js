(function() {

  var app = angular.module('directivesModule');

  app.directive('isolateScopeWithString', function () {
      return {

          template: 'Name: {{name}}'
      };
  });

}());
