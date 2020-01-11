(function() {

  var app = angular.module('directivesModule');

  app.directive('isolateScopeWithString', function () {
      return {
          scope: {
          	name: '@',
          	street: '@'
          },
          template: 'Name: {{name}} Street: {{street}}'
      };
  });

}());
