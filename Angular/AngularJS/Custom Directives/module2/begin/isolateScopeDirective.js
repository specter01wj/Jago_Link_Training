(function() {

  var app = angular.module('directivesModule');

  app.directive('isolateScope', function () {
      return {

          template: 'Name: {{customer.name}} Street: {{customer.street}}'
      };
  });

}());
