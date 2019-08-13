(function() {

  var app = angular.module('directivesModule');

  app.directive('isolateScopeWithEvent', function () {
      return {
          scope: {
              datasource: '=',
              action: '&'
          },
          template: 'Name: {{datasource.name}} Street: {{datasource.street}} ' +
                    '<button ng-click="action()">Change Data</button>'
      };
  });

}());
